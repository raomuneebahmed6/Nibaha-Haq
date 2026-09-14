import type { PortfolioItem } from "@/lib/types";

export const portfolioCategories = [
  "Web Development",
  "Social Media",
  "Branding",
  "Graphic Design",
  "SEO",
  "Advertising",
] as const;

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "retail-brand-website-relaunch",
    title: "Retail Brand Website Relaunch",
    category: "Web Development",
    description:
      "A complete redesign and rebuild of a retail business website, focused on faster load times, mobile usability and a clearer path to purchase.",
    servicesProvided: ["Web Development", "SEO-friendly structure", "Conversion-focused design"],
    image: "placeholder-web-1",
  },
  {
    slug: "professional-services-landing-page",
    title: "Professional Services Landing Page",
    category: "Web Development",
    description:
      "A focused, high-conversion landing page built to support a lead generation campaign for a professional services provider.",
    servicesProvided: ["Landing Page Design", "Web Development", "Conversion Optimization"],
    image: "placeholder-web-2",
  },
  {
    slug: "boutique-ecommerce-store",
    title: "Boutique E-Commerce Store",
    category: "Web Development",
    description:
      "An organized, easy-to-navigate online store built with a streamlined checkout experience for a boutique retail brand.",
    servicesProvided: ["E-Commerce Development", "UX Design", "Performance Optimization"],
    image: "placeholder-web-3",
  },
  {
    slug: "local-business-social-growth",
    title: "Local Business Social Media Presence",
    category: "Social Media",
    description:
      "A structured content strategy and consistent posting schedule built to establish a professional presence across Facebook and Instagram.",
    servicesProvided: ["Social Media Strategy", "Content Creation", "Community Management"],
    image: "placeholder-social-1",
  },
  {
    slug: "b2b-linkedin-content-program",
    title: "B2B LinkedIn Content Program",
    category: "Social Media",
    description:
      "An ongoing LinkedIn content program designed to build thought leadership and brand awareness for a B2B service provider.",
    servicesProvided: ["Content Strategy", "LinkedIn Management", "Brand Positioning"],
    image: "placeholder-social-2",
  },
  {
    slug: "startup-brand-identity",
    title: "Startup Brand Identity System",
    category: "Branding",
    description:
      "A full visual identity system including logo, color palette and brand guidelines developed for an early-stage startup.",
    servicesProvided: ["Brand Identity", "Logo Design", "Brand Guidelines"],
    image: "placeholder-brand-1",
  },
  {
    slug: "restaurant-rebrand",
    title: "Restaurant Visual Rebrand",
    category: "Branding",
    description:
      "A refreshed brand identity and menu design system created to modernize a restaurant's visual presence.",
    servicesProvided: ["Rebranding", "Print & Menu Design", "Brand Guidelines"],
    image: "placeholder-brand-2",
  },
  {
    slug: "seasonal-campaign-creative-set",
    title: "Seasonal Campaign Creative Set",
    category: "Graphic Design",
    description:
      "A cohesive set of promotional graphics developed for a seasonal marketing campaign across social and web placements.",
    servicesProvided: ["Marketing Creatives", "Promotional Graphics", "Social Media Designs"],
    image: "placeholder-graphic-1",
  },
  {
    slug: "corporate-pitch-deck-design",
    title: "Corporate Pitch Deck Design",
    category: "Graphic Design",
    description:
      "A polished, professionally structured presentation designed to support a corporate client's investment pitch.",
    servicesProvided: ["Business Presentations", "Graphic Design"],
    image: "placeholder-graphic-2",
  },
  {
    slug: "service-business-local-seo",
    title: "Service Business Local SEO Growth",
    category: "SEO",
    description:
      "A technical and local SEO overhaul that improved a service business's visibility for location-based search terms.",
    servicesProvided: ["Local SEO", "Technical SEO", "SEO Audit"],
    image: "placeholder-seo-1",
  },
  {
    slug: "content-driven-organic-growth",
    title: "Content-Driven Organic Growth",
    category: "SEO",
    description:
      "An SEO content program built around commercial search intent to grow organic traffic for a B2B website.",
    servicesProvided: ["Keyword Research", "Content Optimization", "SEO Reporting"],
    image: "placeholder-seo-2",
  },
  {
    slug: "lead-generation-ad-campaign",
    title: "Lead Generation Ad Campaign",
    category: "Advertising",
    description:
      "A Meta Ads campaign built around precise audience targeting and creative testing to generate qualified leads.",
    servicesProvided: ["Meta Ads", "Campaign Strategy", "Creative Testing"],
    image: "placeholder-ads-1",
  },
  {
    slug: "search-campaign-for-service-provider",
    title: "Search Campaign for a Service Provider",
    category: "Advertising",
    description:
      "A Google Ads Search campaign structured around high-intent keywords and aligned landing pages to drive enquiries.",
    servicesProvided: ["Google Ads", "Keyword Research", "Landing Page Optimization"],
    image: "placeholder-ads-2",
  },
];

export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.slug === slug);
}
