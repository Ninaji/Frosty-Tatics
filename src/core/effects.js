// Sistema de efeitos declarativos — o coração dos 200+ adjetivos.
// Cada adjetivo/traço carrega uma lista de efeitos { type, ...params }.
// Este módulo coleta e interpreta esses efeitos para uma unidade.
//
// Tipos de efeito suportados:
//  stat            {hpMult,hpFlat,acFlat,speedFlat,dmgFlat,dmgMult,strFlat,dexFlat,conFlat,intFlat,wisFlat,chaFlat,xpMult}
//  extraDamage     {element,dice,chance?}            dano elemental extra ao acertar
//  riderCondition  {condition,dc,save,duration,chance?}  condição ao acertar (alvo salva)
//  auraDamage      {element,dice,radius}             dano em inimigos próximos no início do turno
//  auraSlow        {radius}                          inimigos próximos ficam lentos
//  regen           {dice}                            cura no início do turno
//  lifesteal       {fraction}                        cura fração do dano causado
//  thorns          {dice,element}                    reflete dano ao ser atingido em corpo a corpo
//  onDeathExplode  {element,dice,radius}             explode ao morrer
//  onDeathSplit    {count,hpFraction}                divide-se ao morrer
//  onDeathCurse    {condition,duration}              amaldiçoa quem o matou
//  onDeathHealAllies {dice,radius}                   cura aliados ao morrer
//  resistance      {types:[]}
//  immunity        {types:[]}
//  vulnerability   {types:[]}
//  conditionImmunity {conditions:[]}
//  critRange       {min}                             crítico em 19-20 etc.
//  multiattack     {extra}                           ataques básicos extras
//  rerollOnes      {}                                sortudo: rerola 1 no d20
//  dodge           {chance}                          chance de esquivar completamente
//  flying          {}                                voa: ignora terreno/altura/perigos
//  phasing         {}                                atravessa unidades ao mover
//  initiativeBonus {value}
//  accuracy        {value}                           bônus/penalidade de acerto
//  saveBonus       {value}
//  behavior        {type}                            covarde, furioso, atirador, guardiao, matilha, preguicoso, caçador
//  rageBelow       {threshold,dmgBonus,acPenalty}    fúria com vida baixa
//  executioner     {threshold,dmgBonus}              dano extra em alvos feridos
//  firstBlood      {dmgBonus}                        dano extra em alvos com vida cheia
//  blinkOnHit      {chance,range}                    teleporta ao ser atingido
//  elementConvert  {element}                         converte dano da arma para o elemento
//  killHeal        {dice}                            cura ao matar
//  packTactics     {}                                vantagem se aliado adjacente ao alvo
//  sturdy          {}                                imune a crítico
//  reach           {value}                           alcance corpo a corpo estendido
//  slippery        {}                                não provoca ataques de oportunidade

export function collectEffects(unit) {
  const fx = [];
  for (const t of unit.traits ?? []) for (const e of t.effects ?? []) fx.push(e);
  for (const a of unit.adjectives ?? []) for (const e of a.effects ?? []) fx.push(e);
  return fx;
}

export function effectsOf(unit, type) {
  return (unit.effects ?? []).filter((e) => e.type === type);
}

export function hasEffect(unit, type) {
  return (unit.effects ?? []).some((e) => e.type === type);
}

export function sumEffect(unit, type, key) {
  return effectsOf(unit, type).reduce((s, e) => s + (e[key] ?? 0), 0);
}

// Aplica efeitos do tipo `stat` aos números base de uma unidade (na criação).
export function applyStatEffects(base, effects) {
  const out = { ...base };
  let hpMult = 1, dmgMult = 1, xpMult = 1;
  for (const e of effects) {
    if (e.type !== 'stat') continue;
    hpMult *= e.hpMult ?? 1;
    dmgMult *= e.dmgMult ?? 1;
    xpMult *= e.xpMult ?? 1;
    out.maxHp += e.hpFlat ?? 0;
    out.ac += e.acFlat ?? 0;
    out.speed += e.speedFlat ?? 0;
    out.dmgFlat = (out.dmgFlat ?? 0) + (e.dmgFlat ?? 0);
    for (const ab of ['str', 'dex', 'con', 'int', 'wis', 'cha']) {
      out[ab] = (out[ab] ?? 10) + (e[`${ab}Flat`] ?? 0);
    }
  }
  out.maxHp = Math.max(1, Math.round(out.maxHp * hpMult));
  out.dmgMult = (base.dmgMult ?? 1) * dmgMult;
  out.xpMult = (base.xpMult ?? 1) * xpMult;
  out.speed = Math.max(1, out.speed);
  out.ac = Math.max(5, out.ac);
  return out;
}
