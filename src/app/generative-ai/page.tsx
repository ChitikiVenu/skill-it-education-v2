import type { Metadata } from "next";
import { TrackHero } from "@/components/tracks/track-hero";
import { TrackCourseList } from "@/components/tracks/track-course-list";
import { FinalCta } from "@/components/home/final-cta";
import { tracks, programs } from "@/data/site";

export const metadata: Metadata = {
  title: "Generative AI & LLM Engineering Training in Hyderabad",
  description:
    "RAG pipelines, AI agents and LLM engineering — hands-on Generative AI training in Madhapur, Hyderabad.",
};

export default function GenerativeAiPage() {
  const t = tracks.ai;
  const courses = programs.filter((p) => p.track === "ai");
  return (
    <>
      <TrackHero
        track="ai"
        label={t.label}
        title={t.heroTitle}
        sub={t.heroSub}
        courseCount={courses.length}
      />
      <TrackCourseList track="ai" courses={courses} />
      <FinalCta />
    </>
  );
}
