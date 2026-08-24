import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FieldNote } from "@/components/ui/field-note";
import { Button } from "@/components/ui/button";
import { programs, tracks, type Track } from "@/data/site";

const trackColor: Record<Track, string> = {
  cyber: "var(--color-track-cyber)",
  ai: "var(--color-track-ai)",
  data: "var(--color-track-data)",
};

export function ProgramGrid() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <FieldNote index={3}>Featured Programs</FieldNote>
            <h2 className="mt-5 max-w-[520px] font-[var(--font-display)] text-[30px] font-semibold leading-tight text-[var(--color-text)] md:text-[36px]">
              Six programs to start with
            </h2>
          </div>
          <Button href="/career-paths" variant="link">
            View all programs
          </Button>
        </div>

        <div className="mt-12 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
          {programs.map((p) => (
            <a
              key={p.href}
              href={p.href}
              className="group grid gap-2 py-6 sm:grid-cols-[140px_1fr_auto] sm:items-center sm:gap-6"
            >
              <span
                className="font-[var(--font-mono)] text-[11px] font-medium uppercase tracking-[0.06em]"
                style={{ color: trackColor[p.track] }}
              >
                {tracks[p.track].label}
              </span>
              <div>
                <h3 className="font-[var(--font-display)] text-[19px] font-semibold text-[var(--color-text)]">
                  {p.title}
                </h3>
                <p className="mt-1 text-[13.5px] leading-relaxed text-[var(--color-text-secondary)] sm:max-w-[520px]">
                  {p.desc}
                </p>
                <div className="mt-1.5 font-[var(--font-mono)] text-[11.5px] text-[var(--color-text-tertiary)]">
                  {p.duration} · {p.level}
                </div>
              </div>
              <div className="hidden items-center gap-1.5 text-[13.5px] font-medium text-[var(--color-text)] sm:flex">
                View
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
