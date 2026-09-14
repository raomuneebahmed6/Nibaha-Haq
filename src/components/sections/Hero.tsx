"use client";

import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";

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
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const blobOneY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const blobTwoY = useTransform(scrollYProgress, [0, 1], [0, 140]);

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: "easeOut" as const },
        };

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-ink pb-16 pt-16 sm:pb-20 sm:pt-24">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      <motion.div
        style={shouldReduceMotion ? undefined : { y: blobOneY }}
        className="animate-float pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary/35 blur-3xl"
        aria-hidden="true"
      />
      <motion.div
        style={shouldReduceMotion ? undefined : { y: blobTwoY }}
        className="animate-float-slow pointer-events-none absolute -right-10 top-1/3 h-80 w-80 rounded-full bg-accent/25 blur-3xl"
        aria-hidden="true"
      />
      <motion.div
        style={shouldReduceMotion ? undefined : { opacity: contentOpacity, y: contentY }}
        className="relative"
      >
        <Container>
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
              Grow Your Business in the{" "}
              <span className="text-gradient">Digital World</span>
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
          </div>
        </Container>

        <motion.div {...fadeUp(0.4)} className="mt-12">
          <Marquee
            items={highlights.map((item) => (
              <span key={item} className="flex items-center gap-2 text-xs font-medium text-white/40">
                <span className="h-1 w-1 rounded-full bg-white/30" aria-hidden="true" />
                {item}
              </span>
            ))}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
