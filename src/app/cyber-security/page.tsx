import type { Metadata } from "next";
import { TrackHero } from "@/components/tracks/track-hero";
import { TrackCourseList } from "@/components/tracks/track-course-list";
import { FinalCta } from "@/components/home/final-cta";
import { tracks, programs } from "@/data/site";

export const metadata: Metadata = {
  title: "Cyber Security Training in Hyderabad",
  description:
    "SOC operations, ethical hacking and penetration testing — hands-on Cyber Security training in Madhapur, Hyderabad.",
};

export default function CyberSecurityPage() {
  const t = tracks.cyber;
  const courses = programs.filter((p) => p.track === "cyber");
  return (
    <>
      <TrackHero
        track="cyber"
        label={t.label}
        title={t.heroTitle}
        sub={t.heroSub}
        courseCount={courses.length}
      />
      <TrackCourseList track="cyber" courses={courses} />
      <FinalCta />
    </>
  );
}
