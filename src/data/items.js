// Itens e melhorias da loja entre batalhas.

export const POTIONS = {
  cura: { id: 'cura', pt: 'Poção de Cura', icon: '🧪', price: 25, healDice: '2d4+2', desc: 'Recupera 2d4+2 PV.' },
  cura_maior: { id: 'cura_maior', pt: 'Poção de Cura Maior', icon: '⚗️', price: 80, healDice: '4d4+4', desc: 'Recupera 4d4+4 PV.' },
  cura_suprema: { id: 'cura_suprema', pt: 'Poção de Cura Suprema', icon: '🍷', price: 220, healDice: '8d4+8', desc: 'Recupera 8d4+8 PV.' },
  forca: { id: 'forca', pt: 'Poção de Fúria', icon: '💪', price: 90, condition: 'fortalecido', duration: 3, desc: '+4 de dano por 3 turnos.' },
  antidoto: { id: 'antidoto', pt: 'Panaceia', icon: '🌿', price: 60, cleanse: true, desc: 'Remove todas as condições negativas.' },
};

export const NEGATIVE_CONDITIONS = [
  'queimando', 'envenenado', 'sangrando', 'congelado', 'atordoado', 'lento',
  'medo', 'cego', 'enraizado', 'marcado', 'amaldicoado', 'paralisado',
];

export const UPGRADES = {
  lamina: {
    id: 'lamina', pt: 'Afiar a Geada Eterna', icon: '🗡️', max: 5,
    price: (lvl) => 100 + lvl * 120,
    desc: '+1 de dano em todos os ataques (permanente).',
  },
  armadura: {
    id: 'armadura', pt: 'Reforçar Armadura Negra', icon: '🛡️', max: 4,
    price: (lvl) => 150 + lvl * 180,
    desc: '+1 de CA (permanente).',
  },
  runas: {
    id: 'runas', pt: 'Gravar Runa de Gelo', icon: '❄️', max: 3,
    price: (lvl) => 200 + lvl * 250,
    desc: '+1d4 de dano de gelo nos ataques (acumula).',
  },
  botas: {
    id: 'botas', pt: 'Grevas do Vento Norte', icon: '👢', max: 2,
    price: (lvl) => 250 + lvl * 300,
    desc: '+1 de movimento (permanente).',
  },
  amuleto: {
    id: 'amuleto', pt: 'Amuleto do Coração Gélido', icon: '📿', max: 5,
    price: (lvl) => 120 + lvl * 140,
    desc: '+10 PV máximos (permanente).',
  },
};
