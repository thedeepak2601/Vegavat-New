"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const HINTS = ["services", "products", "industries", "blog posts", "SaaS", "CRM", "HRMS"];

export default function SearchTrigger({ onClick }: { onClick: () => void }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % HINTS.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <button
      onClick={onClick}
      aria-label="Search"
      className="group relative flex w-64 items-center gap-2.5 overflow-hidden rounded-full border border-charcoal/15 bg-white px-4 py-2.5 text-sm text-charcoal/55 shadow-sm transition-all duration-300 hover:border-violet/50 hover:text-charcoal hover:shadow-[0_0_0_3px_rgba(98,0,234,0.08)]"
    >
      {/* shine sweep on hover */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-violet/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

      <svg className="h-4 w-4 shrink-0 text-violet transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m20 20-3-3" strokeLinecap="round" /></svg>

      <span className="relative flex flex-1 items-center gap-1 whitespace-nowrap">
        Search
        <span className="relative inline-block h-5 min-w-[90px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={i}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 font-semibold text-violet/80"
            >
              {HINTS[i]}
            </motion.span>
          </AnimatePresence>
        </span>
      </span>

      <kbd className="ml-auto shrink-0 rounded border border-charcoal/15 bg-charcoal-50/60 px-1.5 py-0.5 text-[10px] font-semibold text-charcoal/40 transition-colors group-hover:border-violet/30 group-hover:text-violet">⌘K</kbd>
    </button>
  );
}
