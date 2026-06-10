// Tipos de dano e cálculo de resistências/vulnerabilidades/imunidades.

export const DAMAGE_TYPES = [
  'cortante', 'perfurante', 'concussao',
  'fogo', 'gelo', 'eletrico', 'acido', 'veneno',
  'necrotico', 'radiante', 'psiquico', 'trovao',
];

export const DAMAGE_COLORS = {
  cortante: '#d8d8d8', perfurante: '#c8b89a', concussao: '#b09a7a',
  fogo: '#ff7a33', gelo: '#7ad8ff', eletrico: '#ffe14d', acido: '#9aff4d',
  veneno: '#52c41a', necrotico: '#9a5aff', radiante: '#fff3b0',
  psiquico: '#ff66cc', trovao: '#8fb4ff',
};

export const DAMAGE_ICONS = {
  cortante: '🗡️', perfurante: '🏹', concussao: '🔨',
  fogo: '🔥', gelo: '❄️', eletrico: '⚡', acido: '🧪',
  veneno: '☠️', necrotico: '💀', radiante: '✨', psiquico: '🌀', trovao: '💥',
};

// resist: Map tipo -> fator. 0 = imune, 0.5 = resistente, 2 = vulnerável.
export function applyResistance(amount, type, unit) {
  let factor = 1;
  if (unit.immunities?.has(type)) factor = 0;
  else if (unit.resistances?.has(type) && unit.vulnerabilities?.has(type)) factor = 1;
  else if (unit.resistances?.has(type)) factor = 0.5;
  else if (unit.vulnerabilities?.has(type)) factor = 2;
  return { final: Math.floor(amount * factor), factor };
}
