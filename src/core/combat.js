// Resolução de combate estilo D&D 5e: d20 + bônus vs CA, vantagem/desvantagem,
// crítico, resistências, condições aplicadas ao acertar, ladrão de vida, espinhos.

import { rollD20, rollDice, parseDice } from './dice.js';
import { mod, proficiency } from './stats.js';
import { applyResistance } from './damage.js';
import { conditionDef } from './conditions.js';
import { effectsOf, hasEffect, sumEffect } from './effects.js';
import { t } from '../i18n.js';
import { condName, damageTypeName, abilityScoreAbbr } from '../i18n-data.js';

// ---------- utilidades de condição ----------

export function addCondition(ctx, unit, condId, duration = 2, source = null) {
  const def = conditionDef(condId);
  if (unit.conditionImmunities?.has(condId)) {
    ctx.log(t('log.immuneCond', { name: unit.name, cond: condName(def) }), 'info');
    return false;
  }
  const existing = unit.conditions.get(condId);
  const dur = Math.max(duration, existing?.duration ?? 0);
  unit.conditions.set(condId, { duration: dur, source });
  ctx.event({ type: 'condition', unitId: unit.id, condition: condId, on: true });
  ctx.log(t('log.gainedCond', { name: unit.name, cond: condName(def), n: dur }), 'condition');
  return true;
}

export function removeCondition(ctx, unit, condId) {
  if (unit.conditions.delete(condId)) {
    ctx.event({ type: 'condition', unitId: unit.id, condition: condId, on: false });
  }
}

export function hasCondition(unit, condId) {
  return unit.conditions.has(condId);
}

export function conditionAttackAdv(unit) {
  let adv = 0;
  for (const [id] of unit.conditions) {
    const def = conditionDef(id);
    adv += def.attackAdv ?? 0;
  }
  return adv;
}

export function advAgainstUnit(unit) {
  let adv = 0;
  for (const [id] of unit.conditions) {
    const def = conditionDef(id);
    adv += def.advAgainst ?? 0;
  }
  return adv;
}

export function effectiveAC(unit) {
  let ac = unit.ac;
  for (const [id] of unit.conditions) {
    const def = conditionDef(id);
    ac += def.acBonus ?? 0;
  }
  return ac;
}

export function effectiveSpeed(unit) {
  let speed = unit.speed;
  let mult = 1;
  for (const [id] of unit.conditions) {
    const def = conditionDef(id);
    if (def.preventsMove) return 0;
    mult *= def.speedMult ?? 1;
  }
  return Math.max(0, Math.floor(speed * mult));
}

export function canAct(unit) {
  for (const [id] of unit.conditions) {
    if (conditionDef(id).preventsAction) return false;
  }
  return true;
}

// ---------- testes de resistência ----------

export function savingThrow(ctx, unit, ability, dc) {
  const adv = 0;
  const { value } = rollD20(ctx.rng, adv);
  const bonus = mod(unit[ability] ?? 10) + sumEffect(unit, 'saveBonus', 'value');
  const total = value + bonus;
  const success = total >= dc;
  ctx.log(
    t('log.save', {
      name: unit.name, ab: abilityScoreAbbr(ability), roll: value, bonus, total, dc,
      result: t(success ? 'log.saveSuccess' : 'log.saveFail'),
    }),
    'roll'
  );
  return success;
}

// ---------- dano ----------

export function dealDamage(ctx, target, packets, source = null, { isMelee = false } = {}) {
  if (target.hp <= 0) return { total: 0, died: false };
  let total = 0;
  const detail = [];
  for (const p of packets) {
    const { final, factor } = applyResistance(p.amount, p.type, target);
    total += final;
    detail.push({ ...p, final, factor });
  }
  // dodge total (efeito "escorregadio"/"etéreo") é tratado na rolagem de ataque;
  // aqui o dano já é definitivo.
  target.hp = Math.max(0, target.hp - total);
  ctx.event({
    type: 'damage', unitId: target.id, amount: total, packets: detail,
    sourceId: source?.id ?? null, hpAfter: target.hp,
  });
  if (total > 0) {
    const parts = detail.filter((p) => p.final > 0)
      .map((p) => `${p.final} ${damageTypeName(p.type)}${p.factor === 0.5 ? t('log.resisted') : p.factor === 2 ? t('log.vulnerable') : ''}`);
    ctx.log(t('log.damage', { name: target.name, n: total, parts: parts.join(' + '), hp: target.hp, max: target.maxHp }), 'damage');
  } else {
    ctx.log(t('log.noDamage', { name: target.name }), 'info');
  }

  let died = false;
  if (target.hp <= 0) {
    died = true;
    handleDeath(ctx, target, source);
  } else if (source && total > 0) {
    // fúria com vida baixa: ativa ao cruzar o limiar
    for (const e of effectsOf(target, 'rageBelow')) {
      if (target.hp <= target.maxHp * e.threshold && !target._raging) {
        target._raging = true;
        target.dmgFlat = (target.dmgFlat ?? 0) + e.dmgBonus;
        target.ac -= e.acPenalty ?? 0;
        ctx.log(t('log.rage', { name: target.name }), 'special');
        ctx.event({ type: 'rage', unitId: target.id });
      }
    }
    // teleporte ao ser atingido
    for (const e of effectsOf(target, 'blinkOnHit')) {
      if (ctx.rng.chance(e.chance) && ctx.battle) {
        ctx.battle.blinkAway(target, e.range ?? 3);
      }
    }
  }
  return { total, died, detail };
}

