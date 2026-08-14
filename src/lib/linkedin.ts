export type LinkedInPost = {
  id: string;
  text: string;
  url: string | null;
  createdAt: number | null;
  image: string | null;
  articleTitle?: string | null;
};

export const LINKEDIN_PAGE = "https://www.linkedin.com/company/vegavat/";

/**
 * Shown when the live feed is unavailable — during local `next dev` (which
 * doesn't serve /functions), before the LinkedIn API credentials are in place,
 * or if LinkedIn errors.
 *
 * Leave it empty and the section renders a "Follow us on LinkedIn" panel
 * instead, which is honest rather than looking broken. To pin specific posts,
 * add entries here; `id` can be any unique string.
 *
 *   {
 *     id: "manual-1",
 *     text: "We shipped …",
 *     url: "https://www.linkedin.com/feed/update/urn:li:activity:73…",
 *     createdAt: Date.parse("2026-08-01"),
 *     image: "/blog/web-hero.webp",
 *   },
 */
export const FALLBACK_POSTS: LinkedInPost[] = [];

/** "12 Aug 2026" — LinkedIn returns epoch millis. */
export function formatPostDate(ms: number | null) {
  if (!ms) return "";
  try {
    return new Date(ms).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

/** Post bodies can be very long; trim to a card-friendly length on a word break. */
export function truncate(text: string, max = 180) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max).trimEnd()}…`;
}
