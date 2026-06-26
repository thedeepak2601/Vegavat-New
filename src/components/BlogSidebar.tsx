"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/lib/blog";

// Builds a share URL for each network given the page URL and post title.
const SOCIALS: {
  label: string;
  share: (url: string, title: string) => string;
  icon: React.ReactNode;
}[] = [
  {
    label: "Facebook",
    share: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8"><circle cx="12" cy="12" r="12" fill="#1877F2" /><path fill="#fff" d="M15.1 12.5l.4-2.6h-2.5V8.2c0-.7.3-1.4 1.5-1.4h1.2V4.6s-1.1-.2-2.1-.2c-2 0-3.4 1.2-3.4 3.4v1.9H7.9v2.6h2.3V19h2.9v-6.5h2.1z" /></svg>
    ),
  },
  {
    label: "X",
    share: (url, title) => `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8"><rect width="24" height="24" rx="5" fill="#000" /><path fill="#fff" d="M13.8 10.6 18.4 5h-1.5l-3.9 4.6L9.6 5H5l4.9 7-4.9 5.7h1.5l4.1-4.8 3.5 4.8H19l-5.2-7.1zm-1.5 1.7-.5-.7L7 6.1h1.6l3 4.3.5.7 4 5.6h-1.6z" /></svg>
    ),
  },
  {
    label: "LinkedIn",
    share: (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8"><rect width="24" height="24" rx="5" fill="#0A66C2" /><path fill="#fff" d="M8 10H5.5v8H8v-8zM6.8 6.2A1.4 1.4 0 1 0 6.8 9a1.4 1.4 0 0 0 0-2.8zM18.5 13.3c0-2.1-1.1-3.1-2.6-3.1-1.2 0-1.8.7-2.1 1.2V10h-2.5v8h2.5v-4.2c0-1.1.2-2.2 1.5-2.2s1.3 1.3 1.3 2.3V18h2.4z" /></svg>
    ),
  },
];

export default function BlogSidebar({
  posts,
  currentSlug,
}: {
  posts: Post[];
  currentSlug: string;
}) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | null>(null);

  // unique categories with post counts
  const counts = new Map<string, number>();
  posts.forEach((p) => counts.set(p.category, (counts.get(p.category) ?? 0) + 1));
  const categories = Array.from(counts.entries());

  const term = q.trim().toLowerCase();
  const results = posts.filter((p) => {
    if (cat && p.category !== cat) return false;
    if (!term) return true;
    return (
      p.title.toLowerCase().includes(term) ||
      p.excerpt.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term)
    );
  });
  // When actively filtering (search or category), show every match, including the
  // post being read, otherwise an only-child category would look empty. In the
  // default view, exclude the current post since it's "more to read next".
  const filtering = term !== "" || cat !== null;
  const recent = (filtering ? results : results.filter((p) => p.slug !== currentSlug)).slice(0, filtering ? 8 : 5);

  const current = posts.find((p) => p.slug === currentSlug);
  const [copied, setCopied] = useState(false);

  const openShare = (build: (url: string, title: string) => string) => {
    if (typeof window === "undefined") return;
    const url = window.location.href;
    const title = current?.title ?? document.title;
    window.open(build(url, title), "_blank", "noopener,noreferrer,width=600,height=640");
  };

  const copyLink = async () => {
    if (typeof window === "undefined") return;
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const cardClass = "rounded-2xl border border-charcoal/[0.07] bg-white p-5 shadow-card";
  const headingClass = "text-sm font-bold uppercase tracking-wider text-charcoal/70";

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className={cardClass}>
        <h3 className={headingClass}>Search</h3>
        <div className="mt-3 flex items-center gap-2 rounded-xl border border-charcoal/15 px-3 transition-colors focus-within:border-violet focus-within:ring-2 focus-within:ring-violet/20">
          <svg className="h-4 w-4 shrink-0 text-charcoal/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m20 20-3-3" strokeLinecap="round" /></svg>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search posts..."
            aria-label="Search posts"
            className="w-full bg-transparent py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none"
          />
        </div>
      </div>

      {/* Categories */}
      <div className={cardClass}>
        <h3 className={headingClass}>Categories</h3>
        <div className="relative mt-3">
          <select
            value={cat ?? ""}
            onChange={(e) => setCat(e.target.value || null)}
            aria-label="Filter by category"
            className="w-full appearance-none rounded-xl border border-charcoal/15 bg-white px-3 py-2.5 pr-9 text-sm font-medium text-charcoal/80 transition-colors focus:border-violet focus:outline-none focus:ring-2 focus:ring-violet/20"
          >
            <option value="">All Posts ({posts.length})</option>
            {categories.map(([name, count]) => (
              <option key={name} value={name}>{name} ({count})</option>
            ))}
          </select>
          <svg className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      </div>

      {/* Recent posts */}
      <div className={cardClass}>
        <h3 className={headingClass}>{term || cat ? "Matching Posts" : "Recent Posts"}</h3>
        <ul className="mt-4 space-y-4">
          {recent.length === 0 && (
            <li className="text-sm text-charcoal/50">No posts found.</li>
          )}
          {recent.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="group flex gap-3">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg">
                  <Image src={p.image} alt={p.title} fill sizes="56px" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="min-w-0">
                  <p className="line-clamp-2 text-sm font-semibold leading-snug text-charcoal transition-colors group-hover:text-violet">{p.title}</p>
                  <p className="mt-1 text-xs text-charcoal/45">{p.date}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Share this post */}
      <div className={cardClass}>
        <h3 className={headingClass}>Share This Post</h3>
        <div className="mt-4 flex items-center gap-3">
          {SOCIALS.map((s) => (
            <button
              key={s.label}
              type="button"
              onClick={() => openShare(s.share)}
              aria-label={`Share on ${s.label}`}
              className="transition-transform hover:-translate-y-0.5"
            >
              {s.icon}
            </button>
          ))}
          <button
            type="button"
            onClick={copyLink}
            aria-label="Copy link"
            className="grid h-8 w-8 place-items-center rounded-full bg-charcoal text-white transition-transform hover:-translate-y-0.5"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1" /><path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" /></svg>
          </button>
        </div>
        {copied && <p className="mt-2 text-xs font-semibold text-violet">Link copied!</p>}
      </div>
    </div>
  );
}
