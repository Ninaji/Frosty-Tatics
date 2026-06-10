// Controlador de batalha: iniciativa, turnos, ações do jogador, IA inimiga,
// auras, perigos de terreno, ataques de oportunidade, vitória/derrota.

import { rollD20, rollDice } from '../core/dice.js';
import { mod } from '../core/stats.js';
import {
  resolveAttack, dealDamage, heal, addCondition, removeCondition,
  effectiveSpeed, canAct, savingThrow, previewAttack,
} from '../core/combat.js';
import { conditionDef } from '../core/conditions.js';
import { effectsOf, hasEffect, sumEffect } from '../core/effects.js';
import { TERRAIN, reachable, freeAdjacentTiles, chebyshev, lineTiles } from './grid.js';
import { buildEnemy } from '../core/unit.js';
import { ENEMY_BY_ID } from '../data/enemies.js';
import { POTIONS, NEGATIVE_CONDITIONS } from '../data/items.js';
import { runEnemyTurn } from './ai.js';

export class Battle {
  constructor({ hero, enemies, grid, rng, battleIndex = 1, zone = null }) {
    this.hero = hero;
    this.units = [hero, ...enemies];
    this.grid = grid;
    this.rng = rng;
    this.battleIndex = battleIndex;
    this.zone = zone;
    this.round = 0;
    this.state = 'setup'; // setup | active | victory | defeat
    this.events = [];
    this.logLines = [];
    this.turnOrder = [];
    this.activeIdx = -1;
    this.xpEarned = 0;
    this.goldEarned = 0;
    this.killCount = 0;
    this.potionUsedThisTurn = false;

    this.ctx = {
      rng: this.rng,
      battle: this,
      log: (msg, cls = 'info') => {
        this.logLines.push({ msg, cls });
        this.events.push({ type: 'log', msg, cls });
      },
      event: (e) => this.events.push(e),
    };
  }

  // ---------- setup ----------

  occupiedMap() {
    const m = new Map();
    for (const u of this.units) if (u.alive) m.set(`${u.pos.x},${u.pos.y}`, u);
    return m;
  }

  refreshDerived(u) {
    u._flying = hasEffect(u, 'flying');
    u._phasing = u._flying || hasEffect(u, 'phasing');
    u._slippery = hasEffect(u, 'slippery');
    u._reach = Math.max(1, ...effectsOf(u, 'reach').map((e) => e.value));
    u._speed = effectiveSpeed(u);
  }

  start() {
    for (const u of this.units) {
      this.refreshDerived(u);
      // adjetivo "ferido": começa machucado
      for (const e of effectsOf(u, 'startWounded')) {
        u.hp = Math.max(1, Math.floor(u.maxHp * e.fraction));
      }
      const init = rollD20(this.rng).value + mod(u.dex) + sumEffect(u, 'initiativeBonus', 'value');
      u.initiative = init + (u.kind === 'hero' ? 0.5 : 0);
    }
    this.turnOrder = [...this.units].sort((a, b) => b.initiative - a.initiative);
    this.state = 'active';
    this.round = 1;
    this.ctx.event({ type: 'battleStart', battleIndex: this.battleIndex });
    this.ctx.log(`⚔️ Batalha ${this.battleIndex} — ${this.zone?.pt ?? ''}`, 'title');
    this.nextTurn();
  }

  get activeUnit() {
    return this.turnOrder[this.activeIdx] ?? null;
  }

  isPlayerTurn() {
    return this.state === 'active' && this.activeUnit?.kind === 'hero';
  }

  // ---------- fluxo de turnos ----------

  nextTurn() {
    if (this.state !== 'active') return;
    // procura a próxima unidade viva
    for (let i = 0; i < this.turnOrder.length + 1; i++) {
      this.activeIdx++;
      if (this.activeIdx >= this.turnOrder.length) {
        this.activeIdx = -1;
        this.round++;
        if (this.round > 150) {
          // salvaguarda: batalha emperrada conta como derrota tática (recuo)
          this.state = 'defeat';
          this.ctx.log('A batalha se arrasta sem fim — Frosty recua para se reagrupar.', 'death');
          this.ctx.event({ type: 'defeat' });
          return;
        }
        this.ctx.event({ type: 'roundStart', round: this.round });
        this.nextTurn();
        return;
      }
      const u = this.activeUnit;
      if (u && u.alive) {
        this.beginTurn(u);
        return;
      }
    }
  }

