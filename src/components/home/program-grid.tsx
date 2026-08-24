import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { LogTag } from "@/components/ui/log-tag";
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
            <LogTag index={3}>Featured Programs</LogTag>
            <h2 className="mt-4 max-w-[520px] font-[var(--font-display)] text-[30px] font-bold leading-tight text-[var(--color-text)] md:text-[38px]">
              Six programs to start with
            </h2>
          </div>
          <Button href="/career-paths" variant="outline">
            View all programs
          </Button>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <a
              key={p.href}
              href={p.href}
              className="group flex flex-col rounded-[var(--radius-md)] border border-[var(--color-border)] p-6 transition-colors hover:border-[var(--color-border-strong)]"
            >
              <span
                className="w-fit rounded-full px-2.5 py-1 font-[var(--font-mono)] text-[10.5px] font-medium uppercase tracking-[0.08em]"
                style={{
                  color: trackColor[p.track],
                  backgroundColor: `color-mix(in srgb, ${trackColor[p.track]} 12%, white)`,
                }}
              >
                {tracks[p.track].label}
              </span>
              <h3 className="mt-4 text-[18px] font-bold text-[var(--color-text)]">
                {p.title}
              </h3>
              <div className="mt-1 flex items-center gap-2 font-[var(--font-mono)] text-[12px] text-[var(--color-text-tertiary)]">
                <span>{p.duration}</span>
                <span>·</span>
                <span>{p.level}</span>
              </div>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
                {p.desc}
              </p>
              <div className="mt-5 flex items-center gap-1.5 border-t border-[var(--color-border)] pt-4 text-[13.5px] font-semibold text-[var(--color-text)]">
                View program
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
