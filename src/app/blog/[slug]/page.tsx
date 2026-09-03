import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import BlogSidebar from "@/components/BlogSidebar";
import TableOfContents from "@/components/TableOfContents";
import CTABanner from "@/components/CTABanner";
import { POSTS, sectionId, type PostBlock } from "@/lib/blog";

function Block({ block }: { block: PostBlock }) {
  if (typeof block === "string") {
    return <p className="text-lg leading-relaxed text-charcoal/75">{block}</p>;
  }
  if (block.type === "sub") {
    return <h3 className="pt-2 text-lg font-bold text-charcoal sm:text-xl">{block.text}</h3>;
  }
  if (block.type === "list") {
    return (
      <ul className="space-y-2.5">
        {block.items.map((it, i) => (
          <li key={i} className="flex items-start gap-3 text-charcoal/75">
            <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-xs font-bold ${block.ordered ? "bg-violet text-white" : "bg-violet/10 text-violet"}`}>
              {block.ordered ? i + 1 : <svg className="h-2.5 w-2.5" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.5 5 9l4.5-5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
            </span>
            <span className="leading-relaxed">{it}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === "image") {
    return (
      <figure className="my-2">
        {/* full image, not cropped (infographics etc. need their full height) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={block.src} alt={block.alt} loading="lazy" className="w-full rounded-2xl shadow-card ring-1 ring-charcoal/[0.05]" />
        {block.caption && <figcaption className="mt-2 text-center text-xs text-charcoal/60">{block.caption}</figcaption>}
      </figure>
    );
  }
  if (block.type === "quote") {
    return (
      <blockquote className="rounded-r-xl border-l-4 border-violet bg-violet/[0.05] px-5 py-4">
        <p className="text-lg italic leading-relaxed text-charcoal/75">&ldquo;{block.text}&rdquo;</p>
        {block.cite && <footer className="mt-2 text-sm not-italic text-charcoal/60">{block.cite}</footer>}
      </blockquote>
    );
  }
  if (block.type === "callout") {
    return (
      <div className="flex items-start gap-3 rounded-2xl border border-violet/20 bg-violet/[0.05] p-5">
        {block.emoji && <span className="text-xl leading-none">{block.emoji}</span>}
        <div>
          {block.title && <p className="font-bold text-charcoal">{block.title}</p>}
          <p className="mt-1 text-sm leading-relaxed text-charcoal/75">{block.text}</p>
        </div>
      </div>
    );
  }
  if (block.type === "stats") {
    return (
      <div className="grid grid-cols-2 gap-4 rounded-2xl border border-charcoal/[0.07] bg-charcoal-50/50 p-5 sm:grid-cols-4">
        {block.items.map((s) => (
          <div key={s.label} className="text-center">
            <p className="heading-gradient text-3xl font-extrabold leading-none">{s.value}</p>
            <p className="mt-2 text-xs leading-snug text-charcoal/60">{s.label}</p>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="overflow-x-auto rounded-2xl border border-charcoal/[0.08]">
      <table className="w-full min-w-[480px] text-left text-sm">
        <thead className="bg-charcoal-50/70 text-charcoal">
          <tr>{block.head.map((h, i) => <th key={i} className="px-4 py-3 font-bold">{h}</th>)}</tr>
        </thead>
        <tbody className="divide-y divide-charcoal/[0.07]">
          {block.rows.map((row, i) => (
            <tr key={i}>{row.map((c, j) => <td key={j} className="px-4 py-3 align-top text-charcoal/75">{c}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = POSTS.find((x) => x.slug === params.slug);
  return { title: p?.title ?? "Article", description: p?.excerpt };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const idx = POSTS.findIndex((p) => p.slug === post.slug);
  const prev = idx > 0 ? POSTS[idx - 1] : null;
  const next = idx < POSTS.length - 1 ? POSTS[idx + 1] : null;
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        {/* ---- Hero ---- */}
        <header className="relative overflow-hidden bg-charcoal pt-[108px] pb-12 text-white">
          {/* layered background */}
          <div className="pointer-events-none absolute inset-0 bg-grid-violet bg-[size:42px_42px] opacity-40" />
          <div className="pointer-events-none absolute -left-24 -top-10 h-72 w-72 rounded-full bg-violet/40 blur-[120px]" />
          <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-[#34E0F0]/15 blur-[120px]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-charcoal to-transparent" />

          <div className="container-x relative max-w-3xl">
            <span className="eyebrow border-violet/40 bg-violet/15 text-violet-200">{post.category}</span>

            <h1 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl">{post.title}</h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/75">{post.excerpt}</p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/60">
              <span className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-violet to-violet-700 text-xs font-bold text-white shadow-soft">
                  {post.author.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </span>
                <span className="font-semibold text-white/90">{post.author}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-violet-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4.5" width="18" height="16" rx="2" /><path d="M3 9h18M8 2.5v4M16 2.5v4" strokeLinecap="round" /></svg>
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-violet-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M12 7.5V12l3 2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                {post.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* ---- Body + sidebar ---- */}
        <div className="container-x py-14">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
            {/* main column */}
            <div className="min-w-0">
              <Reveal className="mb-10">
                {/* full poster image, not cropped */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.image} alt={post.title} className="w-full rounded-3xl shadow-card ring-1 ring-charcoal/[0.05]" />
              </Reveal>

              <div className="space-y-10">
                {post.sections.map((sec) => (
                  <Reveal key={sec.heading}>
                    <section id={sectionId(sec.heading)} className="scroll-mt-28">
                      <h2 className="text-2xl font-extrabold tracking-tight text-charcoal">{sec.heading}</h2>
                      <div className="mt-4 space-y-4">
                        {sec.body.map((block, j) => (
                          <Block key={j} block={block} />
                        ))}
                      </div>
                    </section>
                  </Reveal>
                ))}
              </div>

              {/* prev / next navigation */}
              <nav className="mt-14 grid gap-4 border-t border-charcoal/10 pt-10 sm:grid-cols-2">
                {prev ? (
                  <Link href={`/blog/${prev.slug}`} className="group flex items-center gap-4 rounded-2xl border border-charcoal/[0.07] bg-white p-4 shadow-card transition-all hover:-translate-y-0.5 hover:border-violet/30 hover:shadow-soft">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-charcoal/10 text-charcoal/60 transition-colors group-hover:border-violet group-hover:bg-violet group-hover:text-white">←</span>
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                      <Image src={prev.image} alt={prev.title} fill sizes="56px" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-violet">Previous</p>
                      <p className="mt-0.5 line-clamp-2 text-sm font-bold leading-snug text-charcoal">{prev.title}</p>
                    </div>
                  </Link>
                ) : (
                  <span className="hidden sm:block" />
                )}

                {next && (
                  <Link href={`/blog/${next.slug}`} className="group flex items-center gap-4 rounded-2xl border border-charcoal/[0.07] bg-white p-4 text-right shadow-card transition-all hover:-translate-y-0.5 hover:border-violet/30 hover:shadow-soft sm:flex-row-reverse">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-charcoal/10 text-charcoal/60 transition-colors group-hover:border-violet group-hover:bg-violet group-hover:text-white">→</span>
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                      <Image src={next.image} alt={next.title} fill sizes="56px" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-violet">Next</p>
                      <p className="mt-0.5 line-clamp-2 text-sm font-bold leading-snug text-charcoal">{next.title}</p>
                    </div>
                  </Link>
                )}
              </nav>

              {/* Comment form */}
              <div className="mt-14 border-t border-charcoal/10 pt-10">
                <h2 className="text-2xl font-extrabold text-charcoal">Leave a Reply</h2>
                <p className="mt-1 text-sm text-charcoal/60">Your email address will not be published. Required fields are marked *</p>
                <form className="mt-6 space-y-4">
                  <textarea required rows={5} placeholder="Comment *" className="w-full rounded-xl border border-charcoal/15 p-4 text-sm focus:border-violet focus:outline-none focus:ring-2 focus:ring-violet/20" />
                  <input required placeholder="Name *" className="w-full rounded-xl border border-charcoal/15 p-4 text-sm focus:border-violet focus:outline-none focus:ring-2 focus:ring-violet/20" />
                  <button type="submit" className="btn-dark">Post Comment</button>
                </form>
              </div>
            </div>

            {/* sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <TableOfContents items={post.sections.map((s) => ({ id: sectionId(s.heading), title: s.heading }))} />
              <BlogSidebar posts={POSTS} currentSlug={post.slug} />
            </aside>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="section bg-charcoal-50/60">
        <div className="container-x">
          <h2 className="text-2xl font-extrabold text-charcoal">Related Posts</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-charcoal/[0.07] bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-soft">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={p.image} alt={p.title} fill sizes="380px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-violet">{p.category}</span>
                  <h3 className="mt-2 text-base font-bold leading-snug text-charcoal">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
