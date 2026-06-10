// Modelos 3D DETALHADOS dos 5 chefes — ~10× mais formas que os arquétipos
// genéricos. Cada construtor devolve um THREE.Group com userData.wings
// (bater de asas) e/ou userData.chunks (fragmentos orbitando) animáveis.
// O tamanho final vem de visual.scale dos dados (como nos arquétipos).
// Arquivo independente (sem DOM): contável pelo validador em Node.

import * as THREE from 'three';

// ---------- kit local ----------
const matte = (color, opts = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.85, metalness: 0.05, ...opts });
const metal = (color, opts = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.3, metalness: 0.85, ...opts });
const glow = (color, intensity = 1, opts = {}) =>
  new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: intensity, roughness: 0.4, ...opts });
const ice = (color = '#bfe8ff', opacity = 0.85) => new THREE.MeshStandardMaterial({
  color, roughness: 0.15, metalness: 0.1, transparent: true, opacity,
  emissive: '#7ad8ff', emissiveIntensity: 0.25,
});

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
const torus = (r, t, s = 10) => new THREE.TorusGeometry(r, t, 6, s);

function wing(color, span = 0.85, side = 1, batLike = true) {
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
  const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color, roughness: 0.7, side: THREE.DoubleSide }));
  m.castShadow = true;
  return m;
}

function bossWingPair(parent, { color, span, y, z, spread = Math.PI / 2.3, lift = 0.35 }) {
  const wl = wing(color, span, -1);
  wl.position.set(-0.08, y, z);
  wl.rotation.y = -spread;
  wl.rotation.z = -lift;
  wl.userData.flap = { base: -lift, dir: -1 };
  const wr = wing(color, span, 1);
  wr.position.set(0.08, y, z);
  wr.rotation.y = spread;
  wr.rotation.z = lift;
  wr.userData.flap = { base: lift, dir: 1 };
  parent.add(wl, wr);
  return [wl, wr];
}

// mão com dedos-garra
function clawHand(parent, handM, clawM, x, y, z, n = 4, down = true) {
  parent.add(M(sphere(0.075, 7), handM, x, y, z));
  for (let i = 0; i < n; i++) {
    const c = M(cone(0.018, 0.11, 4), clawM, x - 0.05 + i * (0.1 / (n - 1)), y - (down ? 0.09 : 0), z + (down ? 0 : 0.08));
    if (down) c.rotation.x = Math.PI;
    else c.rotation.x = Math.PI / 2;
    parent.add(c);
  }
}