  beginTurn(u) {
    this.refreshDerived(u);
    u.movementLeft = u._speed;
    u.actionsLeft = 1;
    u.reactionUsed = false;
    this.potionUsedThisTurn = false;
    this.ctx.event({ type: 'turnStart', unitId: u.id, round: this.round });

    // regeneração
    for (const e of effectsOf(u, 'regen')) {
      if (u.hp < u.maxHp) heal(this.ctx, u, rollDice(this.rng, e.dice).total);
    }
    // condições: dano por turno + cura por turno
    for (const [id, data] of [...u.conditions]) {
      const def = conditionDef(id);
      if (def.tickDamage) {
        const r = rollDice(this.rng, def.tickDamage.dice);
        this.ctx.log(`${u.name} sofre com ${def.pt}.`, 'condition');
        dealDamage(this.ctx, u, [{ amount: r.total, type: def.tickDamage.type }], data.source);
        if (!u.alive) { if (this.state === 'active') this.endTurnFor(u); return; }
      }
      if (def.tickHeal) heal(this.ctx, u, rollDice(this.rng, def.tickHeal).total);
    }
    // perigo do terreno (parado nele)
    this.applyTileHazard(u, false);
    if (!u.alive) { if (this.state === 'active') this.endTurnFor(u); return; }

    // auras inimigas (dano de aura de TODOS os oponentes próximos no início do turno da unidade)
    for (const other of this.units) {
      if (!other.alive || other.side === u.side) continue;
      for (const e of effectsOf(other, 'auraDamage')) {
        if (chebyshev(u.pos, other.pos) <= e.radius) {
          const r = rollDice(this.rng, e.dice);
          this.ctx.log(`${u.name} é atingido pela aura de ${other.name}!`, 'special');
          dealDamage(this.ctx, u, [{ amount: r.total, type: e.element }], other);
          if (!u.alive) { if (this.state === 'active') this.endTurnFor(u); return; }
        }
      }
      for (const e of effectsOf(other, 'auraSlow')) {
        if (chebyshev(u.pos, other.pos) <= e.radius && !u.conditions.has('lento')) {
          addCondition(this.ctx, u, 'lento', 1, other);
        }
      }
    }
    this.refreshDerived(u);
    u.movementLeft = u._speed;

    // cooldowns
    for (const [k, v] of [...u.cooldowns]) {
      if (v <= 1) u.cooldowns.delete(k);
      else u.cooldowns.set(k, v - 1);
    }

    // se não pode agir (congelado/atordoado), pula
    if (!canAct(u)) {
      this.ctx.log(`${u.name} não consegue agir!`, 'condition');
      this.endTurnFor(u);
      return;
    }

    if (u.kind !== 'hero') {
      // turno inimigo roda imediatamente (renderer anima pela fila de eventos)
      runEnemyTurn(this, u);
      if (this.state === 'active') this.endTurnFor(u);
    }
    // herói: aguarda input do jogador (ou autoplay)
  }

  endTurnFor(u) {
    if (this.state !== 'active') return;
    // testes para encerrar condições + duração
    for (const [id, data] of [...u.conditions]) {
      const def = conditionDef(id);
      let ended = false;
      if (def.saveEnds && u.alive) {
        if (savingThrow(this.ctx, u, def.saveEnds.ability, def.saveEnds.dc)) {
          removeCondition(this.ctx, u, id);
          this.ctx.log(`${u.name} se livra de ${def.pt}!`, 'info');
          ended = true;
        }
      }
      if (!ended) {
        data.duration--;
        if (data.duration <= 0) {
          removeCondition(this.ctx, u, id);
        }
      }
    }
    this.ctx.event({ type: 'turnEnd', unitId: u.id });
    this.nextTurn();
  }

