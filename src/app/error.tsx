"use client";

import Link from "next/link";

/**
 * Segment-level error boundary. Without this file the App Router has nothing
 * to render when a page throws, and the client prints "missing required error
 * components, refreshing..." and reload-loops on a blank page instead.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-charcoal px-6 text-center text-white">
      <div>
        <p className="heading-gradient text-7xl font-extrabold">Oops</p>
        <h1 className="mt-4 text-2xl font-bold">Something went wrong</h1>
        <p className="mx-auto mt-2 max-w-md text-white/60">
          This page ran into an unexpected problem. Trying again usually helps —
          if it keeps happening, please let us know.
        </p>

        {/* The digest is the only handle on a production error, so surface it. */}
        {error.digest && (
          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-white/40">
            Reference {error.digest}
          </p>
        )}

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button onClick={reset} className="btn-primary btn-glow">
            Try again
          </button>
          <Link href="/" className="btn liquid-glass text-white hover:bg-white/10">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
