"use client";

import { useEffect, useState } from "react";

type Item = { id: string; title: string };

export default function TableOfContents({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-110px 0px -70% 0px", threshold: 0 }
    );
    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  if (items.length < 2) return null;

  return (
    <nav aria-label="Table of contents" className="rounded-2xl border border-charcoal/[0.07] bg-white p-5 shadow-card">
      <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal/75">On this page</h3>
      <ul className="mt-3 space-y-1">
        {items.map((it) => {
          const isActive = it.id === active;
          return (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                className={`flex items-start gap-2.5 rounded-xl px-3 py-2 text-sm transition-colors ${
                  isActive ? "bg-violet/10 font-semibold text-violet" : "text-charcoal/60 hover:bg-charcoal-50 hover:text-charcoal"
                }`}
              >
                <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${isActive ? "bg-violet" : "bg-charcoal/25"}`} />
                {it.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
