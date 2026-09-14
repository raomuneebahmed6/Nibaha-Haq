import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a tailored quote for digital marketing, SEO, social media marketing, web development, graphic design, YouTube automation, Meta Ads or Google Ads.",
  alternates: { canonical: "/get-a-quote" },
};

const reasons = [
  "A response from our team within one business day",
  "A proposal tailored to your goals, not a generic package",
  "No pressure — just a clear picture of scope and pricing",
  "Guidance on which services best fit your current stage",
];

export default function GetAQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Get a Quote"
        title="Tell Us About Your Project"
        description="Share a few details about your business and goals, and we'll get back to you with a tailored quote."
        breadcrumbs={[{ label: "Get a Quote" }]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <Reveal className="lg:col-span-2 rounded-2xl border border-border bg-white p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-ink">Request Your Quote</h2>
              <p className="mt-2 text-sm text-ink/60">
                The more detail you share, the more accurate your quote will be.
              </p>
              <div className="mt-6">
                <QuoteForm />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink/50">What Happens Next</h3>
              <ul className="mt-4 space-y-4">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-2.5 text-sm text-ink/70">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                    {reason}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
