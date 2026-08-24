import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FieldNote } from "@/components/ui/field-note";
import type { Track } from "@/data/site";

const trackColor: Record<Track, string> = {
  cyber: "var(--color-track-cyber)",
  ai: "var(--color-track-ai)",
  data: "var(--color-track-data)",
};

export function TrackHero({
  track,
  label,
  title,
  sub,
  courseCount,
}: {
  track: Track;
  label: string;
  title: string;
  sub: string;
  courseCount: number;
}) {
  return (
    <section className="border-b border-[var(--color-border)] pb-14 pt-14 md:pb-20 md:pt-20">
      <Container>
        <FieldNote>{label}</FieldNote>
        <h1
          className="mt-5 max-w-[620px] font-[var(--font-display)] text-[36px] font-semibold leading-[1.15] md:text-[46px]"
          style={{ color: trackColor[track] }}
        >
          {title}
        </h1>
        <p className="mt-5 max-w-[540px] text-[16.5px] leading-relaxed text-[var(--color-text-secondary)]">
          {sub}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Button href="/contact" size="lg">
            Talk to a Career Advisor
            <ArrowRight className="h-4 w-4" />
          </Button>
          <span className="font-[var(--font-mono)] text-[12.5px] text-[var(--color-text-tertiary)]">
            {courseCount} programs in this track
          </span>
        </div>
      </Container>
    </section>
  );
}
