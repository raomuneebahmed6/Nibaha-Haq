import type { Metadata } from "next";
import { GraduationCap, Laptop, Users2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CourseCard } from "@/components/CourseCard";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/CTASection";
import { courses } from "@/lib/data/courses";

export const metadata: Metadata = {
  title: "Digital Skills Training Courses",
  description:
    "Practical training courses in web development, social media marketing and YouTube automation, built around hands-on projects and real-world skills.",
  alternates: { canonical: "/courses" },
};

const highlights = [
  {
    icon: Laptop,
    title: "Practical, project-based learning",
    description: "Every course is built around real projects, not just video lectures.",
  },
  {
    icon: Users2,
    title: "Small, focused class structure",
    description: "Live sessions designed for genuine interaction and feedback.",
  },
  {
    icon: GraduationCap,
    title: "Skills you can use immediately",
    description: "Course content mirrors what our own team uses on real client work.",
  },
];

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nibaha Haq Academy"
        title="Practical Training Courses for Real Digital Skills"
        description="Learn web development, social media marketing and YouTube automation through hands-on, project-based courses."
        breadcrumbs={[{ label: "Courses" }]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {highlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06} className="rounded-2xl border border-border bg-white p-6 text-center">
                <item.icon className="mx-auto h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Courses"
            title="Choose the Course That Fits Your Goals"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {courses.map((course, index) => (
              <CourseCard key={course.slug} course={course} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Have Questions About Our Courses?"
        description="Reach out and we'll help you choose the right course and format for your goals."
        primaryLabel="Get Course Details"
        primaryHref="/contact"
        secondaryLabel="Explore Courses"
        secondaryHref="/courses"
      />
    </>
  );
}
