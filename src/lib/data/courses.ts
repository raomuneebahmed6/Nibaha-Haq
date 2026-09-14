import { Code2, Share2, Clapperboard } from "lucide-react";
import type { Course } from "@/lib/types";

export const courses: Course[] = [
  {
    slug: "web-development",
    title: "Web Development Course",
    shortTitle: "Web Development",
    icon: Code2,
    level: "Beginner to Job-Ready",
    duration: "12 weeks",
    format: "Live online classes + recorded sessions",
    tagline: "Learn to build real, responsive websites from the ground up.",
    metaDescription:
      "A practical web development course covering HTML, CSS, JavaScript and modern frameworks, with hands-on projects designed to build real, job-ready skills.",
    overview: [
      "This web development course is built around practical skill-building rather than passive video watching. Students learn by building real projects, starting from core fundamentals and progressing to modern, responsive websites.",
      "The curriculum covers the technologies actually used in professional web development today, with an emphasis on writing clean code, understanding how websites are structured, and being able to build and deploy a working project independently by the end of the course.",
      "Whether you are starting from scratch or want to formalize self-taught skills, the course is structured to take you from foundational concepts to building a complete portfolio-ready website.",
    ],
    whoShouldJoin: [
      "Complete beginners with no prior coding experience",
      "Students and graduates exploring a career in web development",
      "Business owners who want to understand and manage their own website",
      "Freelancers wanting to add web development as a service offering",
    ],
    whatYouWillLearn: [
      "Core HTML structure and semantic markup",
      "Modern CSS, layout systems and responsive design",
      "JavaScript fundamentals and interactive functionality",
      "Working with a modern front-end framework",
      "Building and structuring multi-page websites",
      "Basic performance and SEO-friendly development practices",
      "Deploying a live website",
    ],
    modules: [
      {
        title: "Foundations of the Web",
        topics: ["How the web works", "HTML structure & semantics", "Setting up a development environment"],
      },
      {
        title: "Styling with CSS",
        topics: ["CSS fundamentals", "Flexbox and Grid layouts", "Responsive design principles"],
      },
      {
        title: "JavaScript Essentials",
        topics: ["Variables, functions and logic", "DOM manipulation", "Handling events and forms"],
      },
      {
        title: "Modern Front-End Development",
        topics: ["Component-based development", "Working with a modern framework", "Reusable components"],
      },
      {
        title: "Building Real Projects",
        topics: ["Planning a website structure", "Building responsive multi-page projects", "Basic SEO practices"],
      },
      {
        title: "Deployment & Next Steps",
        topics: ["Preparing a project for deployment", "Publishing a live website", "Building a personal portfolio"],
      },
    ],
    projects: [
      "A fully responsive personal portfolio website",
      "A multi-page business website project",
      "A small interactive web application",
    ],
    outcomes: [
      "Ability to build responsive, multi-page websites independently",
      "Practical experience with modern front-end development workflows",
      "A portfolio of completed projects to showcase your skills",
      "A foundation to continue learning more advanced web development topics",
    ],
    faqs: [
      {
        question: "Do I need any prior experience to join this course?",
        answer:
          "No, the course starts from the fundamentals and is suitable for complete beginners, though some basic computer literacy is helpful.",
      },
      {
        question: "Will I receive a job guarantee after completing the course?",
        answer:
          "No, we do not offer job guarantees. The course is designed to build genuine, practical skills and a project portfolio that supports your own career or freelance goals.",
      },
      {
        question: "Is the course live or self-paced?",
        answer:
          "The course combines live online classes with recorded sessions, so you can follow along live and revisit lessons as needed.",
      },
      {
        question: "What will I be able to build by the end of the course?",
        answer:
          "You will be able to build fully responsive, multi-page websites and a small interactive web application, along with a personal portfolio showcasing your work.",
      },
    ],
    relatedCourses: ["social-media-marketing", "youtube-automation"],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing Course",
    shortTitle: "Social Media Marketing",
    icon: Share2,
    level: "Beginner to Practitioner",
    duration: "6 weeks",
    format: "Live online classes + practical assignments",
    tagline: "Learn to plan, create and manage social media like a professional.",
    metaDescription:
      "A practical social media marketing course covering strategy, content planning, page management and campaign basics for Facebook, Instagram, LinkedIn and TikTok.",
    overview: [
      "This social media marketing course teaches the practical skills behind running professional social media accounts, not just theory about how platforms work.",
      "Students learn how to plan content strategically, understand platform-specific best practices, manage a content calendar, and analyze performance to improve results over time.",
      "The course is built around real platforms and real workflows, so what you learn can be applied immediately to a business account, a client project, or your own personal brand.",
    ],
    whoShouldJoin: [
      "Beginners wanting to start a career in social media marketing",
      "Business owners who want to manage their own social media presence",
      "Freelancers looking to offer social media management as a service",
      "Marketing team members wanting to strengthen their social media skills",
    ],
    whatYouWillLearn: [
      "How to build a social media strategy for a brand",
      "Content planning and calendar management",
      "Platform-specific best practices across major channels",
      "Basics of content creation and design for social media",
      "Community management and engagement principles",
      "Reading and interpreting performance analytics",
    ],
    modules: [
      {
        title: "Social Media Strategy",
        topics: ["Understanding platform audiences", "Setting goals and content pillars", "Competitor research basics"],
      },
      {
        title: "Content Planning & Creation",
        topics: ["Building a content calendar", "Content formats across platforms", "Basic design principles for social posts"],
      },
      {
        title: "Platform Deep Dives",
        topics: ["Facebook & Instagram best practices", "LinkedIn for business", "TikTok & short-form video basics"],
      },
      {
        title: "Community & Engagement",
        topics: ["Managing comments and messages", "Building an engaged community", "Handling negative feedback professionally"],
      },
      {
        title: "Campaigns & Analytics",
        topics: ["Planning simple organic campaigns", "Understanding key performance metrics", "Reporting and adjusting strategy"],
      },
    ],
    projects: [
      "A complete 4-week social media content calendar for a sample brand",
      "A set of platform-specific content pieces across two channels",
      "A performance report analyzing a real or sample account",
    ],
    outcomes: [
      "Ability to plan and manage a professional social media presence",
      "Practical experience creating platform-appropriate content",
      "Confidence reading analytics and adjusting content strategy",
      "A completed content calendar project for your portfolio",
    ],
    faqs: [
      {
        question: "Will this course guarantee follower growth for my account?",
        answer:
          "No, the course teaches practical strategy and content skills, but growth depends on many factors specific to each account and is never guaranteed.",
      },
      {
        question: "Do I need design skills before joining?",
        answer:
          "No prior design experience is needed. The course covers basic content design principles suitable for beginners.",
      },
      {
        question: "Which platforms are covered in the course?",
        answer:
          "The course covers Facebook, Instagram, LinkedIn and TikTok, focusing on the practical differences in how each platform is used effectively.",
      },
      {
        question: "Can this course help me freelance as a social media manager?",
        answer:
          "Yes, the practical skills and project work are designed to be directly applicable to managing real client or business accounts.",
      },
    ],
    relatedCourses: ["web-development", "youtube-automation"],
  },
  {
    slug: "youtube-automation",
    title: "YouTube Automation Course",
    shortTitle: "YouTube Automation",
    icon: Clapperboard,
    level: "Beginner to Practitioner",
    duration: "8 weeks",
    format: "Live online classes + guided practice",
    tagline: "Learn the full workflow behind running a structured YouTube channel.",
    metaDescription:
      "A practical YouTube automation course covering niche research, scripting, voiceover, video editing, thumbnail design and channel publishing strategy.",
    overview: [
      "This course teaches the complete practical workflow behind running a structured YouTube channel, from choosing a niche to publishing and reviewing performance.",
      "Students learn each stage of the production process individually — research, scripting, voiceover, editing and thumbnail design — before bringing it together into a repeatable channel workflow.",
      "We are transparent throughout the course that channel growth and monetization depend on content quality, consistency, audience response and platform performance, none of which can be guaranteed. The focus is on building genuine production and strategy skills.",
    ],
    whoShouldJoin: [
      "Beginners wanting to start a YouTube channel with a structured approach",
      "Existing creators looking to formalize an inconsistent workflow",
      "Freelancers wanting to offer YouTube production services",
      "Business owners exploring YouTube as a content channel",
    ],
    whatYouWillLearn: [
      "How to research and validate a content niche",
      "Finding and structuring video topics with real audience demand",
      "Writing scripts that keep viewers engaged",
      "Recording clear, effective voiceovers",
      "Editing videos to a consistent, professional standard",
      "Designing thumbnails that support discoverability",
      "Planning a realistic publishing schedule",
    ],
    modules: [
      {
        title: "Channel & Niche Strategy",
        topics: ["Evaluating niche viability", "Defining a channel identity", "Researching successful channels in your niche"],
      },
      {
        title: "Content & Script Development",
        topics: ["Finding video topics with real demand", "Script structure for retention", "Writing your first scripts"],
      },
      {
        title: "Voiceover & Audio",
        topics: ["Recording clear voiceovers", "Basic audio editing", "Pacing and delivery"],
      },
      {
        title: "Video Production & Editing",
        topics: ["Editing workflow fundamentals", "Pacing, transitions and visuals", "Assembling a complete video"],
      },
      {
        title: "Thumbnails & Publishing",
        topics: ["Thumbnail design principles", "Title and description optimization", "Building a publishing schedule"],
      },
      {
        title: "Analytics & Iteration",
        topics: ["Reading YouTube analytics", "Identifying what is and isn't working", "Adjusting content strategy over time"],
      },
    ],
    projects: [
      "A validated niche and channel concept document",
      "Two fully scripted and produced sample videos",
      "A complete set of optimized titles, descriptions and thumbnails",
    ],
    outcomes: [
      "A working understanding of the complete YouTube production workflow",
      "Practical scripting, voiceover and editing skills",
      "A structured publishing and content plan",
      "Two completed videos to use as a channel starting point or portfolio",
    ],
    faqs: [
      {
        question: "Will I make money from YouTube after this course?",
        answer:
          "We cannot promise any income or monetization outcome. The course teaches the practical production and strategy skills involved; actual results depend on content quality, consistency, niche and audience response.",
      },
      {
        question: "Do I need to show my face in videos?",
        answer:
          "No, the course focuses on scripting, voiceover and editing skills that work well for narrated or faceless-style channels, though the skills apply to on-camera content too.",
      },
      {
        question: "What software or tools will I need?",
        answer:
          "We recommend accessible, commonly used editing and recording tools, and guidance is provided during the course on getting set up.",
      },
      {
        question: "Is prior video editing experience required?",
        answer:
          "No, video editing is taught from the fundamentals as part of the course curriculum.",
      },
    ],
    relatedCourses: ["social-media-marketing", "web-development"],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

export function getRelatedCourses(course: Course): Course[] {
  return course.relatedCourses
    .map((slug) => getCourseBySlug(slug))
    .filter((item): item is Course => Boolean(item));
}
