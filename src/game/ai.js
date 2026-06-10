// IA inimiga: decide o turno conforme o comportamento da criatura.
// Comportamentos: agressivo (padrão), atirador, covarde, guardiao,
// preguicoso, emboscador (tratado como agressivo; seus efeitos já dão o sabor).

import { resolveAttack, heal, addCondition, savingThrow, dealDamage } from '../core/combat.js';
import { rollDice } from '../core/dice.js';
import { chebyshev } from './grid.js';

export function runEnemyTurn(battle, u) {
  const ctx = battle.ctx;
  const hero = battle.hero;
  if (!hero.alive || battle.state !== 'active') return;

  if (u.behavior === 'preguicoso' && battle.rng.chance(0.25)) {
    ctx.log(`${u.name} boceja, sem vontade de lutar.`, 'info');
    return;
  }

  // covarde ferido: foge
  if (u.behavior === 'covarde' && u.hp < u.maxHp * 0.3) {
    fleeFrom(battle, u, hero.pos);
    // ainda ataca se o herói continuar ao alcance (encurralado)
    tryAttack(battle, u, hero);
    return;
  }

  // 1) especiais de suporte/controle (gasta a ação se usar)
  if (u.specials?.length && tryUseSpecial(battle, u)) return;

  // 2) posicionamento
  const attack = u.attacks[0];
  const range = battle.attackRange(u, attack);
  const desired = u.behavior === 'atirador' ? Math.max(2, range) : Math.min(range, u._reach);

  if (u.behavior === 'guardiao') {
    const wounded = battle.alliesOf(u).sort((a, b) => a.hp / a.maxHp - b.hp / b.maxHp)[0];
    if (wounded && chebyshev(u.pos, wounded.pos) > 2 && chebyshev(u.pos, hero.pos) > range) {
      moveTowards(battle, u, wounded.pos, 1);
      tryAttack(battle, u, hero);
      return;
    }
  }

  if (u.behavior === 'atirador') {
    const d = chebyshev(u.pos, hero.pos);
    if (d < 2) {
      // herói grudou: afasta-se (pode provocar ataque de oportunidade)
      fleeFrom(battle, u, hero.pos, Math.min(u.movementLeft, 3));
    } else if (d > range) {
      moveTowards(battle, u, hero.pos, desired);
    }
    tryAttack(battle, u, hero);
    return;
  }

  // agressivo / emboscador / padrão: aproxima e bate
  if (chebyshev(u.pos, hero.pos) > desired) {
    moveTowards(battle, u, hero.pos, desired);
  }
  tryAttack(battle, u, hero);
}

function tryAttack(battle, u, hero) {
  if (battle.state !== 'active' || !u.alive || !hero.alive) return false;
  const attack = u.attacks[0];
  const inRange = battle.targetsInRange(u, attack).includes(hero);
  if (!inRange) return false;
  const n = u.attacksPerAction ?? 1;
  for (let i = 0; i < n; i++) {
    if (!hero.alive || battle.state !== 'active' || !u.alive) break;
    const hBonus = battle.heightAdvantage(u, hero);
    // atirar adjacente ao inimigo = desvantagem (regra D&D)
    const rangedInMelee = (attack.range ?? 1) > 1 && chebyshev(u.pos, hero.pos) <= 1;
    resolveAttack(battle.ctx, u, hero,
      { ...attack, toHitBonus: (attack.toHitBonus ?? 0) + hBonus },
      { disadvantage: rangedInMelee });
  }
  battle.checkEnd();
  return true;
}

function moveTowards(battle, u, targetPos, desiredRange) {
  const reach = battle.reachableFor(u);
  let best = null;
  const curD = chebyshev(u.pos, targetPos);
  let bestScore = Math.abs(curD - desiredRange) * 100; // ficar parado é candidato
  for (const [, r] of reach) {
    const d = chebyshev({ x: r.x, y: r.y }, targetPos);
    const tile = battle.grid.at(r.x, r.y);
    const hazardPenalty = (!u._flying && tile && ['lava', 'poison', 'spikes'].includes(tile.terrain)) ? 50 : 0;
    const heightBonus = tile ? -tile.h * 2 : 0; // prefere terreno alto
    const score = Math.abs(d - desiredRange) * 100 + r.cost + hazardPenalty + heightBonus;
    if (score < bestScore) { bestScore = score; best = r; }
  }
  if (best) {
    u.movementLeft -= best.cost;
    battle.moveUnit(u, best.path);
  }
}

function fleeFrom(battle, u, threatPos, maxCost = null) {
  const reach = battle.reachableFor(u);
  let best = null, bestD = chebyshev(u.pos, threatPos);
  for (const [, r] of reach) {
    if (maxCost != null && r.cost > maxCost) continue;
    const d = chebyshev({ x: r.x, y: r.y }, threatPos);
    if (d > bestD) { bestD = d; best = r; }
  }
  if (best) {
    battle.ctx.log(`${u.name} recua!`, 'info');
    u.movementLeft -= best.cost;
    battle.moveUnit(u, best.path);
  }
}

