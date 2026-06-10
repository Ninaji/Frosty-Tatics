// Telas e modais: seletor de idioma, menu principal, resultados, level-up/ASI,
// loja, bestiário, derrota, vitória da campanha e ajuda. Totalmente i18n.

import { setHTML, esc, div } from './dom.js';
import { ENEMIES } from '../data/enemies.js';
import { ADJECTIVES } from '../data/adjectives.js';
import { POTIONS, UPGRADES } from '../data/items.js';
import { FROSTY_ABILITIES, FROSTY_PASSIVES } from '../data/abilities.js';
import { familyIcon } from './hud.js';
import { t } from '../i18n.js';
import {
  enemyName, adjName, adjDesc, abilityName, abilityDesc, passiveName, passiveDesc,
  potionName, potionDesc, upgradeName, upgradeDesc, zoneName, zoneIntro,
  abilityScoreName, familyName,
} from '../i18n-data.js';

export class Screens {
  constructor(root) {
    this.root = root;
    this.current = null;
    this.modal = null;
  }

  clear() {
    this.current?.remove();
    this.current = null;
  }

  closeModal() {
    this.modal?.remove();
    this.modal = null;
  }

  show(el) {
    this.clear();
    this.current = el;
    this.root.appendChild(el);
    return el;
  }

  openModal(inner) {
    this.closeModal();
    const backdrop = div('modal-backdrop fade-in');
    const modal = div('modal');
    modal.appendChild(inner);
    backdrop.appendChild(modal);
    this.root.appendChild(backdrop);
    this.modal = backdrop;
    return backdrop;
  }

  toast(msg) {
    let wrap = this.root.querySelector('.toast-wrap');
    if (!wrap) {
      wrap = div('toast-wrap');
      this.root.appendChild(wrap);
    }
    const el = div('toast');
    el.textContent = msg;
    wrap.appendChild(el);
    setTimeout(() => el.remove(), 3000);
  }

  // ---------- SELETOR DE IDIOMA (primeira visita) ----------
  languagePicker(onPick) {
    const el = div('screen transparent fade-in');
    setHTML(el, `
      <div class="game-title">FROSTY TACTICS</div>
      <div class="game-subtitle">${esc(t('lang.pick'))}</div>
      <div class="menu-buttons">
        <button class="primary pick-pt">🇧🇷 Português</button>
        <button class="primary pick-en">🇬🇧 English</button>
      </div>
    `);
    el.querySelector('.pick-pt').onclick = () => onPick('pt');
    el.querySelector('.pick-en').onclick = () => onPick('en');
    return this.show(el);
  }

  // ---------- MENU PRINCIPAL ----------
  mainMenu({ hasSave, campaignComplete, onNew, onContinue, onBestiary, onHelp, onLanguage, volumes }) {
    const el = div('screen transparent fade-in');
    setHTML(el, `
      <div class="game-title">FROSTY TACTICS</div>
      <div class="game-subtitle">${esc(t('title.sub'))}</div>
      <div class="menu-buttons"></div>
      <div class="volume-panel">
        <div class="vol-row">
          <span class="vol-label">${esc(t('settings.music'))}</span>
          <input type="range" class="vol-music" min="0" max="100" step="1">
          <span class="vol-value vol-music-val"></span>
        </div>
        <div class="vol-row">
          <span class="vol-label">${esc(t('settings.sfx'))}</span>
          <input type="range" class="vol-sfx" min="0" max="100" step="1">
          <span class="vol-value vol-sfx-val"></span>
        </div>
      </div>
      <div style="color:var(--text-dim);font-size:0.85rem;max-width:430px;text-align:center;line-height:1.5">
        ${esc(t('menu.blurb'))}
      </div>
    `);
    const buttons = el.querySelector('.menu-buttons');
    const mk = (label, fn, cls = '') => {
      const b = document.createElement('button');
      if (cls) b.className = cls;
      setHTML(b, label);
      b.onclick = fn;
      buttons.appendChild(b);
      return b;
    };
    if (hasSave) mk(t(campaignComplete ? 'menu.continueEndless' : 'menu.continue'), onContinue, 'primary');
    mk(t('menu.new'), () => {
      if (hasSave && !confirm(t('menu.confirmNew'))) return;
      onNew();
    }, hasSave ? '' : 'primary');
    mk(t('menu.bestiary'), onBestiary);
    mk(t('menu.help'), onHelp);
    mk(t('menu.language'), onLanguage);

    // sliders de volume (aplicação ao vivo + persistência)
    if (volumes) {
      const $m = el.querySelector('.vol-music');
      const $s = el.querySelector('.vol-sfx');
      const $mv = el.querySelector('.vol-music-val');
      const $sv = el.querySelector('.vol-sfx-val');
      $m.value = volumes.getMusic();
      $s.value = volumes.getSfx();
      $mv.textContent = `${$m.value}%`;
      $sv.textContent = `${$s.value}%`;
      $m.oninput = () => { volumes.setMusic(+$m.value); $mv.textContent = `${$m.value}%`; };
      $s.oninput = () => { volumes.setSfx(+$s.value); $sv.textContent = `${$s.value}%`; };
      $s.onchange = () => volumes.testSfx(); // som de teste ao soltar
    } else {
      el.querySelector('.volume-panel').style.display = 'none';
    }
    return this.show(el);
  }

