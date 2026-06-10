// Personagens 3D procedurais: Frosty (a tiefling alada) e os arquétipos
// de corpo dos 115 inimigos, coloridos e escalados pelos dados da unidade.

import * as THREE from 'three';

const matte = (color, opts = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.85, metalness: 0.05, ...opts });
const metal = (color, opts = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.35, metalness: 0.85, ...opts });
const glow = (color, intensity = 1, opts = {}) =>
  new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: intensity, roughness: 0.4, ...opts });

function M(geo, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  return m;
}

const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
const sphere = (r, s = 10) => new THREE.SphereGeometry(r, s, Math.max(6, s - 2));
const cone = (r, h, s = 8) => new THREE.ConeGeometry(r, h, s);
const cyl = (rt, rb, h, s = 8) => new THREE.CylinderGeometry(rt, rb, h, s);

// ---------- textura de runas para a Geada Eterna ----------
function runeTexture() {
  const c = document.createElement('canvas');
  c.width = 64; c.height = 256;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#04060f';
  ctx.fillRect(0, 0, 64, 256);
  ctx.strokeStyle = '#66ccff';
  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  const runes = 7;
  for (let i = 0; i < runes; i++) {
    const cy = 22 + i * 32;
    ctx.beginPath();
    const segs = 3 + Math.floor(Math.random() * 3);
    let px = 20 + Math.random() * 10, py = cy - 10;
    ctx.moveTo(px, py);
    for (let s = 0; s < segs; s++) {
      px = 14 + Math.random() * 36;
      py = cy - 10 + ((s + 1) / segs) * 20;
      ctx.lineTo(px, py);
    }
    ctx.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// ---------- asa (forma 2D de morcego/anjo) ----------
// A forma é desenhada estendendo para +X (asa DIREITA). Para a esquerda,
// `side = -1` espelha a própria geometria (nada de scale negativo no mesh,
// que invertia a asa para a frente do corpo).
function wing(color, span = 0.85, batLike = true, side = 1) {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  if (batLike) {
    shape.quadraticCurveTo(span * 0.45, 0.55, span, 0.42);
    shape.quadraticCurveTo(span * 0.78, 0.18, span * 0.92, -0.05);
    shape.quadraticCurveTo(span * 0.6, -0.12, span * 0.62, -0.32);
    shape.quadraticCurveTo(span * 0.35, -0.28, span * 0.32, -0.46);
    shape.quadraticCurveTo(span * 0.15, -0.28, 0, -0.18);
  } else {
    shape.quadraticCurveTo(span * 0.5, 0.6, span, 0.35);
    shape.quadraticCurveTo(span * 0.7, 0.05, span * 0.85, -0.18);
    shape.quadraticCurveTo(span * 0.45, -0.1, span * 0.4, -0.34);
    shape.quadraticCurveTo(span * 0.18, -0.2, 0, -0.16);
  }
  const geo = new THREE.ShapeGeometry(shape, 12);
  if (side < 0) geo.scale(-1, 1, 1);
  const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.7, side: THREE.DoubleSide });
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = true;
  return m;
}

// par de asas posicionadas nas COSTAS (−Z), abrindo para trás/lados e erguidas.
// userData.flap guarda a pose base para a animação de bater asas.
function wingPair(parent, { colorL, colorR, span = 0.85, batL = true, batR = true, y = 0.92, z = -0.16, spread = Math.PI / 3, lift = 0.35 }) {
  const wl = wing(colorL, span, batL, -1);
  wl.position.set(-0.06, y, z);
  wl.rotation.y = -spread;
  wl.rotation.z = -lift;
  wl.userData.flap = { base: -lift, dir: -1 };
  const wr = wing(colorR, span, batR, 1);
  wr.position.set(0.06, y, z);
  wr.rotation.y = spread;
  wr.rotation.z = lift;
  wr.userData.flap = { base: lift, dir: 1 };
  parent.add(wl, wr);
  return [wl, wr];
}

