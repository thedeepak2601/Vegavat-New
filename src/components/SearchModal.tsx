"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { SERVICES, PRODUCTS, INDUSTRIES } from "@/lib/content";
import { POSTS } from "@/lib/blog";

type Item = { title: string; sub?: string; href: string; group: string; icon?: string };

const RECENT_KEY = "vegavat-recent-search";

const STATIC: Item[] = [
  { title: "Process", sub: "Our delivery methodology", href: "/process", group: "Pages", icon: "🧭" },
  { title: "Blog", sub: "Insights & resources", href: "/blog", group: "Pages", icon: "📝" },
  { title: "Contact", sub: "Get in touch", href: "/contact", group: "Pages", icon: "✉️" },
];

function buildIndex(): Item[] {
  return [
    ...SERVICES.map((s) => ({ title: s.title, sub: s.short, href: `/services/${s.slug}`, group: "Services", icon: s.icon })),
    ...PRODUCTS.map((p) => ({ title: p.name, sub: p.short, href: `/products/${p.id}`, group: "Products", icon: p.icon })),
    ...INDUSTRIES.map((i) => ({ title: i.name, sub: i.desc, href: `/industries/${i.id}`, group: "Industries", icon: i.icon })),
    ...POSTS.map((b) => ({ title: b.title, sub: b.category, href: `/blog/${b.slug}`, group: "Blog", icon: "📰" })),
    ...STATIC,
  ];
}

/** Highlights the matched substring of `text`. */
function highlight(text: string, term: string) {
  if (!term) return text;
  const i = text.toLowerCase().indexOf(term);
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      <mark className="rounded bg-violet/15 px-0.5 text-violet">{text.slice(i, i + term.length)}</mark>
      {text.slice(i + term.length)}
    </>
  );
}

