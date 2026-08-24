import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FieldNote } from "@/components/ui/field-note";
import type { Program, Track } from "@/data/site";

const trackColor: Record<Track, string> = {
  cyber: "var(--color-track-cyber)",
  ai: "var(--color-track-ai)",
  data: "var(--color-track-data)",
};

export function TrackCourseList({
  track,
  courses,
}: {
  track: Track;
  courses: Program[];
}) {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <FieldNote index={1}>Programs</FieldNote>
        <h2 className="mt-5 font-[var(--font-display)] text-[28px] font-semibold text-[var(--color-text)] md:text-[32px]">
          Every program in this track
        </h2>

        <div className="mt-10 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
          {courses.map((c) => (
            <a
              key={c.href}
              href={c.href}
              className="group grid gap-2 py-6 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6"
            >
              <div>
                <h3 className="font-[var(--font-display)] text-[19px] font-semibold text-[var(--color-text)]">
                  {c.title}
                </h3>
                <p className="mt-1 text-[13.5px] leading-relaxed text-[var(--color-text-secondary)] sm:max-w-[560px]">
                  {c.desc}
                </p>
                <div className="mt-1.5 font-[var(--font-mono)] text-[11.5px] text-[var(--color-text-tertiary)]">
                  {c.duration} · {c.level}
                </div>
              </div>
              <div
                className="flex items-center gap-1.5 text-[13.5px] font-medium"
                style={{ color: trackColor[track] }}
              >
                View curriculum
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
