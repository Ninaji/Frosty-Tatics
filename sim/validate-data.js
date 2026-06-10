// Validação de integridade dos dados do jogo.
// Roda em Node: npm run validate

import { ENEMIES, ENEMY_BY_ID } from '../src/data/enemies.js';
import { ADJECTIVES } from '../src/data/adjectives.js';
import { CONDITIONS } from '../src/core/conditions.js';
import { DAMAGE_TYPES } from '../src/core/damage.js';
import { parseDice } from '../src/core/dice.js';
import { FROSTY_ABILITIES, FROSTY_PASSIVES } from '../src/data/abilities.js';
import { ZONES } from '../src/data/campaign.js';
import { POTIONS, UPGRADES } from '../src/data/items.js';

const KNOWN_EFFECTS = new Set([
  'stat', 'extraDamage', 'riderCondition', 'auraDamage', 'auraSlow', 'regen',
  'lifesteal', 'thorns', 'onDeathExplode', 'onDeathSplit', 'onDeathCurse',
  'onDeathHealAllies', 'resistance', 'immunity', 'vulnerability', 'conditionImmunity',
  'critRange', 'multiattack', 'rerollOnes', 'dodge', 'flying', 'phasing',
  'initiativeBonus', 'accuracy', 'saveBonus', 'behavior', 'rageBelow',
  'executioner', 'firstBlood', 'blinkOnHit', 'elementConvert', 'killHeal',
  'packTactics', 'sturdy', 'reach', 'slippery', 'evasive', 'loneWolf', 'startWounded',
]);

const KNOWN_BEHAVIORS = new Set(['agressivo', 'atirador', 'covarde', 'guardiao', 'preguicoso', 'emboscador']);

let errors = 0;
const err = (msg) => { errors++; console.error('  ❌', msg); };
const ok = (msg) => console.log('  ✅', msg);

console.log('\n=== VALIDAÇÃO DE DADOS — Frosty Tactics ===\n');

// ---------- adjetivos ----------
console.log(`Adjetivos: ${ADJECTIVES.length}`);
if (ADJECTIVES.length >= 200) ok(`${ADJECTIVES.length} adjetivos (meta: ≥200)`);
else err(`apenas ${ADJECTIVES.length} adjetivos (meta: ≥200)`);

const adjIds = new Set();
const adjNames = new Set();
for (const a of ADJECTIVES) {
  if (adjIds.has(a.id)) err(`adjetivo id duplicado: ${a.id}`);
  adjIds.add(a.id);
  if (adjNames.has(a.m)) err(`adjetivo nome duplicado: ${a.m}`);
  adjNames.add(a.m);
  if (!a.f) err(`adjetivo sem forma feminina: ${a.id}`);
  if (![1, 2, 3].includes(a.tier)) err(`adjetivo tier inválido: ${a.id}`);
  if (!a.desc) err(`adjetivo sem descrição: ${a.id}`);
  let hasMechanical = false;
  for (const e of a.effects) {
    if (!KNOWN_EFFECTS.has(e.type)) err(`adjetivo ${a.id}: efeito desconhecido '${e.type}'`);
    if (e.type !== 'stat' || Object.keys(e).some((k) => k !== 'type' && k !== 'xpMult')) hasMechanical = true;
    validateEffect(a.id, e);
  }
  if (!hasMechanical) err(`adjetivo ${a.id} não tem efeito mecânico além de xp`);
}
ok('IDs e nomes de adjetivos únicos, todos com efeito mecânico');

function validateEffect(owner, e) {
  try {
    if (e.dice) parseDice(e.dice);
    if (e.type === 'extraDamage' && !DAMAGE_TYPES.includes(e.element)) err(`${owner}: elemento inválido ${e.element}`);
    if (e.type === 'riderCondition' && !CONDITIONS[e.condition]) err(`${owner}: condição inválida ${e.condition}`);
    if (e.type === 'onDeathCurse' && !CONDITIONS[e.condition]) err(`${owner}: condição inválida ${e.condition}`);
    if (e.type === 'conditionImmunity') for (const c of e.conditions) if (!CONDITIONS[c]) err(`${owner}: condição inválida ${c}`);
    if (['resistance', 'immunity', 'vulnerability'].includes(e.type)) {
      for (const t of e.types) if (!DAMAGE_TYPES.includes(t)) err(`${owner}: tipo de dano inválido ${t}`);
    }
    if (e.type === 'behavior' && !KNOWN_BEHAVIORS.has(e.kind)) err(`${owner}: comportamento inválido ${e.kind}`);
  } catch (ex) {
    err(`${owner}: ${ex.message}`);
  }
}

