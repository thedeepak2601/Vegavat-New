"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import {
  FALLBACK_POSTS,
  LINKEDIN_PAGE,
  formatPostDate,
  truncate,
  type LinkedInPost,
} from "@/lib/linkedin";

const LinkedInIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);

function PostCard({ post }: { post: LinkedInPost }) {
  const body = truncate(post.text || post.articleTitle || "");

  return (
    <a
      href={post.url || LINKEDIN_PAGE}
      target="_blank"
      rel="noopener noreferrer"
      className="card-hover group flex flex-col overflow-hidden !p-0"
    >
      {post.image && (
        // Remote LinkedIn CDN URLs are not in next.config remotePatterns, and
        // this is a static export, so a plain <img> is the right call here.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.image}
          alt=""
          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-violet">
          <LinkedInIcon className="h-4 w-4" />
          <span>Vegavat</span>
          {post.createdAt && (
            <>
              <span className="text-charcoal/30">·</span>
              <span className="font-medium text-charcoal/50">
                {formatPostDate(post.createdAt)}
              </span>
            </>
          )}
        </div>

        <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-charcoal/70">
          {body}
        </p>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-violet transition-transform group-hover:translate-x-1">
          Read on LinkedIn →
        </span>
      </div>
    </a>
  );
}

function FollowPanel() {
  return (
    <Reveal className="mx-auto max-w-2xl">
      <div className="card flex flex-col items-center gap-4 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-violet/10 text-violet">
          <LinkedInIcon className="h-7 w-7" />
        </span>
        <h3 className="text-xl font-bold text-charcoal">Follow us on LinkedIn</h3>
        <p className="max-w-md text-sm leading-relaxed text-charcoal/60">
          We share product updates, engineering notes and what the team is shipping.
        </p>
        <a
          href={LINKEDIN_PAGE}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary btn-glow"
        >
          Follow Vegavat →
        </a>
      </div>
    </Reveal>
  );
}

export default function LinkedInFeed({ count = 3 }: { count?: number }) {
  const [posts, setPosts] = useState<LinkedInPost[]>(FALLBACK_POSTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;

    // The endpoint is a Cloudflare Pages Function, so it only exists on the
    // deployed site — locally this 404s and we keep the fallback.
    fetch(`/linkedin-posts?count=${count}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!alive) return;
        const live = Array.isArray(data?.posts) ? (data.posts as LinkedInPost[]) : [];
        if (live.length) setPosts(live.slice(0, count));
      })
      .catch(() => {
        /* keep fallback */
      })
      .finally(() => alive && setLoading(false));

    return () => {
      alive = false;
    };
  }, [count]);

  const hasPosts = posts.length > 0;

  return (
    <section className="section bg-charcoal-50/60">
      <div className="container-x">
        <SectionHeader
          eyebrow="From LinkedIn"
          title="Latest updates from our team"
          desc="Product releases, engineering notes and company news, straight from our LinkedIn page."
        />

        <div className="mt-14">
          {loading && !hasPosts ? (
            <div className="grid gap-6 md:grid-cols-3">
              {Array.from({ length: count }).map((_, i) => (
                <div
                  key={i}
                  className="h-72 animate-pulse rounded-2xl border border-charcoal/[0.07] bg-white"
                />
              ))}
            </div>
          ) : hasPosts ? (
            <>
              <div className="grid gap-6 md:grid-cols-3">
                {posts.map((post, i) => (
                  <Reveal key={post.id} delay={i * 0.08} className="flex">
                    <PostCard post={post} />
                  </Reveal>
                ))}
              </div>
              <div className="mt-12 text-center">
                <a
                  href={LINKEDIN_PAGE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  View all posts on LinkedIn →
                </a>
              </div>
            </>
          ) : (
            <FollowPanel />
          )}
        </div>
      </div>
    </section>
  );
}
