import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for using the ${siteConfig.name} website and services.`,
  alternates: { canonical: "/terms-and-conditions" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Last updated: [Add Date]"
        breadcrumbs={[{ label: "Terms & Conditions" }]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-ink/70 sm:text-base">
            <p>
              These Terms and Conditions govern your use of the {siteConfig.legalName} website and
              services. This is a general placeholder document structured so it can be updated
              with business-specific legal details.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-ink">1. Acceptance of Terms</h2>
              <p className="mt-3">
                By accessing this website or engaging our services, you agree to be bound by these
                Terms and Conditions. If you do not agree, please do not use this website or our
                services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink">2. Services</h2>
              <p className="mt-3">
                We provide digital marketing, technology and training services as described on
                this website. Specific scope, deliverables, timelines and pricing for any
                engagement are agreed separately with each client.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink">3. No Guaranteed Outcomes</h2>
              <p className="mt-3">
                While we apply industry best practices, we do not guarantee specific results such
                as search engine rankings, follower counts, sales figures, ad performance, or
                YouTube channel growth or monetization, as these depend on factors outside our
                direct control.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink">4. Payments &amp; Refunds</h2>
              <p className="mt-3">
                Payment terms, invoicing schedules and any applicable refund conditions are agreed
                on a per-project or per-course basis and outlined in individual service or
                enrollment agreements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink">5. Intellectual Property</h2>
              <p className="mt-3">
                Unless otherwise agreed in writing, final deliverables are transferred to the
                client upon full payment. Course materials and internal frameworks remain the
                intellectual property of {siteConfig.legalName}.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink">6. Course Enrollment</h2>
              <p className="mt-3">
                Enrollment in any training course does not constitute a guarantee of employment,
                income, certification recognized by a third party, or any specific outcome.
                Courses are intended to build practical skills through instruction and project
                work.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink">7. Limitation of Liability</h2>
              <p className="mt-3">
                To the extent permitted by law, {siteConfig.legalName} is not liable for indirect
                or consequential losses arising from the use of our website, services or course
                content.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink">8. Changes to These Terms</h2>
              <p className="mt-3">
                These Terms may be updated periodically. Continued use of our website or services
                after changes indicates acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink">9. Contact Us</h2>
              <p className="mt-3">
                For questions about these Terms, contact us at{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline">
                  {siteConfig.contact.email}
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
