// As 10 composições de Frosty Tactics (5 zonas + 5 chefes), em DADOS.
// Estrutura: 5 partes × 8 compassos, loopáveis (parte 5 resolve na parte 1).
// O "Tema da Frosty" (motivo 1-3-5-8 ascendente) aparece transformado em
// todas as faixas — heroico no Ato 1, fúnebre no 3, triunfante no finale.

// Modos (intervalos a partir da tônica)
const AEOLIAN = [0, 2, 3, 5, 7, 8, 10];
const HARMONIC = [0, 2, 3, 5, 7, 8, 11];
const PHRYGIAN = [0, 1, 3, 5, 7, 8, 10];
const MIXOLYDIAN = [0, 2, 4, 5, 7, 9, 10];
const LOCRIAN = [0, 1, 3, 5, 6, 8, 10];
const DORIAN = [0, 2, 3, 5, 7, 9, 10];

// melodia sequencial: steps [grau, oitava, duração em semicolcheias] (grau null = pausa)
function seq(start, steps) {
  const out = [];
  let p = start;
  for (const [deg, oct, len] of steps) {
    if (deg !== null) out.push([deg, oct, p, len]);
    p += len;
  }
  return out;
}

// O TEMA DA FROSTY (2 compassos = 32 semicolcheias): 1-3-5-8 heroico + resposta
const frostyTheme = (start, oct = 1) => seq(start, [
  [0, oct, 2], [2, oct, 2], [4, oct, 2], [7, oct, 6],
  [null, 0, 2], [4, oct, 2], [5, oct, 2], [4, oct, 2], [2, oct, 4], [0, oct, 8],
]);

// variação solene (mínimas) do tema — para lamentos
const frostyThemeSlow = (start, oct = 1) => seq(start, [
  [0, oct, 8], [2, oct, 8], [4, oct, 8], [7, oct, 8],
  [4, oct, 8], [2, oct, 8], [0, oct, 16],
]);

// resposta/contracanto descendente
const answerPhrase = (start, oct = 1) => seq(start, [
  [7, oct, 4], [5, oct, 4], [4, oct, 4], [2, oct, 4],
  [4, oct, 4], [2, oct, 4], [0, oct, 8], [null, 0, 4],
]);

