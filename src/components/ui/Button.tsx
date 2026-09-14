"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const MotionLink = motion.create(Link);

const base =
  "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-primary text-white shadow-sm shadow-primary/25 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30",
  accent:
    "bg-accent text-white shadow-sm shadow-accent/30 hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/40",
  outline: "border border-white/30 text-white hover:bg-white/10",
  "outline-dark": "border border-ink/15 text-ink hover:border-primary/40 hover:bg-primary/5",
  ghost: "text-ink hover:bg-ink/5",
};

export type ButtonVariant = keyof typeof variants;

interface CommonProps {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}

type ConflictingHandlers = "onAnimationStart" | "onAnimationEnd" | "onDrag" | "onDragStart" | "onDragEnd";

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: CommonProps & { href: string } & Omit<React.ComponentProps<typeof Link>, "href" | "className" | ConflictingHandlers>) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionLink
      href={href}
      className={cn(base, variants[variant], className)}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.035 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      {...props}
    >
      {children}
    </MotionLink>
  );
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: CommonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, ConflictingHandlers>) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.button
      className={cn(base, variants[variant], className)}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
