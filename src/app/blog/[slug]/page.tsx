import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogCard } from "@/components/BlogCard";
import { CTASection } from "@/components/CTASection";
import { ButtonLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from "@/lib/data/blog";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.metaDescription,
      url: `${siteConfig.url}/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: siteConfig.legalName },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={articleSchema} />

      <section className="bg-ink py-14 sm:py-16">
        <Container>
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} invert />
          <span className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold text-accent">
            <Tag className="h-3 w-3" aria-hidden="true" />
            {post.category}
          </span>
          <h1 className="text-balance mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-6 text-sm text-white/60">
            <span className="inline-flex items-center gap-2">
              <User className="h-4 w-4" aria-hidden="true" />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <time dateTime={post.date}>{formattedDate}</time>
            </span>
            <span>{post.readTime}</span>
          </div>
        </Container>
      </section>

      <article className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 flex h-52 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark sm:h-64">
              <span className="text-sm font-medium text-white/70">{post.category}</span>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-ink/70 sm:text-lg">
              {post.content.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-ink">Want help implementing this?</h2>
              <p className="mt-2 text-sm text-ink/60">
                Our team can help turn strategies like this into a working plan for your business.
              </p>
              <ButtonLink href="/contact" variant="primary" className="mt-5">
                Talk to Our Team
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </article>

      {related.length ? (
        <section className="bg-surface py-16 sm:py-20">
          <Container>
            <SectionHeading eyebrow="Keep Reading" title="Related Articles" />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {related.map((item, index) => (
                <BlogCard key={item.slug} post={item} index={index} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CTASection />
    </>
  );
}
