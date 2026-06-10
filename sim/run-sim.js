// Simulação headless: joga a campanha COMPLETA (50 batalhas + chefe final)
// com a Frosty no piloto automático, em múltiplas seeds.
// Valida: jogabilidade fim-a-fim, balanceamento, ausência de crashes.
// Uso: npm run sim [-- --seeds 3 --smoke]

import { Game } from '../src/game/state.js';
import { applyAsi } from '../src/data/frosty.js';
import { heroAutoTurn, autoAsi, autoShop } from '../src/game/autoplay.js';
import { POTIONS, UPGRADES } from '../src/data/items.js';
import { TOTAL_BATTLES } from '../src/data/campaign.js';
import { ENEMIES } from '../src/data/enemies.js';
import { ADJECTIVES } from '../src/data/adjectives.js';
import { buildEnemy, buildHeroUnit, resetUnitIds } from '../src/core/unit.js';
import { abilitiesForLevel } from '../src/data/abilities.js';
import { newHeroState, recomputeHero } from '../src/data/frosty.js';
import { Battle } from '../src/game/battle.js';
import { Grid } from '../src/game/grid.js';
import { RNG } from '../src/core/rng.js';

const args = process.argv.slice(2);
const SEEDS = +(args[args.indexOf('--seeds') + 1] || 3);
const SMOKE = args.includes('--smoke');
const MAX_ENDLESS = +(args[args.indexOf('--endless') + 1] || 0);

// ---------------------------------------------------------------
// PARTE 1: smoke test — cada inimigo e cada adjetivo em combate real
// ---------------------------------------------------------------
function smokeBattle(rng, enemies, heroLevel = 10) {
  resetUnitIds();
  const hs = recomputeHero(Object.assign(newHeroState(), { level: heroLevel, xp: 0 }));
  hs.hp = hs.maxHp;
  const heroUnit = buildHeroUnit(hs, abilitiesForLevel(heroLevel));
  const grid = new Grid(9, 9);
  heroUnit.pos = { x: 4, y: 7 };
  enemies.forEach((e, i) => { e.pos = { x: 2 + (i * 2) % 6, y: 1 + Math.floor(i / 3) }; });
  const battle = new Battle({ hero: heroUnit, enemies, grid, rng, battleIndex: 1, zone: { pt: 'Teste' } });
  battle.heroState = hs;
  battle.start();
  let guard = 0;
  while (battle.state === 'active' && guard++ < 300) {
    if (battle.isPlayerTurn()) heroAutoTurn(battle);
    battle.drainEvents();
  }
  if (battle.state === 'active') throw new Error('smoke battle travou');
  return battle.state;
}

if (SMOKE) {
  console.log('\n=== SMOKE TEST: todos os inimigos ===');
  const rng = new RNG(42);
  let tested = 0;
  for (const base of ENEMIES) {
    try {
      smokeBattle(rng, [buildEnemy(rng, base, [], {})], Math.min(30, base.tier * 6));
      tested++;
    } catch (ex) {
      console.error(`❌ inimigo ${base.id}: ${ex.message}`);
      process.exit(1);
    }
  }
  console.log(`✅ ${tested} inimigos testados em batalha real`);

  console.log('\n=== SMOKE TEST: todos os adjetivos ===');
  const goblin = ENEMIES.find((e) => e.id === 'goblin');
  const ogro = ENEMIES.find((e) => e.id === 'ogro');
  tested = 0;
  for (const adj of ADJECTIVES) {
    try {
      smokeBattle(rng, [
        buildEnemy(rng, goblin, [adj], {}),
        buildEnemy(rng, ogro, [adj], {}),
      ], 8);
      tested++;
    } catch (ex) {
      console.error(`❌ adjetivo ${adj.id}: ${ex.message}`);
      console.error(ex.stack);
      process.exit(1);
    }
  }
  console.log(`✅ ${tested} adjetivos testados em batalha real`);
}

// ---------------------------------------------------------------
// PARTE 2: campanha completa multi-seed
// ---------------------------------------------------------------
console.log(`\n=== SIMULAÇÃO DE CAMPANHA COMPLETA (${SEEDS} seeds) ===`);

