import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-16 sm:py-20">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-primary/25 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        <Breadcrumbs items={breadcrumbs} invert />
        {eyebrow ? (
          <span className="mt-6 inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="text-balance mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="text-balance mt-4 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            {description}
          </p>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