  afterAction() {
    this.checkEnd();
    if (this.state !== 'active') return;
    const u = this.activeUnit;
    if (u && (!u.alive || (u.kind !== 'hero' && u.actionsLeft <= 0))) {
      // inimigos encerram via runEnemyTurn; aqui só protege contra mortes no próprio turno
    }
  }

  // ---------- consultas para UI/IA ----------

  livingEnemies(side = 'enemy') {
    return this.units.filter((u) => u.alive && u.side === side);
  }

  alliesOf(unit) {
    return this.units.filter((u) => u.alive && u.side === unit.side && u !== unit);
  }

  opponentsOf(unit) {
    return this.units.filter((u) => u.alive && u.side !== unit.side);
  }

  hasAdjacentAlly(unit) {
    return this.alliesOf(unit).some((a) => chebyshev(a.pos, unit.pos) <= 1);
  }

  allyAdjacentTo(attacker, defender) {
    return this.units.some(
      (u) => u.alive && u !== attacker && u.side === attacker.side && chebyshev(u.pos, defender.pos) <= 1
    );
  }

  unitAt(x, y) {
    return this.units.find((u) => u.alive && u.pos.x === x && u.pos.y === y) ?? null;
  }

  reachableFor(unit) {
    return reachable(this.grid, unit, this.occupiedMap(), { maxCost: unit.movementLeft });
  }

  attackRange(unit, attack) {
    return Math.max(attack.range ?? 1, (attack.range ?? 1) <= 1 ? unit._reach : attack.range);
  }

  targetsInRange(unit, attack) {
    const range = this.attackRange(unit, attack);
    return this.opponentsOf(unit).filter((t) => {
      const d = chebyshev(unit.pos, t.pos);
      if (d > range) return false;
      if (range <= unit._reach && !unit._flying && !t._flying) {
        const dh = Math.abs(this.grid.at(unit.pos.x, unit.pos.y).h - this.grid.at(t.pos.x, t.pos.y).h);
        if (dh > 2) return false; // corpo a corpo não alcança alturas muito diferentes
      }
      return true;
    });
  }

  heightAdvantage(attacker, defender) {
    const ha = this.grid.at(attacker.pos.x, attacker.pos.y).h;
    const hd = this.grid.at(defender.pos.x, defender.pos.y).h;
    return ha > hd ? 2 : 0;
  }

  previewFor(attacker, defender, attack) {
    return previewAttack(this.ctx, attacker, defender, attack, {});
  }

  // ---------- movimentação ----------

  // Move ao longo de um caminho; processa ataques de oportunidade e perigos.
  moveUnit(u, path, { provokes = true } = {}) {
    if (!path.length) return true;
    const stepEvents = [];
    let from = { ...u.pos };
    for (const step of path) {
      // ataque de oportunidade: sai da zona de ameaça de alguém?
      if (provokes && !u._slippery) {
        for (const enemy of this.opponentsOf(u)) {
          if (enemy.reactionUsed || !enemy.alive) continue;
          if (!enemy.attacks?.length) continue;
          const meleeRange = enemy._reach ?? 1;
          const wasAdjacent = chebyshev(from, enemy.pos) <= meleeRange;
          const stillAdjacent = chebyshev(step, enemy.pos) <= meleeRange;
          if (wasAdjacent && !stillAdjacent && canAct(enemy)) {
            enemy.reactionUsed = true;
            this.ctx.log(`${enemy.name} aproveita a brecha — ataque de oportunidade!`, 'special');
            this.ctx.event({ type: 'oa', attackerId: enemy.id, defenderId: u.id });
            resolveAttack(this.ctx, enemy, u, enemy.attacks[0]);
            if (!u.alive) { this.checkEnd(); return false; }
          }
        }
      }
      from = { ...step };
      u.pos = { x: step.x, y: step.y };
      stepEvents.push({ x: step.x, y: step.y });
      // perigo ao entrar
      if (!this.applyTileHazard(u, true)) { // morreu no perigo
        this.ctx.event({ type: 'move', unitId: u.id, path: stepEvents });
        this.checkEnd();
        return false;
      }
    }
    this.ctx.event({ type: 'move', unitId: u.id, path: stepEvents });
    return true;
  }

