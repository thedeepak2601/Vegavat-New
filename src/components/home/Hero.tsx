"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import AnimatedBackground from "@/components/effects/AnimatedBackground";
import HeroVideo from "@/components/effects/HeroVideo";
import { subscribe } from "@/lib/subscribe";
import { SITE } from "@/lib/site";

// Ambient hero footage. Hotlinked from a third-party CDN — swap this for a
// self-hosted, compressed clip in /public before relying on it in production.
const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4";

const badges = ["iOS & Android", "Web Apps", "UI/UX", "AI / GenAI", "Cloud"];

const capabilities = ["AI agents", "mobile apps", "SaaS platforms", "cloud systems"];

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type SubStatus = "idle" | "sending" | "done" | "error";

export default function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubStatus>("idle");
  const [capability, setCapability] = useState(0);

  // Cycle the capability word in the sub-headline.
  useEffect(() => {
    const id = setInterval(
      () => setCapability((i) => (i + 1) % capabilities.length),
      2000
    );
    return () => clearInterval(id);
  }, []);

  // Entrance: the headline lifts in, everything else resolves out of a blur.
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".hero-title", { opacity: 0, y: 50, duration: 1.2, delay: 0.1 }).from(
          ".hero-blur",
          { opacity: 0, filter: "blur(10px)", y: 20, duration: 1, stagger: 0.1 },
          0.3
        );
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  useEffect(
    () => () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    },
    []
  );

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    const address = email.trim();
    if (!address) return;

    // Honeypot: a real person never fills a field they cannot see, so treat a
    // filled one as a bot and no-op without pestering the inbox.
    const trap = (new FormData(e.currentTarget).get("company") as string) || "";

    setStatus("sending");
    try {
      if (!trap) await subscribe(address);
      setStatus("done");
      setEmail("");
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Subscription failed:", err);
      setStatus("error");
    }

    // Clear the message and hand the field back after 3s.
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section
      ref={rootRef}
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-charcoal pt-[72px] text-white"
    >
      {/* Background stack: gradient fallback, then video, then grading.
          The scrims are split so the middle of the frame stays bright — a flat
          wash over the whole section just reads as black. */}
      <AnimatedBackground variant="dark" />
      <HeroVideo src={HERO_VIDEO} />
      <div className="pointer-events-none absolute inset-0 bg-charcoal/40" />
      {/* pool of shadow behind the copy so text never sits on a bright frame */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_52%,rgba(7,6,11,0.78),transparent_72%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_55%_at_50%_45%,rgba(98,0,234,0.35),transparent_72%)]" />
      {/* seam under the white header */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-charcoal via-charcoal/70 to-transparent" />
      {/* settle into the wave divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-charcoal via-charcoal/75 to-transparent" />

      {/* Floating capability cards, desktop only. Kept in a middle band so they
          clear the header and the chat/WhatsApp widgets in the bottom corners. */}
      <Link
        href="/services"
        className="liquid-glass absolute left-8 top-[34%] z-10 hidden w-[188px] rounded-2xl px-4 py-3 transition-transform hover:-translate-y-1 xl:block"
      >
        <p className="relative text-[11px] font-bold uppercase tracking-wider text-violet-200">
          Our Stack
        </p>
        <p className="relative mt-0.5 text-xs text-white/70">React · Flutter · AWS</p>
      </Link>
      <div className="liquid-glass absolute left-8 top-[59%] z-10 hidden w-[188px] rounded-2xl px-4 py-3 xl:block">
        <p className="relative text-2xl font-extrabold">6+ yrs</p>
        <p className="relative text-xs text-white/70">building digital products</p>
      </div>
      <div className="liquid-glass absolute right-8 top-[34%] z-10 hidden w-[188px] rounded-2xl px-4 py-3 xl:block">
        <p className="relative text-2xl font-extrabold text-[#34E0F0]">100+</p>
        <p className="relative text-xs text-white/70">projects shipped</p>
      </div>
      <Link
        href="/services"
        className="liquid-glass absolute right-8 top-[59%] z-10 hidden w-[188px] rounded-2xl px-4 py-3 transition-transform hover:-translate-y-1 xl:block"
      >
        <p className="relative text-[11px] font-bold uppercase tracking-wider text-[#34E0F0]">
          Services
        </p>
        <p className="relative mt-0.5 text-xs text-white/70">Web · Mobile · AI</p>
      </Link>

      {/* Centered content */}
      <div className="container-x relative z-10 flex flex-1 flex-col items-center justify-center pb-24 pt-10 text-center lg:pb-40">
        <span className="hero-blur liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/80 sm:text-xs">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34E0F0] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#34E0F0]" />
          </span>
          <span className="relative">Top Web &amp; Mobile App Development Company</span>
        </span>

        <h1 className="hero-title mt-7 max-w-4xl text-4xl font-extrabold leading-[1.06] tracking-tight [text-shadow:0_4px_60px_rgba(98,0,234,0.55)] sm:text-5xl lg:text-[68px]">
          Transforming Ideas Into{" "}
          {/* Own line so the accent never splits across a wrap. The looser
              leading and padding matter: bg-clip-text paints only within the
              line box, so the italic serif's descenders (g, y) get sheared off
              at the tracking-tight leading the rest of the heading uses. */}
          <span className="block bg-gradient-to-r from-violet-200 via-violet-300 to-[#34E0F0] bg-clip-text pb-2 font-display italic leading-[1.25] text-transparent">
            Digital Reality
          </span>
        </h1>

        <p className="hero-blur mt-5 text-lg text-white/75 sm:text-xl">
          with <span className="font-semibold text-white">{SITE.name}</span> — we engineer{" "}
          {/* keyed so each swap replays the fade; gradient + underline make the
              changing word the obvious focal point of the line */}
          {/* pb on the outer box drops the rule clear of the italic descenders */}
          <span key={capability} className="relative inline-block animate-role-fade-in pb-2">
            <span className="bg-gradient-to-r from-[#34E0F0] via-violet-200 to-violet-300 bg-clip-text font-display italic leading-[1.35] text-transparent [text-shadow:0_0_24px_rgba(52,224,240,0.4)]">
              {capabilities[capability]}
            </span>
            <span className="absolute inset-x-0 bottom-0 h-[3px] rounded-full bg-gradient-to-r from-[#34E0F0] via-violet-200 to-violet-400 shadow-[0_0_12px_rgba(52,224,240,0.5)]" />
          </span>{" "}
          for teams that ship.
        </p>

        <p className="hero-blur mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
          The future is here with Vegavat as your trusted development partner.
          Let&apos;s work together to bring your vision to life.
        </p>

        {/* Subscribe. The confirmation replaces the field inside the pill so the
            hero never reflows, then reverts to the input after 3s. The radius is
            pinned rather than `full` so a wrapped message keeps a sane shape. */}
        <form
          onSubmit={onSubmit}
          className="hero-blur liquid-glass-strong mt-9 flex w-full max-w-xl items-center gap-3 rounded-[30px] py-2 pl-6 pr-2"
        >
          {/* bot trap, off-screen rather than display:none so autofill skips it */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden
            className="pointer-events-none absolute -left-[9999px] h-px w-px opacity-0"
          />

          {status === "done" || status === "error" ? (
            <p
              role="status"
              aria-live="polite"
              className="relative flex-1 text-left text-sm text-white sm:text-[15px]"
            >
              {status === "done" ? (
                <>
                  <span className="text-[#34E0F0]">✓</span> Subscribed! You&apos;ll now get
                  our latest updates, LinkedIn posts &amp; announcements.
                </>
              ) : (
                <>Couldn&apos;t subscribe just now — please try again.</>
              )}
            </p>
          ) : (
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              aria-label="Email address to subscribe"
              disabled={status === "sending"}
              className="relative min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/40 disabled:opacity-60 sm:text-base"
            />
          )}

          <button
            type="submit"
            disabled={status !== "idle"}
            aria-label="Subscribe"
            className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-charcoal transition-transform hover:scale-105 disabled:hover:scale-100"
          >
            {status === "sending" ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5 animate-spin" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <circle cx="12" cy="12" r="9" className="opacity-25" />
                <path d="M21 12a9 9 0 0 0-9-9" strokeLinecap="round" />
              </svg>
            ) : status === "done" ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12.5l4.5 4.5L19 7" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            )}
          </button>
        </form>

        <div className="hero-blur mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn-primary btn-glow">
            Get Free Quote →
          </Link>
          <Link
            href="/services"
            className="btn liquid-glass text-white hover:bg-white/10"
          >
            <span className="relative">Explore Services</span>
          </Link>
        </div>

        <div className="hero-blur mt-8 flex flex-wrap justify-center gap-2">
          {badges.map((b) => (
            <span
              key={b}
              className="liquid-glass inline-block rounded-full px-3 py-1 text-xs font-medium text-white/70"
            >
              <span className="relative">{b}</span>
            </span>
          ))}
          <Link
            href="/products#saas"
            className="liquid-glass inline-block rounded-full px-3 py-1 text-xs font-medium text-violet-200 transition-colors hover:text-white"
          >
            <span className="relative">SaaS Products ↗</span>
          </Link>
        </div>
      </div>

      {/* Scroll cue and wave sit out of flow so the hero is exactly one screen tall */}
      <div className="pointer-events-none absolute bottom-[100px] left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll</span>
        <span className="relative block h-8 w-px overflow-hidden bg-white/15">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-scroll-down bg-white/70" />
        </span>
      </div>

      {/* wave divider into white body */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <svg viewBox="0 0 1440 80" className="block w-full" preserveAspectRatio="none">
          <path d="M0 80 L1440 80 L1440 0 C1080 60 360 60 0 0 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
