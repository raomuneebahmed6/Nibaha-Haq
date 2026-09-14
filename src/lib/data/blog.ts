import type { BlogPost } from "@/lib/types";

export const blogCategories = [
  "Digital Marketing",
  "SEO",
  "Social Media Marketing",
  "Web Development",
  "Paid Advertising",
  "YouTube",
  "Graphic Design",
  "Business Growth",
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "building-a-digital-marketing-strategy-that-actually-works",
    title: "Building a Digital Marketing Strategy That Actually Works",
    metaDescription:
      "Learn how to build a digital marketing strategy that connects SEO, social media, content and paid advertising into one coordinated plan.",
    excerpt:
      "Most businesses run scattered marketing tactics instead of a real strategy. Here's how to connect your channels around one clear plan.",
    author: "Nibaha Haq Team",
    date: "2026-01-14",
    category: "Digital Marketing",
    readTime: "6 min read",
    image: "placeholder-blog-1",
    content: [
      "A surprising number of businesses treat digital marketing as a list of separate tasks: post on Instagram, run a boosted ad, maybe write a blog post when there's time. Each action might look reasonable on its own, but without a shared strategy behind them, they rarely add up to meaningful growth.",
      "A real digital marketing strategy starts with clarity on two things: who your customer actually is, and what specific action you want them to take. Everything else — channel selection, content themes, ad targeting — should be built around answering those two questions consistently.",
      "Once that foundation is set, the role of each channel becomes clearer. SEO and content marketing build long-term visibility for people actively searching for solutions. Social media builds familiarity and trust over time. Paid advertising accelerates visibility for specific offers or campaigns. None of these replace the others; they support different stages of the same customer journey.",
      "The biggest shift for most businesses is moving from 'what should we post today' to 'what is this month's content and campaign plan trying to achieve.' That single change in approach is often what separates marketing that feels busy from marketing that produces measurable results.",
    ],
    relatedPosts: ["on-page-vs-technical-seo-whats-the-difference", "why-consistent-social-media-posting-matters"],
  },
  {
    slug: "on-page-vs-technical-seo-whats-the-difference",
    title: "On-Page vs Technical SEO: What's the Difference?",
    metaDescription:
      "A clear breakdown of on-page SEO and technical SEO, why both matter, and how they work together to improve search visibility.",
    excerpt:
      "SEO isn't one task — it's several working together. Here's what on-page and technical SEO actually cover.",
    author: "Nibaha Haq Team",
    date: "2026-01-08",
    category: "SEO",
    readTime: "5 min read",
    image: "placeholder-blog-2",
    content: [
      "SEO is often talked about as if it's a single activity, but effective SEO actually combines several distinct areas of work. Two of the most commonly confused are on-page SEO and technical SEO.",
      "On-page SEO refers to the content and structure of individual pages: your titles, headings, body content, internal links and how well a page addresses a specific search intent. It's largely about relevance — does this page clearly answer what someone is searching for.",
      "Technical SEO, on the other hand, is about whether search engines can properly access, crawl and understand your site in the first place. This includes site speed, mobile usability, indexing issues, structured data and overall site architecture.",
      "You can have perfectly written content sitting on a page that search engines struggle to crawl properly, and it will still underperform. Similarly, a technically flawless website with thin, irrelevant content won't rank for competitive terms. A proper SEO audit looks at both together, because ranking well requires getting each piece right.",
    ],
    relatedPosts: ["how-a-website-seo-audit-uncovers-hidden-issues", "signs-your-website-needs-a-redesign"],
  },
  {
    slug: "why-consistent-social-media-posting-matters",
    title: "Why Consistent Social Media Posting Matters More Than Viral Moments",
    metaDescription:
      "Consistency, not virality, is what actually builds a reliable social media presence for businesses. Here's why.",
    excerpt:
      "Chasing viral posts is tempting, but consistent, on-brand content is what actually builds long-term audience trust.",
    author: "Nibaha Haq Team",
    date: "2025-12-29",
    category: "Social Media Marketing",
    readTime: "4 min read",
    image: "placeholder-blog-3",
    content: [
      "Every business wants a post to go viral, but building a social media presence around chasing viral moments is an unreliable strategy. Virality is unpredictable by nature, and a single spike in reach rarely translates into sustained business results on its own.",
      "What actually builds a dependable social presence is consistency: showing up regularly, maintaining a recognizable visual identity, and communicating in a tone your audience comes to expect. This is what turns casual followers into an audience that pays attention when you actually have something important to share.",
      "Consistency also compounds. A brand that posts thoughtfully every week for a year builds far more trust and recognition than one that posts sporadically, even with the occasional high-performing post. Algorithms across most platforms also tend to favor accounts that post regularly over long dormant periods followed by bursts of activity.",
      "None of this means content quality doesn't matter — it does. But quality and consistency together, not the pursuit of a single viral post, are what build a social media presence a business can actually rely on.",
    ],
    relatedPosts: ["building-a-digital-marketing-strategy-that-actually-works", "meta-ads-creative-testing-explained"],
  },
  {
    slug: "signs-your-website-needs-a-redesign",
    title: "5 Signs Your Website Needs a Redesign",
    metaDescription:
      "Slow load times, high bounce rates and outdated design are signs your website may be costing you customers. Here's what to look for.",
    excerpt:
      "An outdated website can quietly cost you customers every day. Here are the signs it might be time for a redesign.",
    author: "Nibaha Haq Team",
    date: "2025-12-18",
    category: "Web Development",
    readTime: "5 min read",
    image: "placeholder-blog-4",
    content: [
      "A website doesn't have to be broken to be costing you business. Many underperforming sites look fine at first glance but quietly push visitors away through small, cumulative frictions.",
      "Slow load times are one of the clearest signs. If your homepage takes several seconds to load, especially on mobile, a meaningful percentage of visitors will leave before it even finishes rendering.",
      "A second sign is poor mobile experience. If your site was designed primarily for desktop and simply 'shrinks' on mobile rather than being properly responsive, navigation and readability usually suffer on the majority of your actual traffic.",
      "Other signs include an outdated visual design that doesn't reflect your current brand, unclear navigation that makes it hard to find key information, and a lack of clear calls-to-action that leaves visitors unsure what to do next. If several of these apply, a redesign focused on speed, usability and conversion is usually a worthwhile investment.",
    ],
    relatedPosts: ["on-page-vs-technical-seo-whats-the-difference", "how-a-website-seo-audit-uncovers-hidden-issues"],
  },
  {
    slug: "meta-ads-creative-testing-explained",
    title: "Why Creative Testing Matters More Than You Think in Meta Ads",
    metaDescription:
      "Learn why testing multiple ad creatives is one of the most important factors in Meta Ads campaign performance.",
    excerpt:
      "Targeting gets a lot of attention in Meta Ads, but creative testing is often what actually determines performance.",
    author: "Nibaha Haq Team",
    date: "2025-12-10",
    category: "Paid Advertising",
    readTime: "5 min read",
    image: "placeholder-blog-5",
    content: [
      "When businesses think about improving Meta Ads performance, targeting is usually the first thing that comes to mind. But in mature, well-optimized ad accounts, creative is often the bigger lever.",
      "Meta's ad platform has become increasingly effective at finding the right audience on its own when given a clear conversion goal. What it can't do is guess which message, image or video will actually resonate enough to make someone stop scrolling.",
      "This is where creative testing comes in. Running multiple ad variations — different angles, formats and messaging — against each other allows the data to reveal what actually connects with your audience, rather than relying on assumptions about what should work.",
      "A structured testing process also protects against creative fatigue, where an audience becomes so familiar with an ad that performance naturally declines over time. Regularly introducing new creative variations, informed by what has already performed well, keeps campaigns from stalling.",
    ],
    relatedPosts: ["why-consistent-social-media-posting-matters", "building-a-digital-marketing-strategy-that-actually-works"],
  },
  {
    slug: "youtube-automation-realistic-expectations",
    title: "YouTube Automation: What Realistic Expectations Look Like",
    metaDescription:
      "YouTube automation can bring structure and consistency to a channel, but growth and monetization are never guaranteed. Here's what to actually expect.",
    excerpt:
      "YouTube automation brings structure to content production, but it isn't a shortcut to guaranteed views or income.",
    author: "Nibaha Haq Team",
    date: "2025-11-27",
    category: "YouTube",
    readTime: "5 min read",
    image: "placeholder-blog-6",
    content: [
      "YouTube automation is often marketed with promises of passive income and rapid monetization. In reality, it is best understood as a structured production process — one that makes consistent, higher-quality content realistic, not a guarantee of specific results.",
      "What automation actually solves is the operational bottleneck most channels face: research, scripting, voiceover, editing and thumbnail design all take time, and doing every step personally without a system quickly leads to inconsistent uploads.",
      "A structured workflow lets a channel publish on a reliable schedule with a consistent production standard. That consistency gives the channel a genuine chance to grow, because YouTube's recommendation system tends to favor channels that publish reliably.",
      "What automation cannot do is guarantee views, subscribers or income. Those outcomes depend on niche demand, content quality, audience retention and factors related to the platform's algorithm that change over time. Anyone promising guaranteed monetization is setting unrealistic expectations.",
    ],
    relatedPosts: ["why-consistent-social-media-posting-matters", "meta-ads-creative-testing-explained"],
  },
  {
    slug: "brand-identity-basics-every-small-business-should-know",
    title: "Brand Identity Basics Every Small Business Should Know",
    metaDescription:
      "A clear, consistent brand identity builds trust faster than most businesses realize. Here are the fundamentals to get right.",
    excerpt:
      "A strong brand identity isn't just a logo. Here are the fundamentals every small business should have in place.",
    author: "Nibaha Haq Team",
    date: "2025-11-15",
    category: "Graphic Design",
    readTime: "4 min read",
    image: "placeholder-blog-7",
    content: [
      "When people hear 'brand identity,' they often think only of a logo. In reality, a logo is just one piece of a much larger visual system that determines how consistent and trustworthy a business appears.",
      "A complete brand identity typically includes a defined color palette, consistent typography, a clear logo with usage guidelines, and a general visual style that carries across your website, social media and marketing materials.",
      "The value of this consistency is often underestimated. When a business looks different on its website, its Instagram page and its printed materials, it quietly signals a lack of organization, even if the underlying product or service is excellent.",
      "For small businesses in particular, investing in a basic but consistent brand identity early on pays off well beyond aesthetics. It makes every other marketing effort — social content, ads, a new website — faster to produce and more effective, because the visual foundation is already in place.",
    ],
    relatedPosts: ["signs-your-website-needs-a-redesign", "why-consistent-social-media-posting-matters"],
  },
  {
    slug: "how-a-website-seo-audit-uncovers-hidden-issues",
    title: "How a Website SEO Audit Uncovers Hidden Issues",
    metaDescription:
      "A website SEO audit often reveals issues businesses don't know are holding back their search visibility. Here's what it typically uncovers.",
    excerpt:
      "Many websites have SEO issues their owners don't even know exist. Here's what a proper audit typically finds.",
    author: "Nibaha Haq Team",
    date: "2025-11-02",
    category: "Business Growth",
    readTime: "6 min read",
    image: "placeholder-blog-8",
    content: [
      "Business owners are often surprised by what a thorough SEO audit uncovers on a website they thought was performing reasonably well. Many of the most damaging issues aren't visible to a regular visitor at all.",
      "Technical issues are common culprits: pages that aren't properly indexed, slow load times caused by unoptimized images, broken internal links, or a site structure that makes it hard for search engines to understand which pages matter most.",
      "Content issues show up just as often. Pages that target the wrong keywords, duplicate or thin content, and missing metadata all quietly limit a site's ability to rank, even when the underlying business and offer are strong.",
      "The value of an audit isn't just identifying problems — it's prioritizing them. A good SEO audit doesn't just list every possible issue; it ranks them by impact, so effort goes toward fixes that will actually move the needle on traffic and visibility first.",
    ],
    relatedPosts: ["on-page-vs-technical-seo-whats-the-difference", "signs-your-website-needs-a-redesign"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.relatedPosts
    .map((slug) => getBlogPostBySlug(slug))
    .filter((item): item is BlogPost => Boolean(item));
}
