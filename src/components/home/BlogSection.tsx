import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { POSTS } from "@/lib/blog";

/**
 * Three most recent posts. Deliberately not BlogList — that carries category
 * filtering and pagination, which a homepage teaser has no use for.
 */
export default function BlogSection({ limit = 3 }: { limit?: number }) {
  const posts = POSTS.slice(0, limit);
  if (!posts.length) return null;

  return (
    <section className="section bg-charcoal-50/60">
      <div className="container-x">
        <SectionHeader
          eyebrow="Insights"
          title="From our blog"
          desc="Practical guides on development, design and technology, written by the team that builds it."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.07} className="flex">
              <Link
                href={`/blog/${p.slug}`}
                className="card-hover group flex h-full flex-col overflow-hidden !p-0"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-charcoal/60 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wider text-violet shadow-card backdrop-blur">
                    {p.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs font-medium text-charcoal/60">
                    <span>{p.date}</span>
                    <span className="h-1 w-1 rounded-full bg-violet/40" />
                    <span>{p.readTime}</span>
                  </div>

                  <h3 className="mt-3 line-clamp-2 text-lg font-bold leading-snug text-charcoal transition-colors group-hover:text-violet">
                    {p.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-charcoal/60">
                    {p.excerpt}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-violet transition-transform group-hover:translate-x-1">
                    Read article →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/blog" className="btn-primary btn-glow">
            View all articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
