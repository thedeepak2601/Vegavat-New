"use client";

import { useState } from "react";

export type QA = { q: string; a: string };

export default function FAQ({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-charcoal/[0.08] rounded-2xl border border-charcoal/[0.08] bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 p-6 text-left"
            >
              <span className="text-base font-semibold text-charcoal">{item.q}</span>
              <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all ${isOpen ? "rotate-45 border-violet bg-violet text-white" : "border-charcoal/20 text-charcoal/60"}`}>
                <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
              </span>
            </button>
            <div className={`grid overflow-hidden px-6 transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <p className="text-sm leading-relaxed text-charcoal/65">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
