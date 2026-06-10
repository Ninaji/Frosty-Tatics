// Geração de encontros: escolhe inimigos base + adjetivos conforme a zona,
// o progresso da campanha e o nível da Frosty.

import { buildEnemy } from '../core/unit.js';
import { ENEMIES, ENEMY_BY_ID } from '../data/enemies.js';
import { ADJECTIVES } from '../data/adjectives.js';
import { zoneForBattle, isBossBattle, zoneProgress, TOTAL_BATTLES } from '../data/campaign.js';
import { TERRAIN } from './grid.js';

function pickWeighted(rng, items, weightFn) {
  const weights = items.map(weightFn);
  const idx = rng.weighted(weights);
  return items[idx];
}

function rollAdjectives(rng, count, maxTier) {
  const pool = ADJECTIVES.filter((a) => a.tier <= maxTier);
  const chosen = [];
  const usedIds = new Set();
  for (let i = 0; i < count; i++) {
    for (let tries = 0; tries < 10; tries++) {
      const a = pickWeighted(rng, pool, (x) => x.weight);
      if (!usedIds.has(a.id)) {
        usedIds.add(a.id);
        chosen.push(a);
        break;
      }
    }
  }
  return chosen;
}

// quantos adjetivos um inimigo recebe nesta altura da campanha
function adjectiveCount(rng, battleIndex, isBoss) {
  if (isBoss) return battleIndex <= 10 ? 1 : rng.int(1, 2);
  if (battleIndex <= 3) return 0;
  if (battleIndex <= 5) return rng.chance(0.35) ? 1 : 0;
  if (battleIndex <= 15) return rng.int(0, 1) + (rng.chance(0.25) ? 1 : 0);
  if (battleIndex <= 30) return rng.int(0, 2);
  if (battleIndex <= TOTAL_BATTLES) return rng.int(1, 2) + (rng.chance(0.2) ? 1 : 0);
  return rng.int(2, 3); // modo infinito
}

function adjectiveMaxTier(battleIndex) {
  if (battleIndex <= 8) return 1;
  if (battleIndex <= 22) return 2;
  return 3;
}

export function generateEncounter(rng, battleIndex, heroLevel) {
  const zone = zoneForBattle(battleIndex);
  const boss = isBossBattle(battleIndex) && battleIndex <= TOTAL_BATTLES;
  const progress = zoneProgress(battleIndex);
  const endless = battleIndex > TOTAL_BATTLES;

  // escala do modo infinito
  const endlessLoops = endless ? Math.floor((battleIndex - TOTAL_BATTLES - 1) / TOTAL_BATTLES) + 1 : 0;
  const scale = endless ? { hpScale: 1 + endlessLoops * 0.35, dmgScale: 1 + endlessLoops * 0.2, xpScale: 1 + endlessLoops * 0.5 } : {};

  const enemies = [];

  if (boss) {
    const bossBase = ENEMY_BY_ID.get(zone.boss);
    const bossAdjs = battleIndex >= 20 ? rollAdjectives(rng, 1, adjectiveMaxTier(battleIndex)) : [];
    const b = buildEnemy(rng, bossBase, bossAdjs, scale);
    b.isBoss = true;
    enemies.push(b);
    for (const mid of zone.bossMinions ?? []) {
      const mb = ENEMY_BY_ID.get(mid);
      if (mb) enemies.push(buildEnemy(rng, mb, rollAdjectives(rng, adjectiveCount(rng, battleIndex, false), adjectiveMaxTier(battleIndex)), scale));
    }
  } else {
    // pool da zona: famílias da zona, tier <= tier da zona (e pelo menos tier-2)
    const minTier = Math.max(1, zone.tier - (progress > 0.5 ? 1 : 2));
    const pool = ENEMIES.filter((e) =>
      !e.boss && zone.families.includes(e.family) &&
      e.tier <= zone.tier && e.tier >= minTier
    );
    const fallback = ENEMIES.filter((e) => !e.boss && e.tier <= zone.tier && e.tier >= minTier);
    const usable = pool.length >= 3 ? pool : fallback;

    // ORÇAMENTO DE XP: auto-balanceia força do encontro com o nível da heroína
    const earlyRelief = battleIndex <= 4 ? 0.75 : 1;
    const budget = Math.round((40 + battleIndex * 26) * (1 + heroLevel * 0.06) * (0.85 + progress * 0.4) * earlyRelief);
    const maxTierAdj = adjectiveMaxTier(battleIndex);
    let spent = 0;
    let safety = 0;
    while (enemies.length < 8 && safety++ < 30) {
      const remaining = budget - spent;
      const affordable = usable.filter((e) => e.xp <= remaining);
      if (!affordable.length && enemies.length >= 2) break;
      // se nada cabe e ainda não há 2 inimigos, usa os mais baratos do pool
      const cheapest = [...usable].sort((a, b) => a.xp - b.xp).slice(0, Math.max(3, Math.floor(usable.length / 3)));
      const pickPool = affordable.length ? affordable : cheapest;
      const base = pickWeighted(rng, pickPool, (e) => {
        const tierAffinity = e.tier === zone.tier ? (0.4 + progress) : 1;
        // prefere inimigos que caibam bem no orçamento restante
        const fit = e.xp <= remaining * 0.8 ? 1 : e.xp <= remaining ? 0.6 : 0.05;
        return tierAffinity * fit * 10;
      });
      const nAdj = adjectiveCount(rng, battleIndex, false);
      const adjs = rollAdjectives(rng, nAdj, maxTierAdj);
      const unit = buildEnemy(rng, base, adjs, scale);
      enemies.push(unit);
      spent += unit.xp;
      if (spent >= budget && enemies.length >= 2) break;
    }
  }

  return { zone, boss, enemies, endless };
}

// Posiciona herói e inimigos no mapa.
export function placeUnits(rng, grid, hero, enemies) {
  const isFree = (x, y, taken) => {
    const t = grid.at(x, y);
    return t && !TERRAIN[t.terrain].blocked && !TERRAIN[t.terrain].hazard && !taken.has(`${x},${y}`);
  };
  const taken = new Set();

  // herói: centro-baixo
  outer:
  for (let y = grid.h - 2; y >= 0; y--) {
    for (const x of centerOrder(grid.w)) {
      if (isFree(x, y, taken)) {
        hero.pos = { x, y };
        taken.add(`${x},${y}`);
        break outer;
      }
    }
  }

  // inimigos: metade superior, espalhados
  const spots = [];
  for (let y = 0; y < Math.ceil(grid.h * 0.55); y++) {
    for (let x = 0; x < grid.w; x++) {
      if (isFree(x, y, taken)) spots.push({ x, y });
    }
  }
  const shuffled = rng.shuffle(spots);
  for (const e of enemies) {
    const s = shuffled.pop();
    if (!s) {
      // fallback: qualquer casa livre
      for (let y = 0; y < grid.h; y++) {
        for (let x = 0; x < grid.w; x++) {
          if (isFree(x, y, taken)) { e.pos = { x, y }; taken.add(`${x},${y}`); break; }
        }
      }
      continue;
    }
    e.pos = { x: s.x, y: s.y };
    taken.add(`${s.x},${s.y}`);
  }
}

function centerOrder(w) {
  const mid = Math.floor(w / 2);
  const order = [mid];
  for (let d = 1; d <= mid + 1; d++) {
    if (mid - d >= 0) order.push(mid - d);
    if (mid + d < w) order.push(mid + d);
  }
  return order;
}
