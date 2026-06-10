// Grade tática com elevação, terrenos e geração procedural de mapas.

export const TERRAIN = {
  ground: { id: 'ground', cost: 1, blocked: false },
  rock: { id: 'rock', cost: Infinity, blocked: true },
  water: { id: 'water', cost: 2, blocked: false },
  lava: { id: 'lava', cost: 1, blocked: false, hazard: { dice: '2d6', type: 'fogo' } },
  poison: { id: 'poison', cost: 1, blocked: false, hazard: { dice: '1d6', type: 'veneno', rider: { condition: 'envenenado', dc: 12, save: 'con' } } },
  spikes: { id: 'spikes', cost: 1, blocked: false, hazard: { dice: '1d4', type: 'perfurante', onEnterOnly: true } },
};

export class Grid {
  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.tiles = [];
    for (let y = 0; y < h; y++) {
      const row = [];
      for (let x = 0; x < w; x++) row.push({ x, y, h: 0, terrain: 'ground', prop: null });
      this.tiles.push(row);
    }
  }

  at(x, y) {
    if (x < 0 || y < 0 || x >= this.w || y >= this.h) return null;
    return this.tiles[y][x];
  }

  inBounds(x, y) {
    return x >= 0 && y >= 0 && x < this.w && y < this.h;
  }

  neighbors4(x, y) {
    const out = [];
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const t = this.at(x + dx, y + dy);
      if (t) out.push(t);
    }
    return out;
  }
}

export function chebyshev(a, b) {
  return Math.max(Math.abs(a.x - b.x), Math.abs(a.y - b.y));
}

export function manhattan(a, b) {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

// Geração procedural de mapa por zona.
export function generateMap(rng, zone, battleIndex) {
  const size = 11 + rng.int(0, 2); // 11-13
  const g = new Grid(size, size);

  // alturas: alguns "morros" suavizados
  const hills = rng.int(2, 4);
  for (let i = 0; i < hills; i++) {
    const cx = rng.int(1, size - 2), cy = rng.int(1, size - 2);
    const peak = rng.int(1, 3), radius = rng.int(2, 3);
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const d = Math.max(Math.abs(x - cx), Math.abs(y - cy));
        if (d <= radius) {
          const t = g.at(x, y);
          t.h = Math.min(3, Math.max(t.h, peak - d));
        }
      }
    }
  }

  // obstáculos (rochas/árvores)
  const obstacles = rng.int(6, 11);
  for (let i = 0; i < obstacles; i++) {
    const x = rng.int(0, size - 1), y = rng.int(0, size - 1);
    // não bloquear faixas de spawn (linhas inferiores/superiores centrais)
    if (y <= 1 || y >= size - 2) continue;
    const t = g.at(x, y);
    t.terrain = 'rock';
    t.prop = zone.palette.prop;
  }

  // perigos por tier da zona
  const hazardByTier = { 1: null, 2: 'spikes', 3: 'poison', 4: 'water', 5: 'lava' };
  const hazard = hazardByTier[zone.tier];
  if (hazard && rng.chance(0.8)) {
    const pools = rng.int(1, 3);
    for (let i = 0; i < pools; i++) {
      const cx = rng.int(2, size - 3), cy = rng.int(3, size - 4);
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (rng.chance(0.65)) {
            const t = g.at(cx + dx, cy + dy);
            if (t && t.terrain === 'ground' && t.h <= 1) { t.terrain = hazard; t.h = 0; }
          }
        }
      }
    }
  }
  // água decorativa nas zonas 1-3 às vezes
  if (zone.tier <= 3 && rng.chance(0.4)) {
    const cx = rng.int(2, size - 3), cy = rng.int(3, size - 4);
    for (let dy = 0; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
      const t = g.at(cx + dx, cy + dy);
      if (t && t.terrain === 'ground' && t.h === 0) t.terrain = 'water';
    }
  }

  // garantir conectividade: flood fill a partir do centro; desbloquear ilhas
  ensureConnectivity(g);
  return g;
}

