// Frosty Tactics — ponto de entrada: amarra lógica, 3D, UI, áudio e input.

import * as THREE from 'three';
import { SceneManager, tileCenter } from './render/scene.js';
import { TileMap } from './render/tiles.js';
import { FX, DamageNumbers } from './render/effects.js';
import { BattleRenderer } from './render/eventPlayer.js';
import { buildFrosty, buildEnemyMesh, animateModelParts } from './render/characters.js';
import { ENEMY_BY_ID } from './data/enemies.js';
import { Sfx } from './audio/sfx.js';
import { MusicEngine } from './audio/music.js';
import { trackForBattle, MENU_TRACK, TRACKS } from './audio/tracks.js';
import { Hud } from './ui/hud.js';
import { Screens } from './ui/screens.js';
import { div, setHTML } from './ui/dom.js';
import { Game } from './game/state.js';
import { loadSave, applySave, clearSave, hasSave } from './game/saveload.js';
import { heroAutoTurn, autoShop, autoAsi } from './game/autoplay.js';
import { applyAsi, recomputeHero } from './data/frosty.js';
import { POTIONS, UPGRADES } from './data/items.js';
import { TOTAL_BATTLES } from './data/campaign.js';
import { chebyshev, lineTiles } from './game/grid.js';
import { t, getLocale, setLocale, hasStoredLocale } from './i18n.js';
import { abilityName } from './i18n-data.js';

const params = new URLSearchParams(location.search);

class App {
  constructor() {
    this.canvas = document.getElementById('game-canvas');
    this.uiRoot = document.getElementById('ui-root');
    this.sceneMgr = new SceneManager(this.canvas);
    this.fx = new FX(this.sceneMgr);
    this.sfx = new Sfx();
    this.music = new MusicEngine(this.sfx);
    this._pendingTrack = null;
    this.screens = new Screens(this.uiRoot);

    this.dmgLayer = div('dmg-layer');
    this.uiRoot.appendChild(this.dmgLayer);
    this.dmg = new DamageNumbers(this.sceneMgr, this.dmgLayer);

    this.hud = new Hud(this.uiRoot, {
      onAbilitySelect: (a) => this.selectAbility(a),
      onPotion: (id) => this.usePotion(id),
      onEndTurn: () => this.endTurn(),
      onToggleMute: () => this.sfx.toggleMute(),
      onToggleSpeed: () => this.toggleSpeed(),
      onHelp: () => this.screens.help(() => this.screens.closeModal()),
      onDemoToggle: () => this.toggleDemo(),
    });
    this.hud.hide();

    this.game = null;
    this.battle = null;
    this.renderer = null;
    this.tilemap = null;
    this.selectedAbility = null;
    this.demoMode = params.has('demo');
    this.autoAdvance = params.has('auto');
    this.speedIdx = params.has('speed') ? -1 : 0;
    this.speeds = [1, 2, 4];
    this.customSpeed = +params.get('speed') || null;
    this.menuDecor = null;

    this.bindInput();
    this.sceneMgr.start();
    this.applyDocumentTitle();
    if (params.has('model')) {
      this.inspectModel(params.get('model') || 'frosty');
    } else if (!hasStoredLocale() && !params.has('lang') && !this.autoAdvance) {
      // primeira visita: escolha de idioma antes de tudo
      this.setupMenuDecor();
      this.screens.languagePicker((lang) => {
        setLocale(lang);
        this.applyDocumentTitle();
        this.showMenu();
      });
    } else {
      if (params.has('lang')) setLocale(params.get('lang'));
      this.showMenu();
    }
    window.__app = this; // exposto para depuração e testes automatizados

    // playthrough automatizado: entra direto no jogo (retomando o save se houver)
    if (this.autoAdvance) {
      setTimeout(() => {
        if (this.game) return;
        if (hasSave()) {
          const g = new Game(1);
          applySave(g, loadSave());
          recomputeHero(g.hero);
          this.startGame(g);
        } else {
          this.startGame(new Game(this.seedFromParams()));
        }
      }, 600);
    }
  }

  get speed() {
    return this.customSpeed ?? this.speeds[this.speedIdx];
  }

  toggleSpeed() {
    this.customSpeed = null;
    this.speedIdx = (this.speedIdx + 1) % this.speeds.length;
    if (this.renderer) this.renderer.speed = this.speed;
    return this.speed;
  }

