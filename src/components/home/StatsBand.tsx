import Reveal from "@/components/Reveal";
import StatStrip from "@/components/StatStrip";

export default function StatsBand() {
  return (
    // Deliberately not `.section` — this is a compact strip, not a full section.
    <section className="py-8 lg:py-10">
      <div className="container-x">
        <Reveal>
          <StatStrip />
        </Reveal>
      </div>
    </section>
  );
}
