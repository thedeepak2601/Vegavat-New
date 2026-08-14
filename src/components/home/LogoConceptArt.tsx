/**
 * Decorative pieces for the logo-concept panel — rocket, planet arcs, a
 * constellation and the value icons. All SVG so they stay crisp, weigh little
 * and take their colours from the brand palette rather than stock artwork.
 */

export function Rocket({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 260" className={className} aria-hidden>
      <defs>
        <linearGradient id="lcTrail" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34E0F0" stopOpacity="0.9" />
          <stop offset="55%" stopColor="#8A45FF" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#6200EA" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lcBody" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#8899B8" />
          <stop offset="45%" stopColor="#E8EEF8" />
          <stop offset="100%" stopColor="#9AA8C4" />
        </linearGradient>
        <linearGradient id="lcFlame" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="45%" stopColor="#34E0F0" />
          <stop offset="100%" stopColor="#8A45FF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* exhaust trails sweeping down-left */}
      <g fill="none" stroke="url(#lcTrail)" strokeLinecap="round">
        <path d="M150 118C112 150 66 186 6 232" strokeWidth="13" opacity="0.55" />
        <path d="M162 132C128 166 92 198 34 244" strokeWidth="7" opacity="0.75" />
        <path d="M140 108C108 132 74 158 22 198" strokeWidth="4" opacity="0.5" />
      </g>

      {/* rocket, nose to the upper right */}
      <g transform="rotate(45 170 96)">
        <path d="M170 32c17 15 27 37 27 60v34h-54V92c0-23 10-45 27-60z" fill="url(#lcBody)" />
        <path d="M143 126h54v10a10 10 0 0 1-10 10h-34a10 10 0 0 1-10-10z" fill="#6F7C99" />
        <circle cx="170" cy="86" r="13" fill="#0B0A18" />
        <circle cx="170" cy="86" r="9" fill="#34E0F0" opacity="0.9" />
        <path d="M143 100 122 128c-3 4 0 10 5 9l16-4z" fill="#8A45FF" />
        <path d="M197 100l21 28c3 4 0 10-5 9l-16-4z" fill="#8A45FF" />
        <path d="M158 146h24l-6 22c-2 6-10 6-12 0z" fill="url(#lcFlame)" />
      </g>
    </svg>
  );
}

/** A planet edge, used bleeding out of a corner. */
export function PlanetArc({
  className = "",
  tone = "violet",
}: {
  className?: string;
  tone?: "violet" | "cyan";
}) {
  const c = tone === "cyan" ? "#34E0F0" : "#8A45FF";
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden>
      <defs>
        <radialGradient id={`lcPlanet-${tone}`} cx="30%" cy="25%" r="80%">
          <stop offset="0%" stopColor={c} stopOpacity="0.45" />
          <stop offset="55%" stopColor={c} stopOpacity="0.14" />
          <stop offset="100%" stopColor={c} stopOpacity="0.02" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="190" fill={`url(#lcPlanet-${tone})`} />
      <circle cx="200" cy="200" r="190" fill="none" stroke={c} strokeOpacity="0.35" strokeWidth="2" />
      <circle cx="200" cy="200" r="150" fill="none" stroke={c} strokeOpacity="0.16" strokeWidth="1.5" />
    </svg>
  );
}

/** Linked nodes, the "network" motif from the reference. */
export function Constellation({ className = "" }: { className?: string }) {
  const pts: [number, number][] = [
    [10, 120], [58, 78], [104, 116], [150, 64], [196, 108], [76, 156], [140, 152],
  ];
  return (
    <svg viewBox="0 0 220 200" className={className} aria-hidden>
      <g stroke="#8A45FF" strokeOpacity="0.35" strokeWidth="1.2">
        <path d="M10 120 58 78 104 116 150 64 196 108" fill="none" />
        <path d="M58 78 76 156 140 152 104 116" fill="none" />
        <path d="M140 152 196 108" fill="none" />
      </g>
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 3.5 : 2.5} fill={i % 2 ? "#34E0F0" : "#C9A6FF"} />
      ))}
    </svg>
  );
}

/* ---------- value icons, drawn to match the reference ---------- */

export function ChartIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 20h16" />
      <rect x="5" y="12" width="3.4" height="6" rx="1" fill="currentColor" stroke="none" opacity="0.85" />
      <rect x="10.3" y="9" width="3.4" height="9" rx="1" fill="currentColor" stroke="none" opacity="0.85" />
      <rect x="15.6" y="5.5" width="3.4" height="12.5" rx="1" fill="currentColor" stroke="none" opacity="0.85" />
      <path d="M5 8.5 10.5 4.5 14.5 7 20 2.6" />
      <path d="M16.4 2.4H20v3.6" />
    </svg>
  );
}

export function BulbIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 2a7 7 0 0 0-4 12.7V16h8v-1.3A7 7 0 0 0 12 2z" />
      <path d="M12 6.5v5" opacity="0.6" />
    </svg>
  );
}

export function ShieldCheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2.5 4.5 5.8v5.4c0 4.6 3.2 8.9 7.5 10.3 4.3-1.4 7.5-5.7 7.5-10.3V5.8z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" />
    </svg>
  );
}

export function GlobeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M2.8 12h18.4" />
      <path d="M12 2.8c2.5 2.6 3.9 5.9 3.9 9.2s-1.4 6.6-3.9 9.2c-2.5-2.6-3.9-5.9-3.9-9.2S9.5 5.4 12 2.8z" />
      <path d="M4.8 6.6c2 1.2 4.5 1.9 7.2 1.9s5.2-.7 7.2-1.9" opacity="0.7" />
      <path d="M4.8 17.4c2-1.2 4.5-1.9 7.2-1.9s5.2.7 7.2 1.9" opacity="0.7" />
    </svg>
  );
}

export function SparkleIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2.5l1.9 5.6 5.6 1.9-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.9z" />
      <path d="M19 15l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9z" opacity="0.7" />
    </svg>
  );
}
