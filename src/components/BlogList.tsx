"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import type { Post } from "@/lib/blog";

const PAGE_SIZE = 6;

export default function BlogList({ posts }: { posts: Post[] }) {
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);
  const topRef = useRef<HTMLDivElement>(null);

  // unique categories with post counts
  const counts = new Map<string, number>();
  posts.forEach((p) => counts.set(p.category, (counts.get(p.category) ?? 0) + 1));
  const categories = Array.from(counts.entries()).sort((a, b) => a[0].localeCompare(b[0]));

  const filtered = category === "All" ? posts : posts.filter((p) => p.category === category);
  const featured = filtered[0];
  const rest = filtered.slice(1);

  const totalPages = Math.max(1, Math.ceil(rest.length / PAGE_SIZE));
  const pageItems = rest.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const pageNumbers = Array.from(new Set([1, totalPages, page - 1, page, page + 1]))
    .filter((n) => n >= 1 && n <= totalPages)
    .sort((a, b) => a - b);

  const scrollTop = () => topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  const changeCategory = (c: string) => { setCategory(c); setPage(1); scrollTop(); };
  const goTo = (p: number) => { setPage(Math.min(Math.max(1, p), totalPages)); scrollTop(); };

  const isGif = (src: string) => src.endsWith(".gif");

  return (
    <div ref={topRef} className="scroll-mt-28">
      {/* filter bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-charcoal/60">
          <span className="font-semibold text-charcoal">{filtered.length}</span> article{filtered.length === 1 ? "" : "s"}
          {category !== "All" && <> in <span className="font-semibold text-violet">{category}</span></>}
        </p>
        <div className="relative w-full sm:w-64">
          <select
            value={category}
            onChange={(e) => changeCategory(e.target.value)}
            aria-label="Filter by category"
            className="w-full appearance-none rounded-xl border border-charcoal/15 bg-white px-4 py-2.5 pr-9 text-sm font-medium text-charcoal/75 transition-colors focus:border-violet focus:outline-none focus:ring-2 focus:ring-violet/20"
          >
            <option value="All">All Posts ({posts.length})</option>
            {categories.map(([name, count]) => (
              <option key={name} value={name}>{name} ({count})</option>
            ))}
          </select>
          <svg className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-charcoal/60">No posts in this category yet.</p>
      ) : (
        <>
          {/* featured (page 1 only) */}
          {featured && page === 1 && (
            <Reveal className="mt-8">
              <Link href={`/blog/${featured.slug}`} className="group grid overflow-hidden rounded-3xl border border-charcoal/[0.07] bg-white shadow-card transition-shadow hover:shadow-soft lg:grid-cols-2">
                <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                  <Image src={featured.image} alt={featured.title} fill sizes="(max-width:1024px) 100vw, 600px" className="object-cover transition-transform duration-500 group-hover:scale-105" unoptimized={isGif(featured.image)} />
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <span className="eyebrow w-fit">{featured.category}</span>
                  <h2 className="mt-4 text-2xl font-extrabold leading-tight text-charcoal sm:text-3xl">{featured.title}</h2>
                  <p className="mt-3 text-charcoal/60">{featured.excerpt}</p>
                  <div className="mt-5 flex items-center gap-3 text-sm text-charcoal/60">
                    <span className="font-semibold text-charcoal/75">{featured.author}</span>
                    <span>·</span><span>{featured.date}</span>
                    <span>·</span><span>{featured.readTime}</span>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1 font-semibold text-violet group-hover:translate-x-1">Read article →</span>
                </div>
              </Link>
            </Reveal>
          )}

          {/* grid */}
          {pageItems.length > 0 && (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pageItems.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 0.07}>
                  <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-charcoal/[0.07] bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={p.image} alt={p.title} fill sizes="(max-width:768px) 100vw, 380px" className="object-cover transition-transform duration-500 group-hover:scale-105" unoptimized={isGif(p.image)} />
                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet backdrop-blur">{p.category}</span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-lg font-bold leading-snug text-charcoal">{p.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/60 line-clamp-3">{p.excerpt}</p>
                      <div className="mt-4 flex items-center gap-2 text-xs text-charcoal/60">
                        <span>{p.date}</span><span>·</span><span>{p.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}

          {/* pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <button onClick={() => goTo(page - 1)} disabled={page === 1} aria-label="Previous page" className="grid h-10 w-10 place-items-center rounded-xl border border-charcoal/15 text-charcoal/75 transition-colors hover:border-violet hover:bg-violet hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-charcoal/75">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
              </button>
              {pageNumbers.map((n) => {
                const active = n === page;
                return (
                  <button key={n} onClick={() => goTo(n)} aria-current={active ? "page" : undefined} className={`grid h-10 min-w-10 place-items-center rounded-xl px-2 text-sm font-semibold transition-colors ${active ? "bg-violet text-white shadow-soft" : "border border-charcoal/15 text-charcoal/75 hover:border-violet hover:text-violet"}`}>
                    {n}
                  </button>
                );
              })}
              <button onClick={() => goTo(page + 1)} disabled={page === totalPages} aria-label="Next page" className="grid h-10 w-10 place-items-center rounded-xl border border-charcoal/15 text-charcoal/75 transition-colors hover:border-violet hover:bg-violet hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-charcoal/75">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