  toggleDemo() {
    this.demoMode = !this.demoMode;
    if (this.demoMode) this.driveDemo();
    this.syncHud();
    return this.demoMode;
  }

  // ================= INSPEÇÃO DE MODELO (validação visual) =================
  inspectModel(kind) {
    this.hud.hide();
    this.sceneMgr.setSky('#232b40', '#232b40');
    const floor = new THREE.Mesh(
      new THREE.CylinderGeometry(1.6, 1.6, 0.1, 24),
      new THREE.MeshStandardMaterial({ color: '#3a4663', roughness: 0.9 })
    );
    floor.position.y = -0.05;
    floor.receiveShadow = true;
    this.sceneMgr.scene.add(floor);

    const base = ENEMY_BY_ID.get(kind);
    const model = base ? buildEnemyMesh({ visual: base.visual, baseId: base.id }) : buildFrosty();
    this.sceneMgr.scene.add(model);
    this.sceneMgr.camTarget.set(0, 0.75, 0);
    this.sceneMgr.camZoom = 5.5;
    this.sceneMgr.resize();
    window.__model = model;
    this.sceneMgr.onFrame((now) => animateModelParts(model, now));
  }

  // música respeitando a política de autoplay: só toca após o 1º gesto do usuário
  playMusic(trackId) {
    if (this.sfx.ctx && this.sfx.ctx.state === 'running') {
      this.music.play(trackId);
    } else {
      this._pendingTrack = trackId;
    }
  }

  // ================= MENU =================
  showMenu() {
    this.teardownBattle();
    this.hud.hide();
    this.setupMenuDecor();
    this.playMusic(MENU_TRACK);
    this.screens.mainMenu({
      hasSave: hasSave(),
      campaignComplete: loadSave()?.campaignComplete,
      onNew: () => { clearSave(); this.startGame(new Game(this.seedFromParams())); },
      onContinue: () => {
        const g = new Game(1);
        applySave(g, loadSave());
        recomputeHero(g.hero);
        this.startGame(g);
      },
      onBestiary: () => {
        const save = loadSave();
        const data = save
          ? { enemies: new Set(save.bestiary.enemies), adjectives: new Set(save.bestiary.adjectives) }
          : { enemies: new Set(), adjectives: new Set() };
        this.screens.bestiary(data, () => this.screens.closeModal());
      },
      onHelp: () => this.screens.help(() => this.screens.closeModal()),
      onLanguage: () => {
        setLocale(getLocale() === 'pt' ? 'en' : 'pt');
        this.applyDocumentTitle();
        if (this.game) recomputeHero(this.game.hero);
        this.hud.applyStaticLabels(this.speed);
        this.showMenu(); // re-renderiza no novo idioma
      },
      volumes: {
        getMusic: () => this.sfx.volMusic,
        getSfx: () => this.sfx.volSfx,
        setMusic: (v) => this.sfx.setMusicVolume(v),
        setSfx: (v) => this.sfx.setSfxVolume(v),
        testSfx: () => { this.sfx.ensure(); this.sfx.hit(); },
      },
      onJukebox: (btn) => this.openJukebox(btn),
    });
    // disco gira se já há música tocando
    this.uiRoot.querySelector('.jukebox-btn')?.classList.toggle('spinning', !!this.music.state);
  }

  openJukebox(btn) {
    const ids = Object.keys(TRACKS);
    this.screens.jukebox(ids, {
      titleOf: (id) => t(`track.${id}`),
      subtitleOf: (id) => {
        const tr = TRACKS[id];
        const kind = id.endsWith('boss') ? t('jukebox.bossTheme') : t('jukebox.zoneTheme');
        return `${kind} · ${tr.bpm} BPM`;
      },
      isPlaying: (id) => this.music.state?.trackId === id,
      play: (id) => { this.sfx.ensure(); this.music.play(id); btn?.classList.add('spinning'); },
      stop: () => { this.music.stop(); btn?.classList.remove('spinning'); },
      bindPartChange: (cb) => {
        this.music.onPartChange = cb;
        return () => { this.music.onPartChange = null; };
      },
      onClose: () => {
        this.screens.closeModal();
        // sem nada tocando? volta ao Tema Principal do menu
        if (!this.music.state) this.playMusic(MENU_TRACK);
        this.uiRoot.querySelector('.jukebox-btn')?.classList.toggle('spinning', !!this.music.state);
      },
    });
  }

