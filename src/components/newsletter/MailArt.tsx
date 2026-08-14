/**
 * Newsletter illustration — drawn as SVG rather than shipped as an image so it
 * stays crisp at any size, weighs almost nothing, and uses the brand palette
 * (violet + #34E0F0) instead of stock artwork colours.
 */
export default function MailArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 360"
      className={className}
      role="img"
      aria-label="An open envelope with a megaphone announcement"
    >
      <defs>
        <linearGradient id="nlFront" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8A45FF" />
          <stop offset="100%" stopColor="#4300A0" />
        </linearGradient>
        <linearGradient id="nlBack" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C9A6FF" />
          <stop offset="100%" stopColor="#A877FF" />
        </linearGradient>
        <linearGradient id="nlHorn" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6200EA" />
          <stop offset="100%" stopColor="#34E0F0" />
        </linearGradient>
        <filter id="nlShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="14" stdDeviation="14" floodColor="#3B0080" floodOpacity="0.22" />
        </filter>
      </defs>

      {/* clouds */}
      <g fill="#fff" opacity="0.9">
        <ellipse cx="66" cy="150" rx="30" ry="16" />
        <ellipse cx="88" cy="142" rx="20" ry="14" />
        <ellipse cx="352" cy="262" rx="34" ry="17" />
        <ellipse cx="330" cy="254" rx="22" ry="14" />
      </g>

      {/* sparkles */}
      <g fill="#34E0F0">
        <path d="M330 96l5 11 11 5-11 5-5 11-5-11-11-5 11-5z" />
        <circle cx="86" cy="238" r="5" />
      </g>
      <g fill="#8A45FF">
        <path d="M96 92l4 9 9 4-9 4-4 9-4-9-9-4 9-4z" />
        <circle cx="356" cy="150" r="6" />
        <circle cx="140" cy="60" r="4" />
      </g>

      <g filter="url(#nlShadow)">
        {/* envelope back */}
        <path
          d="M70 170 L210 74 L350 170 L350 300 Q350 312 338 312 L82 312 Q70 312 70 300 Z"
          fill="url(#nlBack)"
        />

        {/* letter */}
        <rect x="118" y="96" width="184" height="150" rx="12" fill="#fff" />
        <g stroke="#C9A6FF" strokeWidth="7" strokeLinecap="round">
          <path d="M142 210h96" />
          <path d="M142 230h60" />
        </g>

        {/* megaphone */}
        <g transform="rotate(-18 210 160)">
          <rect x="150" y="146" width="34" height="30" rx="8" fill="#4300A0" />
          <path d="M184 128 L262 108 Q272 106 272 116 L272 206 Q272 216 262 214 L184 194 Z" fill="url(#nlHorn)" />
          <path d="M198 138 L198 184" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity="0.35" />
          <g stroke="#34E0F0" strokeWidth="6" strokeLinecap="round" opacity="0.85">
            <path d="M288 138q14 22 0 44" />
            <path d="M306 124q24 36 0 72" />
          </g>
        </g>

        {/* envelope front, notched so the letter reads as tucked inside */}
        <path
          d="M70 190 L210 292 L350 190 L350 300 Q350 312 338 312 L82 312 Q70 312 70 300 Z"
          fill="url(#nlFront)"
        />
      </g>
    </svg>
  );
}
