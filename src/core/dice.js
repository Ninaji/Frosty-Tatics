// Rolagem de dados estilo D&D: "2d6+3", "1d20", "4d4+4" etc.

const DICE_RE = /^(\d+)d(\d+)([+-]\d+)?$/;

export function parseDice(expr) {
  const m = DICE_RE.exec(expr.replaceAll(' ', ''));
  if (!m) throw new Error(`Expressão de dado inválida: ${expr}`);
  return { count: +m[1], sides: +m[2], bonus: m[3] ? +m[3] : 0 };
}

export function rollDice(rng, expr, { crit = false } = {}) {
  const { count, sides, bonus } = parseDice(expr);
  const n = crit ? count * 2 : count; // crítico dobra os dados (estilo 5e)
  const rolls = [];
  let total = 0;
  for (let i = 0; i < n; i++) {
    const r = rng.int(1, sides);
    rolls.push(r);
    total += r;
  }
  return { total: total + bonus, rolls, bonus, expr };
}

export function diceAverage(expr) {
  const { count, sides, bonus } = parseDice(expr);
  return count * (sides + 1) / 2 + bonus;
}

export function diceMax(expr) {
  const { count, sides, bonus } = parseDice(expr);
  return count * sides + bonus;
}

// d20 com vantagem/desvantagem. adv: 1 = vantagem, -1 = desvantagem, 0 = normal
export function rollD20(rng, adv = 0) {
  const a = rng.int(1, 20);
  if (adv === 0) return { value: a, rolls: [a] };
  const b = rng.int(1, 20);
  const value = adv > 0 ? Math.max(a, b) : Math.min(a, b);
  return { value, rolls: [a, b] };
}
