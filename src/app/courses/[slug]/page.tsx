import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FieldNote } from "@/components/ui/field-note";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FinalCta } from "@/components/home/final-cta";
import { courseDetails } from "@/data/course-details";
import { tracks, type Track } from "@/data/site";

const trackColor: Record<Track, string> = {
  cyber: "var(--color-track-cyber)",
  ai: "var(--color-track-ai)",
  data: "var(--color-track-data)",
};

export function generateStaticParams() {
  return Object.keys(courseDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = courseDetails[slug];
  if (!course) return {};
  return {
    title: course.title,
    description: course.sub,
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = courseDetails[slug];
  if (!course) return notFound();

  const color = trackColor[course.track];

  return (
    <>
      <section className="border-b border-[var(--color-border)] pb-14 pt-14 md:pb-20 md:pt-20">
        <Container>
          <FieldNote>{tracks[course.track].label}</FieldNote>
          <h1
            className="mt-5 max-w-[640px] font-[var(--font-display)] text-[34px] font-semibold leading-[1.15] md:text-[44px]"
            style={{ color }}
          >
            {course.title}
          </h1>
          <p className="mt-5 max-w-[540px] text-[16.5px] leading-relaxed text-[var(--color-text-secondary)]">
            {course.sub}
          </p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-[var(--color-border)] pt-6 font-[var(--font-mono)] text-[12.5px] text-[var(--color-text-tertiary)]">
            <span>{course.duration}</span>
            <span>{course.mode}</span>
            <span>{course.level}</span>
          </div>

          <div className="mt-8">
            <Button href="/contact" size="lg">
              Talk to a Career Advisor
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <FieldNote index={1}>Curriculum</FieldNote>
          <h2 className="mt-5 font-[var(--font-display)] text-[26px] font-semibold text-[var(--color-text)] md:text-[30px]">
            What you&apos;ll learn
          </h2>

          <div className="mt-10 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
            {course.modules.map((m, i) => (
              <div key={m.title} className="grid gap-2 py-6 sm:grid-cols-[80px_1fr] sm:gap-6">
                <span className="font-[var(--font-mono)] text-[13px] text-[var(--color-text-tertiary)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-[var(--font-display)] text-[17px] font-semibold text-[var(--color-text)]">
                    {m.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {course.projectTitle && (
        <section className="border-y border-[var(--color-border)] bg-[var(--color-surface-muted)] py-16 md:py-20">
          <Container>
            <FieldNote index={2}>Project</FieldNote>
            <h2 className="mt-5 font-[var(--font-display)] text-[26px] font-semibold text-[var(--color-text)] md:text-[30px]">
              What you&apos;ll build
            </h2>
            <div className="mt-8 max-w-[560px] border-t border-[var(--color-border-strong)] pt-6">
              <h3 className="font-[var(--font-display)] text-[19px] font-semibold" style={{ color }}>
                {course.projectTitle}
              </h3>
              {course.projectDesc && (
                <p className="mt-2 text-[14.5px] leading-relaxed text-[var(--color-text-secondary)]">
                  {course.projectDesc}
                </p>
              )}
            </div>
          </Container>
        </section>
      )}

      {course.faqs.length > 0 && (
        <section className="py-16 md:py-20">
          <Container className="max-w-[720px]">
            <FieldNote index={3}>FAQ</FieldNote>
            <h2 className="mt-5 font-[var(--font-display)] text-[26px] font-semibold text-[var(--color-text)] md:text-[30px]">
              Common questions
            </h2>
            <Accordion type="single" collapsible className="mt-8 border-t border-[var(--color-border)]">
              {course.faqs.map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="font-[var(--font-display)] font-semibold">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent>{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Container>
        </section>
      )}

      <FinalCta />
    </>
  );
}
