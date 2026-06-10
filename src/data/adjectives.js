// 200+ adjetivos com efeitos mecânicos reais.
// Cada adjetivo: { id, m, f, tier, weight, effects[], visual, desc }
// A forma feminina é derivada automaticamente (o→a, or→ora, eu→eia, ão→ã)
// e pode ser sobrescrita passando `f` explicitamente.

function femForm(m) {
  if (m.endsWith('ão')) return m.slice(0, -2) + 'ã';
  if (m.endsWith('eu')) return m.slice(0, -2) + 'eia';
  if (m.endsWith('o')) return m.slice(0, -1) + 'a';
  if (m.endsWith('or')) return m + 'a';
  return m;
}

const TIER_WEIGHT = { 1: 10, 2: 5, 3: 2 };
const TIER_XP = { 1: 1.18, 2: 1.45, 3: 1.85 };

function A(id, m, tier, effects, desc, visual = null, f = null) {
  return {
    id, m, f: f ?? femForm(m), tier,
    weight: TIER_WEIGHT[tier],
    effects: [...effects, { type: 'stat', xpMult: TIER_XP[tier] }],
    visual, desc,
  };
}

// ---- helpers de efeito ----
const st = (o) => ({ type: 'stat', ...o });
const xd = (element, dice, chance) => ({ type: 'extraDamage', element, dice, ...(chance != null ? { chance } : {}) });
const rider = (condition, chance, dc = 12, save = 'con', duration = 2) =>
  ({ type: 'riderCondition', condition, chance, dc, save, duration });
const aura = (element, dice, radius = 1) => ({ type: 'auraDamage', element, dice, radius });
const res = (...types) => ({ type: 'resistance', types });
const imm = (...types) => ({ type: 'immunity', types });
const vul = (...types) => ({ type: 'vulnerability', types });
const cimm = (...conditions) => ({ type: 'conditionImmunity', conditions });
const beh = (kind) => ({ type: 'behavior', kind });

// ---- visuais ----
const vFire = { emissive: '#ff5522', particle: 'fire' };
const vIce = { emissive: '#66ccff', particle: 'ice' };
const vSpark = { emissive: '#ffee44', particle: 'spark' };
const vAcid = { emissive: '#88ff44', particle: 'acid' };
const vPoison = { emissive: '#44cc22', particle: 'poison' };
const vShadow = { emissive: '#7744cc', particle: 'shadow' };
const vHoly = { emissive: '#ffeeaa', particle: 'holy' };
const vPsy = { emissive: '#ff66cc', particle: 'psychic' };
const vThunder = { emissive: '#aaccff', particle: 'spark' };

