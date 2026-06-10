// Campanha: 5 zonas × 10 batalhas (chefe na 10ª) + Modo Infinito.

export const ZONES = [
  {
    id: 1, pt: 'Planícies do Gelo Quebrado', tier: 1,
    families: ['goblinoide', 'fera', 'humanoide', 'verme', 'orc'],
    boss: 'rei_goblin', bossMinions: ['goblin', 'goblin', 'xama_goblin'],
    palette: { ground: '#7fa05a', groundAlt: '#6a8a4a', rock: '#8a8a7a', sky: '#bcd8ee', fog: '#cfe3f5', prop: 'rock' },
    intro: 'Os ventos uivam sobre as planícies congeladas. Bandos de goblins saqueiam as vilas — e Frosty atende ao chamado.',
  },
  {
    id: 2, pt: 'Floresta Sombria de Velgar', tier: 2,
    families: ['fada', 'planta', 'fera', 'verme', 'licantropo', 'goblinoide'],
    boss: 'bruxa_verde', bossMinions: ['lobisomem', 'duende', 'duende'],
    palette: { ground: '#4a6a3a', groundAlt: '#3a5a30', rock: '#5a6a4a', sky: '#3a4a3a', fog: '#2a3a2a', prop: 'tree' },
    intro: 'Árvores retorcidas engolem a luz. Algo antigo desperta no coração da floresta, corrompendo suas criaturas.',
  },
  {
    id: 3, pt: 'Pântanos da Podridão', tier: 3,
    families: ['morto-vivo', 'limo', 'gigante', 'aberracao', 'planta'],
    boss: 'lich', bossMinions: ['esqueleto', 'esqueleto', 'espectro'],
    palette: { ground: '#5a5a3a', groundAlt: '#4a4a30', rock: '#6a6a5a', sky: '#4a4a3a', fog: '#3d3d2d', prop: 'swamp' },
    intro: 'O fedor da morte paira sobre o lodo. Um lich ergue exércitos com os afogados do pântano.',
  },
  {
    id: 4, pt: 'Montanhas do Crepúsculo', tier: 4,
    families: ['gigante', 'elemental', 'draconico', 'constructo', 'licantropo', 'fera'],
    boss: 'dragao_gelo', bossMinions: ['cria_dragao', 'cria_dragao'],
    palette: { ground: '#7a7a8a', groundAlt: '#6a6a7a', rock: '#9a9aaa', sky: '#5a4a6a', fog: '#6a5a7a', prop: 'rock' },
    intro: 'Picos que arranham o céu púrpura. Gigantes e dragões disputam as fortalezas congeladas das alturas.',
  },
  {
    id: 5, pt: 'Cidadela do Abismo', tier: 5,
    families: ['demonio', 'diabo', 'aberracao', 'morto-vivo', 'constructo'],
    boss: 'vorthrax', bossMinions: ['demonio_sombra', 'vrock'],
    palette: { ground: '#4a2a3a', groundAlt: '#3a2030', rock: '#5a3a4a', sky: '#1a0a1a', fog: '#2a0a2a', prop: 'obelisk' },
    intro: 'O portal para o Vazio se abre. Vorthrax, o Dragão do Vazio, aguarda no trono de estrelas mortas.',
  },
];

export const BATTLES_PER_ZONE = 10;
export const TOTAL_BATTLES = ZONES.length * BATTLES_PER_ZONE;

export function zoneForBattle(battleIndex) {
  // battleIndex: 1-based global (1..50); além disso = Modo Infinito
  if (battleIndex > TOTAL_BATTLES) {
    return { ...ZONES[(battleIndex - 1) % ZONES.length], endless: true };
  }
  return ZONES[Math.floor((battleIndex - 1) / BATTLES_PER_ZONE)];
}

export function isBossBattle(battleIndex) {
  return battleIndex % BATTLES_PER_ZONE === 0;
}

// dificuldade dentro da zona: 0..1 (progresso da zona)
export function zoneProgress(battleIndex) {
  const idx = ((battleIndex - 1) % BATTLES_PER_ZONE) + 1;
  return idx / BATTLES_PER_ZONE;
}
