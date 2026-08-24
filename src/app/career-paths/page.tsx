import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FieldNote } from "@/components/ui/field-note";
import { FinalCta } from "@/components/home/final-cta";
import { tracks, programs, type Track } from "@/data/site";

export const metadata: Metadata = {
  title: "All Programs",
  description:
    "Every Cyber Security, Generative AI and Data Science program at Skill IT Education, grouped by career track.",
};

const trackColor: Record<Track, string> = {
  cyber: "var(--color-track-cyber)",
  ai: "var(--color-track-ai)",
  data: "var(--color-track-data)",
};

export default function CareerPathsPage() {
  const trackKeys = Object.keys(tracks) as Track[];
  return (
    <>
      <section className="border-b border-[var(--color-border)] py-16 md:py-20">
        <Container>
          <FieldNote>Career Paths</FieldNote>
          <h1 className="mt-5 max-w-[560px] font-[var(--font-display)] text-[36px] font-semibold leading-tight text-[var(--color-text)] md:text-[44px]">
            All programs, by career track
          </h1>
          <p className="mt-5 max-w-[520px] text-[16px] leading-relaxed text-[var(--color-text-secondary)]">
            18 programs across three tracks — Cyber Security, Generative AI
            and Data Science. Every program builds toward a real project.
          </p>
        </Container>
      </section>

      {trackKeys.map((key, ti) => {
        const t = tracks[key];
        const courses = programs.filter((p) => p.track === key);
        return (
          <section
            key={key}
            className={
              ti % 2 === 1
                ? "border-b border-[var(--color-border)] bg-[var(--color-surface-muted)] py-16 md:py-20"
                : "border-b border-[var(--color-border)] py-16 md:py-20"
            }
          >
            <Container>
              <h2
                className="font-[var(--font-display)] text-[24px] font-semibold"
                style={{ color: trackColor[key] }}
              >
                {t.label}
              </h2>
              <p className="mt-2 max-w-[520px] text-[14.5px] text-[var(--color-text-secondary)]">
                {t.blurb}
              </p>

              <div className="mt-8 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
                {courses.map((c) => (
                  <a
                    key={c.href}
                    href={c.href}
                    className="group grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6"
                  >
                    <div>
                      <h3 className="font-[var(--font-display)] text-[17px] font-semibold text-[var(--color-text)]">
                        {c.title}
                      </h3>
                      <div className="mt-1 font-[var(--font-mono)] text-[11.5px] text-[var(--color-text-tertiary)]">
                        {c.duration} · {c.level}
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-1.5 text-[13px] font-medium"
                      style={{ color: trackColor[key] }}
                    >
                      View
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </a>
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      <FinalCta />
    </>
  );
}
