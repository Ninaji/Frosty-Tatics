// Reproduz a fila de eventos da batalha como animações sequenciais 3D.

import { tileCenter } from './scene.js';
import { UnitView } from './units.js';
import { delay } from './tween.js';
import { conditionDef } from '../core/conditions.js';
import { DAMAGE_COLORS } from '../core/damage.js';
import { t } from '../i18n.js';
import { condName } from '../i18n-data.js';

export class BattleRenderer {
  constructor({ sceneMgr, fx, dmg, audio, battle, tilemap, onLog, onSync, speed = 1 }) {
    this.sceneMgr = sceneMgr;
    this.fx = fx;
    this.dmg = dmg;
    this.audio = audio;
    this.battle = battle;
    this.tilemap = tilemap;
    this.onLog = onLog ?? (() => {});
    this.onSync = onSync ?? (() => {});
    this.speed = speed;
    this.views = new Map();
    this.busy = false;
    this._lastCrit = false;

    for (const u of battle.units) {
      this.views.set(u.id, new UnitView(sceneMgr, fx, u, battle.grid));
    }
    sceneMgr.onFrame((now) => {
      for (const [, v] of this.views) if (v.group.visible) v.update(now);
    });
  }

  d(ms) { return Math.max(16, ms / this.speed); }

  view(id) { return this.views.get(id); }

  tileWorld(x, y) {
    const t = this.battle.grid.at(x, y);
    const v = tileCenter(x, y, 0);
    v.y = (t.h + 1) * 0.35 + 0.3;
    return v;
  }

  async drainAndPlay() {
    const events = this.battle.drainEvents();
    if (events.length) await this.play(events);
    this.onSync();
  }

  async play(events) {
    this.busy = true;
    for (const e of events) {
      try {
        await this.handle(e);
      } catch (err) {
        console.error('Erro animando evento', e, err);
      }
    }
    this.busy = false;
    this.onSync();
  }

  async handle(e) {
    const v = e.unitId ? this.view(e.unitId) : null;
    switch (e.type) {
      case 'log':
        this.onLog(e.msg, e.cls);
        break;

      case 'turnStart': {
        if (v) {
          this.sceneMgr.centerOn(v.group.position.x, v.group.position.z);
          await delay(this.d(110));
        }
        this.onSync();
        break;
      }

      case 'move':
        if (v && e.path?.length) {
          this.audio?.step();
          await v.walkPath(e.path, this.d(135));
        }
        break;

      case 'attack': {
        const av = this.view(e.attackerId), dv = this.view(e.defenderId);
        this._lastCrit = e.crit;
        if (av && dv) {
          this.audio?.slash();
          await av.attackLunge(dv);
          if (!e.hit) {
            this.dmg.show(dv.worldAnchor(), t('float.miss'), 'miss');
            this.audio?.miss();
          }
        }
        break;
      }

      case 'damage': {
        if (!v) break;
        v.updateHp();
        v.hitFlash();
        const crit = this._lastCrit;
        this._lastCrit = false;
        const mainType = e.packets?.[0]?.type ?? 'cortante';
        this.dmg.damage(v.worldAnchor(), e.amount, mainType, crit);
        for (const p of e.packets ?? []) {
          if (p.final > 0) this.fx.elementBurst(v.worldAnchor(0.5), p.type, crit);
        }
        if (crit) {
          this.sceneMgr.screenShake(0.5);
          this.audio?.crit();
        } else {
          this.audio?.hit();
        }
        await delay(this.d(170));
        break;
      }

      case 'dodge':
        if (v) this.dmg.show(v.worldAnchor(), t('float.dodge'), 'dodge');
        await delay(this.d(120));
        break;

      case 'heal':
        if (v) {
          v.updateHp();
          this.dmg.show(v.worldAnchor(), `+${e.amount}`, 'heal');
          this.fx.burst(v.worldAnchor(0.5), '#4ade80', { count: 16, up: 1.8 });
          this.audio?.heal();
        }
        await delay(this.d(140));
        break;

      case 'death':
        if (v) {
          this.audio?.death();
          await v.deathAnim();
        }
        break;

      case 'condition': {
        if (v && e.on) {
          const def = conditionDef(e.condition);
          this.dmg.show(v.worldAnchor(0.95), `${def.icon} ${condName(def)}`, 'condition');
          await delay(this.d(160));
        }
        this.onSync();
        break;
      }

      case 'blast': {
        const pos = this.tileWorld(e.x, e.y);
        this.fx.elementBurst(pos, e.element ?? 'fogo', true);
        this.sceneMgr.screenShake(0.4);
        this.audio?.blast();
        await delay(this.d(280));
        break;
      }

      case 'lineBlast': {
        for (const t of e.tiles) {
          this.fx.elementBurst(this.tileWorld(t.x, t.y), e.element ?? 'gelo', false);
          await delay(this.d(70));
        }
        this.audio?.blast();
        break;
      }

      case 'wingJump':
        if (v) {
          this.audio?.jump();
          await v.leapTo(e.to, this.d(420));
        }
        break;

      case 'blink':
        if (v) {
          this.fx.burst(v.worldAnchor(0.5), '#ff66cc', { count: 18 });
          v.syncPosition();
          this.fx.burst(v.worldAnchor(0.5), '#ff66cc', { count: 18 });
          await delay(this.d(150));
        }
        break;

      case 'summon': {
        const unit = this.battle.units.find((u) => u.id === e.unitId);
        if (unit && !this.views.has(unit.id)) {
          const nv = new UnitView(this.sceneMgr, this.fx, unit, this.battle.grid);
          this.views.set(unit.id, nv);
          this.fx.burst(nv.worldAnchor(0.5), '#aa66ff', { count: 26 });
          this.audio?.summon();
          await delay(this.d(220));
        }
        break;
      }

      case 'rage':
        if (v) {
          this.dmg.show(v.worldAnchor(), t('float.rage'), 'rage');
          this.fx.burst(v.worldAnchor(0.5), '#ff4444', { count: 20 });
          await delay(this.d(180));
        }
        break;

      case 'oa':
        this.dmg.show(this.view(e.attackerId)?.worldAnchor() ?? this.tileWorld(0, 0), t('float.oa'), 'condition');
        await delay(this.d(120));
        break;

      case 'hazard':
        if (v) this.fx.elementBurst(v.worldAnchor(0.3), e.terrain === 'lava' ? 'fogo' : e.terrain === 'poison' ? 'veneno' : 'perfurante');
        await delay(this.d(120));
        break;

      case 'potion':
        this.audio?.potion();
        break;

      case 'ability':
      case 'enemyAbility':
        if (v) {
          this.dmg.show(v.worldAnchor(1.05), `✨ ${e.pt}`, 'ability-name');
          await delay(this.d(200));
        }
        break;

      case 'xpGain':
        break;

      case 'victory':
        this.audio?.victory();
        await delay(this.d(420));
        break;

      case 'defeat':
        this.audio?.defeat();
        await delay(this.d(420));
        break;

      case 'roundStart':
      case 'turnEnd':
      case 'battleStart':
        this.onSync();
        break;
    }
  }

  dispose() {
    for (const [, v] of this.views) v.dispose();
    this.views.clear();
  }
}