  // ---------- INTRO DA ZONA ----------
  zoneIntro(zone, battleIndex, onStart) {
    const el = div('screen transparent fade-in');
    setHTML(el, `
      <h2>${esc(zoneName(zone))}</h2>
      <div class="panel" style="text-align:center;max-width:520px">
        <p style="line-height:1.6;color:var(--text-dim)">${esc(zoneIntro(zone))}</p>
        <p style="margin-top:12px;color:var(--gold)">${esc(t('zone.battleOf', { i: battleIndex, total: 50 }))}</p>
      </div>
      <button class="primary go">${esc(t('zone.enter'))}</button>
    `);
    el.querySelector('.go').onclick = onStart;
    return this.show(el);
  }

  // ---------- RESULTADOS ----------
  victoryResults(summary, heroState, { onShop, onNext, onAsi }) {
    const inner = div('');
    const lvls = summary.levelsGained;
    setHTML(inner, `
      <h3>${esc(t('win.title'))}</h3>
      ${summary.wasBoss ? `<div class="unlock-item"><b>${esc(t('win.bossDown'))}</b> ${summary.zoneCleared ? esc(t('win.zoneCleared', { zone: zoneName(summary.zoneCleared) })) : ''}</div>` : ''}
      <div class="results-grid">
        <span>${esc(t('win.xp'))}</span><span class="value">+${summary.xp} XP</span>
        <span>${esc(t('win.gold'))}</span><span class="value">+${summary.gold} 💰</span>
        <span>${esc(t('win.kills'))}</span><span class="value">${summary.kills}</span>
        <span>${esc(t('win.level'))}</span><span class="value">${summary.levelBefore}${summary.levelAfter > summary.levelBefore ? ` → ${summary.levelAfter} ⬆️` : ''}</span>
      </div>
      <div class="levelups"></div>
      <div class="modal-actions">
        <button class="shop">${esc(t('win.shop'))}</button>
        <button class="primary next">${esc(t('win.next'))}</button>
      </div>
    `);
    if (lvls.length) {
      const box = inner.querySelector('.levelups');
      for (const lvl of lvls) {
        const abilities = FROSTY_ABILITIES.filter((a) => a.unlockLevel === lvl);
        const passives = FROSTY_PASSIVES.filter((p) => p.level === lvl);
        for (const a of abilities) box.appendChild(div('unlock-item', `<b>${a.icon} ${esc(abilityName(a))}</b> — ${esc(abilityDesc(a))}`));
        for (const p of passives) box.appendChild(div('unlock-item', `<b>✨ ${esc(passiveName(p))}</b> — ${esc(passiveDesc(p))}`));
      }
      if (heroState.pendingAsi > 0) {
        box.appendChild(div('unlock-item', `<b>${esc(t('win.asiAvailable'))}</b>`));
      }
    }
    inner.querySelector('.shop').onclick = onShop;
    inner.querySelector('.next').onclick = () => {
      if (heroState.pendingAsi > 0) onAsi(); else onNext();
    };
    return this.openModal(inner);
  }

  // ---------- ASI ----------
  asiModal(heroState, onPick) {
    const inner = div('');
    setHTML(inner, `
      <h3>${esc(t('asi.title', { lvl: heroState.level }))}</h3>
      <p style="color:var(--text-dim);font-size:0.9rem">${esc(t('asi.hint'))}</p>
      <div class="asi-grid"></div>
      <div class="modal-actions"><button class="primary confirm" disabled>${esc(t('asi.confirm'))}</button></div>
    `);
    const grid = inner.querySelector('.asi-grid');
    const picks = [];
    const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
    const btns = new Map();
    for (const ab of abilities) {
      const b = document.createElement('button');
      const update = () => {
        const n = picks.filter((p) => p === ab).length;
        setHTML(b, `${esc(abilityScoreName(ab))}<br><b>${heroState[ab] + n}</b>${n ? ` <span style="color:var(--gold)">(+${n})</span>` : ''}`);
        b.classList.toggle('picked', n > 0);
      };
      b.onclick = () => {
        if (picks.length >= 2) picks.length = 0;
        picks.push(ab);
        for (const [, u] of btns) u();
        inner.querySelector('.confirm').disabled = picks.length !== 2;
      };
      btns.set(ab, update);
      update();
      grid.appendChild(b);
    }
    inner.querySelector('.confirm').onclick = () => onPick(picks[0], picks[1]);
    return this.openModal(inner);
  }

