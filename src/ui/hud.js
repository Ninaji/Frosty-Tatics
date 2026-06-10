// HUD de batalha: cartão da heroína, ordem de turno, log, barra de ações,
// inspetor de inimigos, preview de ataque e modos de mira. Totalmente i18n.

import { conditionDef } from '../core/conditions.js';
import { xpProgress } from '../data/frosty.js';
import { POTIONS } from '../data/items.js';
import { DAMAGE_ICONS } from '../core/damage.js';
import { setHTML, esc } from './dom.js';
import { t } from '../i18n.js';
import {
  condName, condDesc, abilityName, abilityDesc, potionName, potionDesc,
  zoneName, damageTypeName, adjForm, adjDesc,
} from '../i18n-data.js';

const FAMILY_ICONS = {
  goblinoide: '👺', orc: '🗡️', 'morto-vivo': '💀', fera: '🐺', verme: '🕷️',
  limo: '🟢', demonio: '😈', diabo: '👹', draconico: '🐉', elemental: '🌪️',
  constructo: '🗿', gigante: '🏔️', humanoide: '🥷', fada: '🧚', planta: '🌿',
  aberracao: '👁️', licantropo: '🐾',
};

export function familyIcon(family) { return FAMILY_ICONS[family] ?? '👾'; }

export class Hud {
  constructor(root, callbacks) {
    this.root = root;
    this.cb = callbacks;
    this.el = document.createElement('div');
    this.el.className = 'hud';
    setHTML(this.el, `
      <div class="hud-top">
        <div class="battle-info"></div>
        <div class="turn-order"></div>
      </div>
      <div class="hud-corner-tr">
        <button class="btn-speed"></button>
        <button class="btn-demo">🤖</button>
        <button class="btn-mute">🔊</button>
        <button class="btn-help">❓</button>
      </div>
      <div class="hero-card">
        <div class="name"><span>❄️ Frosty</span><span class="level"></span></div>
        <div class="bar-wrap"><div class="bar hp"></div><div class="bar-label hp-label"></div></div>
        <div class="bar-wrap" style="height:9px"><div class="bar xp"></div></div>
        <div class="conditions"></div>
        <div class="gold-line"></div>
      </div>
      <div class="enemy-inspect"></div>
      <div class="combat-log"></div>
      <div class="action-hint" style="display:none"></div>
      <div class="action-dock">
        <div class="action-bar"></div>
        <div class="potion-bar"></div>
        <button class="end-turn-btn"></button>
      </div>
      <div class="attack-preview" style="display:none"></div>
    `);
    root.appendChild(this.el);

    this.$info = this.el.querySelector('.battle-info');
    this.$turns = this.el.querySelector('.turn-order');
    this.$heroLevel = this.el.querySelector('.hero-card .level');
    this.$hpBar = this.el.querySelector('.bar.hp');
    this.$hpLabel = this.el.querySelector('.hp-label');
    this.$xpBar = this.el.querySelector('.bar.xp');
    this.$conds = this.el.querySelector('.hero-card .conditions');
    this.$gold = this.el.querySelector('.gold-line');
    this.$inspect = this.el.querySelector('.enemy-inspect');
    this.$log = this.el.querySelector('.combat-log');
    this.$abilityBar = this.el.querySelector('.action-bar');
    this.$potionBar = this.el.querySelector('.potion-bar');
    this.$endTurn = this.el.querySelector('.end-turn-btn');
    this.$hint = this.el.querySelector('.action-hint');
    this.$preview = this.el.querySelector('.attack-preview');

    this.$endTurn.onclick = () => this.cb.onEndTurn();
    this.el.querySelector('.btn-mute').onclick = (e) => {
      const muted = this.cb.onToggleMute();
      e.currentTarget.textContent = muted ? '🔇' : '🔊';
    };
    this.el.querySelector('.btn-speed').onclick = (e) => {
      const s = this.cb.onToggleSpeed();
      e.currentTarget.textContent = `⏩ ${s}x`;
    };
    this.el.querySelector('.btn-help').onclick = () => this.cb.onHelp();
    this.$demoBtn = this.el.querySelector('.btn-demo');
    this.$demoBtn.onclick = () => {
      const on = this.cb.onDemoToggle();
      this.$demoBtn.style.borderColor = on ? 'var(--gold)' : '';
      this.$demoBtn.textContent = on ? '🤖✓' : '🤖';
    };
    this.applyStaticLabels(1);
  }