  applyDocumentTitle() {
    document.title = getLocale() === 'en'
      ? 'Frosty Tactics — The Runic Blade'
      : 'Frosty Tactics — A Lâmina Rúnica';
  }

  seedFromParams() {
    return params.has('seed') ? +params.get('seed') : (Date.now() & 0x7fffffff);
  }

  setupMenuDecor() {
    if (this.menuDecor) return;
    this.sceneMgr.setSky('#101626', '#1a2438');
    const g = new THREE.Group();
    // pedestal de gelo
    const ped = new THREE.Mesh(
      new THREE.CylinderGeometry(1.5, 1.9, 0.5, 8),
      new THREE.MeshStandardMaterial({ color: '#9accee', roughness: 0.25, metalness: 0.1 })
    );
    ped.position.y = -0.25;
    g.add(ped);
    const frosty = buildFrosty();
    frosty.scale.setScalar(1.8);
    g.add(frosty);
    this.sceneMgr.scene.add(g);
    this.menuDecor = g;
    this.sceneMgr.centerOn(0, 0);
    this.sceneMgr.camZoom = 1.6;
    this.sceneMgr.resize();
    this._menuSpin = this.sceneMgr.onFrame((now) => {
      g.rotation.y = now / 3000;
      const parts = frosty.userData.parts;
      if (parts) {
        for (const w of [parts.wingL, parts.wingR]) {
          const f = w.userData.flap ?? { base: 0, dir: 1 };
          w.rotation.z = f.base + f.dir * Math.sin(now / 700) * 0.12;
        }
      }
    });
  }

  clearMenuDecor() {
    if (this.menuDecor) {
      this._menuSpin?.();
      this.sceneMgr.dispose(this.menuDecor);
      this.menuDecor = null;
      this.sceneMgr.camZoom = 1;
      this.sceneMgr.resize();
    }
  }

  // ================= FLUXO DE JOGO =================
  startGame(game) {
    this.game = game;
    this.maybeZoneIntro();
  }

  maybeZoneIntro() {
    const idx = this.game.battleIndex;
    const isZoneStart = !this.game.isEndless && (idx - 1) % 10 === 0;
    if (isZoneStart && !this.autoAdvance) {
      this.screens.zoneIntro(this.game.zone, idx, () => this.launchBattle());
    } else {
      this.launchBattle();
    }
  }

  launchBattle() {
    this.screens.clear();
    this.screens.closeModal();
    this.clearMenuDecor();
    this.teardownBattle();

    const battle = this.game.startBattle();
    this.battle = battle;

    const zone = battle.zone;
    this.sceneMgr.setSky(zone.palette.sky, zone.palette.fog);
    this.tilemap = new TileMap(this.sceneMgr, battle.grid, zone);
    this.renderer = new BattleRenderer({
      sceneMgr: this.sceneMgr, fx: this.fx, dmg: this.dmg, audio: this.sfx,
      battle, tilemap: this.tilemap,
      onLog: (msg, cls) => this.hud.log(msg, cls),
      onSync: () => this.syncHud(),
      speed: this.speed,
    });

    const cx = (battle.grid.w - 1) / 2, cy = (battle.grid.h - 1) / 2;
    this.sceneMgr.centerOn(cx, cy);
    this.sceneMgr.camZoom = Math.min(1.15, 11 / battle.grid.w);
    this.sceneMgr.resize();

    this.hud.clearLog();
    this.hud.show();
    this.selectedAbility = null;
    this.playMusic(trackForBattle(zone.tier, battle.isBossBattle));

    // anima eventos do início (iniciativa + possíveis turnos inimigos)
    this.renderer.drainAndPlay().then(() => {
      this.afterEvents();
      if (this.demoMode) this.driveDemo();
    });
    this.updateInteraction();
  }

  teardownBattle() {
    this.renderer?.dispose();
    this.renderer = null;
    this.tilemap?.dispose();
    this.tilemap = null;
    this.battle = null;
  }

  syncHud() {
    if (!this.battle) return;
    this.hud.sync(this.battle, this.game.hero, {
      selectedAbility: this.selectedAbility,
      busy: this.renderer?.busy,
      demoMode: this.demoMode,
    });
  }

  async afterEvents() {
    if (!this.battle) return;
    if (this.battle.state === 'victory') return this.handleVictory();
    if (this.battle.state === 'defeat') return this.handleDefeat();
    this.updateInteraction();
    this.syncHud();
  }

