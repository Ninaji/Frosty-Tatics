// Motor de música procedural (WebAudio, zero assets).
// Cada faixa é um ciclo de 5 partes que emenda sem corte (parte 5 → parte 1):
// o sequenciador agenda notas continuamente no relógio de áudio (lookahead),
// então o loop é perfeito por construção.

import { TRACKS } from './tracks.js';

const SIXTEENTHS_PER_BAR = 16; // 4/4

export class MusicEngine {
  constructor(sfx) {
    this.sfx = sfx;               // compartilha AudioContext e musicGain
    this.current = null;          // { track, partIdx, bar, sixteenth }
    this.timer = null;
    this.nextTime = 0;
    this.lookahead = 0.15;        // segundos agendados à frente
    this.tickMs = 30;
    this.testMode = false;        // 1 compasso por parte (validação rápida)
    this.onPartChange = null;     // callback (trackId, partIdx)
    this._lastChordSchedBar = -1;
    this._echo = null;
  }

  get ctx() { return this.sfx.ctx; }

  ensureGraph() {
    this.sfx.ensure();
    if (!this._bus) {
      // barramento da música: aquecimento + reforço de graves + eco discreto
      const ctx = this.ctx;
      this._bus = ctx.createGain();
      this._bus.gain.value = 1;
      const warm = ctx.createBiquadFilter();
      warm.type = 'lowpass';
      warm.frequency.value = 9000;
      const shelf = ctx.createBiquadFilter();
      shelf.type = 'lowshelf';
      shelf.frequency.value = 150;
      shelf.gain.value = 5; // +5dB de peso nas batidas graves
      this._bus.connect(warm).connect(shelf).connect(this.sfx.musicGain);

      const delay = ctx.createDelay(1.2);
      delay.delayTime.value = 0.31;
      const fb = ctx.createGain();
      fb.gain.value = 0.22;
      const wet = ctx.createGain();
      wet.gain.value = 0.16;
      delay.connect(fb).connect(delay);
      delay.connect(wet).connect(this.sfx.musicGain);
      this._echoIn = ctx.createGain();
      this._echoIn.connect(delay);
      this._echoIn.connect(this._bus);
    }
  }

  // ---------- API ----------
  play(trackId) {
    const track = TRACKS[trackId];
    if (!track) return false;
    if (this.current?.track.id === trackId) return true; // já tocando
    this.stop();
    this.ensureGraph();
    this.current = { track, partIdx: 0, bar: 0, sixteenth: 0 };
    this.nextTime = this.ctx.currentTime + 0.06;
    this._lastChordSchedBar = -1;
    this.timer = setInterval(() => this.scheduler(), this.tickMs);
    this.onPartChange?.(track.id, 0);
    return true;
  }

  stop() {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
    this.current = null;
  }

  get state() {
    return this.current
      ? { trackId: this.current.track.id, part: this.current.partIdx, bar: this.current.bar }
      : null;
  }

  // ---------- sequenciador ----------
  scheduler() {
    if (!this.current || !this.ctx) return;
    while (this.nextTime < this.ctx.currentTime + this.lookahead) {
      this.scheduleStep(this.nextTime);
      this.advance();
    }
  }

  secondsPerSixteenth() {
    const sp = 60 / this.current.track.bpm / 4;
    return this.testMode ? sp / 4 : sp; // modo teste: 4× mais rápido + 1 compasso/parte
  }

  advance() {
    const c = this.current;
    const part = c.track.parts[c.partIdx];
    const barsInPart = this.testMode ? 1 : part.bars;
    this.nextTime += this.secondsPerSixteenth();
    c.sixteenth++;
    if (c.sixteenth >= SIXTEENTHS_PER_BAR) {
      c.sixteenth = 0;
      c.bar++;
      if (c.bar >= barsInPart) {
        c.bar = 0;
        c.partIdx = (c.partIdx + 1) % c.track.parts.length; // 5 → 1: o LOOP
        this.onPartChange?.(c.track.id, c.partIdx);
      }
    }
  }

