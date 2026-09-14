export const siteConfig = {
  name: "Nibaha Haq",
  legalName: "Nibaha Haq Digital",
  shortName: "Nibaha Haq",
  tagline: "Digital Marketing & Technology Agency",
  description:
    "Nibaha Haq is a digital marketing and technology agency helping businesses grow online through SEO, social media marketing, web development, paid advertising, and YouTube automation, plus practical training courses.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nibahahaq.com",
  ogImage: "/og-image.png",
  contact: {
    email: "hello@example.com",
    phone: "+92 XXX XXXXXXX",
    addressPlaceholder: "Business Address — [Add Your City, Country]",
  },
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/company/",
    twitter: "https://x.com/",
    youtube: "https://youtube.com/",
  },
  keywords: [
    "digital marketing agency",
    "digital marketing services",
    "social media marketing",
    "SEO services",
    "SEO agency",
    "web development services",
    "website development",
    "graphic designing services",
    "YouTube automation",
    "Meta Ads",
    "Facebook advertising",
    "Google Ads",
    "digital marketing courses",
    "web development course",
    "social media marketing course",
    "YouTube automation course",
  ],
};

export type SiteConfig = typeof siteConfig;
