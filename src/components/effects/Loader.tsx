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
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#07060b]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(98,0,234,0.34),transparent_30%),radial-gradient(circle_at_78%_20%,rgba(52,224,240,0.13),transparent_22%),linear-gradient(135deg,#09070f,#130320_48%,#07060b)]" />
          <div className="pointer-events-none absolute inset-0 bg-grid-violet bg-[size:46px_46px] opacity-25" />
          <motion.div
            aria-hidden
            animate={{ opacity: [0.25, 0.75, 0.25], scale: [0.95, 1.04, 0.95] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute h-[34rem] w-[34rem] rounded-full border border-[#34E0F0]/15 shadow-[0_0_140px_rgba(98,0,234,0.35)]"
          />
          <div className="pointer-events-none absolute h-[22rem] w-[22rem] rounded-full border border-white/10" />

          <div className="relative flex w-full max-w-xl flex-col items-center px-6 text-center">
            <motion.div
              aria-hidden
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: [0, 1, 1], opacity: [0, 1, 0.55] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 h-px w-[min(34rem,86vw)] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#34E0F0] to-transparent"
            />

            <div className="relative grid h-60 w-full place-items-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute h-56 w-56 rounded-full border border-dashed border-violet-300/20"
              />
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.45, 0.85, 0.45] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute h-44 w-44 rounded-full border border-[#34E0F0]/25"
              />
              <div
                className="relative grid min-h-36 w-[min(26rem,86vw)] place-items-center rounded-[2rem] border border-white/15 bg-white/[0.07] px-8 py-7 shadow-[0_30px_120px_-45px_rgba(52,224,240,0.95)] backdrop-blur-2xl"
              >
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/12 via-transparent to-violet/20" />
                <motion.div
                  aria-hidden
                  animate={{ x: ["-120%", "120%"] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
                  className="absolute inset-y-0 w-24 -skew-x-12 bg-gradient-to-r from-transparent via-white/12 to-transparent"
                />
                <LogoMark className="relative h-24 w-auto max-w-full brightness-0 invert sm:h-28" />
              </div>
            </div>

            <div className="relative -mt-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.55em] text-[#34E0F0]/85">
                Initializing Digital Reality
              </p>
              <p className="mt-3 text-sm font-medium text-white/60">
                Strategy. Design. Engineering. Launch.
              </p>
            </div>

            <div className="relative mt-7 w-80 max-w-[82vw]">
              <div className="relative h-1 overflow-hidden rounded-full bg-white/10 ring-1 ring-white/10">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: ["-100%", "0%", "100%"] }}
                  transition={{ duration: 1.45, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-violet-300 via-violet to-[#34E0F0] shadow-[0_0_22px_rgba(52,224,240,0.7)]"
                />
              </div>
              <div className="mt-4 flex justify-center gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    animate={{ opacity: [0.25, 1, 0.25] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.18 }}
                    className="h-1.5 w-1.5 rounded-full bg-[#34E0F0]"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