function tryUseSpecial(battle, u) {
  const ctx = battle.ctx;
  const hero = battle.hero;
  for (const sp of u.specials) {
    if (u.cooldowns.has(`sp:${sp.pt}`)) continue;
    if (sp.uses != null && (sp._usesLeft ?? sp.uses) <= 0) continue;

    const dHero = chebyshev(u.pos, hero.pos);
    const allies = battle.alliesOf(u);

    const markUsed = () => {
      u.cooldowns.set(`sp:${sp.pt}`, (sp.cooldown ?? 3) + 1);
      if (sp.uses != null) sp._usesLeft = (sp._usesLeft ?? sp.uses) - 1;
      ctx.event({ type: 'enemyAbility', unitId: u.id, pt: sp.pt, kind: sp.kind });
    };

    switch (sp.kind) {
      case 'heal': {
        const wounded = [u, ...allies].filter((a) => a.hp < a.maxHp * 0.55)
          .filter((a) => chebyshev(u.pos, a.pos) <= (sp.range ?? 4))
          .sort((a, b) => a.hp / a.maxHp - b.hp / b.maxHp)[0];
        if (!wounded) continue;
        markUsed();
        ctx.log(`${u.name} usa ${sp.pt}!`, 'ability');
        heal(ctx, wounded, rollDice(battle.rng, sp.dice).total);
        return true;
      }
      case 'buff': {
        if (allies.length < 1) continue;
        const target = [...allies, u].filter((a) => !a.conditions.has(sp.condition))
          .filter((a) => chebyshev(u.pos, a.pos) <= (sp.range ?? 4))
          .sort((a, b) => b.maxHp - a.maxHp)[0];
        if (!target) continue;
        markUsed();
        ctx.log(`${u.name} usa ${sp.pt}!`, 'ability');
        addCondition(ctx, target, sp.condition, sp.duration ?? 3, u);
        return true;
      }
      case 'debuff': {
        if (dHero > (sp.range ?? 4)) continue;
        if (hero.conditions.has(sp.condition)) continue;
        markUsed();
        ctx.log(`${u.name} usa ${sp.pt} contra Frosty!`, 'ability');
        if (!savingThrow(ctx, hero, sp.save ?? 'wis', sp.dc ?? 12)) {
          addCondition(ctx, hero, sp.condition, sp.duration ?? 2, u);
        }
        return true;
      }
      case 'blast': {
        if (dHero > (sp.range ?? 4)) continue;
        // evita atingir os próprios aliados (criaturas espertas)
        const alliesHit = allies.filter((a) => chebyshev(a.pos, hero.pos) <= (sp.radius ?? 1)).length;
        if (u.int > 6 && alliesHit > 1) continue;
        markUsed();
        ctx.log(`${u.name} usa ${sp.pt}!`, 'ability');
        ctx.event({ type: 'blast', x: hero.pos.x, y: hero.pos.y, radius: sp.radius ?? 1, element: sp.dtype });
        const targets = [hero, ...allies.filter((a) => chebyshev(a.pos, hero.pos) <= (sp.radius ?? 1))];
        for (const t of targets) {
          if (!t.alive) continue;
          if (chebyshev(t.pos, hero.pos) > (sp.radius ?? 1)) continue;
          const r = rollDice(battle.rng, sp.dice);
          const saved = savingThrow(ctx, t, sp.save ?? 'dex', sp.dc ?? 12);
          dealDamage(ctx, t, [{ amount: saved ? Math.floor(r.total / 2) : r.total, type: sp.dtype }], u);
          if (t.alive && !saved) {
            for (const rd of sp.riders ?? []) {
              if (rd.chance != null && !battle.rng.chance(rd.chance)) continue;
              if (!savingThrow(ctx, t, rd.save ?? 'con', rd.dc ?? 12)) {
                addCondition(ctx, t, rd.condition, rd.duration ?? 2, u);
              }
            }
          }
        }
        battle.checkEnd();
        return true;
      }
      case 'smite': {
        if (dHero > (sp.range ?? 1)) continue;
        markUsed();
        ctx.log(`${u.name} usa ${sp.pt}!`, 'ability');
        resolveAttack(ctx, u, hero, { pt: sp.pt, dice: sp.dice, dtype: sp.dtype, range: sp.range, riders: sp.riders });
        battle.checkEnd();
        return true;
      }
      case 'summon': {
        if (battle.livingEnemies().length >= 9) continue;
        if (battle.round < 2) continue;
        markUsed();
        battle.spawnSummons(u, sp);
        return true;
      }
    }
  }
  return false;
}
