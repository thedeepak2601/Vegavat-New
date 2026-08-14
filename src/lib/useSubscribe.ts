"use client";

import { useEffect, useRef, useState } from "react";
import { subscribe } from "@/lib/subscribe";

export type SubStatus = "idle" | "sending" | "done" | "error";

/**
 * Shared subscribe behaviour for every newsletter form on the site, so the hero
 * bar, the mid-page panel and the blog CTA can't drift apart: same notification
 * to the Vegavat inbox, same states, same auto-reset.
 *
 * Each form must render a hidden `company` input — see Honeypot below.
 */
export function useSubscribe(resetMs = 3000) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubStatus>("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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

    // Clear the message and hand the field back after a moment.
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setStatus("idle"), resetMs);
  };

  return { email, setEmail, status, onSubmit };
}

export const SUBSCRIBE_DONE =
  "Subscribed! You'll now get our latest updates, LinkedIn posts & announcements.";
export const SUBSCRIBE_ERROR = "Couldn't subscribe just now — please try again.";