  applyTileHazard(u, entering) {
    if (u._flying) return true;
    const t = this.grid.at(u.pos.x, u.pos.y);
    const hz = TERRAIN[t.terrain].hazard;
    if (!hz) return true;
    if (hz.onEnterOnly && !entering) return true;
    const r = rollDice(this.rng, hz.dice);
    this.ctx.log(`${u.name} sofre com o terreno (${t.terrain})!`, 'condition');
    this.ctx.event({ type: 'hazard', unitId: u.id, terrain: t.terrain });
    dealDamage(this.ctx, u, [{ amount: r.total, type: hz.type }]);
    if (u.alive && hz.rider && !savingThrow(this.ctx, u, hz.rider.save, hz.rider.dc)) {
      addCondition(this.ctx, u, hz.rider.condition, 2);
    }
    if (!u.alive) this.checkEnd();
    return u.alive;
  }

  // ---------- ações do jogador ----------

  playerMove(destKey) {
    if (!this.isPlayerTurn()) return false;
    const u = this.hero;
    const reach = this.reachableFor(u);
    const r = reach.get(destKey);
    if (!r) return false;
    u.movementLeft -= r.cost;
    const ok = this.moveUnit(u, r.path);
    this.checkEnd();
    return ok;
  }

  playerAttack(targetId) {
    if (!this.isPlayerTurn()) return false;
    const u = this.hero;
    if (u.actionsLeft <= 0) return false;
    const target = this.units.find((t) => t.id === targetId && t.alive);
    if (!target) return false;
    if (!this.targetsInRange(u, u.attacks[0]).includes(target)) return false;
    u.actionsLeft--;
    const n = u.attacksPerAction;
    for (let i = 0; i < n; i++) {
      if (!target.alive || this.state !== 'active') break;
      const hBonus = this.heightAdvantage(u, target);
      resolveAttack(this.ctx, u, target, { ...u.attacks[0], toHitBonus: (u.attacks[0].toHitBonus ?? 0) + hBonus });
    }
    this.checkEnd();
    return true;
  }