export function heal(ctx, unit, amount) {
  if (unit.hp <= 0) return 0;
  const healed = Math.min(amount, unit.maxHp - unit.hp);
  unit.hp += healed;
  if (healed > 0) {
    ctx.event({ type: 'heal', unitId: unit.id, amount: healed, hpAfter: unit.hp });
    ctx.log(t('log.heals', { name: unit.name, n: healed }), 'heal');
  }
  return healed;
}

export function handleDeath(ctx, unit, killer) {
  unit.alive = false;
  ctx.log(t('log.defeated', { name: unit.name }), 'death');
  ctx.event({ type: 'death', unitId: unit.id, killerId: killer?.id ?? null });

  // efeitos ao morrer
  for (const e of effectsOf(unit, 'onDeathExplode')) {
    ctx.battle?.explodeAt(unit, e);
  }
  for (const e of effectsOf(unit, 'onDeathCurse')) {
    if (killer && killer.alive) {
      addCondition(ctx, killer, e.condition, e.duration ?? 2, unit);
    }
  }
  for (const e of effectsOf(unit, 'onDeathHealAllies')) {
    ctx.battle?.deathHealAllies(unit, e);
  }
  for (const e of effectsOf(unit, 'onDeathSplit')) {
    ctx.battle?.splitOnDeath(unit, e);
  }
  // quem matou: efeitos de matar
  if (killer && killer.alive) {
    for (const e of effectsOf(killer, 'killHeal')) {
      heal(ctx, killer, rollDice(ctx.rng, e.dice).total);
    }
  }
  ctx.battle?.onUnitDeath(unit, killer);
}

// ---------- ataque ----------

// Calcula vantagem total (-1/0/+1) para um ataque
export function computeAdvantage(ctx, attacker, defender, opts = {}) {
  let adv = 0;
  adv += conditionAttackAdv(attacker);
  adv += advAgainstUnit(defender);
  if (opts.advantage) adv += 1;
  if (opts.disadvantage) adv -= 1;
  // táticas de matilha: vantagem se um aliado do atacante está adjacente ao alvo
  if (hasEffect(attacker, 'packTactics') && ctx.battle?.allyAdjacentTo(attacker, defender)) {
    adv += 1;
  }
  // esquiva sobrenatural do defensor: impõe desvantagem
  if (hasEffect(defender, 'evasive')) adv -= 1;
  return Math.sign(adv);
}

export function attackBonusOf(attacker, attack) {
  const abilityScore = attack.finesse
    ? Math.max(attacker.str ?? 10, attacker.dex ?? 10)
    : attacker[attack.ability ?? 'str'] ?? 10;
  return mod(abilityScore) + proficiency(attacker.level ?? attacker.tier * 2) +
    (attack.toHitBonus ?? 0) + sumEffect(attacker, 'accuracy', 'value');
}

export function damageModOf(attacker, attack) {
  const abilityScore = attack.finesse
    ? Math.max(attacker.str ?? 10, attacker.dex ?? 10)
    : attacker[attack.ability ?? 'str'] ?? 10;
  return mod(abilityScore) + (attacker.dmgFlat ?? 0);
}

// Estima chance de acerto e dano médio (para preview da UI / decisões da IA)
export function previewAttack(ctx, attacker, defender, attack, opts = {}) {
  const bonus = attackBonusOf(attacker, attack);
  const ac = effectiveAC(defender);
  const adv = computeAdvantage(ctx, attacker, defender, opts);
  let pHit = Math.min(0.95, Math.max(0.05, (21 + bonus - ac) / 20));
  if (adv > 0) pHit = 1 - (1 - pHit) ** 2;
  else if (adv < 0) pHit = pHit ** 2;
  const { count, sides, bonus: db } = parseDice(attack.dice);
  const avg = (count * (sides + 1)) / 2 + db + damageModOf(attacker, attack);
  return { pHit, avgDamage: Math.round(avg * (attacker.dmgMult ?? 1)), adv };
}