  // ---------- LOJA ----------
  shop(heroState, { onBuyPotion, onBuyUpgrade, onClose }) {
    const inner = div('');
    setHTML(inner, `
      <h3>${esc(t('shop.title'))}</h3>
      <div style="color:var(--gold);margin-bottom:6px">💰 <span class="gold-now">${heroState.gold}</span> ${esc(t('shop.gold'))}</div>
      <h4 style="margin:10px 0 4px;color:var(--text-dim)">${esc(t('shop.potions'))}</h4>
      <div class="shop-grid potions"></div>
      <h4 style="margin:14px 0 4px;color:var(--text-dim)">${esc(t('shop.upgrades'))}</h4>
      <div class="shop-grid upgrades"></div>
      <div class="modal-actions"><button class="primary close">${esc(t('shop.done'))}</button></div>
    `);
    const renderItems = () => {
      setHTML(inner.querySelector('.gold-now'), String(heroState.gold));
      const pg = inner.querySelector('.potions');
      pg.replaceChildren();
      for (const p of Object.values(POTIONS)) {
        const item = div('shop-item');
        setHTML(item, `
          <span class="icon">${p.icon}</span>
          <div class="info">
            <div class="title">${esc(potionName(p))} <span class="owned">×${heroState.potions[p.id] ?? 0}</span></div>
            <div class="desc">${esc(potionDesc(p))}</div>
          </div>
          <button ${heroState.gold < p.price ? 'disabled' : ''}>${p.price} 💰</button>
        `);
        item.querySelector('button').onclick = () => { onBuyPotion(p.id); renderItems(); };
        pg.appendChild(item);
      }
      const ug = inner.querySelector('.upgrades');
      ug.replaceChildren();
      for (const u of Object.values(UPGRADES)) {
        const lvl = heroState.upgrades[u.id];
        const maxed = lvl >= u.max;
        const price = maxed ? 0 : u.price(lvl);
        const item = div('shop-item');
        setHTML(item, `
          <span class="icon">${u.icon}</span>
          <div class="info">
            <div class="title">${esc(upgradeName(u))} <span class="owned">${lvl}/${u.max}</span></div>
            <div class="desc">${esc(upgradeDesc(u))}</div>
          </div>
          <button ${maxed || heroState.gold < price ? 'disabled' : ''}>${maxed ? esc(t('shop.max')) : `${price} 💰`}</button>
        `);
        if (!maxed) item.querySelector('button').onclick = () => { onBuyUpgrade(u.id); renderItems(); };
        ug.appendChild(item);
      }
    };
    renderItems();
    inner.querySelector('.close').onclick = onClose;
    return this.openModal(inner);
  }

  // ---------- DERROTA ----------
  defeatScreen(info, onRetry, onMenu) {
    const el = div('screen fade-in');
    setHTML(el, `
      <h2 style="color:#ff6b6b">${esc(t('defeat.title'))}</h2>
      <div class="panel" style="text-align:center">
        <p style="line-height:1.6">${esc(t('defeat.body', { gold: info.goldLost }))}</p>
        <p style="margin-top:10px;color:var(--text-dim)">${esc(t('defeat.retryHint', { i: info.battleIndex }))}</p>
      </div>
      <div style="display:flex;gap:10px">
        <button class="menu-btn">${esc(t('defeat.menu'))}</button>
        <button class="primary retry">${esc(t('defeat.retry'))}</button>
      </div>
    `);
    el.querySelector('.retry').onclick = onRetry;
    el.querySelector('.menu-btn').onclick = onMenu;
    return this.show(el);
  }