// ============================================================
// FROSTY — tiefling alada de pele azul com a Geada Eterna
// ============================================================
export function buildFrosty() {
  const g = new THREE.Group();
  const skin = matte('#7da7e8');         // pele azul clara
  const armor = new THREE.MeshStandardMaterial({ color: '#15151d', roughness: 0.4, metalness: 0.75 });
  const goldM = metal('#caa84a');
  const cloth = matte('#2a4aa0');        // azul do tecido
  const hairM = matte('#dfe4ee');        // cabelo prateado

  // pernas (armadura)
  g.add(M(box(0.13, 0.34, 0.15), armor, -0.1, 0.17, 0));
  g.add(M(box(0.13, 0.34, 0.15), armor, 0.1, 0.17, 0));
  // saia/tabardo azul com barra dourada
  const skirt = M(box(0.34, 0.3, 0.2), cloth, 0, 0.42, 0.0);
  g.add(skirt);
  g.add(M(box(0.36, 0.04, 0.22), goldM, 0, 0.29, 0));
  // torso blindado
  g.add(M(box(0.36, 0.34, 0.24), armor, 0, 0.72, 0));
  // corrente dourada cruzada
  const chain = M(box(0.4, 0.035, 0.26), goldM, 0, 0.78, 0);
  chain.rotation.z = 0.5;
  g.add(chain);
  // ombreiras
  g.add(M(sphere(0.1, 8), armor, -0.23, 0.9, 0));
  g.add(M(sphere(0.1, 8), armor, 0.23, 0.9, 0));

  // braço esquerdo (segura a espada — grupo para animar)
  const swordArm = new THREE.Group();
  swordArm.position.set(0.26, 0.86, 0);
  const arm = M(box(0.09, 0.3, 0.1), armor, 0, -0.13, 0);
  swordArm.add(arm);
  g.add(swordArm);
  // braço direito
  g.add(M(box(0.09, 0.3, 0.1), armor, -0.26, 0.7, 0));

  // cabeça
  const head = new THREE.Group();
  head.position.y = 1.06;
  head.add(M(sphere(0.15, 14), skin, 0, 0, 0));
  // óculos
  const lensM = new THREE.MeshStandardMaterial({ color: '#aaccee', roughness: 0.1, metalness: 0.4, transparent: true, opacity: 0.7 });
  head.add(M(box(0.07, 0.05, 0.01), lensM, -0.05, 0.02, 0.145));
  head.add(M(box(0.07, 0.05, 0.01), lensM, 0.05, 0.02, 0.145));
  head.add(M(box(0.03, 0.012, 0.01), metal('#888'), 0, 0.02, 0.148));
  // chifres dourados curvados
  const hornM = metal('#d8b75a');
  const hornL = M(cone(0.035, 0.22, 6), hornM, -0.1, 0.16, 0);
  hornL.rotation.z = 0.55;
  const hornR = M(cone(0.035, 0.22, 6), hornM, 0.1, 0.16, 0);
  hornR.rotation.z = -0.55;
  head.add(hornL, hornR);
  // cabelo longo prateado
  head.add(M(sphere(0.16, 10), hairM, 0, 0.045, -0.035));
  const hairBack = M(box(0.24, 0.55, 0.1), hairM, 0, -0.22, -0.12);
  head.add(hairBack);
  g.add(head);

  // ASAS nas costas: a negra (morcego) à esquerda, a branca (anjo) à direita — como na arte
  const [wingL, wingR] = wingPair(g, {
    colorL: '#15151a', colorR: '#e8e6f0',
    span: 0.95, batL: true, batR: false,
    y: 0.88, z: -0.17, spread: Math.PI / 3,
  });

  // GEADA ETERNA — espada bastarda enorme com runas azuis
  const sword = new THREE.Group();
  const bladeM = new THREE.MeshStandardMaterial({
    color: '#2a3a55', roughness: 0.3, metalness: 0.7,
    emissive: '#3399ff', emissiveIntensity: 0.9,
    emissiveMap: runeTexture(),
  });
  const blade = M(box(0.085, 1.15, 0.02), bladeM, 0, 0.72, 0);
  const tip = M(cone(0.06, 0.14, 4), bladeM, 0, 1.36, 0);
  tip.rotation.y = Math.PI / 4;
  const guard = M(box(0.3, 0.05, 0.06), goldM, 0, 0.12, 0);
  const grip = M(cyl(0.03, 0.03, 0.22, 8), matte('#2a1a10'), 0, -0.02, 0);
  const pommel = M(sphere(0.05, 8), goldM, 0, -0.15, 0);
  sword.add(blade, tip, guard, grip, pommel);
  sword.position.set(0.05, -0.25, 0.02);
  sword.rotation.z = -0.5; // apoiada no ombro
  swordArm.add(sword);

  g.userData.parts = { swordArm, sword, wingL, wingR, head };
  g.userData.kind = 'frosty';
  return g;
}

