// Acessores de localização para os DADOS do jogo.
// Os arquivos de dados guardam o português canônico; o inglês vem dos mapas
// em data/i18n-en.js. Tudo passa por aqui na hora de exibir/construir.

import { getLocale, t } from './i18n.js';
import {
  EN_ENEMIES, EN_ADJECTIVES, EN_ABILITIES, EN_PASSIVES, EN_ZONES,
  EN_POTIONS, EN_UPGRADES, EN_DAMAGE, PT_DAMAGE, EN_FAMILIES,
  PT_ABILITY_ABBR, EN_ABILITY_ABBR, EN_ABILITY_NAMES,
  PT_TERRAIN, EN_TERRAIN, EN_WEAPON_NAME,
} from './data/i18n-en.js';
import { ABILITY_NAMES_PT } from './core/stats.js';

const en = () => getLocale() === 'en';

// ---------- inimigos ----------
export function enemyName(base) {
  return en() ? (EN_ENEMIES[base.id]?.name ?? base.pt) : base.pt;
}

export function enemyAttackName(baseId, idx, ptName) {
  if (!en()) return ptName;
  return EN_ENEMIES[baseId]?.attacks?.[idx] ?? ptName;
}

export function enemySpecialName(baseId, idx, ptName) {
  if (!en()) return ptName;
  return EN_ENEMIES[baseId]?.specials?.[idx] ?? ptName;
}

// ---------- adjetivos ----------
export function adjForm(adj, gender) {
  if (en()) return EN_ADJECTIVES[adj.id]?.name ?? adj.m;
  return gender === 'f' ? (adj.f ?? adj.m) : adj.m;
}

export function adjName(adj) {
  return en() ? (EN_ADJECTIVES[adj.id]?.name ?? adj.m) : adj.m;
}

export function adjDesc(adj) {
  return en() ? (EN_ADJECTIVES[adj.id]?.desc ?? adj.desc) : adj.desc;
}

// Nome composto: PT = substantivo + adjetivos (com gênero);
// EN = adjetivos + substantivo (sem gênero).
export function composeLocalizedName(base, adjectives) {
  if (en()) {
    const adjs = adjectives.map((a) => adjForm(a, base.gender));
    return [...adjs, enemyName(base)].join(' ');
  }
  let name = base.pt;
  for (const a of adjectives) name += ` ${adjForm(a, base.gender)}`;
  return name;
}

export function splitName(localizedBaseName, gender) {
  return t(gender === 'f' ? 'unit.splitF' : 'unit.splitM', { name: localizedBaseName });
}

// ---------- habilidades / passivas da Frosty ----------
export function abilityName(a) {
  return en() ? (EN_ABILITIES[a.id]?.name ?? a.pt) : a.pt;
}
export function abilityDesc(a) {
  return en() ? (EN_ABILITIES[a.id]?.desc ?? a.desc) : a.desc;
}
export function passiveName(p) {
  return en() ? (EN_PASSIVES[p.id]?.name ?? p.pt) : p.pt;
}
export function passiveDesc(p) {
  return en() ? (EN_PASSIVES[p.id]?.desc ?? p.desc) : p.desc;
}
export function weaponName() {
  return en() ? EN_WEAPON_NAME : 'Geada Eterna';
}

// ---------- condições ----------
export function condName(def) {
  return en() ? (def.en ?? def.pt) : def.pt;
}
export function condDesc(def) {
  return en() ? (def.descEn ?? def.desc) : def.desc;
}

// ---------- zonas ----------
export function zoneName(zone) {
  return en() ? (EN_ZONES[zone.id]?.name ?? zone.pt) : zone.pt;
}
export function zoneIntro(zone) {
  return en() ? (EN_ZONES[zone.id]?.intro ?? zone.intro) : zone.intro;
}

// ---------- itens ----------
export function potionName(p) {
  return en() ? (EN_POTIONS[p.id]?.name ?? p.pt) : p.pt;
}
export function potionDesc(p) {
  return en() ? (EN_POTIONS[p.id]?.desc ?? p.desc) : p.desc;
}
export function upgradeName(u) {
  return en() ? (EN_UPGRADES[u.id]?.name ?? u.pt) : u.pt;
}
export function upgradeDesc(u) {
  return en() ? (EN_UPGRADES[u.id]?.desc ?? u.desc) : u.desc;
}

// ---------- diversos ----------
export function damageTypeName(type) {
  return en() ? (EN_DAMAGE[type] ?? type) : (PT_DAMAGE[type] ?? type);
}
export function abilityScoreAbbr(ab) {
  return en() ? (EN_ABILITY_ABBR[ab] ?? ab.toUpperCase()) : (PT_ABILITY_ABBR[ab] ?? ab.toUpperCase());
}
export function abilityScoreName(ab) {
  return en() ? (EN_ABILITY_NAMES[ab] ?? ab) : (ABILITY_NAMES_PT[ab] ?? ab);
}
export function familyName(family) {
  return en() ? (EN_FAMILIES[family] ?? family) : family;
}
export function terrainName(terr) {
  return en() ? (EN_TERRAIN[terr] ?? terr) : (PT_TERRAIN[terr] ?? terr);
}