// ---------- inimigos ----------
console.log(`\nInimigos: ${ENEMIES.length}`);
if (ENEMIES.length >= 100) ok(`${ENEMIES.length} inimigos base (meta: ≥100)`);
else err(`apenas ${ENEMIES.length} inimigos (meta: ≥100)`);

const enemyNames = new Set();
for (const e of ENEMIES) {
  if (enemyNames.has(e.pt)) err(`inimigo nome duplicado: ${e.pt}`);
  enemyNames.add(e.pt);
  try { parseDice(e.hp); } catch { err(`inimigo ${e.id}: hp inválido '${e.hp}'`); }
  if (!e.attacks?.length) err(`inimigo ${e.id} sem ataques`);
  for (const a of e.attacks ?? []) {
    try { parseDice(a.dice); } catch { err(`inimigo ${e.id}: dado de ataque inválido`); }
    if (!DAMAGE_TYPES.includes(a.dtype)) err(`inimigo ${e.id}: tipo de dano inválido ${a.dtype}`);
    for (const x of a.extraDamage ?? []) {
      try { parseDice(x.dice); } catch { err(`inimigo ${e.id}: extraDamage inválido`); }
      if (!DAMAGE_TYPES.includes(x.element)) err(`inimigo ${e.id}: elemento inválido ${x.element}`);
    }
    for (const r of a.riders ?? []) if (!CONDITIONS[r.condition]) err(`inimigo ${e.id}: rider inválido ${r.condition}`);
  }
  for (const t of e.traits ?? []) {
    if (!KNOWN_EFFECTS.has(t.type)) err(`inimigo ${e.id}: traço desconhecido '${t.type}'`);
    validateEffect(e.id, t);
  }
  for (const s of e.specials ?? []) {
    if (!['smite', 'blast', 'heal', 'buff', 'debuff', 'summon'].includes(s.kind)) err(`inimigo ${e.id}: special inválido ${s.kind}`);
    if (s.dice) { try { parseDice(s.dice); } catch { err(`inimigo ${e.id}: special dado inválido`); } }
    if (s.kind === 'summon' && !ENEMY_BY_ID.has(s.summonId)) err(`inimigo ${e.id}: summon de id inexistente ${s.summonId}`);
    if ((s.kind === 'buff' || s.kind === 'debuff') && !CONDITIONS[s.condition]) err(`inimigo ${e.id}: condição inválida ${s.condition}`);
  }
  for (const arr of [e.resist, e.vuln, e.immune]) {
    for (const t of arr ?? []) if (!DAMAGE_TYPES.includes(t)) err(`inimigo ${e.id}: tipo inválido ${t}`);
  }
  for (const c of e.condImmune ?? []) if (!CONDITIONS[c]) err(`inimigo ${e.id}: condImmune inválida ${c}`);
  if (!e.visual?.body) err(`inimigo ${e.id} sem visual.body`);
  if (!e.xp) err(`inimigo ${e.id} sem xp`);
  if (!['m', 'f'].includes(e.gender)) err(`inimigo ${e.id} sem gênero válido`);
  if (!KNOWN_BEHAVIORS.has(e.behavior)) err(`inimigo ${e.id}: comportamento inválido ${e.behavior}`);
}
ok('Todos os inimigos com dados íntegros');

const byTier = {};
for (const e of ENEMIES) byTier[e.tier] = (byTier[e.tier] ?? 0) + 1;
console.log('  Distribuição por tier:', JSON.stringify(byTier));
for (let t = 1; t <= 5; t++) if (!byTier[t]) err(`nenhum inimigo de tier ${t}`);

// ---------- zonas ----------
console.log(`\nZonas: ${ZONES.length}`);
for (const z of ZONES) {
  if (!ENEMY_BY_ID.has(z.boss)) err(`zona ${z.id}: chefe inexistente ${z.boss}`);
  for (const m of z.bossMinions ?? []) if (!ENEMY_BY_ID.has(m)) err(`zona ${z.id}: lacaio inexistente ${m}`);
  const families = new Set(ENEMIES.map((e) => e.family));
  for (const f of z.families) if (!families.has(f)) err(`zona ${z.id}: família inexistente ${f}`);
  // pool viável?
  const pool = ENEMIES.filter((e) => !e.boss && z.families.includes(e.family) && e.tier <= z.tier && e.tier >= Math.max(1, z.tier - 2));
  if (pool.length < 5) err(`zona ${z.id}: pool de inimigos pequeno demais (${pool.length})`);
}
ok('Zonas válidas com chefes e pools de inimigos');

