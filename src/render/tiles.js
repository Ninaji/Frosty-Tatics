// Renderização do mapa: tiles com elevação, terrenos especiais, props e
// highlights de movimento/ataque/hover.

import * as THREE from 'three';
import { tileY, TILE } from './scene.js';

const TERRAIN_COLORS = {
  water: '#3a6aaa',
  lava: '#cc3a10',
  poison: '#4a7a2a',
  spikes: '#7a7a72',
};

export class TileMap {
  constructor(sceneMgr, grid, zone) {
    this.sceneMgr = sceneMgr;
    this.grid = grid;
    this.zone = zone;
    this.group = new THREE.Group();
    this.tileMeshes = [];      // para raycast
    this.highlights = new Map(); // "x,y" -> mesh
    this.build();
    sceneMgr.scene.add(this.group);
  }

  build() {
    const g = this.grid;
    const pal = this.zone.palette;
    const geoCache = new Map();

    for (let y = 0; y < g.h; y++) {
      for (let x = 0; x < g.w; x++) {
        const t = g.at(x, y);
        const height = (t.h + 1) * 0.35;
        let color = (x + y) % 2 === 0 ? pal.ground : pal.groundAlt;
        let emissive = '#000000';
        let emissiveIntensity = 0;

        if (t.terrain === 'rock') {
          color = pal.rock;
        } else if (TERRAIN_COLORS[t.terrain]) {
          color = TERRAIN_COLORS[t.terrain];
          if (t.terrain === 'lava') { emissive = '#ff5500'; emissiveIntensity = 0.7; }
          if (t.terrain === 'poison') { emissive = '#44cc22'; emissiveIntensity = 0.15; }
        }

        const key = height.toFixed(2);
        if (!geoCache.has(key)) geoCache.set(key, new THREE.BoxGeometry(0.98 * TILE, height, 0.98 * TILE));
        const mat = new THREE.MeshStandardMaterial({
          color, roughness: 0.85, metalness: 0.05,
          emissive, emissiveIntensity,
        });
        const mesh = new THREE.Mesh(geoCache.get(key), mat);
        mesh.position.set(x * TILE, height / 2, y * TILE);
        mesh.receiveShadow = true;
        mesh.userData.tile = { x, y };
        this.group.add(mesh);
        this.tileMeshes.push(mesh);

        // props decorativos
        if (t.terrain === 'rock') this.addProp(t, pal.prop ?? 'rock');
        if (t.terrain === 'spikes') this.addSpikes(t);
      }
    }
  }

  addProp(t, kind) {
    const baseY = (t.h + 1) * 0.35;
    let mesh;
    if (kind === 'tree') {
      mesh = new THREE.Group();
      const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.09, 0.13, 0.5, 6),
        new THREE.MeshStandardMaterial({ color: '#5a4028', roughness: 1 })
      );
      trunk.position.y = 0.25;
      const crown = new THREE.Mesh(
        new THREE.ConeGeometry(0.42, 0.9, 7),
        new THREE.MeshStandardMaterial({ color: '#2a4a22', roughness: 1 })
      );
      crown.position.y = 0.95;
      mesh.add(trunk, crown);
    } else if (kind === 'obelisk') {
      mesh = new THREE.Mesh(
        new THREE.ConeGeometry(0.3, 1.3, 4),
        new THREE.MeshStandardMaterial({ color: '#3a2a4a', roughness: 0.6, emissive: '#7733aa', emissiveIntensity: 0.25 })
      );
      mesh.position.y = 0.65;
    } else if (kind === 'swamp') {
      mesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.32, 6, 5),
        new THREE.MeshStandardMaterial({ color: '#4a4a32', roughness: 1 })
      );
      mesh.scale.y = 1.6;
      mesh.position.y = 0.4;
    } else {
      mesh = new THREE.Mesh(
        new THREE.DodecahedronGeometry(0.34, 0),
        new THREE.MeshStandardMaterial({ color: '#8a8a82', roughness: 0.95 })
      );
      mesh.position.y = 0.28;
      mesh.rotation.set(Math.random(), Math.random(), Math.random());
    }
    mesh.position.x = t.x * TILE;
    mesh.position.z = t.y * TILE;
    mesh.position.y += baseY;
    mesh.traverse?.((o) => { o.castShadow = true; });
    mesh.castShadow = true;
    this.group.add(mesh);
  }

  addSpikes(t) {
    const baseY = (t.h + 1) * 0.35;
    const mat = new THREE.MeshStandardMaterial({ color: '#9a9a92', roughness: 0.5, metalness: 0.5 });
    for (let i = 0; i < 4; i++) {
      const spike = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.3, 5), mat);
      spike.position.set(
        t.x * TILE + (Math.random() - 0.5) * 0.55,
        baseY + 0.15,
        t.y * TILE + (Math.random() - 0.5) * 0.55,
      );
      this.group.add(spike);
    }
  }

  topOf(x, y) {
    const t = this.grid.at(x, y);
    return (t.h + 1) * 0.35;
  }

  // ---------- highlights ----------

  clearHighlights() {
    for (const [, m] of this.highlights) {
      m.geometry.dispose();
      m.material.dispose();
      this.group.remove(m);
    }
    this.highlights.clear();
  }

  highlight(cells, kind) {
    const colors = {
      move: { color: '#3a8aff', opacity: 0.45 },
      attack: { color: '#ff3a3a', opacity: 0.5 },
      path: { color: '#ffd24a', opacity: 0.6 },
      hover: { color: '#ffffff', opacity: 0.4 },
      aoe: { color: '#aa55ff', opacity: 0.45 },
    }[kind] ?? { color: '#ffffff', opacity: 0.3 };

    for (const c of cells) {
      const key = `${c.x},${c.y}:${kind}`;
      if (this.highlights.has(key)) continue;
      const t = this.grid.at(c.x, c.y);
      if (!t) continue;
      const geo = new THREE.PlaneGeometry(0.92, 0.92);
      const mat = new THREE.MeshBasicMaterial({
        color: colors.color, transparent: true, opacity: colors.opacity,
        depthWrite: false, side: THREE.DoubleSide,
      });
      const m = new THREE.Mesh(geo, mat);
      m.rotation.x = -Math.PI / 2;
      m.position.set(c.x * TILE, this.topOf(c.x, c.y) + 0.012 + (kind === 'path' ? 0.004 : 0), c.y * TILE);
      this.group.add(m);
      this.highlights.set(key, m);
    }
  }

  clearKind(kind) {
    for (const [key, m] of [...this.highlights]) {
      if (key.endsWith(`:${kind}`)) {
        m.geometry.dispose();
        m.material.dispose();
        this.group.remove(m);
        this.highlights.delete(key);
      }
    }
  }

  dispose() {
    this.clearHighlights();
    this.sceneMgr.dispose(this.group);
  }
}
