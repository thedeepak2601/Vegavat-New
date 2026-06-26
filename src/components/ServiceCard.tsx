import Link from "next/link";
import TiltCard from "./effects/TiltCard";
import type { Service } from "@/lib/content";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <TiltCard>
      <Link
        href={`/services/${service.slug}`}
        className="card-hover group flex h-full flex-col"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet/10 text-2xl shadow-soft transition-colors group-hover:bg-violet">
          <span>{service.icon}</span>
        </div>
        <h3 className="mt-5 text-lg font-bold text-charcoal">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/60">{service.short}</p>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-violet transition-transform group-hover:translate-x-1">
          Learn more →
        </span>
      </Link>
    </TiltCard>
  );
}
