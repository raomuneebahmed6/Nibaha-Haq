"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function ServiceCard({
  slug,
  title,
  tagline,
  icon,
  index = 0,
}: {
  slug: string;
  title: string;
  tagline: string;
  icon: ReactNode;
  index?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.06, ease: "easeOut" }}
      whileHover={shouldReduceMotion ? undefined : { y: -8 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 sm:p-7"
    >
      <span
        className="absolute inset-x-0 top-0 h-1 origin-center scale-x-0 bg-gradient-to-r from-primary via-primary-light to-accent transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden="true"
      />
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-ink transition-colors duration-200 group-hover:text-primary">
        <Link href={`/services/${slug}`} className="focus-visible:outline-none">
          <span className="absolute inset-0" aria-hidden="true" />
          {title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{tagline}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5" aria-hidden="true" />
      </span>
    </motion.div>
  );
}
