import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          DEFAULT: "#6200EA",
          50: "#F3EBFF",
          100: "#E4D3FF",
          200: "#C9A6FF",
          300: "#A877FF",
          400: "#8A45FF",
          500: "#6200EA",
          600: "#5300C4",
          700: "#43009E",
          800: "#330078",
          900: "#240054",
        },
        charcoal: {
          DEFAULT: "#121212",
          50: "#f5f5f5",
          800: "#1c1c1c",
          900: "#121212",
          950: "#0a0a0a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(98, 0, 234, 0.18)",
        card: "0 4px 24px -8px rgba(18, 18, 18, 0.12)",
        glow: "0 0 40px -10px rgba(98, 0, 234, 0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "menu-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "orb-1": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(40px,-30px) scale(1.1)" },
          "66%": { transform: "translate(-30px,20px) scale(0.95)" },
        },
        "orb-2": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(-50px,30px) scale(1.05)" },
          "66%": { transform: "translate(30px,-20px) scale(1.1)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "grid-pan": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "46px 46px" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "spin-reverse": {
          to: { transform: "rotate(-360deg)" },
        },
        "role-fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scroll-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(200%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        "loader-sweep": {
          "0%": { transform: "translateX(-110%)" },
          "100%": { transform: "translateX(210%)" },
        },
        "glow-pulse": {
          "0%, 100%": { filter: "drop-shadow(0 0 0 rgba(98,0,234,0))" },
          "50%": { filter: "drop-shadow(0 0 8px rgba(98,0,234,0.45))" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "menu-in": "menu-in 0.18s ease-out forwards",
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        float: "float 6s ease-in-out infinite",
        "orb-1": "orb-1 18s ease-in-out infinite",
        "orb-2": "orb-2 22s ease-in-out infinite",
        "gradient-shift": "gradient-shift 12s ease infinite",
        "grid-pan": "grid-pan 6s linear infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "spin-slow": "spin-slow 14s linear infinite",
        orbit: "spin-slow 45s linear infinite",
        "orbit-reverse": "spin-reverse 45s linear infinite",
        "role-fade-in": "role-fade-in 0.4s ease-out",
        "scroll-down": "scroll-down 1.5s ease-in-out infinite",
        blink: "blink 1.2s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "loader-sweep": "loader-sweep 1.25s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2.4s ease-in-out infinite",
      },
      backgroundImage: {
        "grid-violet":
          "linear-gradient(rgba(98,0,234,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(98,0,234,0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