  scheduleStep(t) {
    const c = this.current;
    const track = c.track;
    const part = track.parts[c.partIdx];
    const s = c.sixteenth;
    const beat = Math.floor(s / 4);          // 0..3
    const sub = s % 4;                        // posição dentro do beat
    const chordDeg = part.chords[c.bar % part.chords.length];
    const vol = part.intensity ?? 0.8;

    // PAD: acorde sustentado no início de cada compasso
    if (part.pad && s === 0) {
      this.pad(t, track, chordDeg, this.barSeconds(), vol);
    }

    // BAIXO
    if (part.bass) this.bassPattern(t, track, part, chordDeg, s, vol);

    // BATERIA
    if (part.drums) this.drumPattern(t, part.drums, s, vol);

    // ARPEJO
    if (part.arp) this.arpPattern(t, track, part, chordDeg, s, vol);

    // MELODIA (lead): notas posicionadas por compasso/beat dentro da PARTE
    if (part.lead) {
      const stepInPart = c.bar * SIXTEENTHS_PER_BAR + s;
      for (const n of part.lead) {
        const [deg, oct, startSixteenth, lenSixteenths] = n;
        if ((this.testMode ? startSixteenth % SIXTEENTHS_PER_BAR === stepInPart : startSixteenth === stepInPart)) {
          this.lead(t, track, deg, oct, lenSixteenths * this.secondsPerSixteenth(), vol);
          if (this.testMode) break; // evita empilhar em modo de teste
        }
      }
    }
  }

  barSeconds() {
    return this.secondsPerSixteenth() * SIXTEENTHS_PER_BAR;
  }

  // ---------- teoria: graus → frequência ----------
  degreeToMidi(track, degree, octaveOffset = 0) {
    const mode = track.mode;
    const len = mode.length;
    const idx = ((degree % len) + len) % len;
    const octFromDeg = Math.floor(degree / len);
    return track.root + mode[idx] + (octFromDeg + octaveOffset) * 12;
  }

  freq(midi) {
    return 440 * Math.pow(2, (midi - 69) / 12);
  }

  chordFreqs(track, rootDegree) {
    // tríade do modo (1-3-5 diatônico)
    return [0, 2, 4].map((step) => this.freq(this.degreeToMidi(track, rootDegree + step, 0)));
  }

  // ---------- instrumentos ----------
  env(t, dur, peak, attack = 0.01, release = null) {
    const g = this.ctx.createGain();
    const rel = release ?? Math.min(0.2, dur * 0.5);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(peak, t + attack);
    g.gain.setValueAtTime(peak, Math.max(t + attack, t + dur - rel));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    return g;
  }

  pad(t, track, chordDeg, dur, vol) {
    const freqs = this.chordFreqs(track, chordDeg);
    for (const f of freqs) {
      for (const det of [-6, 6]) {
        const o = this.ctx.createOscillator();
        o.type = 'sawtooth';
        o.frequency.value = f / 2;
        o.detune.value = det;
        const lp = this.ctx.createBiquadFilter();
        lp.type = 'lowpass';
        lp.frequency.value = 900;
        const g = this.env(t, dur * 1.05, 0.042 * vol, dur * 0.25, dur * 0.3);
        o.connect(lp).connect(g).connect(this._bus);
        o.start(t);
        o.stop(t + dur * 1.1);
      }
    }
  }

  bassNote(t, f, dur, vol, type = 'sawtooth') {
    const o = this.ctx.createOscillator();
    o.type = type;
    o.frequency.value = f;
    const lp = this.ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(700, t);
    lp.frequency.exponentialRampToValueAtTime(220, t + dur);
    const g = this.env(t, dur, 0.3 * vol, 0.008);
    o.connect(lp).connect(g).connect(this._bus);
    o.start(t);
    o.stop(t + dur + 0.02);
    // camada SUB (uma oitava abaixo, senoide pura): o peso do baixo
    const sub = this.ctx.createOscillator();
    sub.type = 'sine';
    sub.frequency.value = f / 2;
    const sg = this.env(t, dur, 0.22 * vol, 0.01);
    sub.connect(sg).connect(this._bus);
    sub.start(t);
    sub.stop(t + dur + 0.02);
  }