  handleVictory() {
    const wasLast = this.game.battleIndex === TOTAL_BATTLES;
    const summary = this.game.collectVictory();
    if (summary.levelsGained.length) this.sfx.levelup();
    this.updateInteraction();

    const proceed = () => {
      this.screens.closeModal();
      if (wasLast) {
        this.screens.campaignVictory(this.game.hero,
          () => this.maybeZoneIntro(),
          () => this.showMenu());
      } else {
        this.maybeZoneIntro();
      }
    };

    if (this.autoAdvance) {
      // playthrough automático: compra, distribui atributos e segue
      autoAsi(this.game.hero, (h, a, b) => applyAsi(h, a, b));
      autoShop(this.game.hero, { POTIONS, UPGRADES });
      if (wasLast) {
        this.screens.campaignVictory(this.game.hero,
          () => this.maybeZoneIntro(),
          () => this.showMenu());
        if (!params.has('stopatend')) {
          setTimeout(() => { this.screens.clear(); this.maybeZoneIntro(); }, 2500);
        }
      } else {
        proceed();
      }
      return;
    }

    const showResults = () => this.screens.victoryResults(summary, this.game.hero, {
      onShop: () => this.screens.shop(this.game.hero, {
        onBuyPotion: (id) => this.buyPotion(id),
        onBuyUpgrade: (id) => this.buyUpgrade(id),
        onClose: () => showResults(),
      }),
      onNext: proceed,
      onAsi: () => {
        const askAsi = () => this.screens.asiModal(this.game.hero, (a, b) => {
          applyAsi(this.game.hero, a, b);
          this.sfx.levelup();
          if (this.game.hero.pendingAsi > 0) askAsi();
          else showResults();
        });
        askAsi();
      },
    });
    showResults();
  }

  handleDefeat() {
    const info = this.game.collectDefeat();
    this.updateInteraction();
    if (this.autoAdvance) {
      autoShop(this.game.hero, { POTIONS, UPGRADES });
      this.maybeZoneIntro();
      return;
    }
    this.screens.defeatScreen(info, () => this.maybeZoneIntro(), () => this.showMenu());
  }

  buyPotion(id) {
    const p = POTIONS[id];
    const h = this.game.hero;
    if (h.gold < p.price) return;
    h.gold -= p.price;
    h.potions[id] = (h.potions[id] ?? 0) + 1;
    this.sfx.click();
  }

  buyUpgrade(id) {
    const u = UPGRADES[id];
    const h = this.game.hero;
    const lvl = h.upgrades[id];
    if (lvl >= u.max) return;
    const price = u.price(lvl);
    if (h.gold < price) return;
    h.gold -= price;
    h.upgrades[id]++;
    recomputeHero(h);
    this.sfx.levelup();
  }

  // ================= MODO DEMO =================
  async driveDemo() {
    if (this._demoRunning) return;
    this._demoRunning = true;
    try {
      while (this.demoMode && this.battle && this.battle.state === 'active') {
        if (this.battle.isPlayerTurn() && !this.renderer.busy) {
          heroAutoTurn(this.battle);
          await this.renderer.drainAndPlay();
          await this.afterEvents();
        } else {
          await new Promise((r) => setTimeout(r, 120));
        }
      }
    } finally {
      this._demoRunning = false;
    }
  }

  // ================= AÇÕES DO JOGADOR =================
  async performAction(fn) {
    if (!this.battle?.isPlayerTurn() || this.renderer.busy || this.demoMode) return;
    const ok = fn();
    if (ok === false) return;
    this.clearTargeting();
    await this.renderer.drainAndPlay();
    await this.afterEvents();
  }

  selectAbility(a) {
    if (!this.battle?.isPlayerTurn() || this.renderer?.busy) return;
    this.sfx.click();
    if (this.selectedAbility?.id === a.id) return this.clearTargeting();

    // habilidades imediatas (self/aoe centrado nela)
    if (a.kind === 'self' || (a.kind === 'aoe' && a.targeting === 'self')) {
      this.performAction(() => this.battle.playerAbility(a, null));
      return;
    }
    this.selectedAbility = a;
    this.updateInteraction();
    this.syncHud();
  }

  usePotion(id) {
    this.performAction(() => this.battle.playerUsePotion(id));
  }

