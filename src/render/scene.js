// Cena 3D isométrica: câmera ortográfica, luzes, controles de rotação/zoom,
// raycasting para interação com o mapa.

import * as THREE from 'three';
import { updateTweens } from './tween.js';

export class SceneManager {
  constructor(canvas) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#1a2030');

    this.camAngle = Math.PI / 4;       // ângulo isométrico (gira com Q/E)
    this.camZoom = 1;
    this.camTarget = new THREE.Vector3(0, 0, 0);
    this.camera = new THREE.OrthographicCamera(-10, 10, 10, -10, 0.1, 200);

    this.ambient = new THREE.HemisphereLight('#cfe3ff', '#3a3a4a', 1.0);
    this.scene.add(this.ambient);

    this.sun = new THREE.DirectionalLight('#fff4e0', 1.6);
    this.sun.position.set(8, 18, 6);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    this.sun.shadow.camera.left = -14;
    this.sun.shadow.camera.right = 14;
    this.sun.shadow.camera.top = 14;
    this.sun.shadow.camera.bottom = -14;
    this.scene.add(this.sun);

    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
    this.shake = 0;

    this._frameCbs = new Set();
    this._running = false;

    window.addEventListener('resize', () => this.resize());
    this.resize();
  }

  setSky(color, fog) {
    this.scene.background = new THREE.Color(color);
    this.scene.fog = new THREE.Fog(new THREE.Color(fog ?? color), 28, 70);
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.renderer.setSize(w, h, false);
    const aspect = w / h;
    const view = 9 / this.camZoom;
    this.camera.left = -view * aspect;
    this.camera.right = view * aspect;
    this.camera.top = view;
    this.camera.bottom = -view;
    this.camera.updateProjectionMatrix();
  }

  updateCamera() {
    const d = 30;
    const x = Math.cos(this.camAngle) * d;
    const z = Math.sin(this.camAngle) * d;
    let tx = this.camTarget.x, ty = this.camTarget.y, tz = this.camTarget.z;
    if (this.shake > 0) {
      tx += (Math.random() - 0.5) * this.shake;
      tz += (Math.random() - 0.5) * this.shake;
      this.shake *= 0.88;
      if (this.shake < 0.01) this.shake = 0;
    }
    this.camera.position.set(tx + x, ty + d * 0.82, tz + z);
    this.camera.lookAt(tx, ty, tz);
  }

  rotate(dir) {
    this.targetAngle = (this.targetAngle ?? this.camAngle) + dir * Math.PI / 2;
  }

  zoomBy(f) {
    this.camZoom = Math.min(2.2, Math.max(0.55, this.camZoom * f));
    this.resize();
  }

  centerOn(x, z, instant = false) {
    this.camTarget.set(x, 0, z);
  }

  screenShake(power = 0.5) {
    this.shake = power;
  }

  onFrame(cb) {
    this._frameCbs.add(cb);
    return () => this._frameCbs.delete(cb);
  }

  start() {
    if (this._running) return;
    this._running = true;
    const loop = (now) => {
      if (!this._running) return;
      requestAnimationFrame(loop);
      updateTweens(now);
      // suaviza rotação
      if (this.targetAngle != null) {
        const diff = this.targetAngle - this.camAngle;
        if (Math.abs(diff) < 0.002) { this.camAngle = this.targetAngle; this.targetAngle = null; }
        else this.camAngle += diff * 0.12;
      }
      this.updateCamera();
      for (const cb of this._frameCbs) cb(now);
      this.renderer.render(this.scene, this.camera);
    };
    requestAnimationFrame(loop);
  }

  stop() {
    this._running = false;
  }

  // converte posição do mundo para coordenadas de tela (para números de dano)
  worldToScreen(v3) {
    const v = v3.clone().project(this.camera);
    return {
      x: (v.x * 0.5 + 0.5) * window.innerWidth,
      y: (-v.y * 0.5 + 0.5) * window.innerHeight,
      visible: v.z < 1,
    };
  }

  raycast(clientX, clientY, objects) {
    this.pointer.x = (clientX / window.innerWidth) * 2 - 1;
    this.pointer.y = -(clientY / window.innerHeight) * 2 + 1;
    this.raycaster.setFromCamera(this.pointer, this.camera);
    return this.raycaster.intersectObjects(objects, true);
  }

  dispose(obj) {
    obj.traverse((o) => {
      o.geometry?.dispose();
      if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose());
      else o.material?.dispose();
    });
    obj.parent?.remove(obj);
  }
}

export const TILE = 1; // tamanho do tile no mundo
export const tileY = (h) => h * 0.35;

export function tileCenter(x, y, h = 0) {
  return new THREE.Vector3(x * TILE, tileY(h), y * TILE);
}