// ============================================================
// REI GOBLIN — coroa com gemas, capa real, machado de duas lâminas
// ============================================================
function buildReiGoblin() {
  const g = new THREE.Group();
  const skin = matte('#6a8b2e');
  const skinDark = matte('#56751f');
  const armor = matte('#4a3a28', { roughness: 0.6 });
  const goldM = metal('#e8b94a');
  const capeM = matte('#8a1f2a', { side: THREE.DoubleSide });

  // pernas + joelheiras douradas + pés com dedos
  for (const sx of [-1, 1]) {
    g.add(M(box(0.17, 0.3, 0.19), skinDark, sx * 0.13, 0.15, 0));
    g.add(M(sphere(0.07, 7), goldM, sx * 0.13, 0.3, 0.08));
    g.add(M(box(0.18, 0.08, 0.24), armor, sx * 0.13, 0.04, 0.04));
    for (let i = 0; i < 3; i++) {
      const toe = M(cone(0.025, 0.07, 4), matte('#d8d0b8'), sx * 0.13 - 0.05 + i * 0.05, 0.04, 0.17);
      toe.rotation.x = Math.PI / 2;
      g.add(toe);
    }
  }
  // torso barrigudo + placas de armadura
  const torso = M(sphere(0.32, 12), skin, 0, 0.52, 0);
  torso.scale.set(1, 0.95, 0.85);
  g.add(torso);
  g.add(M(box(0.4, 0.1, 0.06), armor, 0, 0.66, 0.24));
  g.add(M(box(0.36, 0.1, 0.06), armor, 0, 0.54, 0.27));
  g.add(M(box(0.32, 0.1, 0.06), armor, 0, 0.42, 0.28));
  // cinto + fivela + caveiras-troféu
  g.add(M(box(0.52, 0.07, 0.4), matte('#3a2a18'), 0, 0.34, 0));
  g.add(M(box(0.1, 0.1, 0.05), goldM, 0, 0.34, 0.21));
  for (const sx of [-0.18, 0, 0.18]) {
    g.add(M(sphere(0.055, 7), matte('#ddd5c0'), sx, 0.27, 0.2));
    g.add(M(sphere(0.012, 4), matte('#111'), sx - 0.02, 0.28, 0.245));
    g.add(M(sphere(0.012, 4), matte('#111'), sx + 0.02, 0.28, 0.245));
  }
  // braços + braçadeiras + mãos com garras
  for (const sx of [-1, 1]) {
    const upper = M(cyl(0.075, 0.09, 0.26, 7), skin, sx * 0.37, 0.62, 0);
    upper.rotation.z = sx * 0.5;
    g.add(upper);
    g.add(M(cyl(0.065, 0.075, 0.24, 7), skin, sx * 0.46, 0.45, 0.02));
    g.add(M(cyl(0.085, 0.085, 0.07, 8), goldM, sx * 0.46, 0.38, 0.02));
    clawHand(g, skinDark, matte('#d8d0b8'), sx * 0.47, 0.3, 0.04, 4);
  }
  // ombreiras com espinhos
  for (const sx of [-1, 1]) {
    g.add(M(sphere(0.14, 9), armor, sx * 0.33, 0.78, 0));
    for (let i = 0; i < 3; i++) {
      const sp = M(cone(0.03, 0.13, 5), metal('#9a9a8a'), sx * (0.3 + i * 0.05), 0.86 + i * 0.02, -0.02 + i * 0.02);
      sp.rotation.z = sx * (0.5 + i * 0.25);
      g.add(sp);
    }
  }
  // cabeça: orelhas, nariz, presas, dentes, sobrancelhas
  const head = M(sphere(0.2, 12), skin, 0, 0.95, 0.04);
  g.add(head);
  g.add(M(box(0.18, 0.08, 0.1), skinDark, 0, 0.84, 0.16));
  g.add(M(cone(0.04, 0.1, 5), skinDark, 0, 0.95, 0.23));
  for (const sx of [-1, 1]) {
    const ear = M(cone(0.05, 0.22, 5), skin, sx * 0.22, 1.0, -0.02);
    ear.rotation.z = sx * 1.35;
    g.add(ear);
    g.add(M(sphere(0.035, 6), glow('#ff5533', 1.6), sx * 0.08, 0.98, 0.17));
    g.add(M(box(0.08, 0.02, 0.03), skinDark, sx * 0.08, 1.03, 0.18));
    const tusk = M(cone(0.025, 0.1, 5), matte('#e8e0c8'), sx * 0.09, 0.82, 0.19);
    tusk.rotation.x = -0.3;
    g.add(tusk);
  }
  for (let i = 0; i < 4; i++) {
    g.add(M(box(0.025, 0.04, 0.02), matte('#e8e0c8'), -0.05 + i * 0.034, 0.86, 0.2));
  }
  // COROA: aro + 6 pontas + 3 gemas
  g.add(M(cyl(0.17, 0.18, 0.07, 10), goldM, 0, 1.13, 0.02));
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    g.add(M(cone(0.03, 0.1, 4), goldM, Math.cos(a) * 0.16, 1.2, 0.02 + Math.sin(a) * 0.16));
  }
  g.add(M(sphere(0.03, 6), glow('#e03131', 1.2), 0, 1.14, 0.2));
  g.add(M(sphere(0.022, 6), glow('#2f9e44', 1.2), -0.12, 1.14, 0.15));
  g.add(M(sphere(0.022, 6), glow('#1c7ed6', 1.2), 0.12, 1.14, 0.15));
  // capa real em camadas + broche
  for (let i = 0; i < 3; i++) {
    const cape = M(box(0.5 - i * 0.06, 0.5 + i * 0.12, 0.03), capeM, 0, 0.62 - i * 0.07, -0.26 - i * 0.025);
    cape.rotation.x = 0.12;
    g.add(cape);
  }
  g.add(M(torus(0.1, 0.018, 12), goldM, 0, 0.84, -0.2));
  // MACHADO REAL de duas lâminas
  const axe = new THREE.Group();
  axe.add(M(cyl(0.035, 0.045, 1.05, 8), matte('#4a3018'), 0, 0.4, 0));
  for (let i = 0; i < 3; i++) axe.add(M(torus(0.05, 0.012, 8), goldM, 0, 0.12 + i * 0.22, 0));
  for (const sx of [-1, 1]) {
    const blade = M(cyl(0.16, 0.2, 0.06, 3), metal('#b8b8c0'), sx * 0.17, 0.82, 0);
    blade.rotation.z = Math.PI / 2;
    blade.rotation.y = sx > 0 ? 0 : Math.PI;
    axe.add(blade);
    axe.add(M(box(0.1, 0.26, 0.07), metal('#8a8a92'), sx * 0.09, 0.82, 0));
  }
  axe.add(M(cone(0.035, 0.14, 5), metal('#b8b8c0'), 0, 1.02, 0));
  axe.add(M(sphere(0.05, 7), goldM, 0, -0.14, 0));
  axe.position.set(0.55, 0.34, 0.1);
  axe.rotation.z = -0.18;
  g.add(axe);

  g.userData.kind = 'boss';
  return g;
}

