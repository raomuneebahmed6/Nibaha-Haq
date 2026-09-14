import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/icons/SocialIcons";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with our digital marketing and technology agency to discuss your project, ask a question, or request a free consultation.",
  alternates: { canonical: "/contact" },
};

const socialLinks = [
  { label: "Facebook", href: siteConfig.social.facebook, Icon: FacebookIcon },
  { label: "Instagram", href: siteConfig.social.instagram, Icon: InstagramIcon },
  { label: "LinkedIn", href: siteConfig.social.linkedin, Icon: LinkedinIcon },
  { label: "Twitter / X", href: siteConfig.social.twitter, Icon: TwitterIcon },
  { label: "YouTube", href: siteConfig.social.youtube, Icon: YoutubeIcon },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Project"
        description="Have a question or ready to start? Send us a message and our team will get back to you shortly."
        breadcrumbs={[{ label: "Contact" }]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <Reveal className="lg:col-span-2 rounded-2xl border border-border bg-white p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-ink">Send Us a Message</h2>
              <p className="mt-2 text-sm text-ink/60">
                Fill out the form and we&apos;ll respond as soon as possible.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </Reveal>

            <Reveal delay={0.1} className="space-y-6">
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-ink/50">
                  Contact Information
                </h3>
                <ul className="mt-4 space-y-4 text-sm text-ink/70">
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary">
                      {siteConfig.contact.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`} className="hover:text-primary">
                      {siteConfig.contact.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{siteConfig.contact.addressPlaceholder}</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-ink/50">Follow Us</h3>
                <div className="mt-4 flex items-center gap-3">
                  {socialLinks.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink/60 ring-1 ring-border transition-colors hover:bg-primary hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
