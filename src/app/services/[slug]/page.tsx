import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { ButtonLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/JsonLd";
import { getRelatedServices, getServiceBySlug, services } from "@/lib/data/services";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.metaDescription,
      url: `${siteConfig.url}/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service);
  const Icon = service.icon;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    areaServed: "Worldwide",
    url: `${siteConfig.url}/services/${service.slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.heroParagraph}
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: service.shortTitle }]}
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href="/get-a-quote" variant="accent">
            Get a Quote for {service.shortTitle}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Talk to Our Team
          </ButtonLink>
        </div>
      </PageHero>

      {/* Overview */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-ink sm:text-3xl">Overview</h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-ink/65">
                {service.overview.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1} className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-ink/50">
                <Users className="h-4 w-4" aria-hidden="true" />
                Who It&apos;s For
              </h3>
              <ul className="mt-4 space-y-3">
                {service.whoItsFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink/70">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="bg-surface py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Business Benefits"
            title={`Why Businesses Invest in ${service.shortTitle}`}
            align="left"
            className="mx-0 text-left"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 0.06} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-border">
                <h3 className="text-base font-semibold text-ink">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{benefit.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* What we offer */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="What We Offer"
            title="What's Included in This Service"
            align="left"
            className="mx-0 text-left"
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {service.offerings.map((offering) => (
              <div key={offering.title} className="flex gap-3 rounded-xl border border-border p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-semibold text-ink">{offering.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/60">{offering.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-ink py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Process"
            title={`How We Deliver ${service.shortTitle}`}
            className="[&_h2]:text-white [&_p]:text-white/65"
          />
          <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {service.process.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06} as="li">
                <span className="text-3xl font-bold text-white/20">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Why it matters */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface p-8 text-center sm:p-10">
            <h2 className="text-2xl font-bold text-ink">Why {service.shortTitle} Matters</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/65">{service.whyItMatters}</p>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="FAQ" title={`${service.shortTitle} Questions, Answered`} />
          <div className="mx-auto mt-12 max-w-3xl">
            <FAQ items={service.faqs} />
          </div>
        </Container>
      </section>

      {/* Related services */}
      {related.length ? (
        <section className="py-16 sm:py-20">
          <Container>
            <SectionHeading eyebrow="Related Services" title="You Might Also Need" />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group rounded-2xl border border-border p-6 transition-colors hover:border-primary/40 hover:bg-primary/5"
                >
                  <item.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                  <h3 className="mt-3 text-base font-semibold text-ink">{item.title}</h3>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CTASection
        title={`Ready to Get Started With ${service.shortTitle}?`}
        description="Let's discuss your goals and build a plan tailored to your business."
      />
    </>
  );
}
