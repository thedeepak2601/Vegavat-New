"use client";

import { motion } from "framer-motion";
import MailArt from "@/components/newsletter/MailArt";
import { useSubscribe, SUBSCRIBE_DONE, SUBSCRIBE_ERROR } from "@/lib/useSubscribe";

const PERKS = ["Weekly insights", "No spam, ever", "Unsubscribe anytime"];

export default function Newsletter() {
  // Same helper as the hero bar and blog CTA, so this actually notifies the inbox.
  const { email, setEmail, status, onSubmit } = useSubscribe();
  const done = status === "done";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-[32px] border border-violet/10 bg-gradient-to-br from-violet-50 via-[#F6F1FF] to-[#EDF8FC] px-7 py-10 shadow-card sm:px-12 sm:py-12"
    >
      <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-violet/10 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[#34E0F0]/15 blur-[90px]" />

      <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* illustration — drifts gently, which a flat image can't do */}
        <div className="flex justify-center">
          <MailArt className="w-full max-w-[360px] animate-float" />
        </div>

        <div className="text-center lg:text-left">
          <span className="eyebrow">Newsletter</span>

          {/* one line on wide screens; wraps naturally when there isn't room */}
          <h3 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-charcoal sm:text-[34px]">
            Subscribe to <span className="heading-gradient">our newsletter</span>
          </h3>

          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-charcoal/60 lg:mx-0">
            Product updates, engineering insights and useful tech tips — one email when there is
            something genuinely worth reading.
          </p>

          <form onSubmit={onSubmit} className="mx-auto mt-7 max-w-md space-y-3 lg:mx-0">
            {/* bot trap, off-screen rather than display:none so autofill skips it */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="pointer-events-none absolute -left-[9999px] h-px w-px opacity-0"
            />

            <label className="relative block">
              <span className="sr-only">Email address</span>
              <svg className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-charcoal/35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                disabled={status === "sending"}
                className="w-full rounded-full border border-white bg-white py-4 pl-14 pr-5 text-sm font-medium text-charcoal shadow-sm outline-none transition-all placeholder:text-charcoal/35 focus:border-violet/40 focus:shadow-card disabled:opacity-60"
              />
            </label>

            <button
              type="submit"
              disabled={status !== "idle"}
              className="btn-glow w-full rounded-full bg-violet py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-soft transition-all hover:bg-violet-600 hover:shadow-glow disabled:opacity-70"
            >
              {status === "sending" ? "Sending…" : done ? "Subscribed ✓" : "Subscribe"}
            </button>

            {/* reserved height so the card doesn't jump when the message appears */}
            <p
              role="status"
              aria-live="polite"
              className={`min-h-[20px] px-1 text-sm font-medium ${
                status === "error" ? "text-[#D64545]" : "text-violet"
              }`}
            >
              {done ? SUBSCRIBE_DONE : status === "error" ? SUBSCRIBE_ERROR : ""}
            </p>
          </form>

          <ul className="mt-2 flex flex-wrap justify-center gap-x-5 gap-y-2 lg:justify-start">
            {PERKS.map((f) => (
              <li
                key={f}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal/50"
              >
                <svg className="h-3.5 w-3.5 text-violet" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6.5 5 9l4.5-5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