  playerAbility(ability, target) {
    if (!this.isPlayerTurn()) return false;
    const u = this.hero;
    if (u.cooldowns.has(ability.id)) return false;
    if (ability.usesPerBattle) {
      const used = u.usesLeft.get(ability.id) ?? ability.usesPerBattle;
      if (used <= 0) return false;
    }
    if (!ability.freeAction && !ability.isMovement && u.actionsLeft <= 0) return false;

    const spend = () => {
      if (ability.cooldown > 0) u.cooldowns.set(ability.id, ability.cooldown + 1);
      if (ability.usesPerBattle) {
        const left = u.usesLeft.get(ability.id) ?? ability.usesPerBattle;
        u.usesLeft.set(ability.id, left - 1);
      }
      if (!ability.freeAction && !ability.isMovement) u.actionsLeft--;
      this.ctx.event({ type: 'ability', unitId: u.id, abilityId: ability.id, pt: ability.pt });
    };

    switch (ability.kind) {
      case 'attack': {
        const t = target;
        if (!t?.alive) return false;
        if (chebyshev(u.pos, t.pos) > (ability.range ?? 1)) return false;
        spend();
        this.ctx.log(`Frosty usa ${ability.pt}!`, 'ability');
        const atk = { ...u.attacks[0], pt: ability.pt };
        if (ability.bonusElemental) atk.extraDamage = [...(atk.extraDamage ?? []), ability.bonusElemental];
        if (ability.riders) atk.riders = [...(atk.riders ?? []), ...ability.riders];
        const hBonus = this.heightAdvantage(u, t);
        resolveAttack(this.ctx, u, t, { ...atk, toHitBonus: hBonus }, {});
        break;
      }
      case 'charge': {
        const t = target;
        if (!t?.alive) return false;
        // encontra casa adjacente ao alvo alcançável com movimento da investida
        const reach = reachable(this.grid, u, this.occupiedMap(), { maxCost: ability.range });
        let best = null;
        for (const [, r] of reach) {
          if (chebyshev(r, t.pos) <= 1) {
            if (!best || r.cost < best.cost) best = r;
          }
        }
        if (!best && chebyshev(u.pos, t.pos) > 1) return false;
        spend();
        this.ctx.log(`Frosty INVESTE contra ${t.name}!`, 'ability');
        if (best) this.moveUnit(u, best.path, { provokes: false });
        if (u.alive && t.alive) {
          const atk = { ...u.attacks[0], pt: ability.pt };
          if (ability.bonusDice) atk.extraDamage = [...(atk.extraDamage ?? []), { dice: ability.bonusDice, element: u.attacks[0].dtype }];
          resolveAttack(this.ctx, u, t, atk, { advantage: ability.advantage });
        }
        break;
      }
      case 'aoe': {
        spend();
        this.ctx.log(`Frosty usa ${ability.pt}!`, 'ability');
        this.ctx.event({ type: 'blast', x: u.pos.x, y: u.pos.y, radius: ability.radius, element: ability.dtype ?? 'gelo' });
        const targets = this.opponentsOf(u).filter((t) => chebyshev(u.pos, t.pos) <= ability.radius);
        for (const t of targets) {
          if (!t.alive) continue;
          if (ability.noDamage) {
            for (const r of ability.riders ?? []) {
              if (!savingThrow(this.ctx, t, r.save, r.dc)) addCondition(this.ctx, t, r.condition, r.duration, u);
            }
          } else if (ability.weaponMult) {
            const atk = { ...u.attacks[0], pt: ability.pt };
            const result = resolveAttack(this.ctx, u, t, atk, {});
            void result;
          } else if (ability.dice) {
            // dano com salvaguarda para metade
            const r = rollDice(this.rng, ability.dice);
            const saved = savingThrow(this.ctx, t, 'dex', 14);
            const amount = saved ? Math.floor(r.total / 2) : r.total;
            dealDamage(this.ctx, t, [{ amount, type: ability.dtype }], u);
            if (t.alive && !saved) {
              for (const rd of ability.riders ?? []) {
                if (rd.chance != null && !this.rng.chance(rd.chance)) continue;
                if (!savingThrow(this.ctx, t, rd.save, rd.dc)) addCondition(this.ctx, t, rd.condition, rd.duration, u);
              }
            }
          }
        }
        break;
      }
      case 'line': {
        // target: {dir:{x,y}}
        const dir = target?.dir;
        if (!dir) return false;
        spend();
        this.ctx.log(`Frosty usa ${ability.pt}!`, 'ability');
        const tiles = lineTiles(this.grid, u.pos, dir, ability.range);
        this.ctx.event({ type: 'lineBlast', from: { ...u.pos }, tiles: tiles.map((t) => ({ x: t.x, y: t.y })), element: ability.dtype });
        for (const tile of tiles) {
          const t = this.unitAt(tile.x, tile.y);
          if (!t || t.side === u.side || !t.alive) continue;
          const r = rollDice(this.rng, ability.dice);
          const saved = savingThrow(this.ctx, t, 'dex', 14);
          dealDamage(this.ctx, t, [{ amount: saved ? Math.floor(r.total / 2) : r.total, type: ability.dtype }], u);
          if (t.alive) {
            for (const rd of ability.riders ?? []) {
              if (!savingThrow(this.ctx, t, rd.save, rd.dc)) addCondition(this.ctx, t, rd.condition, rd.duration, u);
            }
          }
        }
        break;
      }
      case 'self': {
        spend();
        this.ctx.log(`Frosty usa ${ability.pt}!`, 'ability');
        if (ability.healDice) {
          let amount = rollDice(this.rng, ability.healDice).total;
          if (ability.healLevelBonus) amount += this.hero.level;
          if (this.heroState?.healDouble) amount *= 2;
          heal(this.ctx, u, amount);
        }
        if (ability.condition) addCondition(this.ctx, u, ability.condition, ability.duration ?? 2, u);
        for (const sc of ability.selfConditions ?? []) {
          addCondition(this.ctx, u, sc.condition, sc.duration, u);
        }
        if (ability.grantsExtraAction) {
          u.actionsLeft += 1;
          this.ctx.log('Frosty ganha uma ação extra!', 'special');
        }
        break;
      }
      case 'move': {
        // Salto Alado: teleporta (voo curto) para casa livre
        const destKey = target?.key;
        if (!destKey) return false;
        const [x, y] = destKey.split(',').map(Number);
        const tile = this.grid.at(x, y);
        if (!tile || TERRAIN[tile.terrain].blocked) return false;
        if (this.occupiedMap().get(destKey)) return false;
        if (chebyshev(u.pos, { x, y }) > (this.heroState?.wingRange ?? ability.range)) return false;
        spend();
        u.cooldowns.set(ability.id, (this.heroState?.wingCooldown ?? ability.cooldown) + 1);
        this.ctx.log('Frosty abre as asas e salta pelos céus!', 'ability');
        this.ctx.event({ type: 'wingJump', unitId: u.id, from: { ...u.pos }, to: { x, y } });
        u.pos = { x, y };
        this.applyTileHazard(u, true);
        break;
      }
      default:
        return false;
    }
    this.checkEnd();
    return true;
  }

