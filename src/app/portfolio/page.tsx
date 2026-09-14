import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { CTASection } from "@/components/CTASection";
import { portfolioItems } from "@/lib/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A showcase of web development, social media, branding, graphic design, SEO and advertising projects delivered by our team.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="A Portfolio of Real Digital Work"
        description="A sample of the type of projects we deliver across web development, branding, social media, design, SEO and advertising."
        breadcrumbs={[{ label: "Portfolio" }]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <p className="mb-8 text-sm text-ink/50">
            Note: the projects below illustrate the type and scope of work we deliver. Case
            studies will be updated with real client projects as they are published.
          </p>
          <PortfolioGrid items={portfolioItems} />
        </Container>
      </section>
      <CTASection
        title="Want Results Like These for Your Business?"
        description="Let's talk about your project and how we can help you achieve similar outcomes."
      />
    </>
  );
}
