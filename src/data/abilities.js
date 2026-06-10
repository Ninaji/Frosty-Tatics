// Habilidades da Frosty — guerreira alada com a espada bastarda "Geada Eterna".
// Desbloqueadas por nível; ativas usadas em batalha, passivas aplicadas ao recomputar a heroína.

export const FROSTY_ABILITIES = [
  {
    id: 'ataque', pt: 'Ataque', icon: '⚔️', unlockLevel: 1, kind: 'attack',
    targeting: 'enemy', range: 1, cooldown: 0,
    desc: 'Golpeia com a Geada Eterna. Com Ataque Extra, golpeia múltiplas vezes.',
  },
  {
    id: 'postura_defensiva', pt: 'Postura Defensiva', icon: '🛡️', unlockLevel: 1, kind: 'self',
    targeting: 'self', cooldown: 0,
    condition: 'protegido', duration: 2,
    desc: 'Assume postura defensiva: +2 de CA até seu próximo turno.',
  },
  {
    id: 'salto_alado', pt: 'Salto Alado', icon: '🪽', unlockLevel: 1, kind: 'move',
    targeting: 'tile', range: 4, cooldown: 3, isMovement: true,
    desc: 'Voa até 4 casas, ignorando obstáculos, inimigos e alturas. Não provoca ataques de oportunidade. Não gasta a ação.',
  },
  {
    id: 'retomar_folego', pt: 'Retomar Fôlego', icon: '💗', unlockLevel: 1, kind: 'self',
    targeting: 'self', cooldown: 0, usesPerBattle: 1, freeAction: true,
    healDice: '1d10', healLevelBonus: true,
    desc: 'Recupera 1d10 + nível PV. 1× por batalha. Não gasta a ação.',
  },
  {
    id: 'golpe_arrebatador', pt: 'Golpe Arrebatador', icon: '🌪️', unlockLevel: 3, kind: 'aoe',
    targeting: 'self', radius: 1, cooldown: 2, weaponMult: 1,
    desc: 'Gira a lâmina: ataca TODOS os inimigos adjacentes com dano total.',
  },
  {
    id: 'investida', pt: 'Investida', icon: '🐏', unlockLevel: 5, kind: 'charge',
    targeting: 'enemy', range: 4, cooldown: 3, weaponMult: 1,
    bonusDice: '1d6', advantage: true,
    desc: 'Avança até 4 casas até um inimigo e ataca com vantagem e +1d6 de dano.',
  },
  {
    id: 'grito_intimidador', pt: 'Grito Intimidador', icon: '😤', unlockLevel: 6, kind: 'aoe',
    targeting: 'self', radius: 2, cooldown: 4, noDamage: true,
    riders: [{ condition: 'medo', dc: 13, save: 'wis', duration: 2, chance: 1 }],
    desc: 'Urro de guerra: inimigos a 2 casas devem salvar (SAB) ou ficam amedrontados.',
  },
  {
    id: 'golpe_gelido', pt: 'Golpe Gélido', icon: '❄️', unlockLevel: 7, kind: 'attack',
    targeting: 'enemy', range: 1, cooldown: 3, weaponMult: 1,
    bonusElemental: { dice: '2d8', element: 'gelo' },
    riders: [{ condition: 'congelado', dc: 13, save: 'con', duration: 1, chance: 0.35 }],
    desc: 'Canaliza as runas: ataque + 2d8 de gelo, 35% de congelar o alvo.',
  },
  {
    id: 'surto_acao', pt: 'Surto de Ação', icon: '⚡', unlockLevel: 10, kind: 'self',
    targeting: 'self', cooldown: 0, usesPerBattle: 1, freeAction: true,
    grantsExtraAction: true,
    desc: 'Explosão de vigor: ganha uma ação extra neste turno. 1× por batalha.',
  },
  {
    id: 'tornado_aco', pt: 'Tornado de Aço', icon: '🌀', unlockLevel: 13, kind: 'aoe',
    targeting: 'self', radius: 2, cooldown: 4, weaponMult: 0.75,
    desc: 'Redemoinho de lâmina: atinge todos os inimigos a até 2 casas (75% do dano).',
  },
  {
    id: 'lamina_tempestuosa', pt: 'Lâmina Tempestuosa', icon: '🌩️', unlockLevel: 17, kind: 'line',
    targeting: 'line', range: 4, cooldown: 4,
    dice: '4d6', dtype: 'gelo',
    riders: [{ condition: 'lento', dc: 14, save: 'con', duration: 2, chance: 1 }],
    desc: 'Onda de geada em linha reta: 4d6 de gelo e retarda os atingidos.',
  },
  {
    id: 'furia_norte', pt: 'Fúria do Norte', icon: '🔥', unlockLevel: 18, kind: 'self',
    targeting: 'self', cooldown: 0, usesPerBattle: 1, freeAction: true,
    selfConditions: [{ condition: 'fortalecido', duration: 3 }, { condition: 'abencoado', duration: 3 }],
    desc: 'Desperta a fúria gélida: +4 de dano e +1d4 de acerto por 3 turnos. 1× por batalha.',
  },
  {
    id: 'avatar_geada', pt: 'Avatar da Geada', icon: '🧊', unlockLevel: 20, kind: 'aoe',
    targeting: 'self', radius: 3, cooldown: 0, usesPerBattle: 1,
    dice: '8d8', dtype: 'gelo',
    riders: [{ condition: 'congelado', dc: 15, save: 'con', duration: 1, chance: 0.5 }],
    desc: 'Torna-se o inverno: 8d8 de gelo em raio 3, 50% de congelar cada inimigo. 1× por batalha.',
  },
];

// Passivas por nível (aplicadas em recomputeHero)
export const FROSTY_PASSIVES = [
  { level: 5, id: 'ataque_extra', pt: 'Ataque Extra', desc: 'Seu Ataque básico golpeia 2 vezes.' },
  { level: 9, id: 'indomavel', pt: 'Indomável', desc: 'Imune a medo; +2 em testes de resistência.' },
  { level: 10, id: 'runas_despertas', pt: 'Runas Despertas', desc: 'A Geada Eterna desperta: +1d6 de gelo nos ataques.' },
  { level: 11, id: 'postura_colosso', pt: 'Postura do Colosso', desc: 'Imune a acertos críticos.' },
  { level: 14, id: 'pele_inverno', pt: 'Pele de Inverno', desc: 'Resistência a gelo e fogo.' },
  { level: 15, id: 'asas_verdadeiras', pt: 'Asas Verdadeiras', desc: 'Salto Alado: alcance 6 e recarga 1.' },
  { level: 19, id: 'mestre_armas', pt: 'Mestra de Armas', desc: 'Crítico com 19 ou 20.' },
  { level: 22, id: 'vigor_glacial', pt: 'Vigor Glacial', desc: '+20 PV máximos; Retomar Fôlego cura em dobro.' },
  { level: 25, id: 'ataque_extra_2', pt: 'Ataque Extra II', desc: 'Seu Ataque básico golpeia 3 vezes.' },
  { level: 28, id: 'encarnacao_inverno', pt: 'Encarnação do Inverno', desc: 'Aura gélida: 1d6 de gelo em inimigos adjacentes a cada turno.' },
];

// Níveis com Aumento de Atributo (+2 para distribuir)
export const ASI_LEVELS = [4, 8, 12, 16, 21, 24, 27, 30];

export function abilitiesForLevel(level) {
  return FROSTY_ABILITIES.filter((a) => a.unlockLevel <= level);
}

export function passivesForLevel(level) {
  return FROSTY_PASSIVES.filter((p) => p.level <= level);
}
