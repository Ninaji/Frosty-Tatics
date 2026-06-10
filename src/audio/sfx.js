// Áudio procedural via WebAudio: efeitos sintetizados + ambiente por zona.
// Sem arquivos externos — tudo gerado em tempo real.

export class Sfx {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.musicGain = null;
    this.muted = this.loadMuted();
    this.musicNodes = [];
  }

  ensure() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.master = this.ctx.createGain();
      this.master.gain.value = this.muted ? 0 : 0.5;
      this.master.connect(this.ctx.destination);
      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.value = 0.16;
      this.musicGain.connect(this.master);
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
    return this.ctx;
  }

  loadMuted() {
    try { return localStorage.getItem('frosty-muted') === '1'; } catch { return false; }
  }

  toggleMute() {
    this.muted = !this.muted;
    try { localStorage.setItem('frosty-muted', this.muted ? '1' : '0'); } catch { /* ok */ }
    if (this.master) this.master.gain.value = this.muted ? 0 : 0.5;
    return this.muted;
  }

  // ---------- blocos de síntese ----------
  tone({ freq = 440, type = 'sine', dur = 0.15, vol = 0.3, slide = 0, delay = 0 }) {
    const ctx = this.ensure();
    const t0 = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(30, freq + slide), t0 + dur);
    g.gain.setValueAtTime(vol, t0);
    g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
    osc.connect(g).connect(this.master);
    osc.start(t0);
    osc.stop(t0 + dur + 0.02);
  }

  noise({ dur = 0.2, vol = 0.25, freq = 1000, q = 1, type = 'bandpass', delay = 0, slide = 0 }) {
    const ctx = this.ensure();
    const t0 = ctx.currentTime + delay;
    const len = Math.ceil(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const filter = ctx.createBiquadFilter();
    filter.type = type;
    filter.frequency.setValueAtTime(freq, t0);
    if (slide) filter.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), t0 + dur);
    filter.Q.value = q;
    const g = ctx.createGain();
    g.gain.setValueAtTime(vol, t0);
    g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
    src.connect(filter).connect(g).connect(this.master);
    src.start(t0);
  }

  // ---------- efeitos ----------
  click() { this.tone({ freq: 700, type: 'square', dur: 0.05, vol: 0.12 }); }
  step() { this.noise({ dur: 0.07, vol: 0.06, freq: 500, type: 'lowpass' }); }
  slash() { this.noise({ dur: 0.14, vol: 0.18, freq: 2600, slide: -1800, q: 2 }); }
  miss() { this.noise({ dur: 0.12, vol: 0.1, freq: 1200, slide: 800 }); }
  hit() {
    this.noise({ dur: 0.1, vol: 0.22, freq: 300, type: 'lowpass' });
    this.tone({ freq: 160, type: 'triangle', dur: 0.12, vol: 0.2, slide: -60 });
  }
  crit() {
    this.noise({ dur: 0.18, vol: 0.3, freq: 400, type: 'lowpass' });
    this.tone({ freq: 90, type: 'sawtooth', dur: 0.25, vol: 0.25, slide: -40 });
    this.tone({ freq: 1200, type: 'square', dur: 0.1, vol: 0.12, slide: 600, delay: 0.03 });
  }
  death() { this.tone({ freq: 320, type: 'sawtooth', dur: 0.5, vol: 0.16, slide: -260 }); }
  heal() {
    [523, 659, 784].forEach((f, i) => this.tone({ freq: f, dur: 0.16, vol: 0.12, delay: i * 0.07 }));
  }
  potion() { this.tone({ freq: 880, type: 'sine', dur: 0.2, vol: 0.12, slide: 220 }); }
  jump() { this.noise({ dur: 0.3, vol: 0.12, freq: 900, slide: 1400 }); }
  blast() {
    this.noise({ dur: 0.4, vol: 0.3, freq: 250, type: 'lowpass', slide: -150 });
  }
  summon() { this.tone({ freq: 220, type: 'triangle', dur: 0.35, vol: 0.15, slide: 330 }); }
  levelup() {
    [523, 659, 784, 1047].forEach((f, i) => this.tone({ freq: f, type: 'triangle', dur: 0.22, vol: 0.16, delay: i * 0.1 }));
  }
  victory() {
    [392, 523, 659, 784, 1047].forEach((f, i) => this.tone({ freq: f, type: 'triangle', dur: 0.3, vol: 0.15, delay: i * 0.12 }));
  }
  defeat() {
    [400, 320, 250, 180].forEach((f, i) => this.tone({ freq: f, type: 'sawtooth', dur: 0.4, vol: 0.12, delay: i * 0.18 }));
  }

  // ---------- ambiente por zona ----------
  stopMusic() {
    for (const n of this.musicNodes) {
      try { n.stop ? n.stop() : n.disconnect(); } catch { /* ok */ }
    }
    this.musicNodes = [];
  }

  playZoneAmbient(tier = 1) {
    const ctx = this.ensure();
    this.stopMusic();
    // acordes por zona (fundamental em Hz)
    const roots = { 1: 220, 2: 196, 3: 174.6, 4: 164.8, 5: 146.8 };
    const root = roots[tier] ?? 220;
    const intervals = tier >= 4 ? [1, 1.189, 1.498] : [1, 1.26, 1.498]; // menor p/ zonas sombrias
    for (let i = 0; i < intervals.length; i++) {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = root * intervals[i] / 2;
      const g = ctx.createGain();
      g.gain.value = 0.05;
      // LFO sutil
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.07 + i * 0.03;
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 0.02;
      lfo.connect(lfoGain).connect(g.gain);
      osc.connect(g).connect(this.musicGain);
      osc.start();
      lfo.start();
      this.musicNodes.push(osc, lfo);
    }
  }
}
