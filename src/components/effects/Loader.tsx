"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import logoSrc from "@/assets/images/Final_Deepak.webp";

// A 3px ring cut out of a conic gradient — one moving element instead of the
// stack of rings, grids and shimmer the old screen used.
const RING_MASK =
  "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))";

/**
 * Everything inside animates with CSS, not Framer Motion. Framer writes its
 * `initial` state as an inline style during SSR and only animates after
 * hydration — which left the logo at opacity:0 for the whole time the loader
 * was on screen on a slow connection. CSS keyframes run at first paint.
 * Only the exit fade uses motion, and by then hydration has happened.
 */
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
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-white"
        >
          {/* brand glow, kept soft so it reads as light rather than decoration */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(98,0,234,0.10),transparent_58%),radial-gradient(circle_at_82%_78%,rgba(52,224,240,0.10),transparent_52%)]" />

          <div className="relative flex flex-col items-center px-6">
            <div className="relative grid h-56 w-56 place-items-center">
              {/* static track */}
              <span
                aria-hidden
                className="absolute h-52 w-52 rounded-full bg-charcoal/[0.06]"
                style={{ WebkitMaskImage: RING_MASK, maskImage: RING_MASK }}
              />
              {/* sweeping arc */}
              <span
                aria-hidden
                className="absolute h-52 w-52 animate-spin rounded-full [animation-duration:1.6s]"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, transparent 210deg, rgba(98,0,234,0.35) 300deg, #6200EA 348deg, #34E0F0 360deg)",
                  WebkitMaskImage: RING_MASK,
                  maskImage: RING_MASK,
                }}
              />

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoSrc.src}
                width={logoSrc.width}
                height={logoSrc.height}
                alt="Vegavat"
                className="relative h-24 w-auto max-w-[68vw] animate-fade-up sm:h-28"
              />
            </div>

            <div className="mt-6 h-[3px] w-64 max-w-[70vw] overflow-hidden rounded-full bg-charcoal/[0.08]">
              <span className="block h-full w-1/2 animate-loader-sweep rounded-full bg-gradient-to-r from-violet to-[#34E0F0]" />
            </div>

            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.32em] text-charcoal/35">
              Strategy · Design · Engineering · Launch
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
