"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet via-violet-600 to-violet-800 px-7 py-12 md:px-14 md:py-16"
    >
      {/* animated decoration */}
      <div className="pointer-events-none absolute inset-0 bg-grid-violet bg-[size:38px_38px] opacity-20" />
      <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 animate-orb-2 rounded-full bg-[#34E0F0]/25 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 animate-orb-1 rounded-full bg-white/15 blur-[90px]" />

      <div className="relative grid items-center gap-8 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white ring-1 ring-white/20 backdrop-blur">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" /><rect x="3" y="5" width="18" height="14" rx="2" /></svg>
            Newsletter
          </span>
          <h3 className="mt-4 text-3xl font-extrabold text-white md:text-4xl">Stay in the loop</h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
            Get product updates, engineering insights and useful tech tips in your inbox.
            We respect your privacy, no spam, unsubscribe anytime.
          </p>

          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-white/85">
            {["Weekly insights", "No spam, ever", "Unsubscribe anytime"].map((f) => (
              <li key={f} className="inline-flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 text-[#34E0F0]" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.5 5 9l4.5-5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email) setDone(true);
          }}
          className="md:justify-self-end md:w-full md:max-w-md"
        >
          <div className="flex flex-col gap-3 rounded-2xl bg-white/10 p-2 ring-1 ring-white/20 backdrop-blur sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full rounded-xl bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none"
            />
            <button
              type="submit"
              className="btn-glow shrink-0 rounded-xl bg-white px-6 py-3 text-sm font-bold text-violet transition-transform hover:-translate-y-0.5"
            >
              {done ? "Subscribed ✓" : "Subscribe"}
            </button>
          </div>
          {done && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 pl-2 text-sm font-medium text-white/90"
            >
              🎉 Thanks for subscribing! Check your inbox.
            </motion.p>
          )}
        </form>
      </div>
    </motion.div>
  );
}
