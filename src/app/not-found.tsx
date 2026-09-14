import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <Container>
        <div className="mx-auto max-w-lg text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">404 Error</span>
          <h1 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Page Not Found</h1>
          <p className="mt-4 text-base leading-relaxed text-ink/60">
            The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href="/" variant="primary">
              Back to Home
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline-dark">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
