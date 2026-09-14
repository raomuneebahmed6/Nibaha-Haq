import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { BlogCard } from "@/components/BlogCard";
import { CTASection } from "@/components/CTASection";
import { blogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical insights on digital marketing, SEO, social media marketing, web development, paid advertising, YouTube and business growth.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights on Digital Marketing & Growth"
        description="Practical articles on SEO, social media, web development, paid advertising and building an online presence that actually converts."
        breadcrumbs={[{ label: "Blog" }]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        title="Have a Topic You Want Us to Cover?"
        description="Reach out with questions about your digital marketing or web development goals."
      />
    </>
  );
}