// ============================================================
// BRUXA VERDE — corcunda, garras, colar de ossos, cajado de caveira
// ============================================================
function buildBruxaVerde() {
  const g = new THREE.Group();
  const skin = matte('#5a7a3a');
  const skinDark = matte('#46622c');
  const rag = matte('#2e2a22', { side: THREE.DoubleSide });
  const boneM = matte('#ddd5c0');

  // pernas e pés
  for (const sx of [-1, 1]) {
    g.add(M(cyl(0.05, 0.065, 0.3, 7), skinDark, sx * 0.1, 0.15, 0));
    g.add(M(box(0.09, 0.05, 0.18), skinDark, sx * 0.1, 0.025, 0.05));
  }
  // saia de trapos
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2;
    const strip = M(box(0.12, 0.3 + (i % 3) * 0.05, 0.02), rag, Math.cos(a) * 0.16, 0.27, Math.sin(a) * 0.14);
    strip.rotation.y = -a;
    strip.rotation.x = 0.1;
    g.add(strip);
  }
  // torso corcunda + corcova
  const torso = M(sphere(0.21, 11), rag, 0, 0.52, 0);
  torso.scale.set(1, 1.15, 0.85);
  g.add(torso);
  g.add(M(sphere(0.16, 9), rag, 0, 0.68, -0.12));
  g.add(M(box(0.3, 0.16, 0.04), rag, 0, 0.5, 0.16));
  // colar de ossos (cordão + 7 dentes)
  g.add(M(torus(0.14, 0.012, 12), matte('#6a5a3a'), 0, 0.66, 0.06));
  for (let i = 0; i < 7; i++) {
    const a = -Math.PI * 0.7 + (i / 6) * Math.PI * 1.4;
    const tooth = M(cone(0.018, 0.07, 4), boneM, Math.sin(a) * 0.13, 0.6 - Math.abs(Math.cos(a)) * 0.02, 0.1 + Math.cos(a) * 0.05);
    tooth.rotation.x = Math.PI;
    g.add(tooth);
  }
  // braços compridos com garras de 5 dedos
  for (const sx of [-1, 1]) {
    const upper = M(cyl(0.045, 0.055, 0.3, 7), skin, sx * 0.26, 0.6, 0.02);
    upper.rotation.z = sx * 0.85;
    g.add(upper);
    const fore = M(cyl(0.04, 0.05, 0.32, 7), skin, sx * 0.4, 0.42, 0.08);
    fore.rotation.z = sx * 0.35;
    fore.rotation.x = -0.35;
    g.add(fore);
    clawHand(g, skinDark, boneM, sx * 0.45, 0.26, 0.16, 5);
  }
  // cabeça: nariz adunco, queixo pontudo, verrugas, olhos amarelos
  const head = M(sphere(0.16, 12), skin, 0, 0.88, 0.05);
  head.scale.set(0.9, 1, 1);
  g.add(head);
  const nose1 = M(cone(0.035, 0.16, 5), skin, 0, 0.88, 0.22);
  nose1.rotation.x = Math.PI / 2 + 0.5;
  g.add(nose1);
  g.add(M(sphere(0.025, 5), skinDark, 0, 0.8, 0.27));
  g.add(M(cone(0.03, 0.1, 5), skin, 0, 0.74, 0.14));
  for (const [wx, wy, wz] of [[-0.08, 0.95, 0.12], [0.1, 0.84, 0.13], [0.05, 0.97, 0.1], [-0.1, 0.8, 0.1], [0.02, 0.79, 0.26]]) {
    g.add(M(sphere(0.016, 5), skinDark, wx, wy, wz));
  }
  for (const sx of [-1, 1]) {
    g.add(M(sphere(0.03, 6), glow('#ffd43b', 1.7), sx * 0.06, 0.91, 0.16));
    const brow = M(box(0.07, 0.018, 0.03), skinDark, sx * 0.06, 0.96, 0.16);
    brow.rotation.z = sx * -0.35;
    g.add(brow);
  }
  // cabelo selvagem (13 mechas)
  for (let i = 0; i < 13; i++) {
    const a = (i / 13) * Math.PI * 2;
    const strand = M(cyl(0.008, 0.018, 0.28 + (i % 4) * 0.07, 4), matte('#b8b8a8'),
      Math.cos(a) * 0.12, 1.02, 0.02 + Math.sin(a) * 0.1);
    strand.rotation.z = Math.cos(a) * 0.9;
    strand.rotation.x = -Math.sin(a) * 0.9 - 0.2;
    g.add(strand);
  }
  // CAJADO com caveira, olhos verdes e penas
  const staff = new THREE.Group();
  staff.add(M(cyl(0.022, 0.03, 1.1, 6), matte('#4a3018'), 0, 0.4, 0));
  staff.add(M(torus(0.035, 0.01, 8), matte('#6a5a3a'), 0, 0.7, 0));
  staff.add(M(sphere(0.075, 8), boneM, 0, 0.99, 0));
  staff.add(M(sphere(0.016, 4), glow('#2f9e44', 2), -0.03, 1.0, 0.06));
  staff.add(M(sphere(0.016, 4), glow('#2f9e44', 2), 0.03, 1.0, 0.06));
  staff.add(M(box(0.05, 0.03, 0.04), boneM, 0, 0.92, 0.04));
  for (let i = 0; i < 3; i++) {
    const feather = M(cone(0.015, 0.12, 4), matte('#2a4a2a'), -0.06 - i * 0.02, 0.9 - i * 0.04, 0);
    feather.rotation.z = 0.8 + i * 0.2;
    staff.add(feather);
  }
  staff.position.set(-0.5, 0.05, 0.12);
  staff.rotation.z = 0.12;
  g.add(staff);

  g.userData.kind = 'boss';
  return g;
}