  applyStaticLabels(speed) {
    this.el.querySelector('.btn-speed').textContent = `⏩ ${speed}x`;
    this.el.querySelector('.btn-speed').title = t('hud.speedTitle');
    this.$demoBtn.title = t('hud.demoTitle');
    this.el.querySelector('.btn-mute').title = t('hud.soundTitle');
    this.el.querySelector('.btn-help').title = t('hud.helpTitle');
    this.$endTurn.textContent = t('hud.endTurn');
  }

  show() { this.el.style.display = ''; }
  hide() { this.el.style.display = 'none'; }

  log(msg, cls = 'info') {
    const line = document.createElement('div');
    line.className = `log-line ${cls}`;
    line.textContent = msg;
    this.$log.appendChild(line);
    while (this.$log.children.length > 120) this.$log.firstChild.remove();
    this.$log.scrollTop = this.$log.scrollHeight;
  }

  clearLog() { this.$log.replaceChildren(); }

  sync(battle, heroState, { selectedAbility, busy, demoMode }) {
    const hero = battle.hero;
    const zone = battle.zone;
    const endless = battle.isEndless;

    setHTML(this.$info, `<span class="zone-name">${esc(zone ? zoneName(zone) : '')}</span> — ${t(endless ? 'hud.battleEndless' : 'hud.battle')} ${battle.battleIndex}${endless ? '' : '/50'} · ${t('hud.round')} ${battle.round}`);

    // ordem de turno
    this.$turns.replaceChildren();
    const order = battle.turnOrder.slice(0, 14);
    for (let i = 0; i < order.length; i++) {
      const u = order[i];
      const chip = document.createElement('div');
      chip.className = `turn-chip ${u.side === 'enemy' ? 'enemy' : ''} ${!u.alive ? 'dead' : ''} ${i === battle.activeIdx ? 'active' : ''}`;
      chip.title = t('hud.hpOf', { name: u.name, hp: u.hp, max: u.maxHp });
      const icon = u.kind === 'hero' ? '❄️' : familyIcon(u.family);
      setHTML(chip, `<span>${icon}</span><div class="mini-hp"><div style="width:${Math.max(0, u.hp / u.maxHp * 100)}%"></div></div>`);
      this.$turns.appendChild(chip);
    }

    // heroína
    this.$heroLevel.textContent = t('hud.level', { n: heroState.level });
    const frac = Math.max(0, hero.hp / hero.maxHp);
    this.$hpBar.style.width = `${frac * 100}%`;
    this.$hpBar.classList.toggle('low', frac < 0.35);
    this.$hpLabel.textContent = `${hero.hp} / ${hero.maxHp}`;
    const xp = xpProgress(heroState);
    this.$xpBar.style.width = `${Math.min(100, xp.fraction * 100)}%`;
    this.$conds.replaceChildren();
    for (const [id, data] of hero.conditions) {
      const def = conditionDef(id);
      const chip = document.createElement('span');
      chip.className = 'cond-chip';
      chip.style.borderColor = def.color;
      chip.textContent = `${def.icon} ${condName(def)} (${data.duration})`;
      chip.title = condDesc(def);
      this.$conds.appendChild(chip);
    }
    this.$gold.textContent = t('hud.gold', { gold: heroState.gold, mov: hero.movementLeft ?? 0, act: hero.actionsLeft ?? 0 });

    // habilidades
    this.$abilityBar.replaceChildren();
    const abilities = hero.abilities ?? [];
    abilities.forEach((a, i) => {
      const btn = document.createElement('button');
      btn.className = 'ability-btn';
      const cd = hero.cooldowns.get(a.id);
      const usesLeft = a.usesPerBattle ? (hero.usesLeft.get(a.id) ?? a.usesPerBattle) : null;
      const noUses = usesLeft !== null && usesLeft <= 0;
      const noAction = !a.freeAction && !a.isMovement && hero.actionsLeft <= 0;
      if (cd || noUses) btn.classList.add('oncooldown');
      if (selectedAbility?.id === a.id) btn.classList.add('selected');
      btn.disabled = busy || demoMode || !battle.isPlayerTurn() || !!cd || noUses || noAction;
      setHTML(btn, `
        <span class="hotkey">${i + 1}</span>
        ${cd ? `<span class="cd-badge">${cd}</span>` : usesLeft !== null ? `<span class="cd-badge">${usesLeft}×</span>` : ''}
        <span>${a.icon}</span>
        <span class="ab-label">${esc(abilityName(a))}</span>`);
      btn.title = `${abilityName(a)} — ${abilityDesc(a)}`;
      btn.onclick = () => this.cb.onAbilitySelect(a);
      this.$abilityBar.appendChild(btn);
    });

    // poções
    this.$potionBar.replaceChildren();
    for (const p of Object.values(POTIONS)) {
      const count = heroState.potions[p.id] ?? 0;
      if (count <= 0) continue;
      const btn = document.createElement('button');
      btn.className = 'potion-btn';
      btn.disabled = busy || demoMode || !battle.isPlayerTurn() || battle.potionUsedThisTurn;
      setHTML(btn, `<span>${p.icon}</span><span class="count">${count}</span>`);
      btn.title = t('hud.potionTip', { name: potionName(p), desc: potionDesc(p) });
      btn.onclick = () => this.cb.onPotion(p.id);
      this.$potionBar.appendChild(btn);
    }

    this.$endTurn.textContent = t('hud.endTurn');
    this.$endTurn.disabled = busy || demoMode || !battle.isPlayerTurn();
  }

