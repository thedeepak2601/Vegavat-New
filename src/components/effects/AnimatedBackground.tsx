import CubeField from "./CubeField";

// Decorative animated background: moving grid + floating gradient orbs.
// Pure CSS animations, safe in a server component.
export default function AnimatedBackground({
  variant = "dark",
  /**
   * Adds the cursor-reactive tile field. Opt-in rather than default: it
   * would fight the video behind the home hero, and the short CTA bands
   * are too shallow for the grid to read.
   */
  cubes = false,
}: {
  variant?: "dark" | "light";
  cubes?: boolean;
}) {
  const orb = variant === "dark" ? "bg-violet/30" : "bg-violet/15";
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {cubes && <CubeField />}
      {/* animated grid */}
      <div className="absolute inset-0 animate-grid-pan bg-grid-violet bg-[size:46px_46px] opacity-50" />
      {/* floating gradient orbs */}
      <div className={`absolute -left-24 top-10 h-80 w-80 animate-orb-1 rounded-full ${orb} blur-[120px]`} />
      <div className={`absolute right-0 top-1/3 h-72 w-72 animate-orb-2 rounded-full ${orb} blur-[120px]`} />
      <div className={`absolute bottom-0 left-1/3 h-72 w-72 animate-orb-1 rounded-full bg-[#34E0F0]/10 blur-[120px]`} />
    </div>
  );
}