// ============================================================
// LICH — manto com barras douradas, coroa, filactério, runas orbitando
// ============================================================
function buildLich() {
  const g = new THREE.Group();
  const boneM = matte('#ddd6c4');
  const robe = matte('#1f1a2e', { side: THREE.DoubleSide });
  const trim = metal('#caa84a');
  const arcane = glow('#4466ff', 1.4);

  // manto: 3 camadas + barras douradas + trapos
  for (let i = 0; i < 3; i++) {
    g.add(M(cyl(0.16 + i * 0.07, 0.26 + i * 0.09, 0.34, 10), robe, 0, 0.42 - i * 0.16, 0));
    g.add(M(torus(0.25 + i * 0.085, 0.012, 14), trim, 0, 0.28 - i * 0.16, 0));
  }
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const tat = M(box(0.08, 0.16 + (i % 2) * 0.08, 0.02), robe, Math.cos(a) * 0.3, 0.04, Math.sin(a) * 0.28);
    tat.rotation.y = -a;
    g.add(tat);
  }
  // esterno + costelas curvas + coluna
  g.add(M(box(0.05, 0.26, 0.05), boneM, 0, 0.78, 0.1));
  for (let i = 0; i < 3; i++) {
    for (const sx of [-1, 1]) {
      const rib = M(torus(0.1, 0.014, 10), boneM, sx * 0.07, 0.86 - i * 0.08, 0.08);
      rib.rotation.y = sx * 0.8;
      rib.rotation.x = 0.15;
      g.add(rib);
    }
  }
  for (let i = 0; i < 4; i++) g.add(M(cyl(0.025, 0.03, 0.05, 6), boneM, 0, 0.62 + i * 0.07, 0.02));
  // ombros + braços ósseos + mãos garra
  for (const sx of [-1, 1]) {
    g.add(M(sphere(0.085, 8), robe, sx * 0.24, 0.92, 0));
    g.add(M(cone(0.04, 0.12, 5), trim, sx * 0.3, 1.0, 0));
    const upper = M(cyl(0.022, 0.028, 0.26, 6), boneM, sx * 0.3, 0.8, 0.03);
    upper.rotation.z = sx * 0.4;
    g.add(upper);
    const fore = M(cyl(0.02, 0.025, 0.24, 6), boneM, sx * 0.36, 0.62, 0.1);
    fore.rotation.z = sx * 0.15;
    fore.rotation.x = -0.4;
    g.add(fore);
    clawHand(g, boneM, boneM, sx * 0.38, 0.5, 0.18, 4);
  }
  // caveira: crânio, mandíbula, dentes, olhos arcanos, osso nasal
  g.add(M(sphere(0.15, 12), boneM, 0, 1.12, 0.03));
  g.add(M(box(0.12, 0.06, 0.1), boneM, 0, 1.0, 0.08));
  for (let i = 0; i < 4; i++) g.add(M(box(0.018, 0.03, 0.015), boneM, -0.04 + i * 0.027, 1.03, 0.14));
  for (const sx of [-1, 1]) {
    g.add(M(sphere(0.035, 7), glow('#4466ff', 2.2), sx * 0.06, 1.14, 0.12));
  }
  g.add(M(box(0.05, 0.02, 0.03), boneM, 0, 1.09, 0.16));
  // COROA do lich (5 pontas + gema)
  g.add(M(cyl(0.13, 0.14, 0.05, 10), trim, 0, 1.25, 0.02));
  for (let i = 0; i < 5; i++) {
    const a = -Math.PI / 2 + (i / 4) * Math.PI;
    g.add(M(cone(0.022, 0.09 + (i === 2 ? 0.05 : 0), 4), trim, Math.cos(a + Math.PI / 2) * 0.12, 1.31, 0.02 + Math.sin(a + Math.PI / 2) * 0.12));
  }
  g.add(M(sphere(0.022, 6), glow('#aa44ff', 1.8), 0, 1.3, 0.14));
  // FILACTÉRIO no peito: corrente de 5 elos + amuleto pulsante
  for (let i = 0; i < 5; i++) {
    g.add(M(torus(0.022, 0.006, 8), trim, -0.1 + i * 0.05, 0.95 - Math.abs(i - 2) * 0.018, 0.14));
  }
  g.add(M(box(0.07, 0.09, 0.04), trim, 0, 0.84, 0.16));
  g.add(M(sphere(0.028, 8), glow('#66ff88', 2.4), 0, 0.84, 0.185));
  // CAJADO arcano com cristal octaédrico
  const staff = new THREE.Group();
  staff.add(M(cyl(0.022, 0.03, 1.25, 7), matte('#2a2438'), 0, 0.45, 0));
  staff.add(M(torus(0.05, 0.012, 10), trim, 0, 0.95, 0));
  staff.add(M(torus(0.07, 0.01, 10), trim, 0, 1.02, 0));
  staff.add(M(new THREE.OctahedronGeometry(0.085, 0), arcane, 0, 1.16, 0));
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2;
    staff.add(M(new THREE.OctahedronGeometry(0.025, 0), arcane, Math.cos(a) * 0.09, 1.05, Math.sin(a) * 0.09));
  }
  staff.add(M(sphere(0.04, 7), trim, 0, -0.18, 0));
  staff.position.set(0.46, 0.06, 0.1);
  staff.rotation.z = -0.1;
  g.add(staff);
  // RUNAS orbitando (animadas via userData.chunks)
  const chunks = [];
  for (let i = 0; i < 8; i++) {
    const shard = M(new THREE.TetrahedronGeometry(0.04, 0), glow(i % 2 ? '#4466ff' : '#aa44ff', 1.6), 0, 0.9, 0);
    shard.userData.orbit = { r: 0.42 + (i % 3) * 0.07, speed: 0.6 + (i % 4) * 0.25, phase: (i / 8) * Math.PI * 2, y: 0.35 + (i % 3) * 0.16 };
    chunks.push(shard);
    g.add(shard);
  }
  g.userData.chunks = chunks;
  g.userData.floats = true;

  g.userData.kind = 'boss';
  return g;
}

