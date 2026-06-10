// Atributos e modificadores estilo D&D 5e.

export const ABILITIES = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

export const ABILITY_NAMES_PT = {
  str: 'Força',
  dex: 'Destreza',
  con: 'Constituição',
  int: 'Inteligência',
  wis: 'Sabedoria',
  cha: 'Carisma',
};

export function mod(score) {
  return Math.floor((score - 10) / 2);
}

// Bônus de proficiência por nível/ND (5e)
export function proficiency(level) {
  return 2 + Math.floor(Math.max(0, level - 1) / 4);
}

export function xpForLevel(level) {
  // Curva para heroína SOLO: quadrática suave, calibrada para nível ~20-24
  // ao fim das 50 batalhas da campanha (validada por simulação).
  if (level <= 1) return 0;
  return Math.round(120 * Math.pow(level - 1, 2.1));
}

export function levelForXp(xp) {
  let level = 1;
  while (xpForLevel(level + 1) <= xp && level < 99) level++;
  return level;
}