  endTurn() {
    this.performAction(() => this.battle.playerEndTurn());
  }

  clearTargeting() {
    this.selectedAbility = null;
    this.updateInteraction();
    this.syncHud();
  }

  // destaque de casas conforme o modo atual
  updateInteraction() {
    if (!this.tilemap || !this.battle) return;
    this.tilemap.clearHighlights();
    this.hud.setHint(null);
    if (!this.battle.isPlayerTurn() || this.battle.state !== 'active' || this.demoMode) return;

    const hero = this.battle.hero;
    const a = this.selectedAbility;

    if (!a) {
      // modo padrão: movimento + inimigos no alcance da arma
      const reach = this.battle.reachableFor(hero);
      this.tilemap.highlight([...reach.values()], 'move');
      const targets = this.battle.targetsInRange(hero, hero.attacks[0]);
      if (hero.actionsLeft > 0) {
        this.tilemap.highlight(targets.map((t) => t.pos), 'attack');
      }
      return;
    }

    if (a.kind === 'attack' || a.kind === 'charge') {
      const range = a.kind === 'charge' ? a.range + 1 : (a.range ?? 1);
      const targets = this.battle.opponentsOf(hero).filter((u) => chebyshev(hero.pos, u.pos) <= range);
      this.tilemap.highlight(targets.map((u) => u.pos), 'attack');
      this.hud.setHint(t('hud.hintTarget', { icon: a.icon, name: abilityName(a) }));
    } else if (a.kind === 'move') {
      const range = this.game.hero.wingRange ?? a.range;
      const occ = this.battle.occupiedMap();
      const cells = [];
      for (let dy = -range; dy <= range; dy++) {
        for (let dx = -range; dx <= range; dx++) {
          const t = this.battle.grid.at(hero.pos.x + dx, hero.pos.y + dy);
          if (!t || t.terrain === 'rock') continue;
          if (chebyshev(hero.pos, t) > range || occ.get(`${t.x},${t.y}`)) continue;
          cells.push(t);
        }
      }
      this.tilemap.highlight(cells, 'aoe');
      this.hud.setHint(t('hud.hintTile', { icon: a.icon, name: abilityName(a) }));
    } else if (a.kind === 'line') {
      const cells = [];
      for (const dir of [{ x: 1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 0, y: -1 }]) {
        cells.push(...lineTiles(this.battle.grid, hero.pos, dir, a.range));
      }
      this.tilemap.highlight(cells, 'aoe');
      this.hud.setHint(t('hud.hintLine', { icon: a.icon, name: abilityName(a) }));
    } else if (a.kind === 'aoe') {
      const cells = this.battle.opponentsOf(hero)
        .filter((t) => chebyshev(hero.pos, t.pos) <= a.radius).map((t) => t.pos);
      this.tilemap.highlight(cells, 'aoe');
    }
  }

