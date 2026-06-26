import Link from "next/link";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { PRODUCTS } from "@/lib/content";

// product id -> nav icon key + category label
const META: Record<string, { icon: string; label: string }> = {
  crm: { icon: "crm", label: "Sales Growth" },
  hrms: { icon: "hrms", label: "People Operations" },
  erp: { icon: "erp", label: "Business Core" },
  inventory: { icon: "inventory", label: "Stock Control" },
  finance: { icon: "finance", label: "Finance" },
  projects: { icon: "projects", label: "Delivery" },
  helpdesk: { icon: "helpdesk", label: "Support" },
  maintenance: { icon: "wrench", label: "Assets" },
  lms: { icon: "lms", label: "Learning" },
};

export default function ProductsSection() {
  const featured = PRODUCTS.slice(0, 4);
  return (
    <section className="section bg-charcoal-50/60">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow">Products</span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Business products for <span className="heading-gradient">every core workflow</span>
              </h2>
              <p className="mt-4 text-charcoal/60">
                CRM, HRMS, ERP, inventory, finance, project management and helpdesk products
                that work separately or together as one connected platform.
              </p>
            </div>
            <Link href="/products" className="btn-primary btn-glow shrink-0">View All Products →</Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => {
            const meta = META[p.id] ?? { icon: "erp", label: "Platform" };
            return (
              <Reveal key={p.id} delay={(i % 4) * 0.07}>
                <Link
                  href={`/products/${p.id}`}
                  className="group flex h-full flex-col rounded-2xl border border-charcoal/[0.07] bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-violet/30 hover:shadow-soft"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-violet/10 text-violet transition-all group-hover:scale-110 group-hover:bg-violet group-hover:text-white">
                    <Icon name={meta.icon} className="h-6 w-6" />
                  </span>
                  <span className="mt-5 text-[11px] font-bold uppercase tracking-widest text-violet/70">{meta.label}</span>
                  <h3 className="mt-1 text-lg font-bold leading-snug text-charcoal">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/60 line-clamp-4">{p.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-violet transition-transform group-hover:translate-x-1">
                    Details →
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
