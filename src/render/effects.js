// Efeitos visuais: explosões de partículas, emissores ambientes (auras de
// adjetivos) e números de dano flutuantes (overlay HTML).

import * as THREE from 'three';
import { DAMAGE_COLORS } from '../core/damage.js';

const ELEMENT_COLORS = {
  fire: '#ff7a33', ice: '#7ad8ff', spark: '#ffe14d', acid: '#9aff4d',
  poison: '#52c41a', shadow: '#9a5aff', holy: '#fff3b0', psychic: '#ff66cc',
};

export class FX {
  constructor(sceneMgr) {
    this.sceneMgr = sceneMgr;
    this.bursts = [];
    this.emitters = [];
    sceneMgr.onFrame((now) => this.update(now));
  }

  burst(pos, color = '#ffffff', { count = 22, speed = 2.2, size = 0.07, up = 1.6, life = 600 } = {}) {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const velocities = [];
    for (let i = 0; i < count; i++) {
      positions[i * 3] = pos.x;
      positions[i * 3 + 1] = pos.y;
      positions[i * 3 + 2] = pos.z;
      velocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * speed,
        Math.random() * up + 0.4,
        (Math.random() - 0.5) * speed,
      ));
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      color, size, transparent: true, opacity: 1, depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(geo, mat);
    this.sceneMgr.scene.add(points);
    this.bursts.push({ points, velocities, born: performance.now(), life, geo, mat });
  }

  elementBurst(pos, element, big = false) {
    const color = DAMAGE_COLORS[element] ?? '#ffffff';
    this.burst(pos, color, { count: big ? 48 : 24, speed: big ? 3.4 : 2.2, size: big ? 0.1 : 0.07, life: big ? 900 : 600 });
  }

  // emissor contínuo preso a um objeto (aura de adjetivo: fire/ice/poison...)
  attachEmitter(target, particleKind) {
    const color = ELEMENT_COLORS[particleKind] ?? '#ffffff';
    const count = 10;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const seeds = [];
    for (let i = 0; i < count; i++) {
      seeds.push({ phase: Math.random() * Math.PI * 2, speed: 0.5 + Math.random(), r: 0.15 + Math.random() * 0.2 });
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      color, size: 0.06, transparent: true, opacity: 0.8, depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(geo, mat);
    target.add(points);
    const emitter = { points, seeds, target, geo, mat };
    this.emitters.push(emitter);
    return emitter;
  }

  removeEmitter(emitter) {
    const i = this.emitters.indexOf(emitter);
    if (i >= 0) this.emitters.splice(i, 1);
    emitter.points.parent?.remove(emitter.points);
    emitter.geo.dispose();
    emitter.mat.dispose();
  }

  update(now) {
    // explosões
    for (let i = this.bursts.length - 1; i >= 0; i--) {
      const b = this.bursts[i];
      const age = now - b.born;
      const dt = 0.016;
      const arr = b.geo.attributes.position.array;
      for (let j = 0; j < b.velocities.length; j++) {
        const v = b.velocities[j];
        v.y -= 4.5 * dt;
        arr[j * 3] += v.x * dt;
        arr[j * 3 + 1] += v.y * dt;
        arr[j * 3 + 2] += v.z * dt;
      }
      b.geo.attributes.position.needsUpdate = true;
      b.mat.opacity = Math.max(0, 1 - age / b.life);
      if (age > b.life) {
        this.sceneMgr.scene.remove(b.points);
        b.geo.dispose();
        b.mat.dispose();
        this.bursts.splice(i, 1);
      }
    }
    // emissores ambientes
    const t = now / 1000;
    for (const e of this.emitters) {
      const arr = e.geo.attributes.position.array;
      for (let j = 0; j < e.seeds.length; j++) {
        const s = e.seeds[j];
        const a = s.phase + t * s.speed;
        arr[j * 3] = Math.cos(a) * s.r;
        arr[j * 3 + 1] = 0.35 + ((t * s.speed + s.phase) % 1) * 0.7;
        arr[j * 3 + 2] = Math.sin(a) * s.r;
      }
      e.geo.attributes.position.needsUpdate = true;
    }
  }
}

// ---------- números de dano flutuantes (HTML) ----------
export class DamageNumbers {
  constructor(sceneMgr, root) {
    this.sceneMgr = sceneMgr;
    this.root = root;
  }

  show(worldPos, text, cls = '', big = false) {
    const s = this.sceneMgr.worldToScreen(worldPos);
    if (!s.visible) return;
    const el = document.createElement('div');
    el.className = `dmg-number ${cls} ${big ? 'big' : ''}`;
    el.textContent = text;
    el.style.left = `${s.x + (Math.random() - 0.5) * 30}px`;
    el.style.top = `${s.y - 20}px`;
    this.root.appendChild(el);
    setTimeout(() => el.remove(), 1300);
  }

  damage(worldPos, amount, type, crit = false) {
    const color = DAMAGE_COLORS[type] ?? '#ffffff';
    const el = document.createElement('div');
    el.className = `dmg-number ${crit ? 'big crit' : ''}`;
    el.textContent = crit ? `${amount}!` : `${amount}`;
    el.style.color = color;
    const s = this.sceneMgr.worldToScreen(worldPos);
    if (!s.visible) return;
    el.style.left = `${s.x + (Math.random() - 0.5) * 30}px`;
    el.style.top = `${s.y - 20}px`;
    this.root.appendChild(el);
    setTimeout(() => el.remove(), 1300);
  }
}