function ensureConnectivity(g) {
  const start = findOpenNear(g, Math.floor(g.w / 2), Math.floor(g.h / 2));
  if (!start) return;
  const seen = new Set([`${start.x},${start.y}`]);
  const queue = [start];
  while (queue.length) {
    const t = queue.pop();
    for (const n of g.neighbors4(t.x, t.y)) {
      const key = `${n.x},${n.y}`;
      if (!seen.has(key) && !TERRAIN[n.terrain].blocked) {
        seen.add(key);
        queue.push(n);
      }
    }
  }
  for (let y = 0; y < g.h; y++) {
    for (let x = 0; x < g.w; x++) {
      const t = g.at(x, y);
      if (!TERRAIN[t.terrain].blocked && !seen.has(`${x},${y}`)) {
        // ilha isolada: liga abrindo rochas vizinhas
        for (const n of g.neighbors4(x, y)) {
          if (TERRAIN[n.terrain].blocked) { n.terrain = 'ground'; n.prop = null; }
        }
      }
    }
  }
}

export function findOpenNear(g, x, y) {
  for (let r = 0; r < Math.max(g.w, g.h); r++) {
    for (let dy = -r; dy <= r; dy++) {
      for (let dx = -r; dx <= r; dx++) {
        const t = g.at(x + dx, y + dy);
        if (t && !TERRAIN[t.terrain].blocked) return t;
      }
    }
  }
  return null;
}

// Dijkstra de movimento. Retorna Map "x,y" -> { cost, path: [{x,y}...] }.
// occupied: Map "x,y" -> unit. Unidades aliadas podem ser atravessadas; inimigas não
// (a menos que phasing/flying). Não se pode PARAR em casa ocupada.
export function reachable(grid, unit, occupied, { maxCost = null, ignoreUnits = false } = {}) {
  const flying = unit._flying;
  const phasing = unit._phasing;
  const max = maxCost ?? unit._speed;
  const startKey = `${unit.pos.x},${unit.pos.y}`;
  const dist = new Map([[startKey, 0]]);
  const prev = new Map();
  const pq = [[0, unit.pos.x, unit.pos.y]];

  while (pq.length) {
    // fila simples (mapas pequenos)
    pq.sort((a, b) => a[0] - b[0]);
    const [d, x, y] = pq.shift();
    if (d > (dist.get(`${x},${y}`) ?? Infinity)) continue;
    if (d >= max) continue;
    const cur = grid.at(x, y);
    for (const n of grid.neighbors4(x, y)) {
      const terr = TERRAIN[n.terrain];
      if (terr.blocked && !flying) continue;
      const occ = occupied.get(`${n.x},${n.y}`);
      if (occ && occ !== unit && !ignoreUnits) {
        const sameSide = occ.side === unit.side;
        if (!sameSide && !phasing && !flying) continue; // inimigo bloqueia
      }
      let step = flying ? 1 : terr.cost;
      if (!flying) {
        const climb = n.h - cur.h;
        if (climb > 2) continue;          // muro alto demais
        if (climb > 0) step += climb;     // subir custa
      }
      const nd = d + step;
      if (nd > max) continue;
      const key = `${n.x},${n.y}`;
      if (nd < (dist.get(key) ?? Infinity)) {
        dist.set(key, nd);
        prev.set(key, `${x},${y}`);
        pq.push([nd, n.x, n.y]);
      }
    }
  }

  const out = new Map();
  for (const [key, cost] of dist) {
    if (key === startKey) continue;
    const [tx, ty] = key.split(',').map(Number);
    if (occupied.get(key)) continue; // não pode parar em casa ocupada
    const path = [];
    let k = key;
    while (k && k !== startKey) {
      const [px, py] = k.split(',').map(Number);
      path.unshift({ x: px, y: py });
      k = prev.get(k);
    }
    out.set(key, { cost, path, x: tx, y: ty });
  }
  return out;
}

// Casas livres adjacentes (para spawn de invocações/divisões)
export function freeAdjacentTiles(grid, pos, occupied, radius = 1) {
  const out = [];
  for (let dy = -radius; dy <= radius; dy++) {
    for (let dx = -radius; dx <= radius; dx++) {
      if (dx === 0 && dy === 0) continue;
      const t = grid.at(pos.x + dx, pos.y + dy);
      if (t && !TERRAIN[t.terrain].blocked && !occupied.get(`${t.x},${t.y}`)) out.push(t);
    }
  }
  return out;
}

// linha reta de casas a partir de origem na direção de alvo (para habilidades em linha)
export function lineTiles(grid, from, dir, length) {
  const out = [];
  let x = from.x, y = from.y;
  for (let i = 0; i < length; i++) {
    x += dir.x; y += dir.y;
    const t = grid.at(x, y);
    if (!t) break;
    out.push(t);
    if (TERRAIN[t.terrain].blocked) break;
  }
  return out;
}
