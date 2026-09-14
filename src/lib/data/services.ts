import {
  Megaphone,
  Share2,
  Search,
  Code2,
  Palette,
  Clapperboard,
  Target,
  MousePointerClick,
} from "lucide-react";
import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Digital Marketing",
    icon: Megaphone,
    tagline: "One strategy, every channel, measurable growth.",
    metaDescription:
      "Full-service digital marketing services that combine strategy, SEO, social media, paid advertising and analytics to help your business generate leads and grow online.",
    heroParagraph:
      "Our digital marketing services bring strategy, creative and performance data together so every channel works toward the same business goal: sustainable growth.",
    overview: [
      "Most businesses run marketing in silos — a boosted post here, a one-off ad campaign there — with no single strategy tying it together. Our digital marketing service replaces that guesswork with a coordinated plan built around your audience, your offer and your growth targets.",
      "We start with research, not templates. Understanding how your customers search, scroll and decide lets us build a digital strategy that connects brand positioning, content, SEO, social media and paid advertising into one system, rather than a collection of disconnected tactics.",
      "As a full-service digital marketing agency, we manage the strategic layer and the execution layer together, so campaigns stay consistent across every touchpoint and every rupee of ad spend or content effort is working toward the same outcome.",
    ],
    benefits: [
      {
        title: "One consistent brand story",
        description:
          "Your positioning, messaging and visual identity stay consistent across your website, social channels and ad campaigns, building recognition instead of confusion.",
      },
      {
        title: "Data-informed decisions",
        description:
          "Every recommendation is backed by audience research, competitor analysis and campaign data rather than assumptions or trends for their own sake.",
      },
      {
        title: "Clearer path to leads",
        description:
          "Strategy is built around your actual sales funnel, so traffic and engagement are directed toward enquiries, sign-ups and sales rather than vanity metrics.",
      },
      {
        title: "Efficient use of budget",
        description:
          "Coordinated planning across channels reduces wasted spend and duplicated effort, so your marketing budget works harder.",
      },
      {
        title: "Ongoing optimization",
        description:
          "Regular reporting and analysis mean campaigns are continuously refined based on what is actually converting.",
      },
    ],
    offerings: [
      {
        title: "Digital strategy & roadmap",
        description:
          "A structured marketing plan built around your business goals, target audience and competitive landscape.",
      },
      {
        title: "Brand positioning",
        description:
          "Clear, differentiated messaging that explains why customers should choose you over alternatives.",
      },
      {
        title: "Audience research",
        description:
          "Identifying who your customers are, what they search for, and where they spend time online.",
      },
      {
        title: "Content strategy",
        description:
          "Planning the themes, formats and calendar that keep your brand visible and relevant across channels.",
      },
      {
        title: "Social media management",
        description:
          "Coordinated content and community management across the platforms that matter to your audience.",
      },
      {
        title: "SEO integration",
        description:
          "Aligning content and technical SEO so organic visibility supports the wider marketing plan.",
      },
      {
        title: "Paid advertising",
        description:
          "Search, social and display campaigns designed around clear conversion goals.",
      },
      {
        title: "Lead generation systems",
        description:
          "Landing pages, forms and follow-up flows that turn traffic into qualified enquiries.",
      },
      {
        title: "Conversion rate optimization",
        description:
          "Testing and refining pages and campaigns to improve how many visitors take action.",
      },
      {
        title: "Analytics & reporting",
        description:
          "Transparent, regular reporting that shows what is working and what is being adjusted.",
      },
    ],
    process: [
      {
        title: "Discovery & audit",
        description:
          "We review your current digital presence, competitors and business goals to identify opportunities.",
      },
      {
        title: "Strategy & planning",
        description:
          "We build a channel plan with clear priorities, timelines and measurable objectives.",
      },
      {
        title: "Content & campaign build",
        description:
          "Our team develops the content, creative and campaign structures needed to execute the strategy.",
      },
      {
        title: "Launch & management",
        description:
          "Campaigns go live across the agreed channels with active monitoring from day one.",
      },
      {
        title: "Reporting & optimization",
        description:
          "We review performance on a regular cycle and adjust targeting, creative and budget accordingly.",
      },
    ],
    whyItMatters:
      "Customers now move between search engines, social platforms and websites before making a decision. A business that only invests in one channel is invisible during most of that journey. A coordinated digital marketing strategy makes sure your brand shows up consistently at each stage, which builds trust and improves the odds that attention turns into revenue.",
    whoItsFor: [
      "Businesses that currently rely on word-of-mouth or a single channel and want a structured growth plan",
      "Companies running scattered campaigns across platforms without a unifying strategy",
      "Startups that need to build visibility and credibility from the ground up",
      "Established businesses preparing to expand into new markets or audiences",
    ],
    faqs: [
      {
        question: "How is digital marketing different from just running social media ads?",
        answer:
          "Running ads is one tactic. Digital marketing is the strategy that decides which channels to use, what message to send, and how SEO, content, social media and paid advertising work together toward the same business goal.",
      },
      {
        question: "How long does it take to see results?",
        answer:
          "Paid campaigns can generate traffic and leads within weeks, while organic efforts like SEO and content typically build momentum over a few months. We set realistic timelines during the strategy phase based on your industry and goals.",
      },
      {
        question: "Do I need to be active on every social platform?",
        answer:
          "No. We recommend focusing on the platforms where your specific audience is most active rather than spreading effort thin across every channel.",
      },
      {
        question: "Will I get regular reports?",
        answer:
          "Yes, we provide scheduled performance reporting so you always know what has been done and how campaigns are performing against your goals.",
      },
    ],
    relatedServices: ["seo", "social-media-marketing", "meta-ads"],
    keywords: ["digital marketing agency", "digital marketing services", "digital marketing strategy"],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    shortTitle: "Social Media",
    icon: Share2,
    tagline: "Consistent content that builds real audience relationships.",
    metaDescription:
      "Professional social media marketing services covering strategy, content creation, page management and campaigns across Facebook, Instagram, LinkedIn, TikTok and YouTube.",
    heroParagraph:
      "We plan, create and manage social media content that builds brand awareness and gives your business a consistent, professional presence where your customers already spend their time.",
    overview: [
      "Social media has become one of the first places customers check before deciding whether to trust a business. An inactive or inconsistent profile can undo the credibility built everywhere else, while a well-managed presence reinforces it.",
      "Our social media marketing service covers the full cycle: understanding your audience, planning content that reflects your brand, producing it to a consistent visual standard, and managing the community that engages with it.",
      "We treat each platform differently rather than repurposing the same content everywhere. Facebook, Instagram, LinkedIn, TikTok and YouTube each have different audience expectations, and our content planning reflects that.",
    ],
    benefits: [
      {
        title: "Consistent brand presence",
        description:
          "Regular, on-brand posting keeps your business visible and credible instead of appearing inactive.",
      },
      {
        title: "Stronger audience connection",
        description:
          "Thoughtful community engagement helps turn followers into an audience that actually pays attention to your brand.",
      },
      {
        title: "Platform-appropriate content",
        description:
          "Content is tailored to how each platform's audience behaves rather than copy-pasted across channels.",
      },
      {
        title: "Better campaign readiness",
        description:
          "An organized content calendar means your channels are ready to support launches, offers and paid campaigns.",
      },
      {
        title: "Clear performance visibility",
        description:
          "Regular reporting shows how content is performing so strategy can be adjusted with evidence, not guesswork.",
      },
    ],
    offerings: [
      {
        title: "Social media strategy",
        description:
          "A platform-specific plan that defines goals, audience and content pillars for each channel.",
      },
      {
        title: "Content planning",
        description:
          "A structured content calendar aligned with campaigns, promotions and key business dates.",
      },
      {
        title: "Content creation",
        description:
          "Graphics, short-form video concepts and captions produced to a consistent brand standard.",
      },
      {
        title: "Page management",
        description:
          "Day-to-day handling of posting schedules, profile optimization and platform best practices.",
      },
      {
        title: "Community engagement",
        description:
          "Responding to comments and messages in a way that reflects your brand voice and builds trust.",
      },
      {
        title: "Social media campaigns",
        description:
          "Organic campaign concepts built around launches, offers or brand awareness goals.",
      },
      {
        title: "Brand awareness building",
        description:
          "Content and creative direction focused on making your brand recognizable and memorable.",
      },
      {
        title: "Lead generation support",
        description:
          "Content and calls-to-action designed to move interested followers toward an enquiry.",
      },
      {
        title: "Performance reporting",
        description:
          "Regular reports covering reach, engagement and audience growth across managed platforms.",
      },
    ],
    process: [
      {
        title: "Audience & platform audit",
        description:
          "We review your current profiles and identify which platforms are worth prioritizing for your audience.",
      },
      {
        title: "Content strategy",
        description:
          "We define your content pillars, tone of voice and a realistic posting cadence.",
      },
      {
        title: "Content production",
        description:
          "Our team designs and prepares posts, captions and short-form video concepts in advance.",
      },
      {
        title: "Scheduling & management",
        description:
          "Content is published on a consistent schedule with active page and community management.",
      },
      {
        title: "Review & refine",
        description:
          "We analyze engagement and reach data monthly and adjust content direction accordingly.",
      },
    ],
    whyItMatters:
      "Social platforms are often a customer's first real interaction with your brand's personality, not just your products. Consistency and quality on these channels directly affect whether a visitor perceives your business as active, professional and trustworthy.",
    whoItsFor: [
      "Businesses with inactive or inconsistent social profiles",
      "Brands that want a professional content presence without hiring an in-house team",
      "Companies preparing to run paid social campaigns and needing organic content as a foundation",
      "Local and service-based businesses that rely on visibility and trust to win customers",
    ],
    faqs: [
      {
        question: "Which platforms should my business focus on?",
        answer:
          "It depends on where your target audience is most active and how your industry typically communicates. We recommend platforms based on audience research rather than defaulting to every available channel.",
      },
      {
        question: "Can you guarantee a certain number of followers or sales?",
        answer:
          "No. We do not promise guaranteed followers or guaranteed sales, since results depend on many factors including your offer, market and consistency. We focus on strategy, content quality and measurable engagement instead.",
      },
      {
        question: "Do you create the graphics and videos yourselves?",
        answer:
          "Yes, our team plans and produces content in-house, working from your brand guidelines or helping establish them if you do not have any yet.",
      },
      {
        question: "How often will you post on my accounts?",
        answer:
          "Posting frequency is agreed during the strategy phase based on your goals, platform and available content, and is designed to be sustainable and consistent rather than sporadic.",
      },
    ],
    relatedServices: ["digital-marketing", "meta-ads", "graphic-designing"],
    keywords: ["social media marketing", "social media management", "social media marketing services"],
  },
  {
    slug: "seo",
    title: "Search Engine Optimization",
    shortTitle: "SEO",
    icon: Search,
    tagline: "Sustainable visibility that keeps working after you stop paying for clicks.",
    metaDescription:
      "Comprehensive SEO services including technical SEO, on-page and off-page optimization, keyword research, local SEO and reporting to improve organic search visibility.",
    heroParagraph:
      "Our SEO services are built to improve how your website is found, understood and ranked by search engines, turning organic search into a dependable source of qualified traffic.",
    overview: [
      "Search engine optimization is one of the few marketing channels that keeps generating value long after the initial work is done. Unlike paid ads, organic visibility built through solid SEO continues to attract visitors without an ongoing cost per click.",
      "As an SEO agency, we approach optimization from three angles at once: the technical health of your website, the relevance and quality of your content, and the authority signals that tell search engines your site can be trusted.",
      "We focus on SEO that targets commercial search intent — the searches people make when they are close to choosing a provider — rather than chasing traffic volume for its own sake.",
    ],
    benefits: [
      {
        title: "Long-term organic traffic",
        description:
          "Well-optimized pages continue attracting visitors over time, reducing dependence on paid channels alone.",
      },
      {
        title: "Higher-quality visitors",
        description:
          "Targeting commercial search intent brings in visitors who are actively looking for what you offer.",
      },
      {
        title: "Improved site credibility",
        description:
          "Technical fixes and quality content improve both search rankings and the experience for real visitors.",
      },
      {
        title: "Better local visibility",
        description:
          "Local SEO helps nearby customers find and choose your business when searching for relevant services.",
      },
      {
        title: "Measurable progress",
        description:
          "Regular reporting on rankings, traffic and technical health shows how SEO is progressing over time.",
      },
    ],
    offerings: [
      {
        title: "Technical SEO",
        description:
          "Fixing site speed, crawlability, indexing and structural issues that limit search performance.",
      },
      {
        title: "On-page SEO",
        description:
          "Optimizing titles, headings, content and internal linking on individual pages.",
      },
      {
        title: "Off-page SEO",
        description:
          "Building the external signals and authority that support your site's credibility.",
      },
      {
        title: "Keyword research",
        description:
          "Identifying the search terms your potential customers actually use, prioritized by intent and opportunity.",
      },
      {
        title: "Competitor research",
        description:
          "Analyzing what is working for competitors ranking in your space to identify gaps and opportunities.",
      },
      {
        title: "Content optimization",
        description:
          "Improving existing content and planning new content around targeted search terms.",
      },
      {
        title: "Local SEO",
        description:
          "Optimizing business listings and local signals to improve visibility in local search results.",
      },
      {
        title: "Website SEO audit",
        description:
          "A full review of your site's technical, on-page and content health with prioritized recommendations.",
      },
      {
        title: "Link building",
        description:
          "Earning relevant, quality links that support your site's authority in search engines.",
      },
      {
        title: "SEO reporting",
        description:
          "Clear reporting on rankings, organic traffic and completed optimization work.",
      },
    ],
    process: [
      {
        title: "SEO audit",
        description:
          "We assess your website's technical health, content and current search visibility.",
      },
      {
        title: "Keyword & competitor research",
        description:
          "We identify target keywords based on real search intent and analyze what top-ranking competitors are doing.",
      },
      {
        title: "On-page & technical fixes",
        description:
          "We resolve technical issues and optimize page structure, content and internal linking.",
      },
      {
        title: "Content & authority building",
        description:
          "We develop targeted content and pursue relevant off-page signals to build authority.",
      },
      {
        title: "Monitoring & reporting",
        description:
          "We track rankings and traffic, reporting progress and adjusting strategy on an ongoing basis.",
      },
    ],
    whyItMatters:
      "Most buying journeys now start with a search engine. If your website is difficult to find, slow to load, or poorly structured, competitors who have invested in SEO will capture that demand instead. Strong SEO ensures your business shows up at the exact moment someone is searching for what you offer.",
    whoItsFor: [
      "Businesses with a website that generates little to no organic traffic",
      "Companies competing in a market where competitors already rank well",
      "Local businesses that depend on being found by nearby customers",
      "Websites with technical issues limiting their visibility in search results",
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "SEO is a medium- to long-term investment. Technical fixes can show early improvements, while competitive keyword rankings typically build over several months of consistent work.",
      },
      {
        question: "Do you guarantee a #1 ranking?",
        answer:
          "No ethical SEO provider can guarantee a specific ranking, since search engines use many factors outside anyone's direct control. We focus on sustainable practices that improve visibility and traffic over time.",
      },
      {
        question: "What is included in an SEO audit?",
        answer:
          "A website SEO audit reviews technical health, on-page optimization, content quality, site structure and existing authority signals, resulting in a prioritized list of recommendations.",
      },
      {
        question: "Do you use FAQ schema and structured data?",
        answer:
          "Yes, we implement structured data such as FAQ schema where appropriate to help search engines better understand and present your content in search results.",
      },
    ],
    relatedServices: ["digital-marketing", "web-development", "google-ads"],
    keywords: ["SEO services", "SEO agency", "search engine optimization"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Development",
    icon: Code2,
    tagline: "Fast, responsive websites built to convert visitors into customers.",
    metaDescription:
      "Professional web development services including business websites, landing pages and e-commerce stores, built responsive, fast and SEO-friendly using modern technologies.",
    heroParagraph:
      "We design and build responsive, high-performance websites that represent your brand professionally and are structured to convert visitors into enquiries and customers.",
    overview: [
      "Your website is frequently the first proper introduction a potential customer has to your business. A slow, outdated or confusing site undermines trust before a conversation has even started, regardless of how good your product or service actually is.",
      "Our web development services cover everything from corporate websites and landing pages to e-commerce stores, all built using modern, maintainable technologies with performance and search visibility considered from the start rather than added afterward.",
      "We design with conversion in mind — clear navigation, fast load times and calls-to-action placed where visitors are ready to act — so your website actively supports business goals instead of sitting as a digital brochure.",
    ],
    benefits: [
      {
        title: "Professional first impression",
        description:
          "A modern, well-structured website builds credibility the moment a visitor lands on it.",
      },
      {
        title: "Faster load times",
        description:
          "Performance-focused development reduces load times, which improves both user experience and search rankings.",
      },
      {
        title: "Works on every device",
        description:
          "Fully responsive layouts ensure your site looks and functions correctly on desktop, tablet and mobile.",
      },
      {
        title: "Built for search visibility",
        description:
          "SEO-friendly structure and clean code make it easier for search engines to index and rank your pages.",
      },
      {
        title: "Designed to convert",
        description:
          "Layouts and calls-to-action are planned around guiding visitors toward enquiries or purchases.",
      },
    ],
    offerings: [
      {
        title: "Business & corporate websites",
        description:
          "Professional multi-page websites that clearly communicate your services and credibility.",
      },
      {
        title: "Landing pages",
        description:
          "Focused, high-conversion pages built for specific campaigns, offers or lead generation goals.",
      },
      {
        title: "E-commerce websites",
        description:
          "Online stores with organized product catalogs, secure checkout flows and clear navigation.",
      },
      {
        title: "Responsive design",
        description:
          "Layouts that adapt properly across screen sizes instead of simply shrinking a desktop design.",
      },
      {
        title: "Website redesign",
        description:
          "Modernizing outdated websites with improved design, performance and usability.",
      },
      {
        title: "Performance optimization",
        description:
          "Improving load speed, image handling and Core Web Vitals for a faster experience.",
      },
      {
        title: "SEO-friendly development",
        description:
          "Clean semantic code, proper heading structure and metadata built in from the start.",
      },
      {
        title: "Conversion-focused design",
        description:
          "Page layouts and user flows designed around guiding visitors toward a clear next action.",
      },
    ],
    process: [
      {
        title: "Discovery & planning",
        description:
          "We map out your site structure, content needs and business goals before any design begins.",
      },
      {
        title: "Design",
        description:
          "We create a visual design aligned with your brand, reviewed and refined with your feedback.",
      },
      {
        title: "Development",
        description:
          "We build the website using modern, maintainable technologies with responsiveness and performance in mind.",
      },
      {
        title: "Testing & QA",
        description:
          "We test across devices and browsers, checking links, forms and functionality before launch.",
      },
      {
        title: "Launch & support",
        description:
          "We deploy the finished website and remain available for ongoing updates and support.",
      },
    ],
    whyItMatters:
      "A website is working for your business around the clock, whether it performs well or not. Slow pages, broken layouts on mobile, or unclear navigation actively lose potential customers, while a fast, well-structured site keeps them engaged long enough to convert.",
    whoItsFor: [
      "Businesses without a website or relying on an outdated one",
      "Companies needing a dedicated landing page for a campaign or launch",
      "Brands ready to sell products online through a proper e-commerce store",
      "Businesses experiencing high bounce rates or poor mobile performance on their current site",
    ],
    faqs: [
      {
        question: "What technologies do you use to build websites?",
        answer:
          "We build using modern, industry-standard web technologies chosen for performance, maintainability and search-engine friendliness, tailored to the specific needs of each project.",
      },
      {
        question: "Will my website work properly on mobile devices?",
        answer:
          "Yes, every website we build is fully responsive and tested across common device sizes rather than simply scaling down a desktop layout.",
      },
      {
        question: "Can you redesign my existing website instead of building a new one?",
        answer:
          "Yes, website redesign is one of our core services, and we can modernize your existing site's design and performance while retaining what already works.",
      },
      {
        question: "Do you also help with website content and SEO?",
        answer:
          "Yes, we build with SEO-friendly structure from the start and can coordinate with our SEO and content services for ongoing optimization.",
      },
    ],
    relatedServices: ["seo", "graphic-designing", "digital-marketing"],
    keywords: ["web development services", "website development", "web design agency"],
  },
  {
    slug: "graphic-designing",
    title: "Graphic Designing",
    shortTitle: "Graphic Design",
    icon: Palette,
    tagline: "Visual design that makes your brand instantly recognizable.",
    metaDescription:
      "Professional graphic designing services covering brand identity, logo design, social media designs, marketing creatives and advertising visuals.",
    heroParagraph:
      "We create clean, consistent visual design across your brand identity, social media, marketing materials and advertising creatives so your business looks professional everywhere it appears.",
    overview: [
      "Visual inconsistency is one of the fastest ways a brand loses credibility. A mismatched logo, inconsistent colors and off-brand social graphics all signal a lack of professionalism, even when the underlying business is solid.",
      "Our graphic designing service builds and maintains a consistent visual identity across every touchpoint, from your logo and brand guidelines to the social posts, ad creatives and presentations your business uses every day.",
      "We design with purpose rather than decoration. Every graphic is created to communicate a specific message clearly, whether that's building brand recognition, presenting a professional pitch, or driving action on an ad.",
    ],
    benefits: [
      {
        title: "Consistent brand identity",
        description:
          "A unified visual system across platforms makes your brand instantly recognizable to your audience.",
      },
      {
        title: "Professional credibility",
        description:
          "Polished, well-designed materials build trust faster than inconsistent or amateur visuals.",
      },
      {
        title: "Stronger campaign performance",
        description:
          "Clear, purposeful creative design helps marketing and advertising campaigns communicate more effectively.",
      },
      {
        title: "Faster content production",
        description:
          "A defined design system makes it faster to produce new content without starting from scratch each time.",
      },
      {
        title: "Versatile visual assets",
        description:
          "Designs are created to work across the different formats and platforms your business needs.",
      },
    ],
    offerings: [
      {
        title: "Social media designs",
        description:
          "Consistent, on-brand graphics for regular social media content and campaigns.",
      },
      {
        title: "Brand identity",
        description:
          "A cohesive visual system covering colors, typography and design elements for your brand.",
      },
      {
        title: "Logo design",
        description:
          "A distinctive, versatile logo that represents your brand across digital and print use.",
      },
      {
        title: "Marketing creatives",
        description:
          "Visuals for brochures, flyers, email campaigns and other marketing materials.",
      },
      {
        title: "Advertising creatives",
        description:
          "Ad visuals designed for platforms like Meta and Google, built to capture attention and drive action.",
      },
      {
        title: "Business presentations",
        description:
          "Professional, well-structured presentation designs for pitches and business communication.",
      },
      {
        title: "Promotional graphics",
        description:
          "Designs for offers, launches and events that stand out while staying on-brand.",
      },
      {
        title: "Website graphics",
        description:
          "Supporting visuals, icons and imagery that complement web development projects.",
      },
    ],
    process: [
      {
        title: "Brand discovery",
        description:
          "We learn about your business, audience and any existing brand assets or preferences.",
      },
      {
        title: "Concept development",
        description:
          "We develop initial design concepts aligned with your brand direction.",
      },
      {
        title: "Design & revisions",
        description:
          "We refine the chosen concept based on your feedback until it meets your expectations.",
      },
      {
        title: "Delivery",
        description:
          "Final designs are delivered in the formats and sizes needed across your platforms.",
      },
    ],
    whyItMatters:
      "People form an opinion about a brand within seconds of seeing it, often before reading a single word. Consistent, professional visual design shapes that first impression in your favor and reinforces credibility every time your brand is seen again.",
    whoItsFor: [
      "New businesses that need a complete brand identity built from scratch",
      "Established businesses with inconsistent or outdated visual branding",
      "Teams that regularly need social media and marketing creatives",
      "Businesses preparing advertising campaigns that need dedicated ad creatives",
    ],
    faqs: [
      {
        question: "Do you design logos as a standalone service?",
        answer:
          "Yes, logo design is available on its own or as part of a complete brand identity package.",
      },
      {
        question: "Can you match our existing brand guidelines?",
        answer:
          "Yes, if you already have brand guidelines we design within them, and if you do not, we can help establish a consistent visual system.",
      },
      {
        question: "What file formats will we receive?",
        answer:
          "We deliver final designs in the formats appropriate for their use, whether that's web-ready images, print-ready files, or editable source files.",
      },
      {
        question: "How many revisions are included?",
        answer:
          "Revision rounds are agreed upfront based on the scope of the project, ensuring the final design genuinely fits your brand.",
      },
    ],
    relatedServices: ["social-media-marketing", "web-development", "meta-ads"],
    keywords: ["graphic designing services", "brand identity design", "logo design"],
  },
  {
    slug: "youtube-automation",
    title: "YouTube Automation",
    shortTitle: "YouTube Automation",
    icon: Clapperboard,
    tagline: "Structured, consistent channel production from strategy to publish.",
    metaDescription:
      "YouTube automation services covering channel strategy, niche and content research, scripting, voiceover, video production, thumbnail design and publishing strategy.",
    heroParagraph:
      "We help you build and run a YouTube channel with a structured production process, covering everything from niche research and scripting to video production and publishing strategy.",
    overview: [
      "Running a consistent YouTube channel takes more than uploading videos. It requires ongoing research, planning, scripting, production and optimization, which is difficult to sustain without a dedicated process.",
      "Our YouTube automation service builds that process for you, managing the research, content and production workflow so your channel can publish consistently with a professional standard.",
      "We are upfront that YouTube growth and monetization depend on many factors outside anyone's direct control, including content quality, audience response, consistency and platform algorithm performance. Our role is to bring structure, strategy and production quality to the channel, not to promise specific outcomes.",
    ],
    benefits: [
      {
        title: "Consistent publishing",
        description:
          "A structured production workflow makes it realistic to publish on a regular schedule.",
      },
      {
        title: "Professional production quality",
        description:
          "Scripting, voiceover and editing standards that keep content watchable and on-brand.",
      },
      {
        title: "Research-backed content",
        description:
          "Content topics are chosen based on niche and audience research rather than guesswork.",
      },
      {
        title: "Optimized discoverability",
        description:
          "Titles, descriptions and thumbnails are optimized to help content get found within YouTube search and recommendations.",
      },
      {
        title: "Time saved",
        description:
          "Handling the production workflow frees you from managing every step of content creation yourself.",
      },
    ],
    offerings: [
      {
        title: "Channel strategy",
        description:
          "Defining your channel's direction, content pillars and long-term positioning.",
      },
      {
        title: "Niche research",
        description:
          "Identifying a content niche with realistic audience demand and a sustainable content angle.",
      },
      {
        title: "Content research",
        description:
          "Finding video topics and formats that align with audience interest and search demand on YouTube.",
      },
      {
        title: "Script development",
        description:
          "Writing structured scripts that keep videos clear, engaging and aligned with the channel's voice.",
      },
      {
        title: "Voiceover",
        description:
          "Professional voiceover recording to support faceless or narrated video formats.",
      },
      {
        title: "Video production",
        description:
          "Editing and producing videos to a consistent visual and pacing standard.",
      },
      {
        title: "Thumbnail design",
        description:
          "Designing thumbnails intended to stand out in search results and recommendations.",
      },
      {
        title: "SEO optimization",
        description:
          "Optimizing titles, descriptions and tags to support discoverability on YouTube.",
      },
      {
        title: "Publishing strategy",
        description:
          "Planning upload schedules and timing based on channel goals and audience behavior.",
      },
      {
        title: "Analytics",
        description:
          "Reviewing channel performance data to inform future content decisions.",
      },
    ],
    process: [
      {
        title: "Niche & channel strategy",
        description:
          "We research viable niches and define a clear content direction for the channel.",
      },
      {
        title: "Content planning",
        description:
          "We build a content pipeline of researched topics and scripts ready for production.",
      },
      {
        title: "Production",
        description:
          "Scripts move through voiceover, editing and thumbnail design to become publish-ready videos.",
      },
      {
        title: "Publishing & optimization",
        description:
          "Videos are published on a planned schedule with optimized titles, descriptions and tags.",
      },
      {
        title: "Review & iterate",
        description:
          "We review analytics regularly and adjust content direction based on what resonates with viewers.",
      },
    ],
    whyItMatters:
      "A channel that publishes inconsistently or without a clear content direction struggles to build an audience regardless of production quality. A structured process gives a channel the consistency needed to give the algorithm and audience a genuine chance to respond, though outcomes are never guaranteed.",
    whoItsFor: [
      "Individuals or businesses wanting to start a YouTube channel without managing every production step themselves",
      "Existing channels that publish inconsistently and need a structured workflow",
      "Businesses looking to use YouTube as a long-term content and visibility channel",
      "Creators who want professional scripting, voiceover and editing support",
    ],
    faqs: [
      {
        question: "Can you guarantee my channel will get monetized or go viral?",
        answer:
          "No. We do not promise guaranteed monetization, views or income. Channel growth depends on content quality, niche demand, consistency and how YouTube's algorithm responds, none of which any provider can fully control.",
      },
      {
        question: "Do you appear on camera for the videos?",
        answer:
          "We specialize in structured, often faceless-style production involving scripting, voiceover and editing, which we can discuss based on your preferred channel format.",
      },
      {
        question: "How often can a channel realistically publish?",
        answer:
          "Publishing frequency is planned around a sustainable production pipeline agreed with you, prioritizing consistency over an unrealistic schedule.",
      },
      {
        question: "What do you need from me to get started?",
        answer:
          "We typically need your niche preferences or business goals, any brand guidelines, and your input during script and concept review to keep content aligned with your vision.",
      },
    ],
    relatedServices: ["graphic-designing", "social-media-marketing", "digital-marketing"],
    keywords: ["YouTube automation", "YouTube automation channel", "YouTube channel management"],
  },
  {
    slug: "meta-ads",
    title: "Meta Ads",
    shortTitle: "Meta Ads",
    icon: Target,
    tagline: "Facebook and Instagram campaigns built around real conversion goals.",
    metaDescription:
      "Meta Ads management for Facebook and Instagram covering campaign strategy, audience targeting, retargeting, creative testing, pixel tracking and performance reporting.",
    heroParagraph:
      "We plan and manage Facebook and Instagram advertising campaigns focused on genuine business outcomes, from qualified leads to tracked conversions, backed by continuous optimization.",
    overview: [
      "Facebook and Instagram remain some of the most precise advertising platforms available, but precision only helps if the campaign strategy, targeting and creative are aligned with a clear conversion goal.",
      "Our Meta Ads service manages that alignment end-to-end: defining the right campaign objective, building audiences that match your actual customers, developing creative that gets tested rather than guessed at, and tracking performance accurately through pixel and conversion tracking.",
      "Whether the goal is lead generation, website traffic or direct conversions, campaigns are structured around measurable outcomes and refined continuously based on real performance data.",
    ],
    benefits: [
      {
        title: "Precise audience targeting",
        description:
          "Campaigns reach the people most likely to be interested in your offer, based on defined audience criteria and behavior.",
      },
      {
        title: "Accurate performance tracking",
        description:
          "Proper pixel and conversion tracking means you know exactly what campaigns are producing.",
      },
      {
        title: "Continuous creative testing",
        description:
          "Testing multiple creatives and angles identifies what actually resonates with your audience.",
      },
      {
        title: "Retargeting warm audiences",
        description:
          "Re-engaging people who have already shown interest improves the efficiency of ad spend.",
      },
      {
        title: "Transparent reporting",
        description:
          "Regular performance reporting keeps you informed on results and where budget is going.",
      },
    ],
    offerings: [
      {
        title: "Facebook Ads",
        description:
          "Campaign setup and management across Facebook's ad placements and formats.",
      },
      {
        title: "Instagram Ads",
        description:
          "Ad campaigns tailored to Instagram's visual, feed and story-based ad formats.",
      },
      {
        title: "Campaign strategy",
        description:
          "Defining the right objective and structure for your specific goals, whether leads, traffic or conversions.",
      },
      {
        title: "Audience targeting",
        description:
          "Building precise audiences based on demographics, interests and behavior relevant to your business.",
      },
      {
        title: "Retargeting",
        description:
          "Campaigns aimed at re-engaging website visitors and people who have interacted with your brand.",
      },
      {
        title: "Creative testing",
        description:
          "Testing different ad creatives and messaging to identify what performs best.",
      },
      {
        title: "Lead generation campaigns",
        description:
          "Campaigns built to capture qualified leads directly through Meta's ad formats or landing pages.",
      },
      {
        title: "Conversion campaigns",
        description:
          "Campaigns optimized toward website actions such as purchases, sign-ups or enquiries.",
      },
      {
        title: "Pixel & conversion tracking",
        description:
          "Setting up accurate tracking so campaign performance and results can be properly measured.",
      },
      {
        title: "Campaign optimization",
        description:
          "Ongoing adjustments to targeting, budget and creative based on live performance data.",
      },
      {
        title: "Performance reporting",
        description:
          "Regular reports covering spend, results and key metrics tied to your campaign goals.",
      },
    ],
    process: [
      {
        title: "Goal & audience definition",
        description:
          "We clarify your campaign objective and define the audience most likely to convert.",
      },
      {
        title: "Tracking setup",
        description:
          "We implement pixel and conversion tracking so performance can be measured accurately from the start.",
      },
      {
        title: "Creative & campaign build",
        description:
          "We develop ad creative and structure campaigns aligned with the defined objective.",
      },
      {
        title: "Launch & testing",
        description:
          "Campaigns launch with structured creative and audience testing to identify top performers.",
      },
      {
        title: "Optimization & reporting",
        description:
          "We continuously refine campaigns based on data and provide regular performance reports.",
      },
    ],
    whyItMatters:
      "With billions of active users, Facebook and Instagram give businesses access to highly specific audiences, but poorly structured campaigns waste that potential quickly. Proper strategy, tracking and testing are what separate ad spend that gets results from ad spend that simply disappears.",
    whoItsFor: [
      "Businesses wanting to generate leads or sales directly through Facebook and Instagram",
      "E-commerce brands needing conversion-focused campaign management",
      "Companies that have run ads before without proper tracking or clear results",
      "Businesses looking to retarget website visitors who did not convert",
    ],
    faqs: [
      {
        question: "How much budget do I need to start with Meta Ads?",
        answer:
          "Budget depends on your industry, goals and competition. We help determine a realistic starting budget during the strategy phase based on your specific objectives.",
      },
      {
        question: "What is pixel tracking and why does it matter?",
        answer:
          "The Meta pixel tracks how people interact with your website after clicking an ad, allowing accurate measurement of conversions and enabling retargeting campaigns.",
      },
      {
        question: "How do you decide which ad creative to use?",
        answer:
          "We test multiple creative variations against each other and let performance data determine which ones continue running and scaling.",
      },
      {
        question: "Can you manage both Facebook and Instagram together?",
        answer:
          "Yes, since both run through the same Meta advertising platform, we manage campaigns across both as part of a single coordinated strategy.",
      },
    ],
    relatedServices: ["google-ads", "social-media-marketing", "graphic-designing"],
    keywords: ["Meta Ads", "Facebook advertising", "Instagram ads management"],
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    shortTitle: "Google Ads",
    icon: MousePointerClick,
    tagline: "Search, display and YouTube campaigns built on real keyword intent.",
    metaDescription:
      "Google Ads management covering Search, Display, YouTube ads, remarketing, keyword research, campaign structure, conversion tracking and landing page optimization.",
    heroParagraph:
      "We build and manage Google Ads campaigns across Search, Display and YouTube, structured around genuine keyword intent and backed by proper conversion tracking and reporting.",
    overview: [
      "Google Ads gives businesses the ability to appear in front of people at the exact moment they are searching for a relevant product or service, but that advantage depends entirely on how well the campaign is structured.",
      "Our Google Ads service covers strategy, keyword research, campaign structure, ad copy and landing page alignment, so budget is directed toward the searches most likely to convert rather than spread across broad, low-intent traffic.",
      "We combine Search, Display and YouTube Ads where appropriate, along with remarketing to re-engage people who have already visited your site, all supported by conversion tracking that shows exactly what campaigns are delivering.",
    ],
    benefits: [
      {
        title: "Appear at the moment of intent",
        description:
          "Search campaigns put your business in front of people actively searching for what you offer.",
      },
      {
        title: "Efficient budget allocation",
        description:
          "Careful keyword research and campaign structure reduce spend on low-intent or irrelevant traffic.",
      },
      {
        title: "Measurable conversions",
        description:
          "Proper conversion tracking shows exactly which campaigns and keywords are producing results.",
      },
      {
        title: "Multi-format reach",
        description:
          "Search, Display and YouTube Ads allow your business to reach audiences at different stages of their journey.",
      },
      {
        title: "Continuous improvement",
        description:
          "Ongoing campaign optimization keeps performance improving rather than remaining static after launch.",
      },
    ],
    offerings: [
      {
        title: "Search Ads",
        description:
          "Text ads shown to people actively searching for terms related to your business.",
      },
      {
        title: "Display Ads",
        description:
          "Visual ads shown across Google's Display Network to build awareness and reach.",
      },
      {
        title: "YouTube Ads",
        description:
          "Video ad campaigns that reach audiences on YouTube aligned with your target market.",
      },
      {
        title: "Remarketing",
        description:
          "Campaigns that re-engage people who have previously visited your website.",
      },
      {
        title: "Keyword research",
        description:
          "Identifying search terms with genuine commercial intent relevant to your business.",
      },
      {
        title: "Campaign structure",
        description:
          "Organizing campaigns and ad groups logically so budget and relevance are optimized.",
      },
      {
        title: "Ad copy",
        description:
          "Writing clear, relevant ad copy aligned with keyword intent and your value proposition.",
      },
      {
        title: "Conversion tracking",
        description:
          "Setting up accurate tracking so campaign results can be properly measured and optimized.",
      },
      {
        title: "Landing page optimization",
        description:
          "Aligning landing pages with ad intent to improve conversion rates from paid traffic.",
      },
      {
        title: "Campaign optimization",
        description:
          "Ongoing bid, keyword and budget adjustments based on real performance data.",
      },
      {
        title: "Reporting",
        description:
          "Clear, regular reporting on spend, clicks, conversions and overall campaign performance.",
      },
    ],
    process: [
      {
        title: "Research & strategy",
        description:
          "We research keywords and define a campaign strategy aligned with your business goals and budget.",
      },
      {
        title: "Campaign & tracking setup",
        description:
          "We build campaign structures and implement conversion tracking before launch.",
      },
      {
        title: "Ad copy & landing pages",
        description:
          "We write ad copy and review landing pages to ensure they align with search intent.",
      },
      {
        title: "Launch & monitoring",
        description:
          "Campaigns go live with close monitoring of early performance data.",
      },
      {
        title: "Optimization & reporting",
        description:
          "We continuously refine keywords, bids and creative, with regular performance reports.",
      },
    ],
    whyItMatters:
      "Search advertising captures demand that already exists — people who are actively looking for a solution. A well-structured Google Ads campaign puts your business in front of that demand efficiently, while a poorly structured one can burn budget on clicks that were never likely to convert.",
    whoItsFor: [
      "Businesses wanting immediate visibility for high-intent search terms",
      "Companies with a converting website that needs qualified traffic",
      "Businesses wanting to remarket to past website visitors",
      "Brands looking to combine Search, Display and YouTube for broader reach",
    ],
    faqs: [
      {
        question: "Can you guarantee a specific return on ad spend?",
        answer:
          "No. Results depend on your industry, competition, offer and website performance, so we do not make guaranteed ROI claims. We focus on data-driven optimization to improve performance over time.",
      },
      {
        question: "How is Google Ads different from SEO?",
        answer:
          "Google Ads provides immediate, paid visibility in search results, while SEO builds organic visibility over time without a per-click cost. Many businesses use both as part of a wider strategy.",
      },
      {
        question: "Do you also work on the landing page the ads point to?",
        answer:
          "Yes, we review and can optimize landing pages to make sure they align with ad intent, since this significantly affects conversion rates.",
      },
      {
        question: "What is remarketing and is it worth doing?",
        answer:
          "Remarketing shows ads to people who have already visited your site. It is often a cost-efficient tactic since it targets an audience already familiar with your brand.",
      },
    ],
    relatedServices: ["seo", "meta-ads", "web-development"],
    keywords: ["Google Ads", "Google Ads management", "PPC advertising"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(service: Service): Service[] {
  return service.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter((item): item is Service => Boolean(item));
}
