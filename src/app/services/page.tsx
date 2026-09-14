import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { ServiceGrid } from "@/components/ServiceGrid";
import { CTASection } from "@/components/CTASection";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Digital Marketing & Technology Services",
  description:
    "Explore our full range of digital marketing and technology services, including SEO, social media marketing, web development, graphic design, YouTube automation, Meta Ads and Google Ads.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Digital Marketing & Technology Services Built for Growth"
        description="Every service is delivered with clear strategy, transparent reporting and a process built around your specific business goals."
        breadcrumbs={[{ label: "Services" }]}
      />
      <section className="py-20 sm:py-24">
        <Container>
          <ServiceGrid services={services} />
        </Container>
      </section>
      <CTASection
        title="Not Sure Which Service You Need?"
        description="Tell us about your business and goals, and we'll recommend the right combination of services."
        primaryLabel="Get a Free Consultation"
        primaryHref="/contact"
        secondaryLabel="Request a Quote"
        secondaryHref="/get-a-quote"
      />
    </>
  );
}
