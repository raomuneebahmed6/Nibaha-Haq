import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-primary text-white shadow-sm shadow-primary/20 hover:bg-primary-dark hover:shadow-md hover:shadow-primary/30",
  accent:
    "bg-accent text-ink shadow-sm shadow-accent/30 hover:bg-accent-dark hover:shadow-md",
  outline:
    "border border-white/30 text-white hover:bg-white/10",
  "outline-dark":
    "border border-ink/15 text-ink hover:bg-ink/5",
  ghost: "text-ink hover:bg-ink/5",
};

export type ButtonVariant = keyof typeof variants;

interface CommonProps {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: CommonProps & { href: string } & Omit<React.ComponentProps<typeof Link>, "href" | "className">) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
