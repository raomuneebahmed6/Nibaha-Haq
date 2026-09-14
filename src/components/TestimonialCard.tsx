import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/lib/types";
import { Reveal } from "@/components/ui/Reveal";

export function TestimonialCard({ testimonial, index = 0 }: { testimonial: Testimonial; index?: number }) {
  return (
    <Reveal delay={index * 0.06} className="h-full">
      <figure className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-7">
        <Quote className="h-8 w-8 text-primary/25" aria-hidden="true" />
        <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/70 sm:text-base">
          “{testimonial.quote}”
        </blockquote>
        <div
          className="mt-4 flex items-center gap-0.5"
          role="img"
          aria-label={`Rated ${testimonial.rating} out of 5 stars`}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < testimonial.rating ? "fill-accent text-accent" : "text-border"}`}
              aria-hidden="true"
            />
          ))}
        </div>
        <figcaption className="mt-4 border-t border-border pt-4">
          <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
          <p className="text-xs text-ink/55">
            {testimonial.role}, {testimonial.company}
          </p>
        </figcaption>
      </figure>
    </Reveal>
  );
}
