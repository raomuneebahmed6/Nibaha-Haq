import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
  itemClassName,
}: {
  items: ReactNode[];
  className?: string;
  itemClassName?: string;
}) {
  return (
    <div className={cn("marquee-mask overflow-hidden", className)}>
      <div className="flex w-max animate-marquee gap-10 motion-reduce:animate-none">
        {[...items, ...items].map((item, index) => (
          <span key={index} className={cn("flex shrink-0 items-center gap-2 whitespace-nowrap", itemClassName)}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
