import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import type { BlogPost } from "@/lib/types";
import { Reveal } from "@/components/ui/Reveal";

export function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Reveal delay={index * 0.05} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg">
        <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-ink to-primary-dark">
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            {post.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-4 text-xs text-ink/50">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
              <time dateTime={post.date}>{formattedDate}</time>
            </span>
            <span className="inline-flex items-center gap-1">
              <User className="h-3.5 w-3.5" aria-hidden="true" />
              {post.author}
            </span>
          </div>
          <h3 className="mt-3 text-lg font-semibold text-ink">
            <Link href={`/blog/${post.slug}`} className="focus-visible:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              {post.title}
            </Link>
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{post.excerpt}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
            Read Article
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>
      </article>
    </Reveal>
  );
}
