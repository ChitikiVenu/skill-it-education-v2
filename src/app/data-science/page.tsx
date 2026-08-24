import type { Metadata } from "next";
import { TrackHero } from "@/components/tracks/track-hero";
import { TrackCourseList } from "@/components/tracks/track-course-list";
import { FinalCta } from "@/components/home/final-cta";
import { tracks, programs } from "@/data/site";

export const metadata: Metadata = {
  title: "Data Science Training in Hyderabad",
  description:
    "Data Analytics, Machine Learning and Data Engineering — hands-on Data Science training in Madhapur, Hyderabad.",
};

export default function DataSciencePage() {
  const t = tracks.data;
  const courses = programs.filter((p) => p.track === "data");
  return (
    <>
      <TrackHero
        track="data"
        label={t.label}
        title={t.heroTitle}
        sub={t.heroSub}
        courseCount={courses.length}
      />
      <TrackCourseList track="data" courses={courses} />
      <FinalCta />
    </>
  );
}