  setHint(text) {
    this.$hint.style.display = text ? '' : 'none';
    this.$hint.textContent = text ?? '';
  }

  showPreview(x, y, html) {
    this.$preview.style.display = '';
    setHTML(this.$preview, html);
    const pad = 18;
    const w = this.$preview.offsetWidth;
    this.$preview.style.left = `${Math.min(window.innerWidth - w - 10, x + pad)}px`;
    this.$preview.style.top = `${y + pad}px`;
  }

  hidePreview() { this.$preview.style.display = 'none'; }

  inspectEnemy(unit) {
    if (!unit) {
      this.$inspect.classList.remove('visible');
      return;
    }
    const adjHtml = (unit.adjectives ?? []).map((a) =>
      `<div class="e-adj"><b>${esc(adjForm(a, unit.gender))}</b> — ${esc(adjDesc(a))}</div>`
    ).join('');
    const tags = [];
    for (const r of unit.resistances ?? []) tags.push(`<span class="tag resist">${DAMAGE_ICONS[r] ?? ''} ${t('hud.resists', { t: damageTypeName(r) })}</span>`);
    for (const v of unit.vulnerabilities ?? []) tags.push(`<span class="tag vuln">${DAMAGE_ICONS[v] ?? ''} ${t('hud.vulnerable', { t: damageTypeName(v) })}</span>`);
    for (const i of unit.immunities ?? []) tags.push(`<span class="tag immune">${DAMAGE_ICONS[i] ?? ''} ${t('hud.immune', { t: damageTypeName(i) })}</span>`);
    const conds = [...unit.conditions.keys()].map((id) => {
      const d = conditionDef(id);
      return `<span class="cond-chip" style="border-color:${d.color}">${d.icon} ${condName(d)}</span>`;
    }).join(' ');
    setHTML(this.$inspect, `
      <div class="e-name">${familyIcon(unit.family)} ${esc(unit.name)}${unit.isBoss ? ' 👑' : ''}</div>
      <div class="e-stats">
        <span>❤️ ${unit.hp}/${unit.maxHp}</span>
        <span>🛡️ ${t('hud.ac', { n: unit.ac })}</span>
        <span>👟 ${unit.speed}</span>
        <span>T${unit.tier}</span>
      </div>
      ${conds ? `<div style="margin:4px 0">${conds}</div>` : ''}
      ${adjHtml || `<div style="font-size:0.8rem;color:var(--text-dim)">${t('hud.commonSpecimen')}</div>`}
      <div class="e-tags">${tags.join('')}</div>
    `);
    this.$inspect.classList.add('visible');
  }

  dispose() { this.el.remove(); }
}
