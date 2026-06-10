// Áudio procedural via WebAudio: efeitos sintetizados + canais de volume
// separados (música / golpes & efeitos), persistidos em localStorage.
// A música em si fica em audio/music.js (MusicEngine usa o musicGain daqui).

const LS_MUSIC = 'frosty-vol-music';
const LS_SFX = 'frosty-vol-sfx';
const LS_MUTE = 'frosty-muted';

function readLS(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v == null ? fallback : v;
  } catch { return fallback; }
}

export class Sfx {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.sfxGain = null;
    this.musicGain = null;
    this.muted = readLS(LS_MUTE, '0') === '1';
    this.volMusic = Math.max(0, Math.min(100, +readLS(LS_MUSIC, 70)));
    this.volSfx = Math.max(0, Math.min(100, +readLS(LS_SFX, 80)));
  }

  ensure() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.master = this.ctx.createGain();
      this.master.gain.value = this.muted ? 0 : 1;
      this.master.connect(this.ctx.destination);
      this.sfxGain = this.ctx.createGain();
      this.sfxGain.connect(this.master);
      this.musicGain = this.ctx.createGain();
      this.musicGain.connect(this.master);
      this.applyVolumes();
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
    return this.ctx;
  }

  applyVolumes() {
    if (!this.ctx) return;
    // curvas: efeitos até 0.55, música até 0.34 (equilíbrio mix)
    this.sfxGain.gain.value = (this.volSfx / 100) * 0.55;
    this.musicGain.gain.value = (this.volMusic / 100) * 0.34;
  }

  setMusicVolume(v) {
    this.volMusic = Math.max(0, Math.min(100, Math.round(v)));
    try { localStorage.setItem(LS_MUSIC, String(this.volMusic)); } catch { /* ok */ }
    this.applyVolumes();
  }

  setSfxVolume(v) {
    this.volSfx = Math.max(0, Math.min(100, Math.round(v)));
    try { localStorage.setItem(LS_SFX, String(this.volSfx)); } catch { /* ok */ }
    this.applyVolumes();
  }

  toggleMute() {
    this.muted = !this.muted;
    try { localStorage.setItem(LS_MUTE, this.muted ? '1' : '0'); } catch { /* ok */ }
    if (this.master) this.master.gain.value = this.muted ? 0 : 1;
    return this.muted;
  }

  // ---------- blocos de síntese (canal de EFEITOS) ----------
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
    osc.connect(g).connect(this.sfxGain);
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
    src.connect(filter).connect(g).connect(this.sfxGain);
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
}