  bassPattern(t, track, part, chordDeg, s, vol) {
    const root = this.freq(this.degreeToMidi(track, chordDeg, -2));
    const fifth = this.freq(this.degreeToMidi(track, chordDeg + 4, -2));
    const st = this.secondsPerSixteenth();
    switch (part.bass) {
      case 'roots': // semínimas no 1 e 3
        if (s === 0 || s === 8) this.bassNote(t, root, st * 6, vol);
        break;
      case 'pulse': // colcheias constantes
        if (s % 2 === 0) this.bassNote(t, root, st * 1.6, vol * 0.9);
        break;
      case 'octaves': // oitavas alternadas em colcheias
        if (s % 2 === 0) this.bassNote(t, s % 4 === 0 ? root : root * 2, st * 1.7, vol);
        break;
      case 'walk': // raiz-quinta
        if (s === 0) this.bassNote(t, root, st * 3.5, vol);
        if (s === 8) this.bassNote(t, fifth, st * 3.5, vol * 0.92);
        if (s === 12) this.bassNote(t, root * 2, st * 3, vol * 0.85);
        break;
      case 'drive': // galope épico: 1-e-&, 3-e-&
        if (s % 8 === 0 || s % 8 === 3 || s % 8 === 6) this.bassNote(t, root, st * 2.4, vol);
        break;
    }
  }

  lead(t, track, deg, oct, dur, vol) {
    const f = this.freq(this.degreeToMidi(track, deg, oct));
    const o = this.ctx.createOscillator();
    o.type = track.leadType ?? 'square';
    o.frequency.value = f;
    // vibrato
    const lfo = this.ctx.createOscillator();
    lfo.frequency.value = 5.5;
    const lfoG = this.ctx.createGain();
    lfoG.gain.value = f * 0.006;
    lfo.connect(lfoG).connect(o.frequency);
    const lp = this.ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 3200;
    const g = this.env(t, dur, 0.11 * vol, 0.02, Math.min(0.25, dur * 0.4));
    o.connect(lp).connect(g).connect(this._echoIn);
    o.start(t); lfo.start(t);
    o.stop(t + dur + 0.05); lfo.stop(t + dur + 0.05);
  }

  pluck(t, f, vol) {
    const o = this.ctx.createOscillator();
    o.type = 'triangle';
    o.frequency.value = f;
    const g = this.env(t, 0.22, 0.085 * vol, 0.004, 0.18);
    o.connect(g).connect(this._echoIn);
    o.start(t);
    o.stop(t + 0.3);
  }

  arpPattern(t, track, part, chordDeg, s, vol) {
    const steps = { up8: 2, updown: 2, sixteenth: 1 }[part.arp] ?? 2;
    if (s % steps !== 0) return;
    const pos = Math.floor(s / steps);
    const seqUp = [0, 2, 4, 7];
    let degOff;
    if (part.arp === 'updown') {
      const seq = [0, 2, 4, 7, 4, 2, 0, 2];
      degOff = seq[pos % seq.length];
    } else {
      degOff = seqUp[pos % seqUp.length];
    }
    const f = this.freq(this.degreeToMidi(track, chordDeg + degOff, 1));
    this.pluck(t, f, vol);
  }

  // bateria
  kick(t, vol) {
    // corpo com queda de pitch
    const o = this.ctx.createOscillator();
    o.frequency.setValueAtTime(150, t);
    o.frequency.exponentialRampToValueAtTime(40, t + 0.12);
    const g = this.env(t, 0.2, 0.9 * vol, 0.002, 0.13);
    o.connect(g).connect(this._bus);
    o.start(t); o.stop(t + 0.25);
    // sub grave (peso no peito)
    const sub = this.ctx.createOscillator();
    sub.type = 'sine';
    sub.frequency.setValueAtTime(60, t);
    sub.frequency.exponentialRampToValueAtTime(34, t + 0.18);
    const sg = this.env(t, 0.26, 0.7 * vol, 0.003, 0.18);
    sub.connect(sg).connect(this._bus);
    sub.start(t); sub.stop(t + 0.3);
    // clique de ataque (definição)
    const click = this.ctx.createBufferSource();
    click.buffer = this.noiseBuf(0.02);
    const hp = this.ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = 2500;
    const cg = this.env(t, 0.02, 0.25 * vol, 0.001, 0.015);
    click.connect(hp).connect(cg).connect(this._bus);
    click.start(t);
  }