// ============================================================
// DRAGÃO DO GELO — segmentado, cristais, garras, presas, leque caudal
// ============================================================
function buildDragaoGelo(palette = null) {
  const p = palette ?? {
    body: '#9fc4dd', belly: '#e8f4ff', spine: '#d9edff', horn: '#e8f4ff',
    wing: '#cfe6f5', eye: '#7ad8ff', crystal: null,
  };
  const g = new THREE.Group();
  const bodyM = matte(p.body);
  const bellyM = matte(p.belly, { roughness: 0.6 });
  const hornM = matte(p.horn, { roughness: 0.4 });
  const crystalM = p.crystal ?? ice();

  // corpo em 2 segmentos + 4 placas ventrais
  const chest = M(sphere(0.3, 12), bodyM, 0, 0.46, 0.14);
  chest.scale.set(1.15, 0.95, 1.25);
  g.add(chest);
  const rump = M(sphere(0.27, 12), bodyM, 0, 0.44, -0.26);
  rump.scale.set(1, 0.9, 1.2);
  g.add(rump);
  for (let i = 0; i < 4; i++) {
    g.add(M(box(0.3 - i * 0.03, 0.07, 0.1), bellyM, 0, 0.28, 0.3 - i * 0.16));
  }
  // 4 pernas (2 segmentos) + pés + 3 garras cada
  for (const [sx, sz] of [[-1, 0.26], [1, 0.26], [-1, -0.34], [1, -0.34]]) {
    const thigh = M(cyl(0.085, 0.11, 0.22, 8), bodyM, sx * 0.26, 0.32, sz);
    thigh.rotation.z = sx * 0.25;
    g.add(thigh);
    g.add(M(cyl(0.06, 0.08, 0.18, 7), bodyM, sx * 0.31, 0.16, sz));
    g.add(M(box(0.14, 0.07, 0.18), bodyM, sx * 0.31, 0.05, sz + 0.03));
    for (let c = 0; c < 3; c++) {
      const claw = M(cone(0.02, 0.08, 4), hornM, sx * 0.31 - 0.04 + c * 0.04, 0.04, sz + 0.14);
      claw.rotation.x = Math.PI / 2;
      g.add(claw);
    }
  }
  // pescoço segmentado (4) + cabeça com mandíbula
  let ny = 0.6, nz = 0.36;
  for (let i = 0; i < 4; i++) {
    g.add(M(sphere(0.13 - i * 0.012, 9), bodyM, 0, ny, nz));
    ny += 0.11; nz += 0.1;
  }
  g.add(M(box(0.24, 0.18, 0.4), bodyM, 0, ny + 0.02, nz + 0.12));
  g.add(M(box(0.18, 0.07, 0.3), bellyM, 0, ny - 0.07, nz + 0.16));
  // presas e dentes
  for (const sx of [-1, 1]) {
    const fang = M(cone(0.022, 0.09, 4), hornM, sx * 0.07, ny - 0.1, nz + 0.3);
    fang.rotation.x = Math.PI;
    g.add(fang);
  }
  for (let i = 0; i < 4; i++) {
    const tooth = M(cone(0.014, 0.05, 4), hornM, -0.05 + i * 0.034, ny - 0.06, nz + 0.31);
    tooth.rotation.x = Math.PI;
    g.add(tooth);
  }
  // 2 pares de chifres + arcadas + olhos + narinas
  for (const sx of [-1, 1]) {
    const h1 = M(cone(0.04, 0.28, 5), hornM, sx * 0.1, ny + 0.16, nz - 0.04);
    h1.rotation.x = -0.7; h1.rotation.z = sx * 0.25;
    g.add(h1);
    const h2 = M(cone(0.025, 0.16, 5), hornM, sx * 0.14, ny + 0.1, nz + 0.04);
    h2.rotation.x = -0.5; h2.rotation.z = sx * 0.45;
    g.add(h2);
    g.add(M(sphere(0.032, 7), glow(p.eye, 2), sx * 0.09, ny + 0.06, nz + 0.26));
    g.add(M(box(0.06, 0.02, 0.04), bodyM, sx * 0.09, ny + 0.11, nz + 0.26));
    g.add(M(sphere(0.012, 4), matte('#223'), sx * 0.04, ny + 0.02, nz + 0.32));
  }
  // fileira de 8 espinhos dorsais
  for (let i = 0; i < 8; i++) {
    const t = i / 7;
    const sp = M(cone(0.035 - t * 0.012, 0.14 - t * 0.04, 4), hornM, 0, 0.66 - t * 0.18 + (i < 2 ? 0.06 : 0), 0.3 - t * 0.85);
    sp.rotation.x = -0.2 + t * 0.5;
    g.add(sp);
  }
  // cauda segmentada (5) + leque de 3 lâminas
  let ty = 0.4, tz = -0.52;
  for (let i = 0; i < 5; i++) {
    g.add(M(sphere(0.11 - i * 0.016, 8), bodyM, 0, ty, tz));
    ty -= 0.045; tz -= 0.14;
  }
  for (let i = 0; i < 3; i++) {
    const fan = M(cone(0.03, 0.16, 4), crystalM, (i - 1) * 0.07, ty + 0.05, tz - 0.05);
    fan.rotation.x = Math.PI * 0.85;
    fan.rotation.z = (i - 1) * 0.5;
    g.add(fan);
  }
  // 6 cristais de gelo no dorso/ombros
  let seed = 1;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  for (const [cx, cy, cz, s] of [[-0.18, 0.62, 0.05, 1], [0.2, 0.6, -0.1, 0.8], [0, 0.68, -0.18, 1.2], [-0.15, 0.55, -0.3, 0.7], [0.12, 0.64, 0.18, 0.9], [-0.05, 0.6, 0.3, 0.6]]) {
    const c = M(new THREE.OctahedronGeometry(0.07 * s, 0), crystalM, cx, cy, cz);
    c.scale.y = 1.8;
    c.rotation.set(rnd() * 0.4, rnd() * Math.PI, rnd() * 0.4);
    g.add(c);
  }
  // 8 placas de escama laterais
  for (let i = 0; i < 4; i++) {
    for (const sx of [-1, 1]) {
      g.add(M(box(0.05, 0.09, 0.12), bellyM, sx * 0.29, 0.5, 0.2 - i * 0.16));
    }
  }
  // asas com 3 "dedos" ósseos cada
  const wings = bossWingPair(g, { color: p.wing, span: 1.15, y: 0.62, z: -0.05, spread: Math.PI / 2.2, lift: 0.4 });
  for (const w of wings) {
    for (let b = 0; b < 3; b++) {
      const bone = M(cyl(0.012, 0.018, 0.5 + b * 0.12, 5), bodyM, 0.22 + b * 0.16, 0.06 + b * 0.04, 0.001);
      bone.rotation.z = -0.5 - b * 0.32;
      w.add(bone);
    }
  }
  g.userData.wings = wings;

  g.userData.kind = 'boss';
  return g;
}

