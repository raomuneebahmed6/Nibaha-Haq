"use client";

import { useState } from "react";
import type { PortfolioItem } from "@/lib/types";
import { portfolioCategories } from "@/lib/data/portfolio";
import { PortfolioCard } from "@/components/PortfolioCard";
import { cn } from "@/lib/utils";

export function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const categories = ["All", ...portfolioCategories];
  const filtered = activeCategory === "All" ? items : items.filter((item) => item.category === activeCategory);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter portfolio by category">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === category
                ? "border-primary bg-primary text-white"
                : "border-border text-ink/60 hover:border-primary/40 hover:text-primary",
            )}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, index) => (
          <PortfolioCard key={item.slug} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