  snare(t, vol) {
    const dur = 0.14;
    const buf = this.noiseBuf(dur);
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    const bp = this.ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 1900;
    const g = this.env(t, dur, 0.32 * vol, 0.001, 0.1);
    src.connect(bp).connect(g).connect(this._echoIn);
    src.start(t);
    // corpo da caixa
    const o = this.ctx.createOscillator();
    o.frequency.setValueAtTime(220, t);
    o.frequency.exponentialRampToValueAtTime(140, t + 0.08);
    const og = this.env(t, 0.09, 0.18 * vol, 0.001, 0.07);
    o.connect(og).connect(this._bus);
    o.start(t); o.stop(t + 0.12);
  }

  hat(t, vol, open = false) {
    const dur = open ? 0.12 : 0.045;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuf(dur);
    const hp = this.ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = 7500;
    const g = this.env(t, dur, 0.09 * vol, 0.001, dur * 0.8);
    src.connect(hp).connect(g).connect(this._bus);
    src.start(t);
  }

  tom(t, vol, low = false) {
    const o = this.ctx.createOscillator();
    o.frequency.setValueAtTime(low ? 110 : 170, t);
    o.frequency.exponentialRampToValueAtTime(low ? 50 : 85, t + 0.2);
    const g = this.env(t, 0.34, 0.55 * vol, 0.002, 0.24);
    o.connect(g).connect(this._bus);
    o.start(t); o.stop(t + 0.4);
    // sub do tambor de guerra
    const sub = this.ctx.createOscillator();
    sub.type = 'sine';
    sub.frequency.setValueAtTime(low ? 65 : 95, t);
    sub.frequency.exponentialRampToValueAtTime(low ? 38 : 55, t + 0.22);
    const sg = this.env(t, 0.3, 0.4 * vol, 0.003, 0.2);
    sub.connect(sg).connect(this._bus);
    sub.start(t); sub.stop(t + 0.35);
  }

  crash(t, vol) {
    const dur = 0.9;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuf(dur);
    const hp = this.ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = 5200;
    const g = this.env(t, dur, 0.16 * vol, 0.002, dur * 0.9);
    src.connect(hp).connect(g).connect(this._bus);
    src.start(t);
  }

  noiseBuf(dur) {
    const len = Math.max(1, Math.ceil(this.ctx.sampleRate * dur));
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    return buf;
  }

  drumPattern(t, kind, s, vol) {
    const onBar = s === 0;
    switch (kind) {
      case 'heartbeat': // só bumbo esparso
        if (s === 0 || s === 6) this.kick(t, vol * 0.7);
        break;
      case 'march':
        if (s === 0 || s === 8) this.kick(t, vol);
        if (s === 8) this.snare(t, vol * 0.8);
        if (s % 4 === 2) this.hat(t, vol * 0.7);
        break;
      case 'driving':
        if (s % 4 === 0) this.kick(t, vol);
        if (s === 4 || s === 12) this.snare(t, vol);
        if (s % 2 === 0) this.hat(t, vol * 0.8, s % 8 === 6);
        break;
      case 'epic':
        if (s % 4 === 0) this.kick(t, vol);
        if (s === 4 || s === 12) this.snare(t, vol);
        if (s === 14) this.snare(t, vol * 0.6);
        if (s % 2 === 0) this.hat(t, vol * 0.85, false);
        if (s === 8) this.tom(t, vol * 0.8);
        if (onBar) this.tom(t, vol * 0.9, true);
        break;
      case 'toms': // tambores de guerra
        if (s === 0 || s === 3 || s === 6) this.tom(t, vol, true);
        if (s === 8 || s === 11) this.tom(t, vol * 0.9);
        if (s === 12) this.kick(t, vol);
        break;
      case 'crash1': // crash no início do compasso + driving
        if (onBar) this.crash(t, vol);
        if (s % 4 === 0) this.kick(t, vol);
        if (s === 4 || s === 12) this.snare(t, vol);
        if (s % 2 === 1) this.hat(t, vol * 0.7);
        break;
    }
  }
}
