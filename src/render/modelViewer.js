// Mini-visualizador 3D para o Bestiário: renderer próprio num canvas pequeno,
// modelo girando com luzes dedicadas. Criar/descartar junto com o modal.

import * as THREE from 'three';
import { buildEnemyMesh, animateModelParts } from './characters.js';

export class ModelViewer {
  constructor(canvas) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(canvas.clientWidth || 260, canvas.clientHeight || 300, false);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(34, (canvas.clientWidth || 260) / (canvas.clientHeight || 300), 0.1, 60);

    this.scene.add(new THREE.HemisphereLight('#cfe3ff', '#3a3a4a', 1.2));
    const sun = new THREE.DirectionalLight('#fff4e0', 1.8);
    sun.position.set(3, 6, 4);
    this.scene.add(sun);

    const floor = new THREE.Mesh(
      new THREE.CylinderGeometry(1.1, 1.25, 0.08, 20),
      new THREE.MeshStandardMaterial({ color: '#2c3654', roughness: 0.9 })
    );
    floor.position.y = -0.04;
    this.scene.add(floor);

    this.model = null;
    this._running = true;
    const loop = (now) => {
      if (!this._running) return;
      requestAnimationFrame(loop);
      if (this.model) {
        this.model.rotation.y = now / 2400;
        animateModelParts(this.model, now);
      }
      this.renderer.render(this.scene, this.camera);
    };
    requestAnimationFrame(loop);
  }

  show(base) {
    this.clearModel();
    this.model = buildEnemyMesh({ visual: base.visual, baseId: base.id });
    this.scene.add(this.model);
    // enquadra pelo tamanho real do modelo
    const sphere = new THREE.Box3().setFromObject(this.model).getBoundingSphere(new THREE.Sphere());
    const dist = Math.max(1.6, sphere.radius * 2.6);
    this.camera.position.set(dist * 0.8, sphere.center.y + dist * 0.45, dist * 0.8);
    this.camera.lookAt(0, Math.max(0.4, sphere.center.y * 0.9), 0);
  }

  clearModel() {
    if (!this.model) return;
    this.scene.remove(this.model);
    this.model.traverse((o) => {
      o.geometry?.dispose();
      if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose());
      else o.material?.dispose();
    });
    this.model = null;
  }

  dispose() {
    this._running = false;
    this.clearModel();
    this.renderer.dispose();
  }
}
