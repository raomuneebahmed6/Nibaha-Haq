import type { LucideIcon } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  tagline: string;
  metaDescription: string;
  heroParagraph: string;
  overview: string[];
  benefits: BenefitItem[];
  offerings: BenefitItem[];
  process: ProcessStep[];
  whyItMatters: string;
  whoItsFor: string[];
  faqs: FaqItem[];
  relatedServices: string[];
  keywords: string[];
}

export interface CourseModule {
  title: string;
  topics: string[];
}

export interface Course {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  level: string;
  duration: string;
  format: string;
  tagline: string;
  metaDescription: string;
  overview: string[];
  whoShouldJoin: string[];
  whatYouWillLearn: string[];
  modules: CourseModule[];
  projects: string[];
  outcomes: string[];
  faqs: FaqItem[];
  relatedCourses: string[];
}

export interface PortfolioItem {
  slug: string;
  title: string;
  category: string;
  description: string;
  servicesProvided: string[];
  image: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  content: string[];
  relatedPosts: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}
