# Nibaha Haq — Digital Marketing & Technology Agency Website

A multi-page marketing website for a digital marketing and technology agency, built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion and Lucide React.

## Stack

- **Next.js 16** (App Router, static generation for all routes)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** for scroll reveals and interaction animations
- **Lucide React** for icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

- `src/app` — routes (pages, layouts, sitemap, robots, dynamic OG images)
- `src/components` — reusable UI, layout and section components
- `src/lib/data` — content data for services, courses, portfolio, blog, testimonials and FAQs
- `src/lib/types.ts` — shared TypeScript types for content data

Service pages (`/services/[slug]`), course pages (`/courses/[slug]`) and blog articles (`/blog/[slug]`) are driven by the data files in `src/lib/data`, so new entries can be added there without touching route code.

## Content Placeholders

Contact details (email, phone, address) and testimonials/portfolio items are placeholders and should be replaced with real business information before launch. See `src/lib/site-config.ts` and `src/lib/data/`.

## Build

```bash
npm run build
npm run start
```
