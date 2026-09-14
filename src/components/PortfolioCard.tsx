import {
  Code2,
  Share2,
  Palette,
  PenTool,
  Search,
  Target,
  ArrowUpRight,
} from "lucide-react";
import type { PortfolioItem } from "@/lib/types";
import { Reveal } from "@/components/ui/Reveal";

const categoryStyles: Record<string, { gradient: string; icon: typeof Code2 }> = {
  "Web Development": { gradient: "from-primary to-primary-dark", icon: Code2 },
  "Social Media": { gradient: "from-teal to-primary", icon: Share2 },
  Branding: { gradient: "from-accent to-accent-dark", icon: Palette },
  "Graphic Design": { gradient: "from-primary-light to-teal", icon: PenTool },
  SEO: { gradient: "from-ink to-primary-dark", icon: Search },
  Advertising: { gradient: "from-accent-dark to-primary", icon: Target },
};

export function PortfolioCard({ item, index = 0 }: { item: PortfolioItem; index?: number }) {
  const style = categoryStyles[item.category] ?? categoryStyles["Web Development"];
  const Icon = style.icon;

  return (
    <Reveal delay={index * 0.05} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
        <div
          className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${style.gradient}`}
          role="img"
          aria-label={`${item.title} — ${item.category} project preview`}
        >
          <Icon className="h-14 w-14 text-white/90 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6" aria-hidden="true" />
          <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            {item.category}
          </span>
          <div
            className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10"
            aria-hidden="true"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-semibold text-ink transition-colors duration-200 group-hover:text-primary">{item.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{item.description}</p>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {item.servicesProvided.map((service) => (
              <li
                key={service}
                className="rounded-full bg-surface px-2.5 py-1 text-xs font-medium text-ink/60"
              >
                {service}
              </li>
            ))}
          </ul>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
            View Project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </span>
        </div>
      </article>
    </Reveal>
  );
}