export const ADJECTIVES = [
  // ============ DANO ELEMENTAL EXTRA (fogo) ============
  A('fumegante', 'Fumegante', 1, [xd('fogo', '1d4')], '+1d4 de dano de fogo nos ataques', vFire),
  A('flamejante', 'Flamejante', 1, [xd('fogo', '1d6')], '+1d6 de dano de fogo nos ataques', vFire),
  A('ardente', 'Ardente', 2, [xd('fogo', '1d8'), rider('queimando', 0.25, 12, 'dex')], '+1d8 de fogo e pode incendiar', vFire),
  A('incandescente', 'Incandescente', 2, [xd('fogo', '2d6')], '+2d6 de dano de fogo nos ataques', vFire),
  A('infernal', 'Infernal', 3, [xd('fogo', '3d6'), rider('queimando', 0.35, 14, 'dex')], '+3d6 de fogo e incendeia com frequência', vFire),
  // ============ gelo ============
  A('nevado', 'Nevado', 1, [xd('gelo', '1d4')], '+1d4 de dano de gelo nos ataques', vIce),
  A('gelido', 'Gélido', 1, [xd('gelo', '1d6')], '+1d6 de dano de gelo nos ataques', vIce, 'Gélida'),
  A('congelante', 'Congelante', 2, [xd('gelo', '1d8'), rider('lento', 0.3, 12, 'con')], '+1d8 de gelo e pode retardar', vIce),
  A('glacial', 'Glacial', 2, [xd('gelo', '2d6')], '+2d6 de dano de gelo nos ataques', vIce),
  A('polar', 'Polar', 3, [xd('gelo', '3d6'), rider('congelado', 0.2, 14, 'con')], '+3d6 de gelo e pode congelar sólido', vIce),
  // ============ elétrico ============
  A('estatico', 'Estático', 1, [xd('eletrico', '1d4')], '+1d4 de dano elétrico nos ataques', vSpark, 'Estática'),
  A('eletrico_adj', 'Elétrico', 1, [xd('eletrico', '1d6')], '+1d6 de dano elétrico nos ataques', vSpark, 'Elétrica'),
  A('eletrizante', 'Eletrizante', 2, [xd('eletrico', '1d8'), rider('paralisado', 0.2, 12, 'con')], '+1d8 elétrico e pode paralisar', vSpark),
  A('voltaico', 'Voltaico', 2, [xd('eletrico', '2d6')], '+2d6 de dano elétrico nos ataques', vSpark),
  A('fulminante', 'Fulminante', 3, [xd('eletrico', '3d6'), rider('atordoado', 0.2, 14, 'con')], '+3d6 elétrico e pode atordoar', vSpark),
  // ============ ácido ============
  A('corrosivo', 'Corrosivo', 1, [xd('acido', '1d6')], '+1d6 de dano ácido nos ataques', vAcid),
  A('caustico', 'Cáustico', 2, [xd('acido', '1d8')], '+1d8 de dano ácido nos ataques', vAcid, 'Cáustica'),
  A('vitriolico', 'Vitriólico', 2, [xd('acido', '2d6')], '+2d6 de dano ácido nos ataques', vAcid, 'Vitriólica'),
  A('dissolvente', 'Dissolvente', 3, [xd('acido', '3d6'), rider('marcado', 0.3, 13, 'con')], '+3d6 ácido e corrói defesas', vAcid),
  // ============ veneno ============
  A('peconhento', 'Peçonhento', 1, [xd('veneno', '1d6')], '+1d6 de dano de veneno nos ataques', vPoison),
  A('venenoso', 'Venenoso', 1, [xd('veneno', '1d4'), rider('envenenado', 0.3, 11, 'con')], 'Veneno fraco que pode envenenar', vPoison),
  A('toxico', 'Tóxico', 2, [xd('veneno', '1d8'), rider('envenenado', 0.25, 13, 'con')], '+1d8 de veneno e pode envenenar', vPoison, 'Tóxica'),
  A('virulento', 'Virulento', 2, [xd('veneno', '2d6'), rider('envenenado', 0.35, 14, 'con', 3)], 'Veneno potente e persistente', vPoison),
  A('pestifero', 'Pestífero', 3, [xd('veneno', '3d6')], '+3d6 de dano de veneno nos ataques', vPoison, 'Pestífera'),
  // ============ necrótico ============
  A('sombrio', 'Sombrio', 1, [xd('necrotico', '1d6')], '+1d6 de dano necrótico nos ataques', vShadow),
  A('necrotico_adj', 'Necrótico', 2, [xd('necrotico', '1d8')], '+1d8 de dano necrótico nos ataques', vShadow, 'Necrótica'),
  A('profano', 'Profano', 2, [xd('necrotico', '2d6'), rider('amaldicoado', 0.2, 13, 'wis')], '+2d6 necrótico e pode amaldiçoar', vShadow),
  A('abissal', 'Abissal', 3, [xd('necrotico', '3d6')], '+3d6 de dano necrótico nos ataques', vShadow),
  // ============ radiante ============
  A('luminoso', 'Luminoso', 1, [xd('radiante', '1d4')], '+1d4 de dano radiante nos ataques', vHoly),
  A('radiante_adj', 'Radiante', 1, [xd('radiante', '1d6')], '+1d6 de dano radiante nos ataques', vHoly),
  A('sagrado', 'Sagrado', 2, [xd('radiante', '2d6')], '+2d6 de dano radiante nos ataques', vHoly),
  A('celestial', 'Celestial', 3, [xd('radiante', '3d6'), rider('cego', 0.15, 13, 'con')], '+3d6 radiante e pode cegar', vHoly),
  // ============ psíquico ============
  A('psiquico_adj', 'Psíquico', 1, [xd('psiquico', '1d6')], '+1d6 de dano psíquico nos ataques', vPsy, 'Psíquica'),
  A('mental', 'Mental', 2, [xd('psiquico', '1d8'), rider('medo', 0.2, 12, 'wis')], '+1d8 psíquico e pode amedrontar', vPsy),
  A('hipnotico', 'Hipnótico', 2, [xd('psiquico', '2d6'), rider('atordoado', 0.15, 13, 'wis')], '+2d6 psíquico e pode hipnotizar', vPsy, 'Hipnótica'),
  A('enlouquecedor', 'Enlouquecedor', 3, [xd('psiquico', '3d6'), rider('medo', 0.3, 14, 'wis')], '+3d6 psíquico e enlouquece', vPsy),
  // ============ trovão ============
  A('trovejante', 'Trovejante', 1, [xd('trovao', '1d6')], '+1d6 de dano de trovão nos ataques', vThunder),
  A('estrondoso', 'Estrondoso', 2, [xd('trovao', '2d6')], '+2d6 de dano de trovão nos ataques', vThunder),
  A('ensurdecedor', 'Ensurdecedor', 3, [xd('trovao', '3d6'), rider('atordoado', 0.15, 13, 'con')], '+3d6 de trovão e pode atordoar', vThunder),

  // ============ CONVERSÃO ELEMENTAL ============
  A('igneo', 'Ígneo', 2, [{ type: 'elementConvert', element: 'fogo' }, res('fogo')], 'Todos os ataques causam dano de fogo; resiste a fogo', vFire, 'Ígnea'),
  A('boreal', 'Boreal', 2, [{ type: 'elementConvert', element: 'gelo' }, res('gelo')], 'Todos os ataques causam dano de gelo; resiste a gelo', vIce),
  A('galvanico', 'Galvânico', 2, [{ type: 'elementConvert', element: 'eletrico' }, res('eletrico')], 'Ataques elétricos; resiste a eletricidade', vSpark, 'Galvânica'),
  A('putrefato', 'Putrefato', 2, [{ type: 'elementConvert', element: 'veneno' }, res('veneno')], 'Ataques venenosos; resiste a veneno', vPoison),
  A('espectral', 'Espectral', 3, [{ type: 'elementConvert', element: 'necrotico' }, res('necrotico', 'cortante')], 'Ataques necróticos; corpo semi-etéreo', vShadow),
  A('aureo', 'Áureo', 2, [{ type: 'elementConvert', element: 'radiante' }, res('radiante')], 'Ataques radiantes; resiste a luz', vHoly, 'Áurea'),
  A('ressonante', 'Ressonante', 2, [{ type: 'elementConvert', element: 'trovao' }], 'Todos os ataques causam dano de trovão', vThunder),
  A('alucinante', 'Alucinante', 3, [{ type: 'elementConvert', element: 'psiquico' }, res('psiquico')], 'Ataques psíquicos; mente alienígena', vPsy),

  // ============ AURAS ============
  A('fervente', 'Fervente', 2, [aura('fogo', '1d4')], 'Aura de calor: queima inimigos adjacentes a cada turno', vFire),
  A('abrasador', 'Abrasador', 3, [aura('fogo', '1d6', 2)], 'Aura ígnea ampla: queima inimigos a 2 casas', vFire),
  A('hibernal', 'Hibernal', 2, [{ type: 'auraSlow', radius: 2 }], 'Aura de frio que retarda inimigos próximos', vIce),
  A('pestilento', 'Pestilento', 2, [aura('veneno', '1d4')], 'Aura pútrida: envenena inimigos adjacentes', vPoison),
  A('eletrificado', 'Eletrificado', 2, [aura('eletrico', '1d4')], 'Aura elétrica: choca inimigos adjacentes', vSpark),
  A('necrosante', 'Necrosante', 2, [aura('necrotico', '1d4')], 'Aura mórbida: drena vida de inimigos próximos', vShadow),
  A('opressor', 'Opressor', 2, [aura('psiquico', '1d4')], 'Aura opressiva: fere mentes próximas', vPsy),

  // ============ TAMANHO / CORPO ============
  A('minusculo', 'Minúsculo', 1, [st({ hpMult: 0.4, xpMult: 0.7 }), { type: 'dodge', chance: 0.2 }], 'Muito pequeno: frágil mas dificílimo de acertar', { scale: 0.5 }),
  A('pequeno', 'Pequeno', 1, [st({ hpMult: 0.65, xpMult: 0.85 }), { type: 'dodge', chance: 0.1 }], 'Pequeno: menos vida, esquiva às vezes', { scale: 0.72 }),
  A('magro', 'Magro', 1, [st({ hpMult: 0.85, speedFlat: 1 })], 'Esguio: menos vida, mais rápido', { scale: 0.9 }),
  A('gordo', 'Gordo', 1, [st({ hpMult: 1.35, speedFlat: -1 })], 'Corpulento: mais vida, mais lento', { scale: 1.15 }),
  A('robusto', 'Robusto', 1, [st({ hpFlat: 12 })], 'Constituição sólida: +12 PV', { scale: 1.08 }),
  A('atarracado', 'Atarracado', 1, [st({ hpMult: 1.2, speedFlat: -1, acFlat: 1 })], 'Baixo e denso: mais vida e defesa', { scale: 0.92 }),
  A('enorme', 'Enorme', 2, [st({ hpMult: 1.5, dmgFlat: 1 })], 'Avantajado: +50% vida e dano extra', { scale: 1.3 }),
  A('gigante', 'Gigante', 2, [st({ hpMult: 1.85, dmgFlat: 2, speedFlat: -1 })], 'Gigantesco: muito mais vida e dano', { scale: 1.5 }),
  A('colossal', 'Colossal', 3, [st({ hpMult: 2.6, dmgFlat: 4, speedFlat: -1 }), { type: 'sturdy' }], 'Colosso: vida imensa, imune a críticos', { scale: 1.75 }),
  A('titanico', 'Titânico', 3, [st({ hpMult: 3.2, dmgFlat: 5 }), { type: 'sturdy' }], 'Titã: monstruosamente resistente', { scale: 1.95 }, 'Titânica'),

  // ============ ATRIBUTOS ============
  A('forte', 'Forte', 1, [st({ strFlat: 4 })], '+4 de Força', null),
  A('fraco', 'Fraco', 1, [st({ strFlat: -4, xpMult: 0.8 })], '-4 de Força', null),
  A('agil', 'Ágil', 1, [st({ dexFlat: 4, speedFlat: 1 })], '+4 de Destreza e +1 de movimento', null),
  A('desajeitado', 'Desajeitado', 1, [st({ dexFlat: -4, xpMult: 0.85 }), { type: 'accuracy', value: -1 }], '-4 de Destreza e mira ruim', null),
  A('vigoroso', 'Vigoroso', 1, [st({ conFlat: 4, hpFlat: 6 })], '+4 de Constituição e PV extra', null),
  A('doentio', 'Doentio', 1, [st({ conFlat: -4, hpMult: 0.85, xpMult: 0.8 })], 'Constituição debilitada', null),
  A('astuto', 'Astuto', 1, [st({ intFlat: 4 }), { type: 'accuracy', value: 1 }], '+4 de Inteligência e mira afiada', null),
  A('tolo', 'Tolo', 1, [st({ intFlat: -4, xpMult: 0.9 })], '-4 de Inteligência', null),
  A('sabio', 'Sábio', 1, [st({ wisFlat: 4 }), { type: 'saveBonus', value: 2 }], '+4 de Sabedoria e resistências firmes', null, 'Sábia'),
  A('insensato', 'Insensato', 1, [st({ wisFlat: -4, xpMult: 0.9 })], '-4 de Sabedoria', null),
  A('carismatico', 'Carismático', 1, [st({ chaFlat: 4 }), { type: 'saveBonus', value: 1 }], 'Presença magnética', null, 'Carismática'),
  A('apavorante', 'Apavorante', 2, [st({ chaFlat: 2 }), rider('medo', 0.2, 12, 'wis')], 'Sua presença aterroriza ao golpear', vShadow),

  // ============ COMBATE ============
  A('brutal', 'Brutal', 1, [st({ dmgFlat: 3 })], '+3 de dano em todos os ataques', null),
  A('feroz', 'Feroz', 1, [st({ dmgFlat: 2, acFlat: -1 })], '+2 de dano, defesa descuidada', null),
  A('selvagem', 'Selvagem', 1, [st({ dmgMult: 1.25 }), { type: 'accuracy', value: -1 }], '+25% de dano, menos precisão', null),
  A('violento', 'Violento', 1, [st({ dmgFlat: 2 })], '+2 de dano em todos os ataques', null),
  A('atroz', 'Atroz', 2, [st({ dmgFlat: 4 })], '+4 de dano em todos os ataques', null),
  A('devastador', 'Devastador', 3, [st({ dmgMult: 1.5 })], '+50% de dano em todos os ataques', null),
  A('blindado', 'Blindado', 2, [st({ acFlat: 3, speedFlat: -1 })], '+3 de CA, movimento reduzido', null),
  A('couracado', 'Couraçado', 1, [st({ acFlat: 2 })], '+2 de CA', null),
  A('reforcado', 'Reforçado', 1, [st({ acFlat: 1, hpMult: 1.1 })], '+1 CA e +10% vida', null),
  A('desprotegido', 'Desprotegido', 1, [st({ acFlat: -3, xpMult: 0.75 })], '-3 de CA', null),
  A('veloz', 'Veloz', 1, [st({ speedFlat: 2 })], '+2 de movimento', null),
  A('rapido', 'Rápido', 1, [st({ speedFlat: 1 }), { type: 'initiativeBonus', value: 2 }], '+1 movimento, age mais cedo', null, 'Rápida'),
  A('lerdo', 'Lerdo', 1, [st({ speedFlat: -2, xpMult: 0.85 })], '-2 de movimento', null),
  A('vagaroso', 'Vagaroso', 1, [st({ speedFlat: -1, xpMult: 0.92 })], '-1 de movimento', null),
  A('incansavel', 'Incansável', 2, [{ type: 'multiattack', extra: 1 }, { type: 'accuracy', value: -1 }], 'Ataca duas vezes por turno', null),
  A('frenetico', 'Frenético', 2, [{ type: 'multiattack', extra: 1 }, { type: 'accuracy', value: -2 }, st({ dmgFlat: -1 })], 'Dois ataques desesperados', null, 'Frenética'),
  A('hiperativo', 'Hiperativo', 2, [st({ speedFlat: 2 }), { type: 'initiativeBonus', value: 4 }], 'Movimento e iniciativa superiores', null),
  A('preciso', 'Preciso', 1, [{ type: 'accuracy', value: 2 }], '+2 nas jogadas de ataque', null),
  A('certeiro', 'Certeiro', 2, [{ type: 'accuracy', value: 3 }], '+3 nas jogadas de ataque', null),
  A('letal', 'Letal', 2, [{ type: 'critRange', min: 19 }], 'Crítico com 19 ou 20', null),
  A('mortifero', 'Mortífero', 3, [{ type: 'critRange', min: 18 }, st({ dmgFlat: 2 })], 'Crítico com 18-20 e +2 dano', null, 'Mortífera'),
  A('impiedoso', 'Impiedoso', 1, [{ type: 'executioner', threshold: 0.5, dmgBonus: 4 }], '+4 de dano contra alvos feridos', null),
  A('cruel', 'Cruel', 2, [{ type: 'executioner', threshold: 0.3, dmgBonus: 6 }], '+6 de dano contra alvos quase mortos', null),
  A('nobre', 'Nobre', 1, [{ type: 'firstBlood', dmgBonus: 4 }], '+4 de dano contra alvos ilesos', null),
  A('cacador', 'Caçador', 1, [{ type: 'firstBlood', dmgBonus: 3 }, st({ speedFlat: 1 })], 'Ataque de abertura devastador', null, 'Caçadora'),
  A('vigilante', 'Vigilante', 1, [{ type: 'initiativeBonus', value: 5 }], 'Sempre age primeiro (+5 iniciativa)', null),
  A('sonolento', 'Sonolento', 1, [{ type: 'initiativeBonus', value: -5 }, st({ xpMult: 0.9 })], 'Demora a reagir', null),
  A('alerta', 'Alerta', 1, [{ type: 'initiativeBonus', value: 3 }, st({ acFlat: 1 })], 'Reflexos afiados', null),
  A('perspicaz', 'Perspicaz', 1, [{ type: 'accuracy', value: 1 }, { type: 'initiativeBonus', value: 2 }], 'Atento a aberturas', null),

  // ============ RESISTÊNCIAS ============
  A('petreo', 'Pétreo', 2, [res('cortante', 'perfurante'), st({ acFlat: 1, speedFlat: -1 })], 'Pele de pedra: resiste a cortes e perfurações', { tint: '#9a9a9a' }, 'Pétrea'),
  A('escamoso', 'Escamoso', 1, [res('cortante')], 'Escamas duras: resiste a dano cortante', null),
  A('cascudo', 'Cascudo', 1, [res('perfurante')], 'Casco rígido: resiste a perfurações', null),
  A('almofadado', 'Almofadado', 1, [res('concussao')], 'Corpo macio: resiste a concussão', null),
  A('refratario', 'Refratário', 1, [res('fogo')], 'Resiste a dano de fogo', vFire, 'Refratária'),
  A('criofilo', 'Criófilo', 1, [res('gelo')], 'Resiste a dano de gelo', vIce, 'Criófila'),
  A('isolante', 'Isolante', 1, [res('eletrico')], 'Resiste a dano elétrico', null),
  A('inoxidavel', 'Inoxidável', 1, [res('acido')], 'Resiste a dano ácido', null),
  A('imunizado', 'Imunizado', 1, [res('veneno')], 'Resiste a veneno', null),
  A('tumular', 'Tumular', 1, [res('necrotico')], 'Resiste a energia necrótica', vShadow),
  A('consagrado', 'Consagrado', 1, [res('radiante')], 'Resiste a dano radiante', vHoly),
  A('obstinado', 'Obstinado', 1, [res('psiquico'), { type: 'saveBonus', value: 1 }], 'Mente fechada: resiste a dano psíquico', null),
  A('abafado', 'Abafado', 1, [res('trovao')], 'Resiste a dano de trovão', null),
  A('incombustivel', 'Incombustível', 2, [imm('fogo'), cimm('queimando')], 'Imune a fogo e a queimaduras', vFire),
  A('aterrado', 'Aterrado', 2, [imm('eletrico'), cimm('paralisado')], 'Imune a eletricidade', vSpark),
  A('antitoxico', 'Antitóxico', 2, [imm('veneno'), cimm('envenenado')], 'Imune a veneno', vPoison, 'Antitóxica'),
  A('inerte', 'Inerte', 2, [imm('psiquico'), st({ intFlat: -2 })], 'Mente vazia: imune a dano psíquico', null),
  A('santificado', 'Santificado', 2, [res('radiante', 'necrotico')], 'Protegido contra luz e trevas', vHoly),

  // ============ ESPINHOS / REFLEXÃO ============
  A('espinhoso', 'Espinhoso', 1, [{ type: 'thorns', dice: '1d4', element: 'perfurante' }], 'Reflete 1d4 de dano a atacantes corpo a corpo', null),
  A('urticante', 'Urticante', 1, [{ type: 'thorns', dice: '1d6', element: 'veneno' }], 'Pelos urticantes: reflete veneno', vPoison),
  A('farpado', 'Farpado', 2, [{ type: 'thorns', dice: '2d4', element: 'perfurante' }], 'Farpas longas: reflete 2d4 de dano', null),
  A('crepitante', 'Crepitante', 2, [{ type: 'thorns', dice: '1d6', element: 'fogo' }], 'Corpo em brasas: queima quem o toca', vFire),
  A('galvanizado', 'Galvanizado', 2, [{ type: 'thorns', dice: '1d6', element: 'eletrico' }], 'Carcaça eletrificada: choca atacantes', vSpark),

  // ============ REGENERAÇÃO / DRENO ============
  A('regenerador', 'Regenerador', 2, [{ type: 'regen', dice: '1d6' }], 'Regenera 1d6 PV por turno', null),
  A('revigorante', 'Revigorante', 1, [{ type: 'regen', dice: '1d4' }], 'Regenera 1d4 PV por turno', null),
  A('trolesco', 'Trolesco', 3, [{ type: 'regen', dice: '2d6' }, vul('fogo')], 'Regeneração trollesca, mas teme fogo', null),
  A('vampirico', 'Vampírico', 2, [{ type: 'lifesteal', fraction: 0.5 }], 'Drena 50% do dano causado como vida', vShadow, 'Vampírica'),
  A('sanguessuga', 'Sanguessuga', 1, [{ type: 'lifesteal', fraction: 0.25 }], 'Drena 25% do dano causado', null),

  // ============ ESQUIVA / DEFESAS ESPECIAIS ============
  A('esquivo', 'Esquivo', 2, [{ type: 'evasive' }], 'Ataques contra ele têm desvantagem', null),
  A('ilusorio', 'Ilusório', 2, [{ type: 'dodge', chance: 0.25 }], '25% de chance de esquivar de qualquer golpe', vPsy, 'Ilusória'),
  A('espelhado', 'Espelhado', 2, [{ type: 'dodge', chance: 0.2 }], '20% de chance de esquivar', null),
  A('enevoado', 'Enevoado', 1, [{ type: 'dodge', chance: 0.15 }], '15% de chance de esquivar', vShadow),
  A('inabalavel', 'Inabalável', 2, [{ type: 'sturdy' }, { type: 'saveBonus', value: 2 }], 'Imune a críticos e firme contra efeitos', null),
  A('parrudo', 'Parrudo', 1, [{ type: 'sturdy' }, st({ hpMult: 1.1 })], 'Corpo denso: imune a críticos', null),

  // ============ VULNERABILIDADES (mais fáceis, menos XP) ============
  A('inflamavel', 'Inflamável', 1, [vul('fogo'), st({ xpMult: 0.85 })], 'Vulnerável a fogo', vFire),
  A('friorento', 'Friorento', 1, [vul('gelo'), st({ xpMult: 0.85 })], 'Vulnerável a gelo', vIce),
  A('condutor', 'Condutor', 1, [vul('eletrico'), st({ xpMult: 0.85 })], 'Vulnerável a eletricidade', vSpark),
  A('soluvel', 'Solúvel', 1, [vul('acido'), st({ xpMult: 0.85 })], 'Vulnerável a ácido', vAcid),
  A('alergico', 'Alérgico', 1, [vul('veneno'), st({ xpMult: 0.85 })], 'Vulnerável a veneno', vPoison, 'Alérgica'),
  A('supersticioso', 'Supersticioso', 1, [vul('psiquico'), st({ xpMult: 0.85 })], 'Mente sugestionável: vulnerável a dano psíquico', vPsy),
  A('herege', 'Herege', 1, [vul('radiante'), st({ xpMult: 0.85 })], 'Vulnerável a dano radiante', vHoly),
  A('quebradico', 'Quebradiço', 1, [vul('concussao'), st({ hpMult: 0.9, xpMult: 0.75 })], 'Estrutura frágil: vulnerável a concussão', null),

  // ============ COMPORTAMENTO ============
  A('covarde', 'Covarde', 1, [beh('covarde'), st({ xpMult: 0.9 })], 'Foge quando gravemente ferido', null),
  A('timido', 'Tímido', 1, [beh('covarde'), { type: 'accuracy', value: -1 }, st({ xpMult: 0.85 })], 'Hesitante em combate', null, 'Tímida'),
  A('furioso', 'Furioso', 1, [{ type: 'rageBelow', threshold: 0.5, dmgBonus: 3, acPenalty: 2 }], 'Entra em fúria com metade da vida', null),
  A('berserker', 'Berserker', 2, [{ type: 'rageBelow', threshold: 0.4, dmgBonus: 5, acPenalty: 3 }], 'Fúria devastadora quando ferido', null),
  A('enfurecido', 'Enfurecido', 1, [st({ dmgFlat: 2 }), { type: 'rageBelow', threshold: 0.6, dmgBonus: 2, acPenalty: 1 }], 'Sempre irritado, pior ainda ferido', null),
  A('guardiao', 'Guardião', 1, [beh('guardiao'), st({ acFlat: 1 })], 'Protege seus aliados', null, 'Guardiã'),
  A('protetor', 'Protetor', 1, [beh('guardiao'), st({ hpMult: 1.1 })], 'Defende o grupo com o corpo', null),
  A('gregario', 'Gregário', 1, [{ type: 'packTactics' }], 'Vantagem se um aliado cerca o mesmo alvo', null, 'Gregária'),
  A('matilheiro', 'Matilheiro', 2, [{ type: 'packTactics' }, st({ dmgFlat: 1 })], 'Caça em bando com precisão mortal', null),
  A('solitario', 'Solitário', 1, [{ type: 'loneWolf', dmgBonus: 4 }], '+4 de dano quando sem aliados próximos', null, 'Solitária'),
  A('territorial', 'Territorial', 1, [beh('agressivo'), st({ acFlat: 1 })], 'Ataca invasores com afinco', null),
  A('preguicoso', 'Preguiçoso', 1, [beh('preguicoso'), st({ xpMult: 0.8 })], 'Às vezes nem se dá ao trabalho de agir', null),
  A('atirador', 'Atirador', 1, [beh('atirador'), { type: 'accuracy', value: 1 }], 'Mantém distância e mira com calma', null),
  A('emboscador', 'Emboscador', 2, [{ type: 'firstBlood', dmgBonus: 5 }, { type: 'initiativeBonus', value: 3 }], 'Primeiro golpe devastador', null),
  A('sadico', 'Sádico', 1, [{ type: 'executioner', threshold: 0.4, dmgBonus: 3 }], 'Deleita-se em ferir os já feridos', null, 'Sádica'),

  // ============ AO MORRER ============
  A('explosivo', 'Explosivo', 2, [{ type: 'onDeathExplode', element: 'fogo', dice: '2d6', radius: 1 }], 'Explode em chamas ao morrer', vFire),
  A('instavel', 'Instável', 1, [{ type: 'onDeathExplode', element: 'eletrico', dice: '1d8', radius: 1 }], 'Descarga elétrica ao morrer', vSpark),
  A('criogenico', 'Criogênico', 2, [{ type: 'onDeathExplode', element: 'gelo', dice: '2d6', radius: 1 }], 'Explosão de gelo ao morrer', vIce, 'Criogênica'),
  A('putrido', 'Pútrido', 1, [{ type: 'onDeathExplode', element: 'veneno', dice: '1d8', radius: 1 }], 'Nuvem tóxica ao morrer', vPoison, 'Pútrida'),
  A('fulgurante', 'Fulgurante', 2, [{ type: 'onDeathExplode', element: 'radiante', dice: '2d6', radius: 1 }], 'Clarão radiante ao morrer', vHoly),
  A('apodrecido', 'Apodrecido', 1, [{ type: 'onDeathExplode', element: 'necrotico', dice: '1d8', radius: 1 }], 'Eclosão necrótica ao morrer', vShadow),
  A('sacrificial', 'Sacrificial', 2, [{ type: 'onDeathExplode', element: 'fogo', dice: '3d6', radius: 2 }, st({ hpMult: 0.8 })], 'Vive para explodir', vFire),
  A('divisivel', 'Divisível', 2, [{ type: 'onDeathSplit', count: 2, hpFraction: 0.4 }], 'Divide-se em dois ao morrer', null),
  A('mitotico', 'Mitótico', 2, [{ type: 'onDeathSplit', count: 2, hpFraction: 0.5 }], 'Mitose: dois clones ao morrer', null, 'Mitótica'),
  A('fragmentario', 'Fragmentário', 3, [{ type: 'onDeathSplit', count: 3, hpFraction: 0.25 }], 'Estilhaça-se em três ao morrer', null, 'Fragmentária'),
  A('vingativo', 'Vingativo', 1, [{ type: 'onDeathCurse', condition: 'amaldicoado', duration: 3 }], 'Amaldiçoa quem o mata', vShadow),
  A('rancoroso', 'Rancoroso', 1, [{ type: 'onDeathCurse', condition: 'marcado', duration: 3 }], 'Marca quem o mata', null),
  A('assombrado', 'Assombrado', 2, [{ type: 'onDeathCurse', condition: 'medo', duration: 2 }, res('necrotico')], 'Seu espírito aterroriza o assassino', vShadow),
  A('martir', 'Mártir', 2, [{ type: 'onDeathHealAllies', dice: '2d6', radius: 2 }], 'Cura aliados próximos ao morrer', vHoly),

  // ============ MOVIMENTO ============
  A('alado', 'Alado', 2, [{ type: 'flying' }], 'Voa: ignora terreno, altura e perigos', null),
  A('voador', 'Voador', 2, [{ type: 'flying' }, st({ speedFlat: 1 })], 'Voo rápido e livre', null),
  A('flutuante', 'Flutuante', 1, [{ type: 'flying' }, st({ speedFlat: -1 })], 'Flutua lentamente sobre o campo', null),
  A('etereo', 'Etéreo', 3, [{ type: 'phasing' }, res('cortante', 'perfurante', 'concussao')], 'Semi-material: atravessa tudo, resiste a dano físico', vShadow, 'Etérea'),
  A('fantasmagorico', 'Fantasmagórico', 3, [{ type: 'phasing' }, { type: 'dodge', chance: 0.15 }], 'Forma espectral evasiva', vShadow, 'Fantasmagórica'),
  A('escorregadio', 'Escorregadio', 1, [{ type: 'slippery' }, { type: 'dodge', chance: 0.1 }], 'Não provoca ataques de oportunidade', null),
  A('saltitante', 'Saltitante', 1, [{ type: 'slippery' }, st({ speedFlat: 1 })], 'Salta pelo campo livremente', null),
  A('errante', 'Errante', 1, [st({ speedFlat: 1 })], 'Andarilho incansável', null),
  A('teleportador', 'Teleportador', 2, [{ type: 'blinkOnHit', chance: 0.3, range: 3 }], '30% de teleportar ao ser atingido', vPsy),
  A('piscante', 'Piscante', 3, [{ type: 'blinkOnHit', chance: 0.5, range: 4 }], 'Pisca pelo espaço ao ser atingido', vPsy),

  // ============ SORTE / MAGIA ============
  A('sortudo', 'Sortudo', 1, [{ type: 'rerollOnes' }, { type: 'dodge', chance: 0.05 }], 'A sorte sorri: rerola 1 no d20', null),
  A('azarado', 'Azarado', 1, [{ type: 'accuracy', value: -1 }, st({ xpMult: 0.8 })], 'Nada dá certo para ele', null),
  A('bendito', 'Bendito', 1, [xd('radiante', '1d4'), { type: 'saveBonus', value: 1 }], 'Tocado pelos céus', vHoly),
  A('maldito', 'Maldito', 1, [xd('necrotico', '1d4'), vul('radiante')], 'Tocado pelas trevas', vShadow),
  A('arcano', 'Arcano', 1, [xd('psiquico', '1d4'), { type: 'saveBonus', value: 2 }], 'Imbuido de magia antiga', vPsy),
  A('runico', 'Rúnico', 2, [xd('gelo', '1d4'), xd('fogo', '1d4')], 'Runas de fogo e gelo gravadas no corpo', vIce, 'Rúnica'),
  A('encantado', 'Encantado', 1, [{ type: 'accuracy', value: 1 }, st({ acFlat: 1 }), { type: 'saveBonus', value: 1 }], 'Envolto em encantamentos', null),
  A('magnetico', 'Magnético', 1, [st({ acFlat: 1 }), { type: 'thorns', dice: '1d4', element: 'eletrico' }], 'Campo magnético defensivo', vSpark, 'Magnética'),
  A('prismatico', 'Prismático', 3, [xd('fogo', '1d4'), xd('gelo', '1d4'), xd('eletrico', '1d4')], 'Refrata energia em três elementos', vHoly, 'Prismática'),
  A('caotico', 'Caótico', 2, [{ type: 'blinkOnHit', chance: 0.2, range: 3 }, xd('psiquico', '1d6')], 'Imprevisível e perigoso', vPsy, 'Caótica'),

  // ============ PATENTE / IDADE ============
  A('jovem', 'Jovem', 1, [st({ hpMult: 0.85, speedFlat: 1, xpMult: 0.9 })], 'Inexperiente mas ágil', null),
  A('adulto', 'Adulto', 1, [st({ hpMult: 1.1 })], 'No auge da forma', null),
  A('velho', 'Velho', 1, [st({ speedFlat: -1, wisFlat: 2, xpMult: 0.95 })], 'Lento porém experiente', null),
  A('anciao', 'Ancião', 2, [st({ wisFlat: 4, intFlat: 2, hpMult: 1.15 }), { type: 'saveBonus', value: 2 }], 'Décadas de batalhas', null, 'Anciã'),
  A('ancestral', 'Ancestral', 3, [st({ strFlat: 2, dexFlat: 2, conFlat: 2, hpMult: 1.3 })], 'De uma era esquecida', null),
  A('real', 'Real', 3, [st({ hpMult: 1.5, dmgFlat: 2, acFlat: 1, xpMult: 1.5 })], 'Sangue real: poder de monarca', { tint: '#ffd700' }),
  A('imperial', 'Imperial', 3, [st({ hpMult: 1.4, xpMult: 1.4 }), { type: 'accuracy', value: 2 }], 'Disciplina de império', { tint: '#ffd700' }),
  A('plebeu', 'Plebeu', 1, [st({ hpMult: 0.95, xpMult: 0.9 })], 'Um qualquer', null),
  A('veterano', 'Veterano', 2, [{ type: 'accuracy', value: 2 }, st({ acFlat: 1, hpMult: 1.15 })], 'Cicatrizes de cem batalhas', null),
  A('elite', 'Elite', 3, [{ type: 'accuracy', value: 2 }, st({ dmgFlat: 2, acFlat: 2, hpMult: 1.3, xpMult: 1.6 })], 'O melhor entre os seus', { tint: '#ff4444' }),
  A('recruta', 'Recruta', 1, [{ type: 'accuracy', value: -1 }, st({ xpMult: 0.85 })], 'Mal saiu do treinamento', null),
  A('mercenario', 'Mercenário', 1, [st({ dmgFlat: 1 }), { type: 'accuracy', value: 1 }], 'Luta por moedas, e luta bem', null, 'Mercenária'),
  A('capitao', 'Capitão', 2, [st({ hpMult: 1.25, dmgFlat: 1 }), { type: 'accuracy', value: 1 }], 'Líder nato', null, 'Capitã'),
  A('lendario', 'Lendário', 3, [st({ hpMult: 1.8, dmgFlat: 3, acFlat: 2, xpMult: 2 }), { type: 'accuracy', value: 2 }], 'Cantado em sagas', { tint: '#ffaa00', emissive: '#ffaa00' }, 'Lendária'),
  A('mitico', 'Mítico', 3, [st({ hpMult: 2.2, dmgFlat: 4, xpMult: 2.5 }), { type: 'critRange', min: 19 }], 'Além das lendas', { tint: '#ff66ff', emissive: '#aa44ff' }, 'Mítica'),
  A('primordial', 'Primordial', 3, [st({ hpMult: 2, strFlat: 2, conFlat: 2, xpMult: 2.2 })], 'Força do início dos tempos', { emissive: '#44ffcc' }),
  A('eterno', 'Eterno', 3, [{ type: 'regen', dice: '1d8' }, st({ hpMult: 1.4 })], 'Não conhece o descanso final', { emissive: '#88ddff' }),

  // ============ ESTADOS ============
  A('faminto', 'Faminto', 1, [st({ dmgFlat: 2, hpMult: 0.92 })], 'A fome o torna feroz', null),
  A('sedento', 'Sedento', 1, [{ type: 'lifesteal', fraction: 0.2 }], 'Sede de sangue literal', null),
  A('raivoso', 'Raivoso', 1, [st({ dmgFlat: 1 }), { type: 'rageBelow', threshold: 0.5, dmgBonus: 2, acPenalty: 1 }], 'Espuma de raiva', null),
  A('enfermo', 'Enfermo', 1, [st({ conFlat: -2, hpMult: 0.88, xpMult: 0.85 }), res('veneno')], 'Doente, mas calejado por toxinas', null),
  A('ferido', 'Ferido', 1, [{ type: 'startWounded', fraction: 0.6 }, st({ xpMult: 0.7 })], 'Já entra em combate machucado', null, 'Ferida'),
  A('exausto', 'Exausto', 1, [st({ speedFlat: -1, xpMult: 0.8 }), { type: 'accuracy', value: -1 }], 'Sem fôlego', null),
  A('energizado', 'Energizado', 1, [st({ speedFlat: 1 }), { type: 'accuracy', value: 1 }], 'Vibrando de energia', vSpark),
  A('euforico', 'Eufórico', 1, [st({ dmgFlat: 1, acFlat: -1 }), { type: 'accuracy', value: 1 }], 'Empolgação imprudente', null, 'Eufórica'),
  A('sereno', 'Sereno', 1, [{ type: 'saveBonus', value: 3 }, cimm('medo')], 'Calma inabalável: imune a medo', null),
  A('concentrado', 'Concentrado', 1, [{ type: 'accuracy', value: 2 }, { type: 'initiativeBonus', value: -2 }], 'Foco total, reação lenta', null),
  A('distraido', 'Distraído', 1, [st({ acFlat: -2, xpMult: 0.85 }), { type: 'initiativeBonus', value: -3 }], 'Cabeça nas nuvens', null, 'Distraída'),
  A('determinado', 'Determinado', 1, [{ type: 'saveBonus', value: 2 }, cimm('medo')], 'Nada o faz recuar', null),
  A('nervoso', 'Nervoso', 1, [{ type: 'accuracy', value: -1 }, { type: 'initiativeBonus', value: 2 }, st({ xpMult: 0.9 })], 'Agitado e impreciso', null),
  A('confiante', 'Confiante', 1, [{ type: 'accuracy', value: 1 }, { type: 'firstBlood', dmgBonus: 2 }], 'Acredita em cada golpe', null),
  A('paranoico', 'Paranoico', 1, [{ type: 'initiativeBonus', value: 4 }, st({ acFlat: 1 }), { type: 'accuracy', value: -1 }], 'Sempre em guarda', null, 'Paranoica'),
  A('zeloso', 'Zeloso', 1, [beh('guardiao'), { type: 'saveBonus', value: 1 }], 'Cuida dos seus com devoção', null),

  // ============ CONDIÇÕES AO ACERTAR ============
  A('paralisante', 'Paralisante', 2, [rider('paralisado', 0.15, 13, 'con')], 'Seu toque pode paralisar', vSpark),
  A('atordoante', 'Atordoante', 2, [rider('atordoado', 0.15, 13, 'con')], 'Golpes que atordoam', null),
  A('cegante', 'Cegante', 1, [rider('cego', 0.2, 12, 'con')], 'Pode cegar ao acertar', vHoly),
  A('aterrorizante', 'Aterrorizante', 1, [rider('medo', 0.25, 12, 'wis')], 'Golpes que inspiram pavor', vShadow),
  A('enraizante', 'Enraizante', 1, [rider('enraizado', 0.2, 12, 'str')], 'Prende o alvo ao chão', null),
  A('rastreador', 'Rastreador', 1, [rider('marcado', 0.3, 12, 'wis')], 'Marca a presa para o bando', null),
  A('sangrento', 'Sangrento', 1, [rider('sangrando', 0.35, 12, 'con')], 'Feridas que não param de sangrar', null),
  A('lacerante', 'Lacerante', 2, [rider('sangrando', 0.5, 13, 'con', 3)], 'Garras que rasgam profundamente', null),
  A('entorpecente', 'Entorpecente', 1, [rider('lento', 0.3, 12, 'con')], 'Toxina que entorpece músculos', vPoison),
  A('congelador', 'Congelador', 2, [rider('congelado', 0.12, 13, 'con')], 'Pode congelar o alvo sólido', vIce),
  A('incendiario', 'Incendiário', 1, [rider('queimando', 0.3, 12, 'dex')], 'Põe fogo em tudo que toca', vFire, 'Incendiária'),
  A('adormecedor', 'Adormecedor', 2, [rider('atordoado', 0.2, 13, 'wis')], 'Induz sono profundo', vPsy),
  A('debilitante', 'Debilitante', 1, [rider('amaldicoado', 0.25, 12, 'wis')], 'Enfraquece com cada golpe', vShadow),
  A('infeccioso', 'Infeccioso', 1, [rider('envenenado', 0.4, 12, 'con')], 'Mordidas infectas', vPoison),
  A('petrificante', 'Petrificante', 3, [rider('paralisado', 0.2, 14, 'con', 2)], 'O olhar que enrijece a carne', null),

  // ============ EXTRAS ÚNICOS ============
  A('longilineo', 'Longilíneo', 1, [{ type: 'reach', value: 2 }], 'Membros longos: alcance estendido', { scale: 1.1 }, 'Longilínea'),
  A('tentacular', 'Tentacular', 2, [{ type: 'reach', value: 2 }, rider('enraizado', 0.15, 12, 'str')], 'Tentáculos que agarram de longe', null),
  A('camuflado', 'Camuflado', 1, [{ type: 'dodge', chance: 0.12 }, { type: 'firstBlood', dmgBonus: 2 }], 'Difícil de ver, fácil de sentir', null),
  A('noturno', 'Noturno', 1, [{ type: 'initiativeBonus', value: 2 }, res('necrotico')], 'Criatura da noite', vShadow),
  A('diurno', 'Diurno', 1, [{ type: 'accuracy', value: 1 }, res('radiante')], 'Abençoado pelo sol', vHoly),
  A('subterraneo', 'Subterrâneo', 1, [res('concussao'), st({ speedFlat: -1 })], 'Escavador de túneis resistente', null, 'Subterrânea'),
  A('anfibio', 'Anfíbio', 1, [{ type: 'slippery' }, res('gelo')], 'Pele úmida e escorregadia', null, 'Anfíbia'),
  A('cristalino', 'Cristalino', 2, [res('eletrico', 'gelo'), vul('concussao'), st({ acFlat: 2 })], 'Corpo de cristal: belo e quebrável', vIce),
  A('metalico', 'Metálico', 2, [res('cortante', 'perfurante'), vul('eletrico'), st({ acFlat: 2, speedFlat: -1 })], 'Carcaça de metal', { tint: '#aaaacc' }, 'Metálica'),
  A('oleoso', 'Oleoso', 1, [{ type: 'slippery' }, vul('fogo'), { type: 'dodge', chance: 0.1 }], 'Escorrega de tudo, menos do fogo', null),
  A('gasoso', 'Gasoso', 2, [{ type: 'phasing' }, res('concussao'), vul('fogo')], 'Forma de névoa inflamável', null),
  A('viscoso', 'Viscoso', 1, [rider('lento', 0.25, 12, 'str'), res('concussao')], 'Gosma que gruda e amortece', vAcid),
  A('faiscante', 'Faiscante', 1, [xd('fogo', '1d4'), xd('eletrico', '1d4')], 'Solta faíscas a cada golpe', vSpark),
  A('lunar', 'Lunar', 2, [xd('gelo', '1d6'), { type: 'regen', dice: '1d4' }], 'Banhado pela lua', vIce),
  A('solar', 'Solar', 2, [xd('fogo', '1d6'), xd('radiante', '1d4')], 'Banhado pelo sol', vFire),
  A('estelar', 'Estelar', 3, [xd('radiante', '2d6'), { type: 'blinkOnHit', chance: 0.2, range: 3 }], 'Poeira de estrelas', vHoly),
  A('vazio', 'Vazio', 3, [xd('necrotico', '2d6'), { type: 'dodge', chance: 0.15 }], 'Tocado pelo Vazio entre os mundos', vShadow, 'Vazia'),
  A('ressurgente', 'Ressurgente', 3, [{ type: 'regen', dice: '1d6' }, { type: 'onDeathHealAllies', dice: '1d6', radius: 2 }], 'A morte não é o fim', vHoly),
  A('simbiotico', 'Simbiótico', 2, [{ type: 'packTactics' }, { type: 'onDeathHealAllies', dice: '2d4', radius: 2 }], 'Vive e morre pelo grupo', null, 'Simbiótica'),
  A('parasita', 'Parasita', 1, [{ type: 'lifesteal', fraction: 0.3 }, st({ hpMult: 0.9 })], 'Suga a vida alheia', vPoison),
  A('voraz', 'Voraz', 2, [{ type: 'killHeal', dice: '2d6' }, st({ dmgFlat: 1 })], 'Devora os caídos e se fortalece', null),
  A('canibal', 'Canibal', 1, [{ type: 'killHeal', dice: '1d8' }], 'Alimenta-se dos derrotados', null),
  A('imprudente', 'Imprudente', 1, [st({ dmgFlat: 3, acFlat: -2 })], 'Ataca sem pensar em defesa', null),
  A('calculista', 'Calculista', 1, [{ type: 'accuracy', value: 2 }, st({ dmgFlat: -1 })], 'Cada golpe friamente planejado', null),
  A('ardiloso', 'Ardiloso', 1, [{ type: 'executioner', threshold: 0.5, dmgBonus: 2 }, { type: 'initiativeBonus', value: 1 }], 'Explora cada fraqueza', null, 'Ardilosa'),
  A('honorável', 'Honorável', 1, [{ type: 'firstBlood', dmgBonus: 3 }, cimm('medo')], 'Duela de frente, sem medo', null),
  A('traiçoeiro', 'Traiçoeiro', 1, [{ type: 'executioner', threshold: 0.6, dmgBonus: 3 }], 'Golpeia pelas costas', null, 'Traiçoeira'),
  A('selado', 'Selado', 2, [st({ hpMult: 1.3, dmgFlat: -1 }), res('psiquico')], 'Poder contido por selos antigos', vPsy),
  A('desperto', 'Desperto', 2, [st({ intFlat: 4, dmgFlat: 1 }), { type: 'saveBonus', value: 1 }], 'Consciência recém-despertada', vPsy),
  A('onirico', 'Onírico', 2, [{ type: 'dodge', chance: 0.15 }, rider('atordoado', 0.1, 12, 'wis')], 'Feito de matéria de sonhos', vPsy, 'Onírica'),
  A('pesadelar', 'Pesadelar', 3, [rider('medo', 0.35, 14, 'wis'), xd('psiquico', '1d8')], 'Um pesadelo encarnado', vShadow),
  A('abencoador', 'Abençoador', 1, [{ type: 'onDeathHealAllies', dice: '1d8', radius: 2 }], 'Sua queda inspira os seus', vHoly),
  A('magnata', 'Magnata', 1, [st({ xpMult: 1.3, hpFlat: 5, acFlat: 1 })], 'Bem nutrido e protegido por riquezas (mais XP e ouro)', { tint: '#ffd700' }),
  A('dourado', 'Dourado', 2, [st({ xpMult: 1.6, acFlat: 1 })], 'Reluzente e valioso', { tint: '#ffd700', emissive: '#886600' }),
  A('platinado', 'Platinado', 3, [st({ xpMult: 2, acFlat: 2 })], 'Tesouro ambulante', { tint: '#e5e4e2', emissive: '#888899' }),
];

// índice por id + verificação de unicidade
export const ADJ_BY_ID = new Map();
for (const a of ADJECTIVES) {
  if (ADJ_BY_ID.has(a.id)) throw new Error(`Adjetivo duplicado: ${a.id}`);
  ADJ_BY_ID.set(a.id, a);
}

export function adjectivesByTier(maxTier) {
  return ADJECTIVES.filter((a) => a.tier <= maxTier);
}
