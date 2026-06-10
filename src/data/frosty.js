// Estado persistente da Frosty: progressão, atributos, equipamento, recursos.

import { mod, xpForLevel, levelForXp } from '../core/stats.js';
import { passivesForLevel } from './abilities.js';
import { weaponName } from '../i18n-data.js';

export function newHeroState() {
  return {
    level: 1,
    xp: 0,
    gold: 50,
    // atributos base (tiefling guerreira)
    str: 17, dex: 12, con: 16, int: 10, wis: 11, cha: 14,
    asiSpent: 0,           // quantos ASIs já foram aplicados
    pendingAsi: 0,         // ASIs aguardando escolha do jogador
    // melhorias da loja
    upgrades: { lamina: 0, armadura: 0, runas: 0, botas: 0, amuleto: 0 },
    potions: { cura: 3, cura_maior: 0, cura_suprema: 0, forca: 0, antidoto: 0 },
    hp: 0, // definido por recomputeHero
    // estatísticas de jornada
    statsTotal: { kills: 0, crits: 0, damageDealt: 0, damageTaken: 0, battles: 0 },
  };
}

// Recalcula todos os valores derivados (chamar após level-up, compra, ASI).
export function recomputeHero(h) {
  const passives = new Set(passivesForLevel(h.level).map((p) => p.id));

  // PV de heroína SOLO (sem grupo): 24 + CON×2 no nível 1, +(7 + CON) por nível
  const conM = mod(h.con);
  h.maxHp = 24 + conM * 2 + (h.level - 1) * (7 + conM) + h.upgrades.amuleto * 10
    + (passives.has('vigor_glacial') ? 20 : 0);

  // CA: armadura negra 16 + melhorias + DES limitado a +1 (armadura pesada)
  h.ac = 16 + h.upgrades.armadura + Math.min(1, mod(h.dex));

  h.speed = 5 + h.upgrades.botas;
  h.dmgFlat = h.upgrades.lamina;

  // arma: Geada Eterna (espada bastarda rúnica)
  const extraDamage = [];
  if (h.upgrades.runas > 0) extraDamage.push({ dice: `${h.upgrades.runas}d4`, element: 'gelo' });
  if (passives.has('runas_despertas')) extraDamage.push({ dice: '1d6', element: 'gelo' });
  // a lâmina desperta junto com a heroína
  const weaponDice = h.level >= 20 ? '3d10' : h.level >= 12 ? '2d10' : '2d8';
  h.weapon = {
    pt: weaponName(), dice: weaponDice, dtype: 'cortante', range: 1,
    extraDamage,
  };

  h.attacksPerAction = passives.has('ataque_extra_2') ? 3 : passives.has('ataque_extra') ? 2 : 1;

  // efeitos passivos (mesmo sistema dos adjetivos)
  const effects = [];
  if (passives.has('indomavel')) effects.push({ type: 'saveBonus', value: 2 });
  if (passives.has('postura_colosso')) effects.push({ type: 'sturdy' });
  if (passives.has('mestre_armas')) effects.push({ type: 'critRange', min: 19 });
  if (passives.has('encarnacao_inverno')) effects.push({ type: 'auraDamage', element: 'gelo', dice: '1d6', radius: 1 });
  h.effects = effects;

  h.resistances = passives.has('pele_inverno') ? ['gelo', 'fogo'] : [];
  h.conditionImmunities = passives.has('indomavel') ? ['medo'] : [];
  h.healDouble = passives.has('vigor_glacial');
  h.wingRange = passives.has('asas_verdadeiras') ? 6 : 4;
  h.wingCooldown = passives.has('asas_verdadeiras') ? 1 : 3;

  if (h.hp <= 0 || h.hp > h.maxHp) h.hp = h.maxHp;
  return h;
}

// Concede XP; retorna lista de níveis ganhos (para a UI celebrar).
export function gainXp(h, amount) {
  h.xp += amount;
  const newLevel = Math.min(99, levelForXp(h.xp));
  const gained = [];
  const ASI_LEVELS = [4, 8, 12, 16, 21, 24, 27, 30];
  while (h.level < newLevel) {
    h.level++;
    gained.push(h.level);
    if (ASI_LEVELS.includes(h.level)) h.pendingAsi++;
  }
  if (gained.length) recomputeHero(h);
  return gained;
}

export function applyAsi(h, ability1, ability2) {
  if (h.pendingAsi <= 0) return false;
  h[ability1] = Math.min(24, h[ability1] + 1);
  h[ability2] = Math.min(24, h[ability2] + 1);
  h.pendingAsi--;
  h.asiSpent++;
  recomputeHero(h);
  return true;
}

export function xpProgress(h) {
  const cur = xpForLevel(h.level);
  const next = xpForLevel(h.level + 1);
  return { current: h.xp - cur, needed: next - cur, fraction: (h.xp - cur) / (next - cur) };
}
