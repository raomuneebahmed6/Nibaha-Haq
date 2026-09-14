import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function CTASection({
  title = "Ready to Grow Your Business Online?",
  description = "Tell us about your goals and we'll recommend the right services to help you get there.",
  primaryLabel = "Get a Free Consultation",
  primaryHref = "/contact",
  secondaryLabel = "Get a Quote",
  secondaryHref = "/get-a-quote",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-primary/30 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">{description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href={primaryHref} variant="accent">
              {primaryLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={secondaryHref} variant="outline">
              {secondaryLabel}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