// ============================================================
// ARQUÉTIPOS DE INIMIGOS
// ============================================================

function addEyes(parent, color = '#ff3333', y = 0, z = 0, gap = 0.07, r = 0.025) {
  const m = glow(color, 1.4);
  parent.add(M(sphere(r, 6), m, -gap, y, z));
  parent.add(M(sphere(r, 6), m, gap, y, z));
}

const BUILDERS = {
  biped(c, a) {
    const g = new THREE.Group();
    g.add(M(box(0.12, 0.26, 0.13), matte(a), -0.08, 0.13, 0));
    g.add(M(box(0.12, 0.26, 0.13), matte(a), 0.08, 0.13, 0));
    g.add(M(box(0.3, 0.3, 0.2), matte(c), 0, 0.42, 0));
    g.add(M(box(0.08, 0.26, 0.09), matte(c), -0.21, 0.42, 0));
    g.add(M(box(0.08, 0.26, 0.09), matte(c), 0.21, 0.42, 0));
    const head = M(sphere(0.13, 10), matte(c), 0, 0.69, 0);
    g.add(head);
    addEyes(g, '#ffdd44', 0.7, 0.11);
    // orelhas pontudas
    const earM = matte(c);
    const e1 = M(cone(0.03, 0.12, 5), earM, -0.13, 0.74, 0); e1.rotation.z = 1.2;
    const e2 = M(cone(0.03, 0.12, 5), earM, 0.13, 0.74, 0); e2.rotation.z = -1.2;
    g.add(e1, e2);
    return g;
  },
  humanoid(c, a) {
    const g = new THREE.Group();
    g.add(M(box(0.12, 0.3, 0.13), matte('#3a3a42'), -0.08, 0.15, 0));
    g.add(M(box(0.12, 0.3, 0.13), matte('#3a3a42'), 0.08, 0.15, 0));
    g.add(M(box(0.3, 0.34, 0.2), matte(c), 0, 0.48, 0));
    g.add(M(box(0.08, 0.28, 0.09), matte(c), -0.21, 0.48, 0));
    g.add(M(box(0.08, 0.28, 0.09), matte(c), 0.21, 0.48, 0));
    g.add(M(sphere(0.13, 10), matte('#caa080'), 0, 0.78, 0));
    // capuz/elmo
    const hood = M(cone(0.15, 0.2, 8), matte(a), 0, 0.87, 0);
    g.add(hood);
    // arma simples
    const wpn = M(box(0.04, 0.5, 0.04), metal('#999'), 0.28, 0.55, 0.08);
    wpn.rotation.z = -0.4;
    g.add(wpn);
    return g;
  },
  brute(c, a) {
    const g = new THREE.Group();
    g.add(M(box(0.16, 0.3, 0.18), matte(a), -0.12, 0.15, 0));
    g.add(M(box(0.16, 0.3, 0.18), matte(a), 0.12, 0.15, 0));
    const torso = M(box(0.5, 0.42, 0.32), matte(c), 0, 0.5, 0);
    torso.rotation.x = 0.15; // corcunda
    g.add(torso);
    g.add(M(box(0.13, 0.42, 0.14), matte(c), -0.33, 0.42, 0));
    g.add(M(box(0.13, 0.42, 0.14), matte(c), 0.33, 0.42, 0));
    g.add(M(sphere(0.15, 10), matte(c), 0, 0.82, 0.08));
    addEyes(g, '#ff5533', 0.84, 0.2);
    // presas
    g.add(M(cone(0.025, 0.08, 5), matte('#eee'), -0.06, 0.76, 0.2));
    g.add(M(cone(0.025, 0.08, 5), matte('#eee'), 0.06, 0.76, 0.2));
    return g;
  },
  quadruped(c, a) {
    const g = new THREE.Group();
    const body = M(box(0.3, 0.24, 0.62), matte(c), 0, 0.32, 0);
    g.add(body);
    for (const [lx, lz] of [[-0.12, 0.22], [0.12, 0.22], [-0.12, -0.22], [0.12, -0.22]]) {
      g.add(M(box(0.08, 0.24, 0.08), matte(a), lx, 0.12, lz));
    }
    const head = M(box(0.2, 0.18, 0.26), matte(c), 0, 0.46, 0.38);
    g.add(head);
    addEyes(g, '#ffcc33', 0.5, 0.5, 0.06);
    // cauda
    const tail = M(cyl(0.02, 0.05, 0.34, 6), matte(c), 0, 0.38, -0.42);
    tail.rotation.x = 0.8;
    g.add(tail);
    g.userData.headPart = head;
    return g;
  },
  spider(c, a) {
    const g = new THREE.Group();
    g.add(M(sphere(0.24, 10), matte(c), 0, 0.3, -0.08));
    g.add(M(sphere(0.15, 9), matte(c), 0, 0.3, 0.18));
    addEyes(g, '#ff3333', 0.34, 0.3, 0.05, 0.03);
    addEyes(g, '#ff3333', 0.4, 0.28, 0.09, 0.022);
    const legM = matte(a);
    for (let i = 0; i < 4; i++) {
      for (const side of [-1, 1]) {
        const leg = M(cyl(0.015, 0.025, 0.5, 5), legM, side * 0.28, 0.3, -0.2 + i * 0.13);
        leg.rotation.z = side * 1.1;
        g.add(leg);
      }
    }
    return g;
  },
  serpent(c, a) {
    const g = new THREE.Group();
    const segs = 5;
    for (let i = 0; i < segs; i++) {
      const r = 0.16 - i * 0.018;
      g.add(M(sphere(r, 9), matte(i % 2 ? c : a), 0, 0.14, 0.3 - i * 0.18));
    }
    const head = M(sphere(0.13, 9), matte(c), 0, 0.42, 0.38);
    g.add(head);
    g.add(M(cyl(0.1, 0.13, 0.3, 8), matte(c), 0, 0.27, 0.36));
    addEyes(g, '#ffee44', 0.46, 0.48, 0.05);
    return g;
  },
  blob(c, a) {
    const g = new THREE.Group();
    const body = M(sphere(0.34, 12), new THREE.MeshStandardMaterial({
      color: c, roughness: 0.2, metalness: 0, transparent: true, opacity: 0.85,
      emissive: a, emissiveIntensity: 0.12,
    }), 0, 0.28, 0);
    body.scale.y = 0.75;
    g.add(body);
    addEyes(g, '#222222', 0.36, 0.26, 0.09, 0.035);
    g.userData.blobBody = body;
    return g;
  },
  flyer(c, a) {
    const g = new THREE.Group();
    g.add(M(sphere(0.16, 10), matte(c), 0, 0.6, 0));
    g.add(M(sphere(0.11, 9), matte(c), 0, 0.74, 0.12));
    addEyes(g, '#ffdd44', 0.77, 0.2, 0.05);
    const wings = wingPair(g, { colorL: a, colorR: a, span: 0.6, y: 0.66, z: -0.1, spread: Math.PI / 2.6 });
    g.add(M(cyl(0.015, 0.04, 0.3, 5), matte(c), 0, 0.42, -0.06));
    g.userData.wings = wings;
    g.userData.floats = true;
    return g;
  },
  ghost(c, a) {
    const g = new THREE.Group();
    const body = M(cone(0.26, 0.7, 10), new THREE.MeshStandardMaterial({
      color: c, transparent: true, opacity: 0.6, roughness: 0.5,
      emissive: a, emissiveIntensity: 0.35,
    }), 0, 0.55, 0);
    body.rotation.x = Math.PI; // ponta para baixo
    g.add(body);
    g.add(M(sphere(0.16, 10), new THREE.MeshStandardMaterial({
      color: c, transparent: true, opacity: 0.75, emissive: a, emissiveIntensity: 0.3,
    }), 0, 0.92, 0));
    addEyes(g, '#aaddff', 0.95, 0.13, 0.06);
    g.userData.floats = true;
    return g;
  },
  skeleton(c, a) {
    const g = new THREE.Group();
    const boneM = matte(c);
    g.add(M(box(0.07, 0.3, 0.08), boneM, -0.08, 0.15, 0));
    g.add(M(box(0.07, 0.3, 0.08), boneM, 0.08, 0.15, 0));
    // caixa torácica (anéis)
    for (let i = 0; i < 3; i++) {
      g.add(M(box(0.26 - i * 0.02, 0.045, 0.16), boneM, 0, 0.4 + i * 0.09, 0));
    }
    g.add(M(box(0.06, 0.34, 0.07), boneM, -0.2, 0.45, 0));
    g.add(M(box(0.06, 0.34, 0.07), boneM, 0.2, 0.45, 0));
    const skull = M(sphere(0.12, 10), boneM, 0, 0.72, 0);
    g.add(skull);
    addEyes(g, a === '#888070' ? '#ff4444' : a, 0.74, 0.1, 0.05, 0.03);
    return g;
  },
  golem(c, a) {
    const g = new THREE.Group();
    g.add(M(box(0.18, 0.3, 0.2), matte(c), -0.13, 0.15, 0));
    g.add(M(box(0.18, 0.3, 0.2), matte(c), 0.13, 0.15, 0));
    g.add(M(box(0.52, 0.44, 0.34), matte(c), 0, 0.54, 0));
    g.add(M(box(0.16, 0.5, 0.18), matte(a), -0.36, 0.5, 0));
    g.add(M(box(0.16, 0.5, 0.18), matte(a), 0.36, 0.5, 0));
    g.add(M(box(0.2, 0.16, 0.18), matte(c), 0, 0.86, 0));
    addEyes(g, '#66ffcc', 0.88, 0.1, 0.05);
    return g;
  },
  plant(c, a) {
    const g = new THREE.Group();
    g.add(M(cyl(0.1, 0.16, 0.5, 7), matte('#5a4028'), 0, 0.25, 0));
    const crown = M(sphere(0.3, 9), matte(c), 0, 0.62, 0);
    crown.scale.y = 0.8;
    g.add(crown);
    // pétalas/folhas
    for (let i = 0; i < 5; i++) {
      const ang = (i / 5) * Math.PI * 2;
      const leaf = M(cone(0.07, 0.26, 5), matte(a), Math.cos(ang) * 0.26, 0.62, Math.sin(ang) * 0.26);
      leaf.rotation.z = Math.cos(ang) * 1.3;
      leaf.rotation.x = -Math.sin(ang) * 1.3;
      g.add(leaf);
    }
    addEyes(g, '#ffee66', 0.62, 0.27, 0.08);
    return g;
  },
  swarm(c, a) {
    const g = new THREE.Group();
    const dots = [];
    for (let i = 0; i < 14; i++) {
      const d = M(sphere(0.045, 5), matte(i % 3 ? c : a),
        (Math.random() - 0.5) * 0.5, 0.35 + (Math.random() - 0.5) * 0.4, (Math.random() - 0.5) * 0.5);
      dots.push(d);
      g.add(d);
    }
    g.userData.swarmDots = dots;
    g.userData.floats = true;
    return g;
  },
  dragon(c, a) {
    const g = new THREE.Group();
    const body = M(box(0.42, 0.3, 0.7), matte(c), 0, 0.38, 0);
    g.add(body);
    for (const [lx, lz] of [[-0.2, 0.24], [0.2, 0.24], [-0.2, -0.24], [0.2, -0.24]]) {
      g.add(M(box(0.11, 0.28, 0.11), matte(c), lx, 0.14, lz));
    }
    // pescoço + cabeça
    const neck = M(cyl(0.09, 0.13, 0.4, 7), matte(c), 0, 0.62, 0.38);
    neck.rotation.x = -0.5;
    g.add(neck);
    const head = M(box(0.2, 0.16, 0.32), matte(c), 0, 0.82, 0.55);
    g.add(head);
    addEyes(g, '#ffcc33', 0.86, 0.64, 0.07);
    // chifres
    const h1 = M(cone(0.03, 0.14, 5), matte(a), -0.07, 0.93, 0.48); h1.rotation.x = -0.5;
    const h2 = M(cone(0.03, 0.14, 5), matte(a), 0.07, 0.93, 0.48); h2.rotation.x = -0.5;
    g.add(h1, h2);
    // asas no dorso, abrindo para os lados
    const wings = wingPair(g, { colorL: a, colorR: a, span: 0.85, y: 0.58, z: -0.12, spread: Math.PI / 2.3 });
    g.userData.wings = wings;
    // cauda
    const tail = M(cyl(0.03, 0.09, 0.6, 6), matte(c), 0, 0.32, -0.55);
    tail.rotation.x = 1.2;
    g.add(tail);
    return g;
  },
  elemental(c, a) {
    const g = new THREE.Group();
    const core = M(sphere(0.2, 10), glow(a, 1.2), 0, 0.5, 0);
    g.add(core);
    const chunks = [];
    for (let i = 0; i < 7; i++) {
      const ch = M(new THREE.DodecahedronGeometry(0.085 + Math.random() * 0.06, 0), matte(c), 0, 0.5, 0);
      ch.userData.orbit = { r: 0.3 + Math.random() * 0.12, speed: 0.8 + Math.random(), phase: Math.random() * Math.PI * 2, y: (Math.random() - 0.5) * 0.4 };
      chunks.push(ch);
      g.add(ch);
    }
    g.userData.chunks = chunks;
    g.userData.floats = true;
    return g;
  },
  eye(c, a) {
    const g = new THREE.Group();
    const body = M(sphere(0.3, 14), matte(c), 0, 0.62, 0);
    g.add(body);
    g.add(M(sphere(0.13, 10), new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.2 }), 0, 0.62, 0.22));
    g.add(M(sphere(0.06, 8), glow(a, 1.5), 0, 0.62, 0.32));
    // talos oculares
    for (let i = 0; i < 5; i++) {
      const ang = (i / 5) * Math.PI * 2;
      const stalk = M(cyl(0.02, 0.03, 0.26, 5), matte(c), Math.cos(ang) * 0.22, 0.92, Math.sin(ang) * 0.22);
      stalk.rotation.z = Math.cos(ang) * 0.7;
      stalk.rotation.x = -Math.sin(ang) * 0.7;
      g.add(stalk);
      g.add(M(sphere(0.035, 6), glow(a, 1.2), Math.cos(ang) * 0.3, 1.04, Math.sin(ang) * 0.3));
    }
    g.userData.floats = true;
    return g;
  },
};

