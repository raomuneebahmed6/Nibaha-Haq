import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}, explaining how we collect, use and protect your information.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: [Add Date]"
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="prose-content mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-ink/70 sm:text-base">
            <p>
              This Privacy Policy explains how {siteConfig.legalName} (&quot;we&quot;, &quot;us&quot;
              or &quot;our&quot;) collects, uses and protects information when you visit our
              website or use our services. This is a general placeholder policy structured so it
              can be updated with business-specific legal details.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-ink">1. Information We Collect</h2>
              <p className="mt-3">
                We may collect information you provide directly, such as your name, email address,
                phone number and any details submitted through our contact or quote request forms.
                We may also collect limited technical information such as browser type and general
                usage data through standard analytics tools.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink">2. How We Use Information</h2>
              <p className="mt-3">
                Information collected is used to respond to enquiries, provide requested services,
                improve our website, and communicate updates relevant to services you have
                requested. We do not sell personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink">3. Cookies &amp; Tracking</h2>
              <p className="mt-3">
                Our website may use cookies or similar technologies to support basic functionality
                and analytics. You can control cookie preferences through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink">4. Data Sharing</h2>
              <p className="mt-3">
                We may share information with trusted service providers who assist in operating
                our website or delivering our services, under obligations to keep it confidential.
                We do not share personal information for unrelated marketing purposes without
                consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink">5. Data Security</h2>
              <p className="mt-3">
                We take reasonable measures to protect information submitted to us, though no
                method of transmission or storage is completely secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink">6. Your Rights</h2>
              <p className="mt-3">
                You may request access to, correction of, or deletion of your personal information
                by contacting us using the details on our Contact page.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink">7. Changes to This Policy</h2>
              <p className="mt-3">
                This policy may be updated periodically. Continued use of our website after
                changes indicates acceptance of the revised policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink">8. Contact Us</h2>
              <p className="mt-3">
                For questions about this Privacy Policy, contact us at{" "}
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
