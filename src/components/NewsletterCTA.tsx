"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import AnimatedBackground from "./effects/AnimatedBackground";

export default function NewsletterCTA({
  eyebrow = "Newsletter",
  title = "Never miss an update",
  desc = "Subscribe for fresh insights on development, design and technology, no spam, unsubscribe anytime.",
}: {
  eyebrow?: string;
  title?: string;
  desc?: string;
}) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="section">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-3xl bg-charcoal px-6 py-16 text-center sm:px-12">
          <AnimatedBackground variant="dark" />
          <span className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-violet via-violet-400 to-[#34E0F0]" />
          <div className="relative">
            <span className="eyebrow border-violet/40 bg-violet/15 text-violet-200">{eyebrow}</span>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">{desc}</p>

            {/* inline subscribe form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setDone(true);
              }}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 rounded-2xl bg-white/10 p-2 ring-1 ring-white/20 backdrop-blur sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                aria-label="Email address"
                className="w-full rounded-xl bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none"
              />
              <button type="submit" className="btn-primary btn-glow shrink-0">
                {done ? "Subscribed ✓" : "Subscribe →"}
              </button>
            </form>

            {done ? (
              <p className="mt-4 text-sm font-medium text-white/90">🎉 Thanks for subscribing! Check your inbox.</p>
            ) : (
              <ul className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-white/55">
                {["Weekly insights", "No spam, ever", "Unsubscribe anytime"].map((f) => (
                  <li key={f} className="inline-flex items-center gap-1.5">
                    <svg className="h-3.5 w-3.5 text-violet-300" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.5 5 9l4.5-5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
            )}

            <p className="mt-6 text-sm text-white/45">
              Prefer to talk?{" "}
              <Link href="/contact" className="font-semibold text-violet-200 hover:text-white">
                Get in touch →
              </Link>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