// Resolve um ataque completo. Retorna resultado detalhado.
export function resolveAttack(ctx, attacker, defender, attack, opts = {}) {
  const adv = computeAdvantage(ctx, attacker, defender, opts);
  const d20 = rollD20(ctx.rng, adv);
  let natural = d20.value;

  // sortudo: rerola 1
  if (natural === 1 && hasEffect(attacker, 'rerollOnes')) {
    const re = rollD20(ctx.rng, 0);
    natural = re.value;
    ctx.log(t('log.lucky', { name: attacker.name, n: natural }), 'roll');
  }

  const bonus = attackBonusOf(attacker, attack);
  // bônus/penalidade de dados nas jogadas (abençoado/amaldiçoado)
  let diceBonus = 0;
  for (const [id] of attacker.conditions) {
    const def = conditionDef(id);
    if (def.attackBonusDice) {
      const expr = def.attackBonusDice;
      const negative = expr.startsWith('-');
      const r = rollDice(ctx.rng, negative ? expr.slice(1) : expr);
      diceBonus += negative ? -r.total : r.total;
    }
  }

  const total = natural + bonus + diceBonus;
  const ac = effectiveAC(defender);

  const critMin = Math.min(...effectsOf(attacker, 'critRange').map((e) => e.min), 20);
  const isCrit = natural >= critMin && !hasEffect(defender, 'sturdy');
  const isMiss = natural === 1 || (!isCrit && total < ac);

  ctx.event({
    type: 'attack', attackerId: attacker.id, defenderId: defender.id,
    attackName: attack.pt, natural, total, ac, hit: !isMiss, crit: isCrit, adv,
  });

  if (isMiss) {
    ctx.log(t('log.miss', { a: attacker.name, d: defender.name, w: attack.pt, roll: natural, bonus: bonus + diceBonus, total, ac }), 'miss');
    return { hit: false, crit: false, damage: 0 };
  }

  // esquiva total (chance)
  for (const e of effectsOf(defender, 'dodge')) {
    if (ctx.rng.chance(e.chance)) {
      ctx.log(t('log.dodges', { name: defender.name }), 'miss');
      ctx.event({ type: 'dodge', unitId: defender.id });
      return { hit: false, crit: false, damage: 0, dodged: true };
    }
  }

  // pacotes de dano
  const packets = [];
  const convert = effectsOf(attacker, 'elementConvert')[0];
  const baseType = convert ? convert.element : attack.dtype;
  const baseRoll = rollDice(ctx.rng, attack.dice, { crit: isCrit });
  let baseAmount = baseRoll.total + damageModOf(attacker, attack);
  // dano extra situacional
  for (const e of effectsOf(attacker, 'executioner')) {
    if (defender.hp <= defender.maxHp * e.threshold) baseAmount += e.dmgBonus;
  }
  for (const e of effectsOf(attacker, 'firstBlood')) {
    if (defender.hp >= defender.maxHp) baseAmount += e.dmgBonus;
  }
  // lobo solitário: dano extra sem aliados próximos
  for (const e of effectsOf(attacker, 'loneWolf')) {
    if (ctx.battle && !ctx.battle.hasAdjacentAlly(attacker)) baseAmount += e.dmgBonus;
  }
  baseAmount = Math.max(1, Math.round(baseAmount * (attacker.dmgMult ?? 1)));
  packets.push({ amount: baseAmount, type: baseType });

  // dano elemental extra (adjetivos como Flamejante, Gélido…)
  for (const e of effectsOf(attacker, 'extraDamage')) {
    if (e.chance != null && !ctx.rng.chance(e.chance)) continue;
    const r = rollDice(ctx.rng, e.dice, { crit: isCrit });
    packets.push({ amount: r.total, type: e.element });
  }
  // dano extra do ataque em si (ex.: arma rúnica da Frosty)
  for (const x of attack.extraDamage ?? []) {
    const r = rollDice(ctx.rng, x.dice, { crit: isCrit });
    packets.push({ amount: r.total, type: x.element });
  }

  const critTxt = isCrit ? t('log.crit') : '';
  ctx.log(
    t('log.hit', { a: attacker.name, d: defender.name, w: attack.pt, roll: natural, bonus: bonus + diceBonus, total, ac }) + critTxt,
    isCrit ? 'crit' : 'hit'
  );

  const isMelee = (attack.range ?? 1) <= 1;
  const result = dealDamage(ctx, defender, packets, attacker, { isMelee });

  // condições ao acertar (riders do ataque e dos adjetivos)
  if (defender.alive) {
    const riders = [
      ...(attack.riders ?? []),
      ...effectsOf(attacker, 'riderCondition'),
    ];
    for (const r of riders) {
      if (r.chance != null && !ctx.rng.chance(r.chance)) continue;
      const saved = savingThrow(ctx, defender, r.save ?? 'con', r.dc ?? 12);
      if (!saved) addCondition(ctx, defender, r.condition, r.duration ?? 2, attacker);
    }
  }

  // ladrão de vida
  for (const e of effectsOf(attacker, 'lifesteal')) {
    const amt = Math.floor(result.total * e.fraction);
    if (amt > 0) {
      heal(ctx, attacker, amt);
      ctx.log(t('log.lifesteal', { name: attacker.name, n: amt }), 'special');
    }
  }

  // espinhos do defensor (apenas corpo a corpo)
  if (isMelee && defender.alive !== false) {
    for (const e of effectsOf(defender, 'thorns')) {
      const r = rollDice(ctx.rng, e.dice);
      ctx.log(t('log.thorns', { name: defender.name, n: r.total }), 'special');
      dealDamage(ctx, attacker, [{ amount: r.total, type: e.element ?? 'perfurante' }], defender);
    }
  }

  return { hit: true, crit: isCrit, damage: result.total, died: result.died };
}