  // ================= INPUT =================
  bindInput() {
    let lastHover = null;

    // desbloqueio de áudio no primeiro gesto (política de autoplay dos browsers)
    const unlockAudio = () => {
      this.sfx.ensure();
      if (this._pendingTrack) {
        this.music.play(this._pendingTrack);
        this._pendingTrack = null;
        document.querySelector('.jukebox-btn')?.classList.add('spinning');
      }
      window.removeEventListener('pointerdown', unlockAudio, true);
      window.removeEventListener('keydown', unlockAudio, true);
    };
    window.addEventListener('pointerdown', unlockAudio, true);
    window.addEventListener('keydown', unlockAudio, true);

    // O hover/clique mira SEMPRE o TILE (estilo FFT): corpos 3D grandes não
    // interceptam nem desviam o alvo — a criatura vem do ocupante do tile.
    this.canvas.addEventListener('pointermove', (e) => {
      if (!this.battle || !this.renderer || this.renderer.busy) return;
      const hits = this.sceneMgr.raycast(e.clientX, e.clientY, this.tilemap?.tileMeshes ?? []);
      const tile = hits.length ? hits[0].object.userData.tile : null;
      const unit = tile ? this.battle.unitAt(tile.x, tile.y) : null;

      if (unit && unit.side === 'enemy') {
        this.hud.inspectEnemy(unit);
        // preview de ataque
        if (this.battle.isPlayerTurn() && !this.demoMode) {
          const a = this.selectedAbility;
          const attackLike = !a || a.kind === 'attack' || a.kind === 'charge';
          if (attackLike) {
            const range = a?.kind === 'charge' ? a.range + 1 : (a?.range ?? this.battle.attackRange(this.battle.hero, this.battle.hero.attacks[0]));
            if (chebyshev(this.battle.hero.pos, unit.pos) <= range) {
              const pv = this.battle.previewFor(this.battle.hero, unit, this.battle.hero.attacks[0]);
              const advTxt = pv.adv > 0 ? t('hud.advantage') : pv.adv < 0 ? t('hud.disadvantage') : '';
              this.hud.showPreview(e.clientX, e.clientY,
                t('hud.hitChance', {
                  p: `<span class="hitchance">${Math.round(pv.pHit * 100)}</span>`,
                  d: pv.avgDamage, adv: advTxt,
                }));
            } else this.hud.hidePreview();
          }
        }
      } else {
        this.hud.inspectEnemy(null);
        this.hud.hidePreview();
      }

      // realce de caminho/hover no tile
      const key = tile ? `${tile.x},${tile.y}` : null;
      if (key !== lastHover) {
        lastHover = key;
        this.tilemap?.clearKind('path');
        this.tilemap?.clearKind('hover');
        if (tile && !unit && this.battle.isPlayerTurn() && !this.selectedAbility && !this.demoMode) {
          const reach = this.battle.reachableFor(this.battle.hero);
          const r = reach.get(key);
          if (r) this.tilemap.highlight(r.path, 'path');
          else this.tilemap.highlight([tile], 'hover');
        }
      }
    });

    this.canvas.addEventListener('pointerdown', (e) => {
      if (e.button !== 0) return;
      if (!this.battle || !this.battle.isPlayerTurn() || this.renderer.busy || this.demoMode) return;
      this.sfx.ensure();

      // só tiles no raycast: o que importa é o QUADRADO clicado
      const hits = this.sceneMgr.raycast(e.clientX, e.clientY, this.tilemap?.tileMeshes ?? []);
      const tile = hits.length ? hits[0].object.userData.tile : null;
      if (!tile) return;
      const key = `${tile.x},${tile.y}`;
      const unit = this.battle.unitAt(tile.x, tile.y);
      const a = this.selectedAbility;

      // habilidade em linha mira a DIREÇÃO do tile (com ou sem criatura nele)
      if (a?.kind === 'line') {
        const hero = this.battle.hero;
        const dx = Math.sign(tile.x - hero.pos.x);
        const dy = Math.sign(tile.y - hero.pos.y);
        if ((dx !== 0) === (dy !== 0)) return; // precisa ser ortogonal
        this.performAction(() => this.battle.playerAbility(a, { dir: { x: dx, y: dy } }));
        return;
      }

      // tile com inimigo = alvo de ataque/habilidade
      if (unit && unit.side === 'enemy') {
        this.hud.hidePreview();
        if (a?.kind === 'attack' || a?.kind === 'charge') {
          this.performAction(() => this.battle.playerAbility(a, unit));
        } else if (!a) {
          this.performAction(() => this.battle.playerAttack(unit.id));
        }
        return;
      }

      // tile livre = movimento (ou destino do Salto Alado)
      if (a?.kind === 'move') {
        this.performAction(() => this.battle.playerAbility(a, { key }));
      } else if (!a) {
        this.performAction(() => {
          const ok = this.battle.playerMove(key);
          return ok;
        });
      }
    });

    this.canvas.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      this.clearTargeting();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { this.clearTargeting(); this.screens.closeModal(); }
      if (!this.battle) return;
      if (e.key === 'q' || e.key === 'Q') this.sceneMgr.rotate(1);
      if (e.key === 'e' || e.key === 'E') this.sceneMgr.rotate(-1);
      if (e.key === 't' || e.key === 'T') this.endTurn();
      if (e.key === 'h' || e.key === 'H') this.screens.help(() => this.screens.closeModal());
      const n = parseInt(e.key, 10);
      if (n >= 1 && n <= 9) {
        const a = this.battle.hero.abilities?.[n - 1];
        if (a) this.selectAbility(a);
      }
    });

    window.addEventListener('wheel', (e) => {
      if (!this.battle) return;
      this.sceneMgr.zoomBy(e.deltaY > 0 ? 0.9 : 1.1);
    }, { passive: true });
  }

}

new App();
