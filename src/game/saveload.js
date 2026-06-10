// Save/load em localStorage (guardado contra ambientes sem localStorage, ex.: Node).

const KEY = 'frosty-tactics-save-v1';

function storage() {
  try {
    if (typeof localStorage !== 'undefined') return localStorage;
  } catch { /* indisponível */ }
  return null;
}

export function saveGame(game) {
  const s = storage();
  if (!s) return false;
  const data = {
    v: 1,
    seed: game.seed,
    battleIndex: game.battleIndex,
    campaignComplete: game.campaignComplete,
    deaths: game.deaths,
    hero: { ...game.hero },
    bestiary: {
      enemies: [...game.bestiary.enemies],
      adjectives: [...game.bestiary.adjectives],
    },
    savedAt: Date.now(),
  };
  try {
    s.setItem(KEY, JSON.stringify(data));
    return true;
  } catch {
    return false;
  }
}

export function loadSave() {
  const s = storage();
  if (!s) return null;
  try {
    const raw = s.getItem(KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function applySave(game, data) {
  game.seed = data.seed;
  game.battleIndex = data.battleIndex;
  game.campaignComplete = data.campaignComplete;
  game.deaths = data.deaths ?? 0;
  Object.assign(game.hero, data.hero);
  game.bestiary.enemies = new Set(data.bestiary?.enemies ?? []);
  game.bestiary.adjectives = new Set(data.bestiary?.adjectives ?? []);
  return game;
}

export function clearSave() {
  const s = storage();
  if (s) s.removeItem(KEY);
}

export function hasSave() {
  return loadSave() != null;
}
