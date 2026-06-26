import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BlogList from "@/components/BlogList";
import NewsletterCTA from "@/components/NewsletterCTA";
import { POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on software development, mobile apps, design, AI and technology from the Vegavat team.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        breadcrumb="Home / Blog"
        eyebrow="Insights & Resources"
        title="Ideas, insights and engineering notes"
        desc="Practical tech information, product thinking and lessons from the work we do, straight from the Vegavat team."
        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80"
      />

      <section className="section">
        <div className="container-x">
          <BlogList posts={POSTS} />
        </div>
      </section>

      <NewsletterCTA
        eyebrow="Newsletter"
        title="Never miss an update"
        desc="Subscribe for fresh insights on development, design and technology, no spam, unsubscribe anytime."
      />
    </>
  );
}
