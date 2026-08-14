"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const FADE_MS = 500;
// How long before the end to start fading out, in seconds.
const FADE_OUT_LEAD = 0.55;

/**
 * Full-bleed background video that cross-fades into itself instead of
 * hard-cutting on loop: it fades out over the last ~0.5s, restarts, and fades
 * back in. Fades are driven by requestAnimationFrame (not CSS transitions) so a
 * new fade can pick up from the current opacity mid-flight.
 *
 * The video is deliberately skipped on phones, on data-saver connections and
 * when reduced motion is requested — the gradient behind it stands in.
 */
export default function HeroVideo({
  src,
  /**
   * Which part of the frame to keep when cropping. Biased low so the top of
   * the source is trimmed — done with object-position rather than a transform
   * so the element always fills its container and never leaves a bare edge.
   */
  objectPosition = "50% 68%",
  className = "",
}: {
  src: string;
  objectPosition?: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const restartRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fadingOutRef = useRef(false);
  const [enabled, setEnabled] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const motionOk = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wideEnough = window.matchMedia("(min-width: 768px)").matches;
    const saveData = Boolean(
      (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData
    );
    setEnabled(motionOk && wideEnough && !saveData);
  }, []);

  const fadeTo = useCallback((target: number) => {
    const video = videoRef.current;
    if (!video) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const from = Number(video.style.opacity || "0");
    const start = performance.now();

    const step = (now: number) => {
      const t = Math.min((now - start) / FADE_MS, 1);
      video.style.opacity = String(from + (target - from) * t);
      rafRef.current = t < 1 ? requestAnimationFrame(step) : null;
    };
    rafRef.current = requestAnimationFrame(step);
  }, []);

  useEffect(
    () => () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (restartRef.current) clearTimeout(restartRef.current);
    },
    []
  );

  if (!enabled || failed) return null;

  return (
    <video
      ref={videoRef}
      className={`pointer-events-none absolute inset-0 h-full w-full object-cover ${className}`}
      style={{ opacity: 0, objectPosition }}
      src={src}
      autoPlay
      muted
      playsInline
      preload="auto"
      aria-hidden
      onCanPlay={(e) => {
        // Autoplay can still be refused; ignore the rejection and stay faded out.
        void e.currentTarget.play().catch(() => {});
        if (!fadingOutRef.current) fadeTo(1);
      }}
      onTimeUpdate={(e) => {
        const video = e.currentTarget;
        if (fadingOutRef.current || !Number.isFinite(video.duration)) return;
        if (video.duration - video.currentTime <= FADE_OUT_LEAD) {
          fadingOutRef.current = true;
          fadeTo(0);
        }
      }}
      onEnded={(e) => {
        const video = e.currentTarget;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        video.style.opacity = "0";
        restartRef.current = setTimeout(() => {
          video.currentTime = 0;
          void video.play().catch(() => {});
          fadingOutRef.current = false;
          fadeTo(1);
        }, 100);
      }}
      onError={() => setFailed(true)}
    />
  );
}
