// Visual de unidade: corpo + barra de vida + animações (idle, mover, atacar,
// tomar dano, morrer).

import * as THREE from 'three';
import { buildFrosty, buildEnemyMesh, makeHpBar } from './characters.js';
import { tileCenter } from './scene.js';
import { animate, easeOutQuad, easeInQuad } from './tween.js';

export class UnitView {
  constructor(sceneMgr, fx, unit, grid) {
    this.sceneMgr = sceneMgr;
    this.fx = fx;
    this.unit = unit;
    this.grid = grid;

    this.group = new THREE.Group();
    this.group.userData.unitId = unit.id;
    this.body = unit.kind === 'hero' ? buildFrosty() : buildEnemyMesh(unit);
    this.group.add(this.body);

    const hpbar = makeHpBar(unit);
    this.hpbar = hpbar;
    const height = this.bodyHeight();
    hpbar.sprite.position.y = height + 0.32;
    this.group.add(hpbar.sprite);

    // hitbox invisível generosa para cliques confiáveis
    const hit = new THREE.Mesh(
      new THREE.BoxGeometry(0.85, Math.max(1.1, height), 0.85),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false })
    );
    hit.position.y = Math.max(1.1, height) / 2;
    this.group.add(hit);

    // emissor de partículas do adjetivo
    if (unit.visual?.particle) {
      this.emitter = fx.attachEmitter(this.body, unit.visual.particle);
    }

    this.idlePhase = Math.random() * Math.PI * 2;
    this.syncPosition(true);
    sceneMgr.scene.add(this.group);
  }

  bodyHeight() {
    const s = this.unit.visual?.scale ?? 1;
    return Math.max(0.8, 1.15 * s);
  }

  tilePos(x, y) {
    const t = this.grid.at(x, y);
    const v = tileCenter(x, y, 0);
    v.y = (t.h + 1) * 0.35;
    return v;
  }

  syncPosition(instant = false) {
    const p = this.tilePos(this.unit.pos.x, this.unit.pos.y);
    this.group.position.copy(p);
  }

  update(now) {
    const t = now / 1000 + this.idlePhase;
    const u = this.body.userData;
    // flutuação para voadores/fantasmas
    if (u.floats) {
      this.body.position.y = 0.18 + Math.sin(t * 2.2) * 0.06;
    } else if (!this._animating) {
      this.body.position.y = Math.abs(Math.sin(t * 1.6)) * 0.02;
    }
    // asas batem em torno da pose erguida
    if (u.wings) {
      for (const w of u.wings) {
        const f = w.userData.flap ?? { base: 0, dir: 1 };
        w.rotation.z = f.base + f.dir * Math.sin(t * 6) * 0.22;
      }
    }
    if (u.kind === 'frosty' && u.parts) {
      for (const w of [u.parts.wingL, u.parts.wingR]) {
        const f = w.userData.flap ?? { base: 0, dir: 1 };
        w.rotation.z = f.base + f.dir * Math.sin(t * 1.8) * 0.1;
      }
    }
    // enxame gira
    if (u.swarmDots) {
      for (let i = 0; i < u.swarmDots.length; i++) {
        const d = u.swarmDots[i];
        const a = t * (1 + i * 0.13) + i;
        d.position.x = Math.cos(a) * 0.22;
        d.position.z = Math.sin(a * 1.3) * 0.22;
        d.position.y = 0.35 + Math.sin(a * 2) * 0.15;
      }
    }
    // elemental orbita
    if (u.chunks) {
      for (const ch of u.chunks) {
        const o = ch.userData.orbit;
        const a = t * o.speed + o.phase;
        ch.position.set(Math.cos(a) * o.r, 0.5 + o.y + Math.sin(a * 1.7) * 0.08, Math.sin(a) * o.r);
        ch.rotation.x += 0.01; ch.rotation.y += 0.013;
      }
    }
    // gosma pulsa
    if (u.blobBody) {
      u.blobBody.scale.y = 0.75 + Math.sin(t * 3) * 0.06;
      u.blobBody.scale.x = 1 - Math.sin(t * 3) * 0.04;
    }
  }

  faceToward(x, y) {
    const dx = x - this.unit.pos.x;
    const dy = y - this.unit.pos.y;
    if (dx === 0 && dy === 0) return;
    this.body.rotation.y = Math.atan2(dx, dy);
  }

  async walkPath(path, msPerTile = 140) {
    this._animating = true;
    let prev = { ...this.unit.pos };
    for (const step of path) {
      this.faceTowardFrom(prev, step);
      const from = this.tilePos(prev.x, prev.y);
      const to = this.tilePos(step.x, step.y);
      await animate({
        duration: msPerTile,
        ease: (x) => x,
        onUpdate: (p) => {
          this.group.position.lerpVectors(from, to, p);
          this.group.position.y += Math.sin(p * Math.PI) * 0.16; // pulinho
        },
      });
      prev = step;
    }
    this._animating = false;
  }

  faceTowardFrom(from, to) {
    const dx = to.x - from.x, dy = to.y - from.y;
    if (dx || dy) this.body.rotation.y = Math.atan2(dx, dy);
  }

  async leapTo(toPos, ms = 380) {
    this._animating = true;
    const from = this.group.position.clone();
    const to = this.tilePos(toPos.x, toPos.y);
    await animate({
      duration: ms,
      ease: (x) => x,
      onUpdate: (p) => {
        this.group.position.lerpVectors(from, to, p);
        this.group.position.y += Math.sin(p * Math.PI) * 1.4; // arco alto
      },
    });
    this._animating = false;
  }

  async attackLunge(targetView) {
    this._animating = true;
    const origin = this.group.position.clone();
    const target = targetView.group.position.clone();
    const dir = target.clone().sub(origin).normalize().multiplyScalar(0.45);
    this.faceToward(targetView.unit.pos.x, targetView.unit.pos.y);
    // braço de espada da Frosty gira
    const parts = this.body.userData.parts;
    await animate({
      duration: 130, ease: easeInQuad,
      onUpdate: (p) => {
        this.group.position.copy(origin).addScaledVector(dir, p);
        if (parts) parts.swordArm.rotation.x = -p * 2.2;
      },
    });
    await animate({
      duration: 170, ease: easeOutQuad,
      onUpdate: (p) => {
        this.group.position.copy(origin).addScaledVector(dir, 1 - p);
        if (parts) parts.swordArm.rotation.x = -(1 - p) * 2.2;
      },
    });
    this._animating = false;
  }

  hitFlash() {
    this.body.traverse((o) => {
      if (o.isMesh && o.material?.emissive) {
        const orig = o.material;
        o.material = orig.clone();
        o.material.emissive = new THREE.Color('#ff2222');
        o.material.emissiveIntensity = 0.9;
        setTimeout(() => {
          o.material.dispose();
          o.material = orig;
        }, 130);
      }
    });
  }

  async deathAnim() {
    this._animating = true;
    const g = this.group;
    await animate({
      duration: 420, ease: easeInQuad,
      onUpdate: (p) => {
        this.body.rotation.x = p * Math.PI / 2;
        g.position.y -= 0.004;
        this.body.traverse((o) => {
          if (o.isMesh && o.material) {
            o.material.transparent = true;
            o.material.opacity = 1 - p;
          }
        });
        if (this.hpbar.sprite.material) this.hpbar.sprite.material.opacity = 1 - p;
      },
    });
    this.group.visible = false;
    this._animating = false;
  }

  updateHp() {
    this.hpbar.draw();
  }

  worldAnchor(frac = 0.7) {
    const p = this.group.position.clone();
    p.y += this.bodyHeight() * frac;
    return p;
  }

  dispose() {
    if (this.emitter) this.fx.removeEmitter(this.emitter);
    this.sceneMgr.dispose(this.group);
  }
}
