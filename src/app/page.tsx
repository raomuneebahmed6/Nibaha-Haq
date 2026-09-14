import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Handshake, LineChart as LineChartIcon, GraduationCap } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { StatsSection } from "@/components/StatsSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { ServiceGrid } from "@/components/ServiceGrid";
import { CourseCard } from "@/components/CourseCard";
import { PortfolioCard } from "@/components/PortfolioCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { services } from "@/lib/data/services";
import { courses } from "@/lib/data/courses";
import { portfolioItems } from "@/lib/data/portfolio";
import { testimonials } from "@/lib/data/testimonials";
import { homeFaqs } from "@/lib/data/faqs";
import { processSteps, whyChooseUs } from "@/lib/data/homepage";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Digital Marketing & Technology Agency`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

const trustPoints = [
  { icon: ShieldCheck, label: "Strategy-first approach" },
  { icon: Handshake, label: "Transparent client communication" },
  { icon: LineChartIcon, label: "Data-backed decisions" },
  { icon: GraduationCap, label: "Practical training courses" },
];

const featuredServiceSlugs = ["digital-marketing", "seo", "web-development"];
const featuredServices = services.filter((service) => featuredServiceSlugs.includes(service.slug));

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <Hero />

      {/* Trusted / why businesses choose us */}
      <section className="border-b border-border bg-white py-12 sm:py-14">
        <Container>
          <Reveal className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {trustPoints.map((point) => (
              <div key={point.label} className="flex items-center gap-2.5 text-sm font-medium text-ink/65">
                <point.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                {point.label}
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Services overview */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What We Do"
            title="Full-Service Digital Marketing & Technology Solutions"
            description="From strategy and search visibility to design, development and paid advertising — everything your business needs to grow online, under one roof."
          />
          <div className="mt-12">
            <ServiceGrid services={services} />
          </div>
        </Container>
      </section>

      {/* Featured services */}
      <section className="bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Where We Deliver the Most Impact"
            title="Featured Services"
            description="These three services form the foundation most growth strategies are built on."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredServices.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.08} className="h-full">
                <div className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-border">
                  <service.icon className="h-9 w-9 text-primary" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-semibold text-ink">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/60">{service.heroParagraph}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                  >
                    Explore {service.shortTitle}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A Growth Partner, Not Just a Service Provider"
            description="We combine strategic thinking with hands-on execution so your marketing works as one connected system."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {whyChooseUs.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06} className="flex gap-4 rounded-2xl border border-border bg-white p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Process */}
      <section className="bg-ink py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Process"
            title="A Clear Path From Strategy to Results"
            description="Every engagement follows the same disciplined process, whether it's a single campaign or a full digital overhaul."
            className="[&_h2]:text-white [&_p]:text-white/65"
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08} className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-accent">
                  <step.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="mt-4 block text-xs font-bold uppercase tracking-wider text-white/40">
                  Step {index + 1}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Results / statistics */}
      <StatsSection />

      {/* Portfolio preview */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Work"
            title="A Look at Recent Projects"
            description="A sample of the type of work we deliver across web development, branding, social media and advertising."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.slice(0, 3).map((item, index) => (
              <PortfolioCard key={item.slug} item={item} index={index} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <ButtonLink href="/portfolio" variant="outline-dark">
              View Full Portfolio
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Courses / training */}
      <section className="bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Nibaha Haq Academy"
            title="Learn the Skills Behind the Services We Deliver"
            description="Practical, hands-on training courses in web development, social media marketing and YouTube automation."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {courses.map((course, index) => (
              <CourseCard key={course.slug} course={course} index={index} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <ButtonLink href="/courses" variant="outline-dark">
              Explore All Courses
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Client Feedback"
            title="What It's Like to Work With Us"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mx-auto mt-12 max-w-3xl">
            <FAQ items={homeFaqs} />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
