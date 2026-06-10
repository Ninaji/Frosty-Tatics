// Mini motor de interpolação para animações 3D.

const active = new Set();

export function tween({ duration = 300, ease = easeOutQuad, onUpdate, onComplete }) {
  const t = { start: performance.now(), duration, ease, onUpdate, onComplete, done: false };
  active.add(t);
  return t;
}

export function updateTweens(now) {
  for (const t of active) {
    const p = Math.min(1, (now - t.start) / t.duration);
    t.onUpdate?.(t.ease(p), p);
    if (p >= 1) {
      t.done = true;
      active.delete(t);
      t.onComplete?.();
    }
  }
}

export function delay(ms) {
  return new Promise((res) => {
    tween({ duration: ms, onUpdate: () => {}, onComplete: res });
  });
}

export function animate({ duration, ease, onUpdate }) {
  return new Promise((res) => {
    tween({ duration, ease, onUpdate, onComplete: res });
  });
}

export const easeOutQuad = (t) => t * (2 - t);
export const easeInQuad = (t) => t * t;
export const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
export const easeOutBack = (t) => {
  const c1 = 1.70158, c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};
export const linear = (t) => t;