// ---------- habilidades / itens ----------
console.log(`\nHabilidades da Frosty: ${FROSTY_ABILITIES.length} ativas, ${FROSTY_PASSIVES.length} passivas`);
for (const a of FROSTY_ABILITIES) {
  if (a.dice) { try { parseDice(a.dice); } catch { err(`habilidade ${a.id}: dado inválido`); } }
  for (const r of a.riders ?? []) if (!CONDITIONS[r.condition]) err(`habilidade ${a.id}: rider inválido`);
  if (a.condition && !CONDITIONS[a.condition]) err(`habilidade ${a.id}: condição inválida`);
  for (const sc of a.selfConditions ?? []) if (!CONDITIONS[sc.condition]) err(`habilidade ${a.id}: selfCondition inválida`);
}
for (const p of Object.values(POTIONS)) {
  if (p.healDice) { try { parseDice(p.healDice); } catch { err(`poção ${p.id}: dado inválido`); } }
  if (p.condition && !CONDITIONS[p.condition]) err(`poção ${p.id}: condição inválida`);
}
ok('Habilidades e itens válidos');

// ---------- i18n: completude EN + paridade de dicionários ----------
console.log('\nInternacionalização (EN):');
const { PT, EN } = await import('../src/i18n.js');
const i18nEn = await import('../src/data/i18n-en.js');

const ptKeys = new Set(Object.keys(PT));
const enKeys = new Set(Object.keys(EN));
for (const k of ptKeys) if (!enKeys.has(k)) err(`chave de UI sem EN: ${k}`);
for (const k of enKeys) if (!ptKeys.has(k)) err(`chave de UI sem PT: ${k}`);
ok(`Dicionários de UI com paridade (${ptKeys.size} chaves)`);

for (const e of ENEMIES) {
  const tr = i18nEn.EN_ENEMIES[e.id];
  if (!tr?.name) { err(`inimigo sem tradução EN: ${e.id}`); continue; }
  if ((tr.attacks?.length ?? 0) < e.attacks.length) err(`inimigo ${e.id}: ataques EN incompletos`);
  if ((e.specials?.length ?? 0) > (tr.specials?.length ?? 0)) err(`inimigo ${e.id}: specials EN incompletos`);
}
ok(`${ENEMIES.length} inimigos com nome/ataques/specials em EN`);

for (const a of ADJECTIVES) {
  const tr = i18nEn.EN_ADJECTIVES[a.id];
  if (!tr?.name) err(`adjetivo sem tradução EN: ${a.id}`);
  else if (!tr.desc) err(`adjetivo sem descrição EN: ${a.id}`);
}
const enAdjNames = Object.values(i18nEn.EN_ADJECTIVES).map((x) => x.name);
const dupEn = [...new Set(enAdjNames.filter((n, i) => enAdjNames.indexOf(n) !== i))];
if (dupEn.length) err(`nomes EN de adjetivos duplicados: ${dupEn.join(', ')}`);
ok(`${ADJECTIVES.length} adjetivos com nome+descrição EN únicos`);

for (const a of FROSTY_ABILITIES) if (!i18nEn.EN_ABILITIES[a.id]?.name || !i18nEn.EN_ABILITIES[a.id]?.desc) err(`habilidade sem EN: ${a.id}`);
for (const p of FROSTY_PASSIVES) if (!i18nEn.EN_PASSIVES[p.id]?.name || !i18nEn.EN_PASSIVES[p.id]?.desc) err(`passiva sem EN: ${p.id}`);
for (const z of ZONES) if (!i18nEn.EN_ZONES[z.id]?.name || !i18nEn.EN_ZONES[z.id]?.intro) err(`zona sem EN: ${z.id}`);
for (const p of Object.values(POTIONS)) if (!i18nEn.EN_POTIONS[p.id]?.name) err(`poção sem EN: ${p.id}`);
for (const u of Object.values(UPGRADES)) if (!i18nEn.EN_UPGRADES[u.id]?.name) err(`melhoria sem EN: ${u.id}`);
const { CONDITIONS: CONDS } = await import('../src/core/conditions.js');
for (const c of Object.values(CONDS)) if (!c.en || !c.descEn) err(`condição sem EN: ${c.id}`);
for (const d of DAMAGE_TYPES) {
  if (!i18nEn.EN_DAMAGE[d]) err(`tipo de dano sem EN: ${d}`);
  if (!i18nEn.PT_DAMAGE[d]) err(`tipo de dano sem display PT: ${d}`);
}
ok('Habilidades, passivas, zonas, itens, condições e tipos de dano em EN');