  // ---------- CAMPANHA COMPLETA ----------
  campaignVictory(heroState, onEndless, onMenu) {
    const el = div('screen fade-in');
    setHTML(el, `
      <div class="game-title" style="font-size:2.6rem">${esc(t('campaign.victory'))}</div>
      <div class="panel" style="text-align:center;max-width:560px">
        <p style="font-size:1.05rem;line-height:1.7">
          ${esc(t('campaign.body1'))}<br>
          ${esc(t('campaign.body2'))}<br><br>
          ${t('campaign.body3', {
            hero: `<b style="color:var(--accent-ice)">${esc(t('campaign.heroTitle'))}</b>`,
            lvl: heroState.level,
            kills: heroState.statsTotal.kills,
            battles: heroState.statsTotal.battles,
          })}
        </p>
        <p style="margin-top:14px;color:var(--gold)">${esc(t('campaign.endlessTeaser'))}</p>
      </div>
      <div style="display:flex;gap:10px">
        <button class="menu-btn">${esc(t('defeat.menu'))}</button>
        <button class="primary endless">${esc(t('campaign.endless'))}</button>
      </div>
    `);
    el.querySelector('.endless').onclick = onEndless;
    el.querySelector('.menu-btn').onclick = onMenu;
    return this.show(el);
  }

  // ---------- BESTIÁRIO ----------
  bestiary(bestiaryData, onClose) {
    const inner = div('');
    setHTML(inner, `
      <h3>${esc(t('bestiary.title'))}</h3>
      <div class="bestiary-tabs">
        <button class="tab-enemies primary">${esc(t('bestiary.creatures'))}</button>
        <button class="tab-adjectives">${esc(t('bestiary.adjectives'))}</button>
      </div>
      <div class="bestiary-counter"></div>
      <div class="bestiary-grid"></div>
      <div class="modal-actions"><button class="primary close">${esc(t('bestiary.close'))}</button></div>
    `);
    const grid = inner.querySelector('.bestiary-grid');
    const counter = inner.querySelector('.bestiary-counter');
    const tabE = inner.querySelector('.tab-enemies');
    const tabA = inner.querySelector('.tab-adjectives');

    const renderEnemies = () => {
      tabE.classList.add('primary'); tabA.classList.remove('primary');
      const seen = bestiaryData.enemies;
      setHTML(counter, t('bestiary.foundCreatures', { n: seen.size, total: ENEMIES.length }));
      grid.replaceChildren();
      for (const e of [...ENEMIES].sort((a, b) => a.tier - b.tier || enemyName(a).localeCompare(enemyName(b)))) {
        const known = seen.has(e.id);
        const card = div(`bestiary-card ${known ? '' : 'locked'}`);
        setHTML(card, known
          ? `<div class="b-name">${familyIcon(e.family)} ${esc(enemyName(e))}</div><div class="b-sub">${esc(t('bestiary.tier', { n: e.tier }))} · ${esc(familyName(e.family))} · ${esc(t('bestiary.hpac', { hp: e.hp, ac: e.ac }))}</div>`
          : `<div class="b-name">❔ ???</div><div class="b-sub">${esc(t('bestiary.tier', { n: e.tier }))} · ${esc(familyName(e.family))}</div>`);
        grid.appendChild(card);
      }
    };
    const renderAdjectives = () => {
      tabA.classList.add('primary'); tabE.classList.remove('primary');
      const seen = bestiaryData.adjectives;
      setHTML(counter, t('bestiary.foundAdjectives', { n: seen.size, total: ADJECTIVES.length }));
      grid.replaceChildren();
      for (const a of [...ADJECTIVES].sort((x, y) => x.tier - y.tier || adjName(x).localeCompare(adjName(y)))) {
        const known = seen.has(a.id);
        const card = div(`bestiary-card ${known ? '' : 'locked'}`);
        setHTML(card, known
          ? `<div class="b-name">${esc(adjName(a))}</div><div class="b-sub">T${a.tier} — ${esc(adjDesc(a))}</div>`
          : `<div class="b-name">❔ ???</div><div class="b-sub">${esc(t('bestiary.tier', { n: a.tier }))}</div>`);
        grid.appendChild(card);
      }
    };
    tabE.onclick = renderEnemies;
    tabA.onclick = renderAdjectives;
    renderEnemies();
    inner.querySelector('.close').onclick = onClose;
    return this.openModal(inner);
  }

  // ---------- AJUDA ----------
  help(onClose) {
    const inner = div('');
    setHTML(inner, `
      <h3>${esc(t('help.title'))}</h3>
      <div class="help-section">${t('help.goal')}</div>
      <div class="help-section">${t('help.turn')}</div>
      <div class="help-section">${t('help.dnd')}</div>
      <div class="help-section">${t('help.adjectives')}</div>
      <div class="help-section">${t('help.keys')}</div>
      <div class="help-section">${t('help.between')}</div>
      <div class="modal-actions"><button class="primary close">${esc(t('help.ok'))}</button></div>
    `);
    inner.querySelector('.close').onclick = onClose;
    return this.openModal(inner);
  }
}
