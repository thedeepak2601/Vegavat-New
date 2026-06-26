"use client";

import { useRef, useState, type ReactNode } from "react";

export default function TiltCard({
  children,
  className = "",
  max = 10,
  glow = true,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  glow?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ rx: 0, ry: 0, gx: 50, gy: 50, active: false });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setT({
      ry: (px - 0.5) * max * 2,
      rx: (0.5 - py) * max * 2,
      gx: px * 100,
      gy: py * 100,
      active: true,
    });
  };

  const reset = () => setT((s) => ({ ...s, rx: 0, ry: 0, active: false }));

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`group/tilt h-full [perspective:1000px] ${className}`}
    >
      <div
        className="relative h-full transition-transform duration-200 ease-out [transform-style:preserve-3d]"
        style={{ transform: `rotateX(${t.rx}deg) rotateY(${t.ry}deg)` }}
      >
        {glow && (
          <div
            className="pointer-events-none absolute inset-0 z-20 rounded-2xl transition-opacity duration-300"
            style={{
              opacity: t.active ? 1 : 0,
              background: `radial-gradient(380px circle at ${t.gx}% ${t.gy}%, rgba(98,0,234,0.16), transparent 60%)`,
            }}
          />
        )}
        {children}
      </div>
    </div>
  );
}
