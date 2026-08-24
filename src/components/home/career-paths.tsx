import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { LogTag } from "@/components/ui/log-tag";
import { tracks, type Track } from "@/data/site";

const trackColor: Record<Track, string> = {
  cyber: "var(--color-track-cyber)",
  ai: "var(--color-track-ai)",
  data: "var(--color-track-data)",
};

export function CareerPaths() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <LogTag index={1}>Career Paths</LogTag>
        <h2 className="mt-4 max-w-[520px] font-[var(--font-display)] text-[30px] font-bold leading-tight text-[var(--color-text)] md:text-[38px]">
          Choose your technology career path
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {(Object.entries(tracks) as [Track, (typeof tracks)[Track]][]).map(
            ([key, t]) => (
              <a
                key={key}
                href={t.href}
                className="group flex flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-7 transition-shadow hover:shadow-[0_20px_40px_-24px_rgba(15,23,42,0.25)]"
              >
                <span
                  className="h-9 w-9 rounded-lg"
                  style={{ backgroundColor: trackColor[key] }}
                  aria-hidden
                />
                <h3 className="mt-6 font-[var(--font-display)] text-[21px] font-bold text-[var(--color-text)]">
                  {t.label}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-[var(--color-text-secondary)]">
                  {t.blurb}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {t.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-[var(--color-border)] px-2.5 py-1 text-[12px] font-medium text-[var(--color-text-secondary)]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex items-center gap-1.5 text-[13.5px] font-semibold text-[var(--color-text)]">
                  Explore {t.label}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            )
          )}
        </div>
      </Container>
    </section>
  );
}
