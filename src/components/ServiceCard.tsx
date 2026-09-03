import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import { SERVICE_ICONS } from "@/lib/icons";
import type { Service } from "@/lib/content";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="card-hover group flex h-full flex-col overflow-hidden !p-0"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/10 to-transparent" />
        <span className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-xl bg-white/95 text-violet shadow-card">
          <Icon name={SERVICE_ICONS[service.slug] ?? "default"} className="h-5 w-5" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold leading-snug text-charcoal transition-colors group-hover:text-violet">
          {service.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/60">{service.short}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-violet transition-transform group-hover:translate-x-1">
          Learn more →
        </span>
      </div>
    </Link>
  );
}