// ============================================================
// VORTHRAX — dragão do Vazio: núcleo, cristais orbitais, runas emissivas
// ============================================================
function buildVorthrax() {
  const voidCrystal = glow('#aa66ff', 1.5, { transparent: true, opacity: 0.92 });
  const g = buildDragaoGelo({
    body: '#241436', belly: '#3c2358', spine: '#aa66ff', horn: '#120a1e',
    wing: '#1a0f2a', eye: '#cc88ff', crystal: voidCrystal,
  });
  // núcleo do Vazio no peito (esfera pulsante + anel)
  g.add(M(sphere(0.085, 12), glow('#cc88ff', 2.6), 0, 0.5, 0.42));
  g.add(M(torus(0.13, 0.014, 14), metal('#7744cc'), 0, 0.5, 0.42));
  // 8 runas emissivas no corpo
  for (const [rx, ry, rz] of [[-0.2, 0.52, 0.22], [0.22, 0.5, 0.1], [-0.16, 0.45, -0.2], [0.18, 0.44, -0.3], [0, 0.62, 0.02], [-0.24, 0.48, -0.02], [0.12, 0.56, 0.3], [-0.08, 0.4, 0.34]]) {
    g.add(M(box(0.045, 0.045, 0.012), glow('#aa66ff', 2), rx, ry, rz));
  }
  // coroa de 4 chifres extras
  for (let i = 0; i < 4; i++) {
    const a = -0.6 + i * 0.4;
    const horn = M(cone(0.02, 0.14, 4), matte('#120a1e'), Math.sin(a) * 0.1, 1.18, 0.62 + Math.cos(a) * 0.04);
    horn.rotation.x = -0.9;
    horn.rotation.z = Math.sin(a) * 0.5;
    g.add(horn);
  }
  // lâmina caudal
  const blade = M(cone(0.07, 0.3, 4), glow('#aa66ff', 1.2), 0, 0.2, -1.28);
  blade.rotation.x = Math.PI * 0.9;
  g.add(blade);
  // 10 cristais do Vazio orbitando
  const chunks = g.userData.chunks ?? [];
  for (let i = 0; i < 10; i++) {
    const c = M(new THREE.OctahedronGeometry(0.05 + (i % 3) * 0.02, 0), voidCrystal, 0, 0.7, 0);
    c.userData.orbit = { r: 0.62 + (i % 4) * 0.09, speed: 0.5 + (i % 5) * 0.2, phase: (i / 10) * Math.PI * 2, y: 0.15 + (i % 4) * 0.18 };
    chunks.push(c);
    g.add(c);
  }
  g.userData.chunks = chunks;
  return g;
}

export const BOSS_BUILDERS = {
  rei_goblin: buildReiGoblin,
  bruxa_verde: buildBruxaVerde,
  lich: buildLich,
  dragao_gelo: buildDragaoGelo,
  vorthrax: buildVorthrax,
};

export function countMeshes(group) {
  let n = 0;
  group.traverse((o) => { if (o.isMesh) n++; });
  return n;
}
