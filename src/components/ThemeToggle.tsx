"use client";

import { useEffect, useState } from "react";

/**
 * Light is the default: dark applies only when explicitly chosen and stored.
 * The class is set before paint by the inline script in layout.tsx, so this
 * component only mirrors and updates that state — it never causes a flash.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    setReady(true);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* private mode — the choice just won't persist */
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={dark}
      title={dark ? "Light mode" : "Dark mode"}
      className={`group grid h-10 w-10 shrink-0 place-items-center rounded-full border border-charcoal/15 bg-white text-charcoal/75 shadow-sm transition-all duration-200 hover:border-violet/40 hover:text-violet dark:border-white/15 dark:bg-white/[0.06] dark:text-white/75 dark:hover:text-white ${className}`}
    >
      {/* both drawn; visibility swaps so there is no icon pop before hydration */}
      <svg
        className={`h-[18px] w-[18px] transition-transform duration-300 ${
          ready && dark ? "hidden" : "block group-hover:-rotate-12"
        }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
      <svg
        className={`h-[19px] w-[19px] transition-transform duration-300 ${
          ready && dark ? "block group-hover:rotate-45" : "hidden"
        }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.6v2.2M12 19.2v2.2M4.2 12H2M22 12h-2.2M6.4 6.4 4.9 4.9M19.1 19.1l-1.5-1.5M17.6 6.4l1.5-1.5M4.9 19.1l1.5-1.5" />
      </svg>
    </button>
  );
}
