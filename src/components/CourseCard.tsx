import Link from "next/link";
import { ArrowRight, Clock, BarChart3 } from "lucide-react";
import type { Course } from "@/lib/types";
import { Reveal } from "@/components/ui/Reveal";

export function CourseCard({ course, index = 0 }: { course: Course; index?: number }) {
  const Icon = course.icon;

  return (
    <Reveal delay={index * 0.08} className="h-full">
      <div className="group relative flex h-full -translate-y-0 flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
        <div className="relative flex items-center justify-between overflow-hidden bg-ink px-6 py-8">
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 opacity-0 transition-opacity duration-500 group-hover:from-primary/40 group-hover:via-transparent group-hover:to-accent/30 group-hover:opacity-100"
            aria-hidden="true"
          />
          <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
          <span className="relative rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
            {course.level}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <h3 className="text-lg font-semibold text-ink transition-colors duration-200 group-hover:text-primary">
            <Link href={`/courses/${course.slug}`} className="focus-visible:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              {course.title}
            </Link>
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{course.tagline}</p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-ink/55">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {course.duration}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BarChart3 className="h-3.5 w-3.5" aria-hidden="true" />
              {course.format}
            </span>
          </div>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
            Get Course Details
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Reveal>
  );
}
