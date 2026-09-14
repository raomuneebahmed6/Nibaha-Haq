import { services } from "@/lib/data/services";
import { courses } from "@/lib/data/courses";

export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Courses", href: "/courses" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const servicesDropdown: NavLink[] = services.map((service) => ({
  label: service.shortTitle,
  href: `/services/${service.slug}`,
}));

export const coursesDropdown: NavLink[] = courses.map((course) => ({
  label: course.shortTitle,
  href: `/courses/${course.slug}`,
}));

export const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  services: servicesDropdown,
  courses: coursesDropdown,
  resources: [
    { label: "Get a Quote", href: "/get-a-quote" },
    { label: "Blog", href: "/blog" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ],
};