export function buildEnemyMesh(unit) {
  const v = unit.visual;
  const builder = BUILDERS[v.body] ?? BUILDERS.biped;
  let color = v.color, accent = v.accent ?? '#333333';
  // tinta do adjetivo mistura na cor base
  if (v.tint) {
    const c1 = new THREE.Color(color), c2 = new THREE.Color(v.tint);
    c1.lerp(c2, 0.45);
    color = `#${c1.getHexString()}`;
  }
  const g = builder(color, accent);
  // brilho do adjetivo (flamejante etc.)
  if (v.emissive) {
    g.traverse((o) => {
      if (o.isMesh && o.material?.emissive !== undefined && o.material.emissiveIntensity < 0.5) {
        o.material = o.material.clone();
        o.material.emissive = new THREE.Color(v.emissive);
        o.material.emissiveIntensity = 0.28;
      }
    });
  }
  const s = (v.scale ?? 1);
  g.scale.setScalar(s);
  g.userData.kind = v.body;
  return g;
}

// barra de vida flutuante (sprite com canvas)
export function makeHpBar(unit) {
  const canvas = document.createElement('canvas');
  canvas.width = 96; canvas.height = 18;
  const tex = new THREE.CanvasTexture(canvas);
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true }));
  sprite.scale.set(0.85, 0.16, 1);
  sprite.renderOrder = 999;
  const draw = () => {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 96, 18);
    ctx.fillStyle = 'rgba(8,10,16,0.75)';
    ctx.fillRect(0, 0, 96, 18);
    const frac = Math.max(0, unit.hp / unit.maxHp);
    const grad = ctx.createLinearGradient(0, 0, 96, 0);
    if (unit.side === 'hero') { grad.addColorStop(0, '#4ade80'); grad.addColorStop(1, '#22c55e'); }
    else if (frac > 0.5) { grad.addColorStop(0, '#f87171'); grad.addColorStop(1, '#ef4444'); }
    else { grad.addColorStop(0, '#fb923c'); grad.addColorStop(1, '#ef4444'); }
    ctx.fillStyle = grad;
    ctx.fillRect(2, 2, 92 * frac, 14);
    ctx.strokeStyle = 'rgba(255,255,255,0.35)';
    ctx.strokeRect(0.5, 0.5, 95, 17);
    tex.needsUpdate = true;
  };
  draw();
  return { sprite, draw, tex, canvas };
}
