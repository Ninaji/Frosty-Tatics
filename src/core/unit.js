// Construção de unidades: combina inimigo base + adjetivos em uma variante
// única, com nome localizado (PT com gênero / EN com adjetivos antepostos),
// stats modificados, resistências, efeitos e visual.

import { rollDice, parseDice } from './dice.js';
import { mod } from './stats.js';
import { applyStatEffects } from './effects.js';
import {
  composeLocalizedName, enemyName, enemyAttackName, enemySpecialName,
} from '../i18n-data.js';

let nextUnitId = 1;
export function resetUnitIds() { nextUnitId = 1; }

function adjectiveForm(adj, gender) {
  return gender === 'f' ? (adj.f ?? adj.m) : adj.m;
}

// composição PT pura (usada pelo validador para amostras)
export function composeName(base, adjectives) {
  let name = base.pt;
  for (const adj of adjectives) name += ` ${adjectiveForm(adj, base.gender)}`;
  return name;
}

export function buildEnemy(rng, base, adjectives = [], opts = {}) {
  const hpRoll = rollDice(rng, base.hp);
  const conBonus = mod(base.con) * parseDice(base.hp).count; // 5e: +CON por dado de vida

  let raw = {
    str: base.str, dex: base.dex, con: base.con,
    int: base.int, wis: base.wis, cha: base.cha,
    maxHp: Math.max(1, hpRoll.total + conBonus),
    ac: base.ac,
    speed: base.speed,
    dmgFlat: 0, dmgMult: 1, xpMult: 1,
  };

  const allEffects = [
    ...(base.traits ?? []),
    ...adjectives.flatMap((a) => a.effects ?? []),
  ];
  raw = applyStatEffects(raw, allEffects);

  // escala de modo infinito / ajuste fino de encontro
  if (opts.hpScale) raw.maxHp = Math.max(1, Math.round(raw.maxHp * opts.hpScale));
  if (opts.dmgScale) raw.dmgMult *= opts.dmgScale;

  const resistances = new Set(base.resist ?? []);
  const vulnerabilities = new Set(base.vuln ?? []);
  const immunities = new Set(base.immune ?? []);
  const conditionImmunities = new Set(base.condImmune ?? []);
  for (const e of allEffects) {
    if (e.type === 'resistance') e.types.forEach((t) => resistances.add(t));
    if (e.type === 'immunity') e.types.forEach((t) => immunities.add(t));
    if (e.type === 'vulnerability') e.types.forEach((t) => vulnerabilities.add(t));
    if (e.type === 'conditionImmunity') e.conditions.forEach((c) => conditionImmunities.add(c));
  }
  // imunidade vence resistência; remove duplicidade
  for (const t of immunities) resistances.delete(t);

  const xp = Math.max(5, Math.round(base.xp * raw.xpMult * (opts.xpScale ?? 1)));

  const unit = {
    id: `u${nextUnitId++}`,
    kind: 'enemy',
    side: 'enemy',
    baseId: base.id,
    family: base.family,
    tier: base.tier,
    level: base.tier * 2,
    name: composeLocalizedName(base, adjectives),
    baseName: enemyName(base),
    gender: base.gender,
    adjectives,
    adjectiveIds: adjectives.map((a) => a.id),
    traits: base.traits ? [...base.traits] : [],
    effects: allEffects.filter((e) => e.type !== 'stat'),

    str: raw.str, dex: raw.dex, con: raw.con,
    int: raw.int, wis: raw.wis, cha: raw.cha,
    maxHp: raw.maxHp, hp: raw.maxHp,
    ac: raw.ac, speed: raw.speed,
    dmgFlat: raw.dmgFlat, dmgMult: raw.dmgMult,

    attacks: base.attacks.map((a, i) => ({ ...a, pt: enemyAttackName(base.id, i, a.pt) })),
    specials: (base.specials ?? []).map((s, i) => ({ ...s, pt: enemySpecialName(base.id, i, s.pt) })),

    resistances, vulnerabilities, immunities, conditionImmunities,
    conditions: new Map(),
    cooldowns: new Map(),

    alive: true,
    pos: { x: 0, y: 0 },
    initiative: 0,
    xp,
    goldValue: Math.max(1, Math.round(base.tier * 8 + xp / 12)),

    visual: {
      body: base.visual.body,
      color: base.visual.color,
      accent: base.visual.accent ?? '#222222',
      scale: (base.visual.scale ?? 1) * adjectives.reduce((s, a) => s * (a.visual?.scale ?? 1), 1),
      tint: adjectives.find((a) => a.visual?.tint)?.visual.tint ?? null,
      emissive: adjectives.find((a) => a.visual?.emissive)?.visual.emissive ?? null,
      particle: adjectives.map((a) => a.visual?.particle).filter(Boolean)[0] ?? null,
    },

    behavior: allEffects.find((e) => e.type === 'behavior')?.kind ?? base.behavior ?? 'aggressive',
  };

  // efeito multiattack vira contagem de ataques
  unit.attacksPerAction = 1 + allEffects
    .filter((e) => e.type === 'multiattack')
    .reduce((s, e) => s + (e.extra ?? 1), 0) + (base.multiattack ?? 0);

  return unit;
}

export function buildHeroUnit(heroState, abilitiesData) {
  const h = heroState;
  const unit = {
    id: 'frosty',
    kind: 'hero',
    side: 'hero',
    name: 'Frosty',
    gender: 'f',
    level: h.level,
    str: h.str, dex: h.dex, con: h.con, int: h.int, wis: h.wis, cha: h.cha,
    maxHp: h.maxHp, hp: h.hp,
    ac: h.ac, speed: h.speed,
    dmgFlat: h.dmgFlat ?? 0, dmgMult: 1,
    attacks: [h.weapon],
    abilities: abilitiesData,
    effects: h.effects ?? [],
    traits: [],
    adjectives: [],
    resistances: new Set(h.resistances ?? []),
    vulnerabilities: new Set(),
    immunities: new Set(),
    conditionImmunities: new Set(h.conditionImmunities ?? []),
    conditions: new Map(),
    cooldowns: new Map(),
    usesLeft: new Map(),
    alive: true,
    pos: { x: 0, y: 0 },
    initiative: 0,
    attacksPerAction: h.attacksPerAction ?? 1,
    visual: { body: 'frosty', color: '#5b8def', scale: 1 },
    behavior: 'player',
  };
  return unit;
}
