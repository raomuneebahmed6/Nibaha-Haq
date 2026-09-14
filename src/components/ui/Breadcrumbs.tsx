import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items, invert = false }: { items: Crumb[]; invert?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className={cn("flex flex-wrap items-center gap-1.5", invert ? "text-white/50" : "text-ink/55")}>
        <li className="flex items-center gap-1.5">
          <Link
            href="/"
            className={cn("flex items-center gap-1", invert ? "hover:text-white" : "hover:text-primary")}
            aria-label="Home"
          >
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
        </li>
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {item.href ? (
              <Link href={item.href} className={invert ? "hover:text-white" : "hover:text-primary"}>
                {item.label}
              </Link>
            ) : (
              <span className={cn("font-medium", invert ? "text-white" : "text-ink")} aria-current="page">
                {item.label}
              </span>
            )}
            {index < items.length - 1 ? (
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
