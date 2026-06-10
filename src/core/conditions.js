// Condições de status estilo D&D. Cada condição é declarativa e
// interpretada pelo motor de combate (core/combat.js e game/battle.js).
// Campos pt/desc (português) e en/descEn (inglês) — exibição via i18n-data.

export const CONDITIONS = {
  queimando: {
    id: 'queimando', pt: 'Queimando', en: 'Burning', icon: '🔥', color: '#ff7a33',
    tickDamage: { dice: '1d6', type: 'fogo' },
    saveEnds: { ability: 'dex', dc: 12 },
    desc: 'Sofre 1d6 de fogo no início do turno. DES CD12 encerra.',
    descEn: 'Takes 1d6 fire damage at the start of its turn. DEX DC12 ends.',
  },
  envenenado: {
    id: 'envenenado', pt: 'Envenenado', en: 'Poisoned', icon: '☠️', color: '#52c41a',
    tickDamage: { dice: '1d4', type: 'veneno' },
    attackAdv: -1,
    desc: 'Sofre 1d4 de veneno por turno e ataca com desvantagem.',
    descEn: 'Takes 1d4 poison damage per turn and attacks with disadvantage.',
  },
  sangrando: {
    id: 'sangrando', pt: 'Sangrando', en: 'Bleeding', icon: '🩸', color: '#e03131',
    tickDamage: { dice: '1d4', type: 'cortante' },
    desc: 'Sofre 1d4 de dano cortante no início do turno.',
    descEn: 'Takes 1d4 slashing damage at the start of its turn.',
  },
  congelado: {
    id: 'congelado', pt: 'Congelado', en: 'Frozen', icon: '🧊', color: '#7ad8ff',
    preventsAction: true, preventsMove: true, advAgainst: 1,
    saveEnds: { ability: 'con', dc: 13 },
    desc: 'Não age nem se move; ataques contra têm vantagem. CON CD13 encerra.',
    descEn: 'Cannot act or move; attacks against it have advantage. CON DC13 ends.',
  },
  atordoado: {
    id: 'atordoado', pt: 'Atordoado', en: 'Stunned', icon: '💫', color: '#ffe14d',
    preventsAction: true, preventsMove: true, advAgainst: 1,
    desc: 'Perde o turno; ataques contra têm vantagem.',
    descEn: 'Loses its turn; attacks against it have advantage.',
  },
  lento: {
    id: 'lento', pt: 'Lento', en: 'Slowed', icon: '🐌', color: '#9aa0a6',
    speedMult: 0.5,
    desc: 'Velocidade reduzida pela metade.',
    descEn: 'Speed is halved.',
  },
  medo: {
    id: 'medo', pt: 'Amedrontado', en: 'Frightened', icon: '😱', color: '#9a5aff',
    attackAdv: -1,
    saveEnds: { ability: 'wis', dc: 12 },
    desc: 'Ataca com desvantagem. SAB CD12 encerra.',
    descEn: 'Attacks with disadvantage. WIS DC12 ends.',
  },
  cego: {
    id: 'cego', pt: 'Cego', en: 'Blinded', icon: '🙈', color: '#666666',
    attackAdv: -1, advAgainst: 1,
    desc: 'Ataca com desvantagem; ataques contra têm vantagem.',
    descEn: 'Attacks with disadvantage; attacks against it have advantage.',
  },
  enraizado: {
    id: 'enraizado', pt: 'Enraizado', en: 'Rooted', icon: '🌿', color: '#2f9e44',
    preventsMove: true,
    saveEnds: { ability: 'str', dc: 13 },
    desc: 'Não pode se mover. FOR CD13 encerra.',
    descEn: 'Cannot move. STR DC13 ends.',
  },
  marcado: {
    id: 'marcado', pt: 'Marcado', en: 'Marked', icon: '🎯', color: '#ff66cc',
    advAgainst: 1,
    desc: 'Ataques contra esta criatura têm vantagem.',
    descEn: 'Attacks against this creature have advantage.',
  },
  abencoado: {
    id: 'abencoado', pt: 'Abençoado', en: 'Blessed', icon: '✨', color: '#fff3b0',
    attackBonusDice: '1d4',
    desc: '+1d4 nas jogadas de ataque.',
    descEn: '+1d4 to attack rolls.',
  },
  amaldicoado: {
    id: 'amaldicoado', pt: 'Amaldiçoado', en: 'Cursed', icon: '🕯️', color: '#9a5aff',
    attackBonusDice: '-1d4',
    desc: '-1d4 nas jogadas de ataque.',
    descEn: '-1d4 to attack rolls.',
  },
  fortalecido: {
    id: 'fortalecido', pt: 'Fortalecido', en: 'Empowered', icon: '💪', color: '#ffa94d',
    damageBonus: 4,
    desc: '+4 de dano em todos os ataques.',
    descEn: '+4 damage on all attacks.',
  },
  protegido: {
    id: 'protegido', pt: 'Protegido', en: 'Protected', icon: '🛡️', color: '#74c0fc',
    acBonus: 2,
    desc: '+2 de CA.',
    descEn: '+2 AC.',
  },
  regenerando: {
    id: 'regenerando', pt: 'Regenerando', en: 'Regenerating', icon: '💚', color: '#69db7c',
    tickHeal: '1d6',
    desc: 'Recupera 1d6 PV no início do turno.',
    descEn: 'Recovers 1d6 HP at the start of its turn.',
  },
  paralisado: {
    id: 'paralisado', pt: 'Paralisado', en: 'Paralyzed', icon: '⚡', color: '#ffe14d',
    preventsAction: true, preventsMove: true, advAgainst: 1,
    saveEnds: { ability: 'con', dc: 12 },
    desc: 'Não age nem se move. CON CD12 encerra.',
    descEn: 'Cannot act or move. CON DC12 ends.',
  },
};

export function conditionDef(id) {
  const def = CONDITIONS[id];
  if (!def) throw new Error(`Condição desconhecida: ${id}`);
  return def;
}
