// Condições de status estilo D&D. Cada condição é declarativa e
// interpretada pelo motor de combate (core/combat.js e game/battle.js).

export const CONDITIONS = {
  queimando: {
    id: 'queimando', pt: 'Queimando', icon: '🔥', color: '#ff7a33',
    tickDamage: { dice: '1d6', type: 'fogo' },
    saveEnds: { ability: 'dex', dc: 12 },
    desc: 'Sofre 1d6 de fogo no início do turno. DES CD12 encerra.',
  },
  envenenado: {
    id: 'envenenado', pt: 'Envenenado', icon: '☠️', color: '#52c41a',
    tickDamage: { dice: '1d4', type: 'veneno' },
    attackAdv: -1,
    desc: 'Sofre 1d4 de veneno por turno e ataca com desvantagem.',
  },
  sangrando: {
    id: 'sangrando', pt: 'Sangrando', icon: '🩸', color: '#e03131',
    tickDamage: { dice: '1d4', type: 'cortante' },
    desc: 'Sofre 1d4 de dano cortante no início do turno.',
  },
  congelado: {
    id: 'congelado', pt: 'Congelado', icon: '🧊', color: '#7ad8ff',
    preventsAction: true, preventsMove: true, advAgainst: 1,
    saveEnds: { ability: 'con', dc: 13 },
    desc: 'Não age nem se move; ataques contra têm vantagem. CON CD13 encerra.',
  },
  atordoado: {
    id: 'atordoado', pt: 'Atordoado', icon: '💫', color: '#ffe14d',
    preventsAction: true, preventsMove: true, advAgainst: 1,
    desc: 'Perde o turno; ataques contra têm vantagem.',
  },
  lento: {
    id: 'lento', pt: 'Lento', icon: '🐌', color: '#9aa0a6',
    speedMult: 0.5,
    desc: 'Velocidade reduzida pela metade.',
  },
  medo: {
    id: 'medo', pt: 'Amedrontado', icon: '😱', color: '#9a5aff',
    attackAdv: -1,
    saveEnds: { ability: 'wis', dc: 12 },
    desc: 'Ataca com desvantagem. SAB CD12 encerra.',
  },
  cego: {
    id: 'cego', pt: 'Cego', icon: '🙈', color: '#666666',
    attackAdv: -1, advAgainst: 1,
    desc: 'Ataca com desvantagem; ataques contra têm vantagem.',
  },
  enraizado: {
    id: 'enraizado', pt: 'Enraizado', icon: '🌿', color: '#2f9e44',
    preventsMove: true,
    saveEnds: { ability: 'str', dc: 13 },
    desc: 'Não pode se mover. FOR CD13 encerra.',
  },
  marcado: {
    id: 'marcado', pt: 'Marcado', icon: '🎯', color: '#ff66cc',
    advAgainst: 1,
    desc: 'Ataques contra esta criatura têm vantagem.',
  },
  abencoado: {
    id: 'abencoado', pt: 'Abençoado', icon: '✨', color: '#fff3b0',
    attackBonusDice: '1d4',
    desc: '+1d4 nas jogadas de ataque.',
  },
  amaldicoado: {
    id: 'amaldicoado', pt: 'Amaldiçoado', icon: '🕯️', color: '#9a5aff',
    attackBonusDice: '-1d4',
    desc: '-1d4 nas jogadas de ataque.',
  },
  fortalecido: {
    id: 'fortalecido', pt: 'Fortalecido', icon: '💪', color: '#ffa94d',
    damageBonus: 4,
    desc: '+4 de dano em todos os ataques.',
  },
  protegido: {
    id: 'protegido', pt: 'Protegido', icon: '🛡️', color: '#74c0fc',
    acBonus: 2,
    desc: '+2 de CA.',
  },
  regenerando: {
    id: 'regenerando', pt: 'Regenerando', icon: '💚', color: '#69db7c',
    tickHeal: '1d6',
    desc: 'Recupera 1d6 PV no início do turno.',
  },
  paralisado: {
    id: 'paralisado', pt: 'Paralisado', icon: '⚡', color: '#ffe14d',
    preventsAction: true, preventsMove: true, advAgainst: 1,
    saveEnds: { ability: 'con', dc: 12 },
    desc: 'Não age nem se move. CON CD12 encerra.',
  },
};

export function conditionDef(id) {
  const def = CONDITIONS[id];
  if (!def) throw new Error(`Condição desconhecida: ${id}`);
  return def;
}
