import Reveal from "./Reveal";

export default function SectionHeader({
  eyebrow,
  title,
  desc,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <Reveal
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2
        className={`mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-white/70" : "text-charcoal/60"
          }`}
        >
          {desc}
        </p>
      )}
    </Reveal>
  );
}
