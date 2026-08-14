import Reveal from "@/components/Reveal";
import { FINANCE_PHONE, FINANCE_PHONE_HREF, FINANCE_WHATSAPP_HREF } from "@/lib/financial";

const ASSURANCES = ["Free first consultation", "No obligation", "We reply within 24 hours"];

const PhoneIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

/**
 * Prominent call-to-action for the financial services practice, which uses its
 * own number rather than the main SITE.phone. Full `section` padding, so it
 * never sits flush against the block above it.
 */
export default function CallBar({
  title = "Speak to a financial expert today",
  desc = "Income tax, GST and accounting queries answered directly, with no obligation.",
}: {
  title?: string;
  desc?: string;
}) {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-violet/15 bg-white p-8 shadow-soft sm:p-10">
            {/* accent strip + ambient glow */}
            <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet via-violet-400 to-[#34E0F0]" />
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-violet/10 blur-[90px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-[#34E0F0]/10 blur-[90px]" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-5">
                <span className="hidden h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet to-violet-700 text-white shadow-glow sm:grid">
                  <PhoneIcon className="h-7 w-7" />
                </span>

                <div>
                  <h2 className="text-2xl font-extrabold tracking-tight text-charcoal sm:text-3xl">
                    {title}
                  </h2>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-charcoal/60">{desc}</p>

                  <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                    {ASSURANCES.map((a) => (
                      <li
                        key={a}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal/55"
                      >
                        <svg className="h-3.5 w-3.5 text-violet" viewBox="0 0 12 12" fill="none">
                          <path d="M2.5 6.5 5 9l4.5-5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a href={FINANCE_PHONE_HREF} className="btn-primary btn-glow whitespace-nowrap">
                  <PhoneIcon className="h-4 w-4" />
                  {FINANCE_PHONE}
                </a>
                <a
                  href={FINANCE_WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline whitespace-nowrap"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z" />
                  </svg>
                  WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
