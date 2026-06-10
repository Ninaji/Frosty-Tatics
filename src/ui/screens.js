// Telas e modais: menu principal, resultados, level-up/ASI, loja, bestiário,
// derrota, vitória da campanha e ajuda.

import { setHTML, esc, div } from './dom.js';
import { ENEMIES } from '../data/enemies.js';
import { ADJECTIVES } from '../data/adjectives.js';
import { POTIONS, UPGRADES } from '../data/items.js';
import { FROSTY_ABILITIES, FROSTY_PASSIVES } from '../data/abilities.js';
import { ABILITY_NAMES_PT } from '../core/stats.js';
import { familyIcon } from './hud.js';

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
    const t = div('toast');
    t.textContent = msg;
    wrap.appendChild(t);
    setTimeout(() => t.remove(), 3000);
  }

  // ---------- MENU PRINCIPAL ----------
  mainMenu({ hasSave, campaignComplete, onNew, onContinue, onBestiary, onHelp }) {
    const el = div('screen transparent fade-in');
    setHTML(el, `
      <div class="game-title">FROSTY TACTICS</div>
      <div class="game-subtitle">A Lâmina Rúnica ❄️</div>
      <div class="menu-buttons"></div>
      <div style="color:var(--text-dim);font-size:0.85rem;max-width:430px;text-align:center;line-height:1.5">
        Frosty, a tiefling alada da espada bastarda Geada Eterna, enfrenta as hordas
        do Vazio em 50 batalhas táticas por 5 zonas — e além, no Modo Infinito.
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
    if (hasSave) mk(`▶️ Continuar ${campaignComplete ? '(Modo Infinito)' : ''}`, onContinue, 'primary');
    mk('⚔️ Nova Campanha', () => {
      if (hasSave && !confirm('Começar do zero apaga o progresso salvo. Continuar?')) return;
      onNew();
    }, hasSave ? '' : 'primary');
    mk('📖 Bestiário', onBestiary);
    mk('❓ Como Jogar', onHelp);
    return this.show(el);
  }

  // ---------- INTRO DA ZONA ----------
  zoneIntro(zone, battleIndex, onStart) {
    const el = div('screen transparent fade-in');
    setHTML(el, `
      <h2>${esc(zone.pt)}</h2>
      <div class="panel" style="text-align:center;max-width:520px">
        <p style="line-height:1.6;color:var(--text-dim)">${esc(zone.intro)}</p>
        <p style="margin-top:12px;color:var(--gold)">Batalha ${battleIndex} de 50</p>
      </div>
      <button class="primary go">⚔️ Entrar em Batalha</button>
    `);
    el.querySelector('.go').onclick = onStart;
    return this.show(el);
  }

  // ---------- RESULTADOS ----------
  victoryResults(summary, heroState, { onShop, onNext, onAsi }) {
    const inner = div('');
    const lvls = summary.levelsGained;
    setHTML(inner, `
      <h3>🏆 Vitória!</h3>
      ${summary.wasBoss ? `<div class="unlock-item"><b>👑 Chefe derrotado!</b> ${summary.zoneCleared ? `Zona "${esc(summary.zoneCleared.pt)}" concluída!` : ''}</div>` : ''}
      <div class="results-grid">
        <span>Experiência</span><span class="value">+${summary.xp} XP</span>
        <span>Ouro</span><span class="value">+${summary.gold} 💰</span>
        <span>Inimigos derrotados</span><span class="value">${summary.kills}</span>
        <span>Nível</span><span class="value">${summary.levelBefore}${summary.levelAfter > summary.levelBefore ? ` → ${summary.levelAfter} ⬆️` : ''}</span>
      </div>
      <div class="levelups"></div>
      <div class="modal-actions">
        <button class="shop">🛒 Loja</button>
        <button class="primary next">Próxima Batalha ▶️</button>
      </div>
    `);
    if (lvls.length) {
      const box = inner.querySelector('.levelups');
      for (const lvl of lvls) {
        const abilities = FROSTY_ABILITIES.filter((a) => a.unlockLevel === lvl);
        const passives = FROSTY_PASSIVES.filter((p) => p.level === lvl);
        for (const a of abilities) box.appendChild(div('unlock-item', `<b>${a.icon} ${esc(a.pt)}</b> — ${esc(a.desc)}`));
        for (const p of passives) box.appendChild(div('unlock-item', `<b>✨ ${esc(p.pt)}</b> — ${esc(p.desc)}`));
      }
      if (heroState.pendingAsi > 0) {
        box.appendChild(div('unlock-item', `<b>📈 Aumento de Atributo disponível!</b> Escolha +1 em dois atributos.`));
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
      <h3>📈 Aumento de Atributo (nível ${heroState.level})</h3>
      <p style="color:var(--text-dim);font-size:0.9rem">Escolha 2 pontos para distribuir (pode repetir o mesmo atributo).</p>
      <div class="asi-grid"></div>
      <div class="modal-actions"><button class="primary confirm" disabled>Confirmar</button></div>
    `);
    const grid = inner.querySelector('.asi-grid');
    const picks = [];
    const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
    const btns = new Map();
    for (const ab of abilities) {
      const b = document.createElement('button');
      const update = () => {
        const n = picks.filter((p) => p === ab).length;
        setHTML(b, `${esc(ABILITY_NAMES_PT[ab])}<br><b>${heroState[ab] + n}</b>${n ? ` <span style="color:var(--gold)">(+${n})</span>` : ''}`);
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
      <h3>🛒 Acampamento — Loja</h3>
      <div style="color:var(--gold);margin-bottom:6px">💰 <span class="gold-now">${heroState.gold}</span> ouro</div>
      <h4 style="margin:10px 0 4px;color:var(--text-dim)">Poções</h4>
      <div class="shop-grid potions"></div>
      <h4 style="margin:14px 0 4px;color:var(--text-dim)">Melhorias permanentes</h4>
      <div class="shop-grid upgrades"></div>
      <div class="modal-actions"><button class="primary close">Pronto</button></div>
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
            <div class="title">${esc(p.pt)} <span class="owned">×${heroState.potions[p.id] ?? 0}</span></div>
            <div class="desc">${esc(p.desc)}</div>
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
            <div class="title">${esc(u.pt)} <span class="owned">${lvl}/${u.max}</span></div>
            <div class="desc">${esc(u.desc)}</div>
          </div>
          <button ${maxed || heroState.gold < price ? 'disabled' : ''}>${maxed ? 'MÁX' : `${price} 💰`}</button>
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
      <h2 style="color:#ff6b6b">💔 Frosty caiu…</h2>
      <div class="panel" style="text-align:center">
        <p style="line-height:1.6">Mas tieflings não morrem fácil. Ela recua, recupera o fôlego<br>e perde <b style="color:var(--gold)">${info.goldLost} de ouro</b> no caminho.</p>
        <p style="margin-top:10px;color:var(--text-dim)">A batalha ${info.battleIndex} a aguarda novamente — com um novo campo e novos inimigos.</p>
      </div>
      <div style="display:flex;gap:10px">
        <button class="menu-btn">🏠 Menu</button>
        <button class="primary retry">⚔️ Tentar Novamente</button>
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
      <div class="game-title" style="font-size:2.6rem">⭐ VITÓRIA ⭐</div>
      <div class="panel" style="text-align:center;max-width:560px">
        <p style="font-size:1.05rem;line-height:1.7">
          Vorthrax, o Dragão do Vazio, tomba dos céus estilhaçados.<br>
          O portal se fecha. As Planícies do Gelo Quebrado conhecem a paz.<br><br>
          <b style="color:var(--accent-ice)">Frosty, a Lâmina Rúnica</b>, nível ${heroState.level},
          termina sua jornada com ${heroState.statsTotal.kills} inimigos derrotados
          em ${heroState.statsTotal.battles} batalhas.
        </p>
        <p style="margin-top:14px;color:var(--gold)">Mas além do portal… algo ainda se move. O Modo Infinito desperta.</p>
      </div>
      <div style="display:flex;gap:10px">
        <button class="menu-btn">🏠 Menu</button>
        <button class="primary endless">♾️ Modo Infinito</button>
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
      <h3>📖 Bestiário</h3>
      <div class="bestiary-tabs">
        <button class="tab-enemies primary">Criaturas</button>
        <button class="tab-adjectives">Adjetivos</button>
      </div>
      <div class="bestiary-counter"></div>
      <div class="bestiary-grid"></div>
      <div class="modal-actions"><button class="primary close">Fechar</button></div>
    `);
    const grid = inner.querySelector('.bestiary-grid');
    const counter = inner.querySelector('.bestiary-counter');
    const tabE = inner.querySelector('.tab-enemies');
    const tabA = inner.querySelector('.tab-adjectives');

    const renderEnemies = () => {
      tabE.classList.add('primary'); tabA.classList.remove('primary');
      const seen = bestiaryData.enemies;
      setHTML(counter, `Descobertas: <b>${seen.size}</b> / ${ENEMIES.length} criaturas`);
      grid.replaceChildren();
      for (const e of [...ENEMIES].sort((a, b) => a.tier - b.tier || a.pt.localeCompare(b.pt))) {
        const known = seen.has(e.id);
        const card = div(`bestiary-card ${known ? '' : 'locked'}`);
        setHTML(card, known
          ? `<div class="b-name">${familyIcon(e.family)} ${esc(e.pt)}</div><div class="b-sub">Tier ${e.tier} · ${esc(e.family)} · ${e.hp} PV · CA ${e.ac}</div>`
          : `<div class="b-name">❔ ???</div><div class="b-sub">Tier ${e.tier} · ${esc(e.family)}</div>`);
        grid.appendChild(card);
      }
    };
    const renderAdjectives = () => {
      tabA.classList.add('primary'); tabE.classList.remove('primary');
      const seen = bestiaryData.adjectives;
      setHTML(counter, `Descobertos: <b>${seen.size}</b> / ${ADJECTIVES.length} adjetivos`);
      grid.replaceChildren();
      for (const a of [...ADJECTIVES].sort((x, y) => x.tier - y.tier || x.m.localeCompare(y.m))) {
        const known = seen.has(a.id);
        const card = div(`bestiary-card ${known ? '' : 'locked'}`);
        setHTML(card, known
          ? `<div class="b-name">${esc(a.m)}</div><div class="b-sub">T${a.tier} — ${esc(a.desc)}</div>`
          : `<div class="b-name">❔ ???</div><div class="b-sub">Tier ${a.tier}</div>`);
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
      <h3>❓ Como Jogar</h3>
      <div class="help-section">
        <b>Objetivo:</b> derrote todos os inimigos de cada batalha. 5 zonas × 10 batalhas,
        com um chefe a cada 10ª. Depois da 50ª… o Modo Infinito.
      </div>
      <div class="help-section">
        <b>Seu turno:</b> mova-se (casas azuis) e use 1 ação (ataque/habilidade).
        Clique num inimigo ao alcance para atacar. Poções são ações livres (1/turno).
        Sair do corpo a corpo provoca <b>ataques de oportunidade</b>!
      </div>
      <div class="help-section">
        <b>D&D nas regras:</b> d20 + bônus vs CA para acertar; 20 natural = crítico (dados dobrados);
        vantagem/desvantagem; testes de resistência contra efeitos; terreno alto dá +2 de acerto;
        atacar à distância adjacente a um inimigo impõe desvantagem.
      </div>
      <div class="help-section">
        <b>Adjetivos:</b> cada criatura pode vir com adjetivos que mudam tudo —
        um <i>Goblin Flamejante Gigante</i> é outra criatura. Passe o mouse para ler os efeitos!
      </div>
      <div class="help-section">
        <b>Atalhos:</b> <span class="kbd">1-9</span> habilidades · <span class="kbd">T</span> encerrar turno ·
        <span class="kbd">Q/E</span> girar câmera · <span class="kbd">roda</span> zoom ·
        <span class="kbd">Esc</span> cancelar mira · <span class="kbd">H</span> esta ajuda
      </div>
      <div class="help-section">
        <b>Entre batalhas:</b> cura completa, loja (poções e melhorias permanentes) e
        aumentos de atributo a cada 4 níveis. Derrota custa 10% do ouro — nunca o progresso.
      </div>
      <div class="modal-actions"><button class="primary close">Entendi!</button></div>
    `);
    inner.querySelector('.close').onclick = onClose;
    return this.openModal(inner);
  }
}
