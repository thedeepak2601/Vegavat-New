import PageHero from "@/components/PageHero";
import { SITE } from "@/lib/site";

export type LegalSection = {
  heading: string;
  body?: string[];
  bullets?: string[];
};

export default function LegalPage({
  title,
  breadcrumb,
  intro,
  updated,
  sections,
}: {
  title: string;
  breadcrumb: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero breadcrumb={breadcrumb} eyebrow="Legal" title={title} desc={intro} />

      <section className="section">
        <div className="container-x max-w-3xl">
          <p className="text-sm font-medium text-charcoal/45">Last updated: {updated}</p>

          <div className="mt-10 space-y-10">
            {sections.map((s, i) => (
              <div key={s.heading}>
                <h2 className="text-xl font-extrabold text-charcoal sm:text-2xl">
                  <span className="text-violet">{String(i + 1).padStart(2, "0")}.</span> {s.heading}
                </h2>
                {s.body?.map((p, j) => (
                  <p key={j} className="mt-3 leading-relaxed text-charcoal/65">{p}</p>
                ))}
                {s.bullets && (
                  <ul className="mt-4 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-charcoal/65">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet/70" />
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-charcoal/[0.07] bg-charcoal-50/60 p-6">
            <h3 className="font-bold text-charcoal">Questions about this {title.toLowerCase()}?</h3>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
              Reach out to {SITE.name} at{" "}
              <a href={`mailto:${SITE.email}`} className="font-semibold text-violet hover:underline">{SITE.email}</a>{" "}
              or write to us at {SITE.address}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
