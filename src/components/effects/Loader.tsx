"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LogoMark } from "@/components/Logo";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide once the window has loaded (or after a short max delay)
    const done = () => setLoading(false);
    const t = setTimeout(done, 1400);
    if (document.readyState === "complete") done();
    else window.addEventListener("load", done, { once: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("load", done);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="animated-gradient fixed inset-0 z-[100] grid place-items-center"
        >
          <div className="relative flex flex-col items-center">
            <div className="absolute h-28 w-28 animate-pulse-glow rounded-full bg-violet/40 blur-2xl" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <LogoMark className="h-16 w-auto brightness-0 invert" />
            </motion.div>
            <div className="relative mt-8 h-1 w-40 overflow-hidden rounded-full bg-white/15">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-300 to-[#34E0F0]"
              />
            </div>
            <p className="relative mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              Vegavat
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