const results = [];
for (let s = 0; s < SEEDS; s++) {
  const seed = 1000 + s * 7919;
  const game = new Game(seed);
  const stats = { seed, deaths: 0, battles: 0, rounds: 0, t0: Date.now(), zoneDeaths: {} };
  let watchdog = 0;

  while (!game.campaignComplete && watchdog++ < 400) {
    const battle = game.startBattle();
    let guard = 0;
    while (battle.state === 'active' && guard++ < 400) {
      if (battle.isPlayerTurn()) heroAutoTurn(battle);
      battle.drainEvents();
    }
    if (battle.state === 'active') {
      console.error(`  ⚠️ seed ${seed}: batalha ${game.battleIndex} excedeu guard (round ${battle.round})`);
      battle.state = 'defeat';
    }
    stats.rounds += battle.round;
    stats.battles++;

    if (battle.state === 'victory') {
      const summary = game.collectVictory();
      autoAsi(game.hero, (h, a, b) => applyAsi(h, a, b));
      autoShop(game.hero, { POTIONS, UPGRADES });
      if (summary.wasBoss) {
        console.log(`  seed ${seed} | 🏰 CHEFE batalha ${summary.battleIndex} vencido | nível ${game.hero.level} | mortes ${stats.deaths}`);
      }
    } else {
      stats.deaths++;
      const z = Math.ceil(game.battleIndex / 10);
      stats.zoneDeaths[z] = (stats.zoneDeaths[z] ?? 0) + 1;
      game.collectDefeat();
      autoShop(game.hero, { POTIONS, UPGRADES });
    }
  }

  const ms = Date.now() - stats.t0;
  const r = {
    seed,
    complete: game.campaignComplete,
    level: game.hero.level,
    deaths: stats.deaths,
    battles: stats.battles,
    avgRounds: (stats.rounds / stats.battles).toFixed(1),
    gold: game.hero.gold,
    kills: game.hero.statsTotal.kills,
    bestiaryEnemies: game.bestiary.enemies.size,
    bestiaryAdjectives: game.bestiary.adjectives.size,
    zoneDeaths: stats.zoneDeaths,
    ms,
  };
  results.push(r);
  console.log(`  seed ${seed}: ${r.complete ? '✅ CAMPANHA COMPLETA' : '❌ INCOMPLETA'} | nível final ${r.level} | ${r.deaths} derrotas | ${r.battles} batalhas | ${r.avgRounds} rounds/batalha | ${r.kills} abates | bestiário ${r.bestiaryEnemies} inimigos/${r.bestiaryAdjectives} adjetivos | ${(ms / 1000).toFixed(1)}s`);
  if (Object.keys(r.zoneDeaths).length) console.log(`    derrotas por zona: ${JSON.stringify(r.zoneDeaths)}`);

  // modo infinito opcional
  if (MAX_ENDLESS > 0 && game.campaignComplete) {
    let endlessWins = 0;
    for (let i = 0; i < MAX_ENDLESS; i++) {
      const battle = game.startBattle();
      let guard = 0;
      while (battle.state === 'active' && guard++ < 400) {
        if (battle.isPlayerTurn()) heroAutoTurn(battle);
        battle.drainEvents();
      }
      if (battle.state === 'victory') { endlessWins++; game.collectVictory(); autoShop(game.hero, { POTIONS, UPGRADES }); autoAsi(game.hero, (h, a, b) => applyAsi(h, a, b)); }
      else { game.collectDefeat(); }
    }
    console.log(`    modo infinito: ${endlessWins}/${MAX_ENDLESS} vitórias até batalha ${game.battleIndex - 1} (nível ${game.hero.level})`);
  }
}

// ---------------------------------------------------------------
// veredito
// ---------------------------------------------------------------
console.log('\n=== VEREDITO ===');
let fail = false;
const allComplete = results.every((r) => r.complete);
if (allComplete) console.log('✅ Todas as seeds completaram a campanha (50 batalhas + chefe final)');
else { console.error('❌ Alguma seed não completou a campanha'); fail = true; }

const avgDeaths = results.reduce((s, r) => s + r.deaths, 0) / results.length;
if (avgDeaths <= 20) console.log(`✅ Média de derrotas aceitável: ${avgDeaths.toFixed(1)} (desafio presente, sem frustração)`);
else { console.error(`❌ Derrotas demais: ${avgDeaths.toFixed(1)} — precisa rebalancear`); fail = true; }
if (avgDeaths < 0.5) console.log(`  ⚠️ jogo talvez fácil demais (${avgDeaths.toFixed(1)} derrotas) — aceitável para autoplay otimizado`);

const levels = results.map((r) => r.level);
const minL = Math.min(...levels), maxL = Math.max(...levels);
if (minL >= 18 && maxL <= 34) console.log(`✅ Nível final na faixa esperada (18-34): ${minL}-${maxL}`);
else { console.error(`❌ Nível final fora da faixa (18-34): ${minL}-${maxL} — ajustar curva de XP`); fail = true; }

const avgRounds = results.reduce((s, r) => s + +r.avgRounds, 0) / results.length;
if (avgRounds >= 3 && avgRounds <= 15) console.log(`✅ Duração média de batalha: ${avgRounds.toFixed(1)} rounds`);
else { console.error(`❌ Batalhas muito ${avgRounds < 3 ? 'curtas' : 'longas'}: ${avgRounds.toFixed(1)} rounds`); fail = true; }

process.exit(fail ? 1 : 0);
