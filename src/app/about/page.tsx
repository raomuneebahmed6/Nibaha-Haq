import type { Metadata } from "next";
import { Target, Eye, Compass, Award, Megaphone, GraduationCap } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/CTASection";
import { services } from "@/lib/data/services";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Nibaha Haq, a digital marketing and technology agency helping businesses grow through strategy-led digital services and practical training courses.",
  alternates: { canonical: "/about" },
};

const approachPoints = [
  {
    icon: Compass,
    title: "Research before recommendations",
    description:
      "We start every engagement by understanding your business, audience and competitors before proposing a direction.",
  },
  {
    icon: Target,
    title: "Goals define the plan",
    description:
      "Every strategy is built around clearly defined business goals, not generic best practices applied blindly.",
  },
  {
    icon: Award,
    title: "Quality over shortcuts",
    description:
      "We avoid tactics that risk long-term credibility for short-term gains, whether in SEO, ads or content.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Digital Marketing & Technology Agency Built on Strategy"
        description="We help businesses grow their online presence through coordinated digital marketing, technology and training services."
        breadcrumbs={[{ label: "About" }]}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Who We Are</span>
              <h2 className="mt-3 text-3xl font-bold text-ink">
                {siteConfig.name} is a full-service digital growth partner
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-ink/65">
                <p>
                  {siteConfig.legalName} works with businesses that want their online presence to
                  actually contribute to growth, not just exist. We bring together strategy,
                  design, development and advertising expertise under one team, so every part of
                  your digital presence works toward the same goals.
                </p>
                <p>
                  Alongside client services, we run a training academy that teaches the same
                  practical skills our team uses every day — because we believe good marketing and
                  development knowledge should be accessible, not locked behind agency walls.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">What We Do</span>
              <h2 className="mt-3 text-3xl font-bold text-ink">Services and training under one roof</h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-ink/65">
                <p>
                  Our service offering spans digital marketing, social media marketing, SEO, web
                  development, graphic designing, YouTube automation, Meta Ads and Google Ads.
                  Each service is delivered by a focused process rather than a one-size-fits-all
                  package.
                </p>
                <p>
                  Our courses in web development, social media marketing and YouTube automation
                  give individuals and business owners the practical, hands-on skills to manage
                  their own digital presence or start a new career path.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Reveal className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-border">
              <Target className="h-9 w-9 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold text-ink">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                To help businesses build a genuine, sustainable digital presence through
                strategy-led marketing and technology services, backed by transparent
                communication and measurable work.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-border">
              <Eye className="h-9 w-9 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold text-ink">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                To be a long-term digital growth partner for the businesses we work with, and to
                make practical digital skills accessible through our training courses.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Approach"
            title="How We Work With Every Client"
            description="A consistent, disciplined approach applied across every service we deliver."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {approachPoints.map((point, index) => (
              <Reveal key={point.title} delay={index * 0.08} className="rounded-2xl border border-border bg-white p-6">
                <point.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-ink">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{point.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Reveal className="rounded-2xl bg-ink p-8 text-white">
              <Megaphone className="h-9 w-9 text-accent" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold">Services</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {services.length} core digital services covering marketing, design, development
                and advertising — delivered as one coordinated strategy.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="rounded-2xl bg-ink p-8 text-white">
              <GraduationCap className="h-9 w-9 text-accent" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold">Training</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Practical courses in web development, social media marketing and YouTube
                automation, built around hands-on projects rather than theory alone.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTASection
        title="Let's Talk About Your Business Goals"
        description="Whether you need full-service execution or want to learn the skills yourself, we'd love to hear what you're working on."
      />
    </>
  );
}