export const TRACKS = {
  // ============ ATO 1 — O CHAMADO (Planícies do Gelo Quebrado) ============
  zone1: {
    id: 'zone1', bpm: 100, root: 57, mode: AEOLIAN, leadType: 'square',
    parts: [
      { bars: 8, chords: [0, 0, 5, 5, 2, 2, 6, 6], pad: true, bass: null, drums: 'heartbeat', arp: null, lead: null, intensity: 0.5 },
      { bars: 8, chords: [0, 0, 5, 5, 2, 2, 6, 4], pad: true, bass: 'roots', drums: 'march', arp: 'up8', lead: null, intensity: 0.65 },
      { bars: 8, chords: [0, 5, 2, 6, 0, 5, 3, 4], pad: true, bass: 'walk', drums: 'march', arp: null,
        lead: [...frostyTheme(0, 1), ...frostyTheme(64, 1), ...answerPhrase(96, 1)], intensity: 0.8 },
      { bars: 8, chords: [5, 5, 0, 0, 3, 3, 4, 4], pad: true, bass: 'roots', drums: 'march', arp: 'updown',
        lead: answerPhrase(32, 1), intensity: 0.7 },
      { bars: 8, chords: [0, 5, 2, 6, 0, 5, 4, 4], pad: true, bass: 'octaves', drums: 'driving', arp: 'up8',
        lead: [...frostyTheme(0, 2), ...frostyTheme(64, 2)], intensity: 0.95 },
    ],
  },
  zone1boss: {
    id: 'zone1boss', bpm: 132, root: 57, mode: AEOLIAN, leadType: 'square',
    parts: [
      { bars: 8, chords: [0, 0, 0, 0, 6, 6, 5, 5], pad: false, bass: 'pulse', drums: 'toms', arp: null, lead: null, intensity: 0.75 },
      { bars: 8, chords: [0, 0, 6, 6, 0, 0, 5, 4], pad: true, bass: 'pulse', drums: 'driving', arp: 'sixteenth', lead: null, intensity: 0.85 },
      { bars: 8, chords: [0, 6, 0, 5, 0, 6, 4, 4], pad: true, bass: 'octaves', drums: 'driving', arp: null,
        lead: [...frostyTheme(0, 1), ...seq(32, [[7, 1, 2], [8, 1, 2], [7, 1, 2], [5, 1, 2], [4, 1, 4], [2, 1, 4], [0, 1, 8], [null, 0, 8]]), ...frostyTheme(64, 1)], intensity: 0.9 },
      { bars: 8, chords: [3, 3, 4, 4, 5, 5, 6, 6], pad: true, bass: 'drive', drums: 'toms', arp: 'updown', lead: null, intensity: 0.85 },
      { bars: 8, chords: [0, 6, 5, 4, 0, 6, 4, 4], pad: true, bass: 'drive', drums: 'crash1', arp: 'sixteenth',
        lead: [...frostyTheme(0, 2), ...frostyTheme(64, 2)], intensity: 1 },
    ],
  },

  // ============ ATO 2 — A CORRUPÇÃO (Floresta Sombria de Velgar) ============
  zone2: {
    id: 'zone2', bpm: 92, root: 52, mode: PHRYGIAN, leadType: 'triangle',
    parts: [
      { bars: 8, chords: [0, 1, 0, 1, 0, 1, 0, 6], pad: true, bass: null, drums: null, arp: 'updown', lead: null, intensity: 0.45 },
      { bars: 8, chords: [0, 1, 0, 1, 3, 1, 0, 0], pad: true, bass: 'roots', drums: 'heartbeat', arp: 'updown', lead: null, intensity: 0.6 },
      { bars: 8, chords: [0, 1, 3, 1, 0, 1, 5, 1], pad: true, bass: 'roots', drums: 'heartbeat', arp: 'up8',
        lead: seq(0, [[0, 1, 6], [1, 1, 6], [3, 1, 4], [2, 1, 6], [1, 1, 6], [0, 1, 4],
          [4, 1, 6], [3, 1, 6], [1, 1, 4], [0, 1, 12], [null, 0, 4],
          [7, 1, 6], [8, 1, 6], [7, 1, 4], [5, 1, 6], [4, 1, 6], [3, 1, 4], [1, 1, 8], [0, 1, 8], [null, 0, 16]]), intensity: 0.72 },
      { bars: 8, chords: [5, 1, 5, 1, 3, 1, 0, 1], pad: true, bass: 'walk', drums: 'march', arp: 'sixteenth', lead: null, intensity: 0.68 },
      { bars: 8, chords: [0, 1, 3, 1, 5, 1, 0, 0], pad: true, bass: 'pulse', drums: 'march', arp: 'updown',
        lead: [...frostyTheme(0, 1), ...frostyTheme(64, 1)], intensity: 0.85 },
    ],
  },
  zone2boss: {
    id: 'zone2boss', bpm: 140, root: 52, mode: PHRYGIAN, leadType: 'sawtooth',
    parts: [
      { bars: 8, chords: [0, 1, 0, 1, 0, 1, 0, 1], pad: false, bass: 'pulse', drums: 'driving', arp: null,
        lead: seq(0, [[7, 1, 1], [null, 0, 3], [8, 1, 1], [null, 0, 3], [7, 1, 1], [null, 0, 7]]), intensity: 0.8 },
      { bars: 8, chords: [0, 1, 3, 1, 0, 1, 5, 4], pad: true, bass: 'octaves', drums: 'driving', arp: 'sixteenth', lead: null, intensity: 0.85 },
      { bars: 8, chords: [0, 1, 0, 1, 5, 4, 3, 1], pad: true, bass: 'pulse', drums: 'crash1', arp: null,
        lead: seq(0, [[8, 1, 2], [7, 1, 2], [8, 1, 2], [7, 1, 2], [5, 1, 4], [3, 1, 4],
          [4, 1, 2], [3, 1, 2], [4, 1, 2], [3, 1, 2], [1, 1, 4], [0, 1, 4],
          [1, 1, 2], [0, 1, 2], [1, 1, 2], [3, 1, 2], [1, 1, 8], [null, 0, 24],
          [7, 1, 2], [8, 1, 2], [10, 1, 2], [8, 1, 2], [7, 1, 8], [null, 0, 16]]), intensity: 0.92 },
      { bars: 8, chords: [3, 4, 3, 4, 5, 4, 1, 1], pad: true, bass: 'drive', drums: 'toms', arp: 'updown', lead: null, intensity: 0.88 },
      { bars: 8, chords: [0, 1, 5, 4, 0, 1, 0, 0], pad: true, bass: 'drive', drums: 'crash1', arp: 'sixteenth',
        lead: [...frostyTheme(0, 2), ...answerPhrase(64, 2)], intensity: 1 },
    ],
  },

  // ============ ATO 3 — A MORTE (Pântanos da Podridão) ============
  zone3: {
    id: 'zone3', bpm: 78, root: 48, mode: AEOLIAN, leadType: 'triangle',
    parts: [
      { bars: 8, chords: [0, 0, 0, 0, 5, 5, 0, 0], pad: true, bass: null, drums: null, arp: null,
        lead: seq(32, [[0, 2, 8], [null, 0, 24], [2, 2, 8], [null, 0, 24], [0, 2, 8], [null, 0, 24]]), intensity: 0.45 },
      { bars: 8, chords: [0, 0, 3, 3, 5, 5, 4, 4], pad: true, bass: 'roots', drums: 'heartbeat', arp: null,
        lead: null, intensity: 0.55 },
      { bars: 8, chords: [0, 3, 5, 4, 0, 3, 6, 4], pad: true, bass: 'roots', drums: 'heartbeat', arp: 'up8',
        lead: frostyThemeSlow(0, 1), intensity: 0.7 },
      { bars: 8, chords: [5, 5, 3, 3, 0, 0, 4, 4], pad: true, bass: 'walk', drums: 'march', arp: 'up8',
        lead: answerPhrase(32, 1), intensity: 0.65 },
      { bars: 8, chords: [0, 3, 5, 4, 0, 6, 4, 0], pad: true, bass: 'walk', drums: 'march', arp: 'updown',
        lead: [...frostyThemeSlow(0, 1), ...seq(112, [[7, 1, 8], [4, 1, 8]])], intensity: 0.82 },
    ],
  },
  zone3boss: {
    id: 'zone3boss', bpm: 120, root: 48, mode: HARMONIC, leadType: 'sawtooth',
    parts: [
      { bars: 8, chords: [0, 0, 0, 0, 0, 0, 0, 0], pad: false, bass: 'pulse', drums: 'heartbeat', arp: 'sixteenth', lead: null, intensity: 0.7 },
      { bars: 8, chords: [0, 0, 5, 5, 0, 0, 4, 4], pad: true, bass: 'pulse', drums: 'driving', arp: 'sixteenth', lead: null, intensity: 0.8 },
      { bars: 8, chords: [0, 5, 0, 4, 0, 3, 4, 4], pad: true, bass: 'octaves', drums: 'driving', arp: null,
        lead: seq(0, [[7, 1, 4], [6, 1, 4], [7, 1, 4], [8, 1, 4], [7, 1, 4], [5, 1, 4], [4, 1, 8],
          [3, 1, 4], [4, 1, 4], [5, 1, 4], [4, 1, 4], [2, 1, 4], [0, 1, 12], [null, 0, 60]]), intensity: 0.9 },
      { bars: 8, chords: [3, 3, 5, 5, 1, 1, 4, 4], pad: true, bass: 'pulse', drums: 'toms', arp: 'updown', lead: null, intensity: 0.85 },
      { bars: 8, chords: [0, 5, 3, 4, 0, 5, 4, 4], pad: true, bass: 'drive', drums: 'crash1', arp: 'sixteenth',
        lead: [...frostyTheme(0, 1), ...frostyTheme(64, 2)], intensity: 1 },
    ],
  },

  // ============ ATO 4 — O PODER (Montanhas do Crepúsculo) ============
  zone4: {
    id: 'zone4', bpm: 112, root: 55, mode: MIXOLYDIAN, leadType: 'sawtooth',
    parts: [
      { bars: 8, chords: [0, 0, 6, 6, 0, 0, 6, 6], pad: true, bass: null, drums: 'toms', arp: null, lead: null, intensity: 0.6 },
      { bars: 8, chords: [0, 0, 6, 6, 3, 3, 0, 0], pad: true, bass: 'roots', drums: 'toms', arp: null,
        lead: seq(48, [[0, 1, 4], [2, 1, 4], [4, 1, 8]]), intensity: 0.72 },
      { bars: 8, chords: [0, 6, 3, 0, 0, 6, 4, 0], pad: true, bass: 'drive', drums: 'epic', arp: null,
        lead: [...frostyTheme(0, 1), ...frostyTheme(64, 1), ...answerPhrase(96, 1)], intensity: 0.88 },
      { bars: 8, chords: [3, 3, 0, 0, 6, 6, 4, 4], pad: true, bass: 'walk', drums: 'march', arp: 'up8',
        lead: null, intensity: 0.75 },
      { bars: 8, chords: [0, 6, 3, 4, 0, 6, 0, 0], pad: true, bass: 'drive', drums: 'epic', arp: 'up8',
        lead: [...frostyTheme(0, 2), ...frostyTheme(64, 2)], intensity: 1 },
    ],
  },
  zone4boss: {
    id: 'zone4boss', bpm: 148, root: 57, mode: AEOLIAN, leadType: 'square',
    parts: [
      { bars: 8, chords: [0, 0, 0, 0, 1, 1, 0, 0], pad: false, bass: 'pulse', drums: 'driving', arp: 'sixteenth', lead: null, intensity: 0.78 },
      { bars: 8, chords: [0, 0, 5, 5, 0, 0, 6, 6], pad: true, bass: 'octaves', drums: 'driving', arp: 'sixteenth', lead: null, intensity: 0.86 },
      { bars: 8, chords: [0, 5, 6, 4, 0, 5, 4, 4], pad: true, bass: 'octaves', drums: 'crash1', arp: null,
        lead: seq(0, [[7, 1, 2], [9, 1, 2], [7, 1, 2], [9, 1, 2], [11, 1, 4], [9, 1, 4],
          [7, 1, 2], [5, 1, 2], [7, 1, 2], [5, 1, 2], [4, 1, 4], [2, 1, 4],
          [0, 1, 2], [2, 1, 2], [4, 1, 2], [5, 1, 2], [7, 1, 12], [null, 0, 76]]), intensity: 0.92 },
      { bars: 8, chords: [5, 5, 6, 6, 3, 3, 4, 4], pad: true, bass: 'drive', drums: 'toms', arp: 'updown', lead: null, intensity: 0.88 },
      { bars: 8, chords: [0, 5, 6, 4, 0, 6, 4, 4], pad: true, bass: 'drive', drums: 'crash1', arp: 'sixteenth',
        lead: [...frostyTheme(0, 2), ...frostyTheme(64, 2)], intensity: 1 },
    ],
  },

  // ============ ATO 5 — O VAZIO (Cidadela do Abismo) ============
  zone5: {
    id: 'zone5', bpm: 96, root: 47, mode: LOCRIAN, leadType: 'triangle',
    parts: [
      { bars: 8, chords: [0, 0, 1, 1, 0, 0, 1, 1], pad: true, bass: 'pulse', drums: null, arp: null, lead: null, intensity: 0.5 },
      { bars: 8, chords: [0, 0, 1, 1, 3, 3, 1, 1], pad: true, bass: 'pulse', drums: 'heartbeat', arp: 'up8', lead: null, intensity: 0.62 },
      { bars: 8, chords: [0, 1, 3, 1, 0, 1, 5, 1], pad: true, bass: 'pulse', drums: 'march', arp: 'up8',
        lead: seq(0, [[0, 1, 6], [1, 1, 2], [0, 1, 6], [1, 1, 2], [3, 1, 8], [1, 1, 8],
          [5, 1, 6], [3, 1, 2], [5, 1, 6], [6, 1, 2], [5, 1, 8], [3, 1, 8],
          [7, 1, 8], [6, 1, 8], [5, 1, 8], [3, 1, 8], [1, 1, 8], [0, 1, 24]]), intensity: 0.75 },
      { bars: 8, chords: [3, 3, 1, 1, 5, 5, 1, 1], pad: true, bass: 'octaves', drums: 'march', arp: 'updown', lead: null, intensity: 0.7 },
      { bars: 8, chords: [0, 1, 5, 1, 0, 3, 1, 0], pad: true, bass: 'octaves', drums: 'driving', arp: 'sixteenth',
        lead: frostyTheme(0, 1), intensity: 0.9 },
    ],
  },
  zone5boss: {
    id: 'zone5boss', bpm: 156, root: 47, mode: AEOLIAN, leadType: 'sawtooth',
    parts: [
      { bars: 8, chords: [0, 0, 1, 1, 0, 0, 6, 6], pad: true, bass: 'pulse', drums: 'driving', arp: 'sixteenth', lead: null, intensity: 0.8 },
      { bars: 8, chords: [0, 6, 0, 6, 5, 5, 4, 4], pad: true, bass: 'octaves', drums: 'crash1', arp: 'sixteenth',
        lead: seq(96, [[0, 2, 4], [2, 2, 4], [4, 2, 8], [2, 2, 4], [0, 2, 4], [6, 1, 8]]), intensity: 0.88 },
      { bars: 8, chords: [0, 5, 6, 4, 0, 5, 6, 4], pad: true, bass: 'drive', drums: 'crash1', arp: null,
        lead: [...frostyTheme(0, 1), ...frostyTheme(64, 1), ...answerPhrase(96, 1)], intensity: 0.94 },
      { bars: 8, chords: [3, 3, 6, 6, 5, 5, 4, 4], pad: true, bass: 'drive', drums: 'epic', arp: 'updown',
        lead: seq(64, [[7, 1, 4], [5, 1, 4], [4, 1, 4], [2, 1, 4], [4, 1, 4], [5, 1, 4], [7, 1, 8],
          [9, 1, 4], [7, 1, 4], [5, 1, 4], [4, 1, 4], [2, 1, 16]]), intensity: 0.9 },
      { bars: 8, chords: [0, 5, 6, 4, 0, 5, 4, 4], pad: true, bass: 'drive', drums: 'crash1', arp: 'sixteenth',
        lead: [...frostyTheme(0, 2), ...frostyTheme(32, 2), ...frostyTheme(64, 2), ...answerPhrase(96, 2)], intensity: 1 },
    ],
  },
};

// faixa por contexto de batalha
export function trackForBattle(zoneTier, isBoss) {
  return `zone${zoneTier}${isBoss ? 'boss' : ''}`;
}

export const MENU_TRACK = 'zone1'; // Tema Principal = Ato 1
