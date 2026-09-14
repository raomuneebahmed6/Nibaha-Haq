import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, BarChart3, Laptop, Briefcase } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { ButtonLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/JsonLd";
import { courses, getCourseBySlug, getRelatedCourses } from "@/lib/data/courses";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};

  return {
    title: course.title,
    description: course.metaDescription,
    alternates: { canonical: `/courses/${course.slug}` },
    openGraph: {
      title: `${course.title} | ${siteConfig.name}`,
      description: course.metaDescription,
      url: `${siteConfig.url}/courses/${course.slug}`,
    },
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const related = getRelatedCourses(course);
  const Icon = course.icon;

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.metaDescription,
    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
      sameAs: siteConfig.url,
    },
    url: `${siteConfig.url}/courses/${course.slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: course.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <JsonLd data={courseSchema} />
      <JsonLd data={faqSchema} />

      <PageHero
        eyebrow="Course"
        title={course.title}
        description={course.tagline}
        breadcrumbs={[{ label: "Courses", href: "/courses" }, { label: course.shortTitle }]}
      >
        <div className="mt-6 flex flex-wrap gap-6 text-sm text-white/70">
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4" aria-hidden="true" /> {course.duration}
          </span>
          <span className="inline-flex items-center gap-2">
            <BarChart3 className="h-4 w-4" aria-hidden="true" /> {course.level}
          </span>
          <span className="inline-flex items-center gap-2">
            <Laptop className="h-4 w-4" aria-hidden="true" /> {course.format}
          </span>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href="/get-a-quote" variant="accent">
            Enroll Now
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Get Course Details
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
              <h2 className="mt-5 text-2xl font-bold text-ink sm:text-3xl">Course Overview</h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-ink/65">
                {course.overview.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1} className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink/50">Who Should Join</h3>
              <ul className="mt-4 space-y-3">
                {course.whoShouldJoin.map((item) => (
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

      {/* What you'll learn */}
      <section className="bg-surface py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Learning Outcomes" title="What Students Will Learn" align="left" className="mx-0 text-left" />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {course.whatYouWillLearn.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl bg-white p-5 ring-1 ring-border">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-ink/70">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Modules */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Curriculum" title="Course Modules" align="left" className="mx-0 text-left" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {course.modules.map((module, index) => (
              <Reveal key={module.title} delay={index * 0.05} className="rounded-2xl border border-border bg-white p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Module {index + 1}
                </span>
                <h3 className="mt-2 text-base font-semibold text-ink">{module.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {module.topics.map((topic) => (
                    <li key={topic} className="text-sm text-ink/60">
                      • {topic}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Projects & Outcomes */}
      <section className="bg-ink py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="flex items-center gap-2 text-accent">
                <Laptop className="h-5 w-5" aria-hidden="true" />
                <h2 className="text-sm font-semibold uppercase tracking-wider">Practical Projects</h2>
              </div>
              <ul className="mt-5 space-y-3">
                {course.projects.map((project) => (
                  <li key={project} className="flex items-start gap-2.5 text-sm text-white/70">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {project}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex items-center gap-2 text-accent">
                <Briefcase className="h-5 w-5" aria-hidden="true" />
                <h2 className="text-sm font-semibold uppercase tracking-wider">Career &amp; Business Opportunities</h2>
              </div>
              <ul className="mt-5 space-y-3">
                {course.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2.5 text-sm text-white/70">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="FAQ" title={`${course.shortTitle} Course Questions`} />
          <div className="mx-auto mt-12 max-w-3xl">
            <FAQ items={course.faqs} />
          </div>
        </Container>
      </section>

      {/* Related courses */}
      {related.length ? (
        <section className="bg-surface py-16 sm:py-20">
          <Container>
            <SectionHeading eyebrow="Related Courses" title="You Might Also Like" />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/courses/${item.slug}`}
                  className="group rounded-2xl border border-border bg-white p-6 transition-colors hover:border-primary/40"
                >
                  <item.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                  <h3 className="mt-3 text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink/60">{item.tagline}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Get Course Details
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CTASection
        title={`Ready to Start the ${course.shortTitle} Course?`}
        description="Enroll now or reach out to get complete course details before you decide."
        primaryLabel="Enroll Now"
        primaryHref="/get-a-quote"
        secondaryLabel="Get Course Details"
        secondaryHref="/contact"
      />
    </>
  );
}