  playerUsePotion(potionId) {
    if (!this.isPlayerTurn() || this.potionUsedThisTurn) return false;
    const hs = this.heroState;
    if (!hs || (hs.potions[potionId] ?? 0) <= 0) return false;
    const p = POTIONS[potionId];
    hs.potions[potionId]--;
    this.potionUsedThisTurn = true;
    this.ctx.log(`Frosty bebe ${p.pt}!`, 'ability');
    this.ctx.event({ type: 'potion', potionId });
    if (p.healDice) heal(this.ctx, this.hero, rollDice(this.rng, p.healDice).total);
    if (p.condition) addCondition(this.ctx, this.hero, p.condition, p.duration, this.hero);
    if (p.cleanse) {
      for (const c of NEGATIVE_CONDITIONS) removeCondition(this.ctx, this.hero, c);
      this.ctx.log('Todas as condições negativas foram removidas!', 'heal');
    }
    return true;
  }

  playerEndTurn() {
    if (!this.isPlayerTurn()) return false;
    this.endTurnFor(this.hero);
    return true;
  }

  // ---------- ganchos chamados pelo combate ----------

  explodeAt(unit, e) {
    this.ctx.log(`${unit.name} EXPLODE!`, 'special');
    this.ctx.event({ type: 'blast', x: unit.pos.x, y: unit.pos.y, radius: e.radius, element: e.element });
    for (const t of this.units) {
      if (!t.alive || t === unit) continue;
      if (chebyshev(unit.pos, t.pos) <= e.radius) {
        const r = rollDice(this.rng, e.dice);
        dealDamage(this.ctx, t, [{ amount: r.total, type: e.element }], unit);
      }
    }
  }

  splitOnDeath(unit, e) {
    const free = freeAdjacentTiles(this.grid, unit.pos, this.occupiedMap());
    const base = ENEMY_BY_ID.get(unit.baseId);
    if (!base) return;
    let spawned = 0;
    for (let i = 0; i < e.count && i < free.length; i++) {
      // cópias herdam adjetivos EXCETO os de divisão (evita cadeia infinita)
      const adjs = (unit.adjectives ?? []).filter((a) => !a.effects.some((x) => x.type === 'onDeathSplit'));
      const copy = buildEnemy(this.rng, base, adjs, {});
      copy.maxHp = Math.max(1, Math.floor(unit.maxHp * e.hpFraction));
      copy.hp = copy.maxHp;
      copy.effects = copy.effects.filter((x) => x.type !== 'onDeathSplit');
      copy.xp = Math.floor(unit.xp * 0.25);
      copy.goldValue = Math.floor(unit.goldValue * 0.25);
      copy.pos = { x: free[i].x, y: free[i].y };
      copy.name = `${unit.baseName} Dividido`;
      if (unit.gender === 'f') copy.name = `${unit.baseName} Dividida`;
      this.refreshDerived(copy);
      this.units.push(copy);
      this.turnOrder.push(copy);
      spawned++;
      this.ctx.event({ type: 'summon', unitId: copy.id, x: copy.pos.x, y: copy.pos.y, summon: serializeUnitLite(copy) });
    }
    if (spawned) this.ctx.log(`${unit.name} se divide em ${spawned}!`, 'special');
  }

