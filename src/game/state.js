// Máquina de estados do jogo: campanha, batalhas, recompensas, bestiário.

import { RNG, seedFromString } from '../core/rng.js';
import { newHeroState, recomputeHero, gainXp } from '../data/frosty.js';
import { buildHeroUnit, resetUnitIds } from '../core/unit.js';
import { abilitiesForLevel } from '../data/abilities.js';
import { generateEncounter, placeUnits } from './encounter.js';
import { generateMap } from './grid.js';
import { Battle } from './battle.js';
import { zoneForBattle, TOTAL_BATTLES } from '../data/campaign.js';
import { saveGame } from './saveload.js';

export class Game {
  constructor(seed = Date.now()) {
    this.seed = seed >>> 0;
    this.rng = new RNG(this.seed);
    this.hero = recomputeHero(newHeroState());
    this.battleIndex = 1;
    this.battle = null;
    this.bestiary = { enemies: new Set(), adjectives: new Set() };
    this.campaignComplete = false;
    this.totalPlayTimeMs = 0;
    this.deaths = 0;
  }

  get zone() {
    return zoneForBattle(this.battleIndex);
  }

  get isEndless() {
    return this.battleIndex > TOTAL_BATTLES;
  }

  startBattle() {
    resetUnitIds();
    const battleRng = new RNG((this.seed ^ seedFromString(`battle${this.battleIndex}:${this.deaths}`)) >>> 0);
    const { zone, boss, enemies, endless } = generateEncounter(battleRng, this.battleIndex, this.hero.level);
    const grid = generateMap(battleRng, zone, this.battleIndex);

    const heroUnit = buildHeroUnit(this.hero, abilitiesForLevel(this.hero.level));
    placeUnits(battleRng, grid, heroUnit, enemies);

    // registra no bestiário
    for (const e of enemies) {
      this.bestiary.enemies.add(e.baseId);
      for (const id of e.adjectiveIds) this.bestiary.adjectives.add(id);
    }

    this.battle = new Battle({
      hero: heroUnit, enemies, grid, rng: battleRng,
      battleIndex: this.battleIndex, zone,
    });
    this.battle.heroState = this.hero;
    this.battle.isBossBattle = boss;
    this.battle.isEndless = endless;
    this.battle.start();
    return this.battle;
  }

  // Chamar quando battle.state === 'victory'. Retorna resumo p/ a UI.
  collectVictory() {
    const b = this.battle;
    // Frosty descansa entre batalhas: recuperação completa (estilo FFT)
    this.hero.hp = this.hero.maxHp;
    this.hero.gold += b.goldEarned;
    this.hero.statsTotal.kills += b.killCount;
    this.hero.statsTotal.battles++;
    this.hero.statsTotal.damageDealt += b.xpEarned; // aproximação narrativa

    const levelsBefore = this.hero.level;
    const levelsGained = gainXp(this.hero, b.xpEarned);
    const summary = {
      battleIndex: this.battleIndex,
      xp: b.xpEarned, gold: b.goldEarned, kills: b.killCount,
      levelsGained, levelBefore: levelsBefore, levelAfter: this.hero.level,
      pendingAsi: this.hero.pendingAsi,
      wasBoss: b.isBossBattle,
      zoneCleared: b.isBossBattle ? b.zone : null,
    };

    if (this.battleIndex === TOTAL_BATTLES) this.campaignComplete = true;
    this.battleIndex++;
    this.battle = null;
    saveGame(this);
    return summary;
  }

  // Derrota: Frosty recua, recupera-se e tenta de novo (perde um pouco de ouro).
  collectDefeat() {
    this.deaths++;
    const lost = Math.floor(this.hero.gold * 0.1);
    this.hero.gold -= lost;
    this.hero.hp = this.hero.maxHp;
    this.battle = null;
    saveGame(this);
    return { goldLost: lost, battleIndex: this.battleIndex };
  }

  fullHeal() {
    this.hero.hp = this.hero.maxHp;
  }
}
