"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const highlights = [
  "Digital Marketing",
  "SEO",
  "Social Media Marketing",
  "Web Development",
  "Paid Advertising",
  "YouTube Automation",
  "Graphic Design",
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: "easeOut" as const },
        };

  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-16 sm:pb-28 sm:pt-24">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-10 top-1/3 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            Digital Marketing &amp; Technology Agency
          </motion.span>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-balance mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Grow Your Business in the Digital World
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-balance mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            We help businesses grow online through Digital Marketing, SEO, Social Media Marketing,
            Web Development, Paid Advertising, YouTube Automation and Graphic Design — combined
            into one clear strategy built around real results.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href="/contact" variant="accent">
              Get a Free Consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/services" variant="outline">
              Explore Our Services
            </ButtonLink>
          </motion.div>

          <motion.ul
            {...fadeUp(0.4)}
            className="mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-white/45"
          >
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white/30" aria-hidden="true" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </section>
  );
}