// amostra de nomes EN compostos
{
  const { setLocale, getLocale } = await import('../src/i18n.js');
  const { composeLocalizedName } = await import('../src/i18n-data.js');
  const prev = getLocale();
  setLocale('en');
  const samples = [
    [ENEMY_BY_ID.get('goblin'), [ADJECTIVES.find((a) => a.id === 'flamejante'), ADJECTIVES.find((a) => a.id === 'gigante')]],
    [ENEMY_BY_ID.get('aranha'), [ADJECTIVES.find((a) => a.id === 'venenoso')]],
    [ENEMY_BY_ID.get('mumia'), [ADJECTIVES.find((a) => a.id === 'anciao')]],
  ];
  console.log('  Amostras EN:');
  for (const [base, adjs] of samples) console.log(`    → ${composeLocalizedName(base, adjs)}`);
  setLocale(prev);
}

// ---------- trilha sonora ----------
console.log('\nTrilha sonora:');
{
  const { TRACKS, trackForBattle } = await import('../src/audio/tracks.js');
  const ids = Object.keys(TRACKS);
  if (ids.length === 10) ok('10 faixas (5 zonas + 5 chefes)');
  else err(`esperava 10 faixas, há ${ids.length}`);
  for (let z = 1; z <= 5; z++) {
    if (!TRACKS[`zone${z}`]) err(`faixa da zona ${z} ausente`);
    if (!TRACKS[`zone${z}boss`]) err(`faixa do chefe da zona ${z} ausente`);
    if (trackForBattle(z, false) !== `zone${z}` || trackForBattle(z, true) !== `zone${z}boss`) {
      err(`mapeamento de faixa errado para zona ${z}`);
    }
  }
  for (const [id, tr] of Object.entries(TRACKS)) {
    if (tr.parts.length !== 5) err(`faixa ${id}: ${tr.parts.length} partes (esperava 5 — loop 5→1)`);
    if (!(tr.bpm >= 60 && tr.bpm <= 200)) err(`faixa ${id}: bpm fora da faixa (${tr.bpm})`);
    if (!Array.isArray(tr.mode) || tr.mode.length !== 7) err(`faixa ${id}: modo inválido`);
    tr.parts.forEach((p, i) => {
      if (!(p.bars >= 4 && p.bars <= 16)) err(`faixa ${id} parte ${i + 1}: bars inválido`);
      if (!Array.isArray(p.chords) || p.chords.length === 0) err(`faixa ${id} parte ${i + 1}: sem acordes`);
      const maxStep = p.bars * 16;
      for (const n of p.lead ?? []) {
        const [deg, oct, start, len] = n;
        if (start < 0 || start >= maxStep) err(`faixa ${id} parte ${i + 1}: nota fora da parte (start ${start})`);
        if (len <= 0) err(`faixa ${id} parte ${i + 1}: nota com duração inválida`);
        if (typeof deg !== 'number' || typeof oct !== 'number') err(`faixa ${id} parte ${i + 1}: nota malformada`);
      }
      if (typeof p.intensity !== 'number' || p.intensity <= 0 || p.intensity > 1) err(`faixa ${id} parte ${i + 1}: intensidade inválida`);
    });
  }
  const total = Object.values(TRACKS).reduce((s, tr) => s + tr.parts.reduce((q, p) => q + p.bars * (60 / tr.bpm) * 4, 0), 0);
  ok(`Estrutura das 10 faixas válida (loop total ≈ ${Math.round(total / 60)} min de música original)`);
}

// ---------- combinações nome PT ----------
console.log('\nAmostras de nomes gerados:');
import('../src/core/unit.js').then(({ composeName }) => {
  const samples = [
    [ENEMY_BY_ID.get('aranha'), [ADJECTIVES.find((a) => a.id === 'venenoso')]],
    [ENEMY_BY_ID.get('goblin'), [ADJECTIVES.find((a) => a.id === 'flamejante'), ADJECTIVES.find((a) => a.id === 'gigante')]],
    [ENEMY_BY_ID.get('mumia'), [ADJECTIVES.find((a) => a.id === 'anciao')]],
    [ENEMY_BY_ID.get('lobo'), [ADJECTIVES.find((a) => a.id === 'sortudo')]],
    [ENEMY_BY_ID.get('pantera'), [ADJECTIVES.find((a) => a.id === 'gelido')]],
  ];
  for (const [base, adjs] of samples) {
    console.log(`  → ${composeName(base, adjs)}`);
  }

  console.log(`\nCombinações possíveis: ${ENEMIES.length} inimigos × ${ADJECTIVES.length} adjetivos = ${(ENEMIES.length * ADJECTIVES.length).toLocaleString('pt-BR')} variantes de 1 adjetivo`);
  console.log(`(sem contar combinações de 2-3 adjetivos: milhões de variantes)\n`);

  if (errors > 0) {
    console.error(`\n❌ ${errors} erro(s) de validação!\n`);
    process.exit(1);
  } else {
    console.log('✅ VALIDAÇÃO COMPLETA: todos os dados íntegros!\n');
  }
});