  deathHealAllies(unit, e) {
    for (const a of this.alliesOf(unit)) {
      if (chebyshev(unit.pos, a.pos) <= e.radius) {
        heal(this.ctx, a, rollDice(this.rng, e.dice).total);
      }
    }
  }

  blinkAway(unit, range) {
    const occupied = this.occupiedMap();
    const options = [];
    for (let dy = -range; dy <= range; dy++) {
      for (let dx = -range; dx <= range; dx++) {
        const t = this.grid.at(unit.pos.x + dx, unit.pos.y + dy);
        if (t && !TERRAIN[t.terrain].blocked && !occupied.get(`${t.x},${t.y}`)) options.push(t);
      }
    }
    if (!options.length) return;
    const dest = this.rng.pick(options);
    this.ctx.log(`${unit.name} pisca para outro lugar!`, 'special');
    this.ctx.event({ type: 'blink', unitId: unit.id, from: { ...unit.pos }, to: { x: dest.x, y: dest.y } });
    unit.pos = { x: dest.x, y: dest.y };
  }

  spawnSummons(summoner, special) {
    const base = ENEMY_BY_ID.get(special.summonId);
    if (!base) return 0;
    const free = freeAdjacentTiles(this.grid, summoner.pos, this.occupiedMap(), 2);
    let n = 0;
    for (let i = 0; i < special.count && i < free.length; i++) {
      const u = buildEnemy(this.rng, base, [], { xpScale: 0.5 });
      u.pos = { x: free[i].x, y: free[i].y };
      this.refreshDerived(u);
      this.units.push(u);
      this.turnOrder.push(u);
      this.ctx.event({ type: 'summon', unitId: u.id, x: u.pos.x, y: u.pos.y, summon: serializeUnitLite(u) });
      n++;
    }
    if (n) this.ctx.log(`${summoner.name} invoca ${n} ${base.pt}${n > 1 ? 's' : ''}!`, 'special');
    return n;
  }

  onUnitDeath(unit, killer) {
    if (unit.side === 'enemy') {
      this.xpEarned += unit.xp;
      this.goldEarned += unit.goldValue;
      this.killCount++;
      this.ctx.event({ type: 'xpGain', amount: unit.xp });
    }
  }

  checkEnd() {
    if (this.state !== 'active') return;
    if (!this.hero.alive) {
      this.state = 'defeat';
      this.ctx.log('💔 Frosty caiu em batalha...', 'death');
      this.ctx.event({ type: 'defeat' });
      return;
    }
    if (this.livingEnemies().length === 0) {
      this.state = 'victory';
      const bonus = Math.floor(30 + this.battleIndex * 18);
      this.xpEarned += bonus;
      this.goldEarned += Math.floor(15 + this.battleIndex * 6);
      this.ctx.log(`🏆 VITÓRIA! +${this.xpEarned} XP, +${this.goldEarned} ouro`, 'title');
      this.ctx.event({ type: 'victory', xp: this.xpEarned, gold: this.goldEarned, kills: this.killCount });
    }
  }

  drainEvents() {
    const out = this.events;
    this.events = [];
    return out;
  }
}

function serializeUnitLite(u) {
  return {
    id: u.id, name: u.name, maxHp: u.maxHp, hp: u.hp,
    visual: u.visual, side: u.side, tier: u.tier, baseId: u.baseId,
  };
}
