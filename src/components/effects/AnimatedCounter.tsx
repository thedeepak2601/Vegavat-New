"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// A value only counts up if it actually starts with a digit. "Free", "All"
// and similar labels are rendered verbatim — counting them from zero produced
// "0Free".
const countable = (value: string) => /^\d/.test(value.trim());

// Splits a value like "1500+" or "3.2x" into number + suffix.
function parse(value: string) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { num: 0, decimals: 0, suffix: value };
  return {
    num: Number(match[1]),
    decimals: match[1].includes(".") ? match[1].split(".")[1].length : 0,
    suffix: match[2],
  };
}

export default function AnimatedCounter({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const { num, decimals, suffix } = parse(value);
  const animate = countable(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !animate) return;
    const obj = { n: 0 };
    const tween = gsap.to(obj, {
      n: num,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
      onUpdate: () => {
        el.textContent = obj.n.toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }) + suffix;
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [num, decimals, suffix, animate]);

  return (
    <span ref={ref} className={className}>
      {animate ? `0${suffix}` : value}
    </span>
  );
}
