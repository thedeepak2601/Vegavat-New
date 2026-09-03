import StatStrip from "@/components/StatStrip";
import { STATS } from "@/lib/site";

/**
 * Kept as a named entry point because several pages already import it; the
 * design now lives in StatStrip so every count on the site matches.
 */
export default function Stats({
  items = STATS,
}: {
  items?: { value: string; label: string }[];
  /** @deprecated the strip carries its own dark-mode surfaces now */
  light?: boolean;
}) {
  return <StatStrip items={items} />;
}
