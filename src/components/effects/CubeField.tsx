"use client";

import { useEffect, useRef } from "react";

/**
 * Tile field that drifts on its own and lights up around the cursor.
 *
 * Two identical grids are stacked: a dim base, and a brighter copy masked by
 * a radial gradient pinned to the pointer, so moving the mouse reveals the
 * tiles it passes over. The mask is driven by CSS custom properties written
 * inside a rAF, which keeps pointermove off the layout path entirely — no
 * React state, so no re-render per mouse event.
 */

const COLS = 26;
const ROWS = 9;
const TOTAL = COLS * ROWS;

/**
 * Deterministic per-tile value. Math.random() would differ between the
 * server and client renders and trip a hydration mismatch.
 */
function noise(i: number) {
  const x = Math.sin(i * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

/** Dim base tints, and the brighter versions the cursor reveals. */
const TINTS = [
  { base: "rgba(98,0,234,0.11)", lit: "rgba(98,0,234,0.75)" },    // violet
  { base: "rgba(52,224,240,0.07)", lit: "rgba(52,224,240,0.50)" }, // cyan
  { base: "rgba(138,69,255,0.09)", lit: "rgba(138,69,255,0.60)" }, // violet-400
  { base: "rgba(240,151,43,0.05)", lit: "rgba(240,151,43,0.38)" }, // warm accent
];

/** Which tiles are tinted at all — most stay empty so the field reads sparse. */
const tiles = Array.from({ length: TOTAL }, (_, i) => {
  const n = noise(i);
  if (n > 0.24) return null;
  const tint = TINTS[Math.floor(noise(i + 991) * TINTS.length) % TINTS.length];
  return { tint, delay: `${(noise(i + 17) * 8).toFixed(2)}s` };
});

export default function CubeField() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Coarse pointers have no hover, so the reveal layer would never show.
    if (!window.matchMedia?.("(hover: hover)").matches) return;

    let raf = 0;
    let x = 0;
    let y = 0;
    let inside = false;

    const paint = () => {
      raf = 0;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
      el.style.setProperty("--lit", inside ? "1" : "0");
    };

    // Listened on window, not on a parent: every ancestor here is
    // `pointer-events-none`, so pointermove never reaches them. Coordinates
    // are made relative to the field and the reveal only lights while the
    // pointer is actually inside its box.
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      x = e.clientX - r.left;
      y = e.clientY - r.top;
      inside = x >= 0 && y >= 0 && x <= r.width && y <= r.height;
      if (!raf) raf = requestAnimationFrame(paint);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const grid = (lit: boolean) => (
    <div
      className="grid h-full w-full"
      style={{
        gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${ROWS}, minmax(0, 1fr))`,
      }}
    >
      {tiles.map((t, i) =>
        t ? (
          <span
            key={i}
            className={lit ? undefined : "animate-cube-drift"}
            style={{
              backgroundColor: lit ? t.tint.lit : t.tint.base,
              animationDelay: lit ? undefined : t.delay,
            }}
          />
        ) : (
          <span key={i} />
        )
      )}
    </div>
  );

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden [--lit:0] [--mx:50%] [--my:50%]"
    >
      {grid(false)}

      {/* Brighter copy, shown only through a circle at the pointer. */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: "var(--lit)",
          WebkitMaskImage:
            "radial-gradient(170px circle at var(--mx) var(--my), #000 0%, rgba(0,0,0,0.55) 45%, transparent 72%)",
          maskImage:
            "radial-gradient(170px circle at var(--mx) var(--my), #000 0%, rgba(0,0,0,0.55) 45%, transparent 72%)",
        }}
      >
        {grid(true)}
      </div>
    </div>
  );
}
