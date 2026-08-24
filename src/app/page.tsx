import { Hero } from "@/components/home/hero";
import { CareerPaths } from "@/components/home/career-paths";
import { WhySection } from "@/components/home/why-section";
import { ProgramGrid } from "@/components/home/program-grid";
import { LearningJourney } from "@/components/home/learning-journey";
import { FaqSection } from "@/components/home/faq-section";
import { FinalCta } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CareerPaths />
      <WhySection />
      <ProgramGrid />
      <LearningJourney />
      <FaqSection />
      <FinalCta />
    </>
  );
}
