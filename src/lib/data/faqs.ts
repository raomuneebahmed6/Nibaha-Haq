import type { FaqItem } from "@/lib/types";

export const generalFaqs: FaqItem[] = [
  {
    question: "What services does Nibaha Haq offer?",
    answer:
      "We provide digital marketing, social media marketing, SEO, web development, graphic designing, YouTube automation, Meta Ads and Google Ads, along with practical training courses in web development, social media marketing and YouTube automation.",
  },
  {
    question: "How do I get started working with your agency?",
    answer:
      "The easiest way to start is by requesting a free consultation or submitting a quote request. We'll review your goals and recommend the right service and approach for your business.",
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer:
      "Yes, we work with startups, small businesses and established companies, tailoring our strategy and scope to match each business's stage and goals.",
  },
  {
    question: "Can you guarantee specific results like rankings, followers or sales?",
    answer:
      "No ethical agency can guarantee specific outcomes like a #1 ranking, follower counts or sales volume, since results depend on many factors including your market, offer and competition. We focus on proven strategy, transparent reporting and continuous optimization instead.",
  },
  {
    question: "How is pricing determined for your services?",
    answer:
      "Pricing depends on the scope, channels and goals involved in your project. Submit a quote request with your requirements and our team will provide a tailored proposal.",
  },
  {
    question: "Do you offer ongoing support after a project is completed?",
    answer:
      "Yes, most of our services are designed for ongoing management and optimization, and we also offer support for one-off projects such as website builds.",
  },
];

export const homeFaqs: FaqItem[] = generalFaqs.slice(0, 5);