export default function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const [recent, setRecent] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const index = useMemo(buildIndex, []);

  useEffect(() => {
    if (open) {
      setQ("");
      setActive(0);
      try {
        const r = JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
        if (Array.isArray(r)) setRecent(r.slice(0, 6));
      } catch { /* ignore */ }
      const t = setTimeout(() => inputRef.current?.focus(), 40);
      document.body.style.overflow = "hidden";
      return () => { clearTimeout(t); document.body.style.overflow = ""; };
    }
    document.body.style.overflow = "";
  }, [open]);

  const term = q.trim().toLowerCase();

  const results = useMemo(() => {
    if (!term) {
      return [
        ...index.filter((i) => i.group === "Services").slice(0, 4),
        ...index.filter((i) => i.group === "Products").slice(0, 4),
      ];
    }
    return index
      .filter((it) =>
        it.title.toLowerCase().includes(term) ||
        it.sub?.toLowerCase().includes(term) ||
        it.group.toLowerCase().includes(term)
      )
      .slice(0, 30);
  }, [term, index]);

  useEffect(() => { setActive(0); }, [term]);

  const saveRecent = (label: string) => {
    if (!label.trim()) return;
    try {
      const next = [label, ...recent.filter((r) => r !== label)].slice(0, 6);
      localStorage.setItem(RECENT_KEY, JSON.stringify(next));
    } catch { /* ignore */ }
  };

  const go = (href: string, label?: string) => {
    if (q.trim()) saveRecent(q.trim());
    else if (label) saveRecent(label);
    onClose();
    router.push(href);
  };

  const clearRecent = () => {
    setRecent([]);
    try { localStorage.removeItem(RECENT_KEY); } catch { /* ignore */ }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, results.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    else if (e.key === "Enter" && results[active]) { e.preventDefault(); go(results[active].href, results[active].title); }
  };

  if (!open) return null;

  const groups: { name: string; items: Item[] }[] = [];
  results.forEach((it) => {
    let g = groups.find((x) => x.name === it.group);
    if (!g) { g = { name: it.group, items: [] }; groups.push(g); }
    g.items.push(it);
  });
  let flatIdx = -1;

  return (
    // click anywhere outside the card closes it
    <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-[12vh]" onClick={onClose}>
      <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm" />

      <div
        className="animate-menu-in relative w-full max-w-xl overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-soft"
        onClick={(e) => e.stopPropagation()}
      >
        {/* input */}
        <div className="flex items-center gap-3 border-b border-charcoal/[0.07] px-4">
          <svg className="h-5 w-5 shrink-0 text-charcoal/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m20 20-3-3" strokeLinecap="round" /></svg>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Search services, products, industries, blog…"
            className="w-full bg-transparent py-4 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none"
          />
          {q && (
            <button onClick={() => { setQ(""); inputRef.current?.focus(); }} aria-label="Clear" className="shrink-0 text-charcoal/40 transition-colors hover:text-charcoal">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
            </button>
          )}
          <button onClick={onClose} className="shrink-0 rounded border border-charcoal/15 px-1.5 py-0.5 text-xs font-semibold text-charcoal/40 transition-colors hover:text-charcoal">Esc</button>
        </div>

        {/* recent searches (only when no query) */}
        {!term && recent.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 border-b border-charcoal/[0.07] px-4 py-3">
            <span className="text-xs font-bold uppercase tracking-wider text-charcoal/40">Recent</span>
            {recent.map((r) => (
              <button key={r} onClick={() => { setQ(r); inputRef.current?.focus(); }} className="rounded-full border border-charcoal/10 bg-charcoal-50/60 px-3 py-1 text-xs font-medium text-charcoal/75 transition-colors hover:border-violet/40 hover:text-violet">
                {r}
              </button>
            ))}
            <button onClick={clearRecent} className="ml-auto text-xs font-medium text-charcoal/40 transition-colors hover:text-violet">Clear</button>
          </div>
        )}

        {/* results */}
        <div className="max-h-[52vh] overflow-y-auto p-2">
          {results.length === 0 ? (
            <div className="px-3 py-10 text-center">
              <p className="text-sm font-semibold text-charcoal">No results for &ldquo;{q}&rdquo;</p>
              <p className="mt-1 text-xs text-charcoal/60">Try a service, product, industry or topic, or <button onClick={() => go("/contact")} className="font-semibold text-violet hover:underline">contact us</button>.</p>
            </div>
          ) : (
            <>
              {!term && <p className="px-3 pb-1 pt-2 text-xs font-bold uppercase tracking-wider text-charcoal/40">Suggestions</p>}
              {groups.map((g) => (
                <div key={g.name} className="mb-1">
                  <p className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-charcoal/40">{g.name}</p>
                  {g.items.map((it) => {
                    flatIdx += 1;
                    const isActive = flatIdx === active;
                    return (
                      <button
                        key={it.href}
                        onClick={() => go(it.href, it.title)}
                        onMouseEnter={() => setActive(results.indexOf(it))}
                        className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${isActive ? "bg-violet/10" : "hover:bg-violet/5"}`}
                      >
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-violet/10 text-base text-violet">{it.icon ?? "•"}</span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-semibold text-charcoal">{highlight(it.title, term)}</span>
                          {it.sub && <span className="block truncate text-xs text-charcoal/60">{it.sub}</span>}
                        </span>
                        <svg className={`h-4 w-4 shrink-0 transition-opacity ${isActive ? "text-violet opacity-100" : "opacity-0"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </button>
                    );
                  })}
                </div>
              ))}
            </>
          )}
        </div>

        {/* footer hints */}
        <div className="flex items-center justify-between border-t border-charcoal/[0.07] bg-charcoal-50/60 px-4 py-2.5 text-xs text-charcoal/60">
          <span className="flex items-center gap-3">
            <span className="flex items-center gap-1"><kbd className="rounded border border-charcoal/15 bg-white px-1">↑</kbd><kbd className="rounded border border-charcoal/15 bg-white px-1">↓</kbd> navigate</span>
            <span className="flex items-center gap-1"><kbd className="rounded border border-charcoal/15 bg-white px-1.5">↵</kbd> open</span>
          </span>
          <span className="flex items-center gap-1.5">
            {results.length > 0 && <span>{results.length} result{results.length > 1 ? "s" : ""}</span>}
          </span>
        </div>
      </div>
    </div>
  );
}
