import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { SolutionsPreview } from "@/components/home/SolutionsPreview";
import { WhyAxion } from "@/components/home/WhyAxion";
import { ServiceGrid } from "@/components/home/ServiceGrid";
import { FlagshipPanel } from "@/components/home/FlagshipPanel";
import { SectionCTA } from "@/components/ui/SectionCTA";

export const metadata: Metadata = {
  title: { absolute: "Axion LLC — Innovation · Technology · Solutions" },
  description:
    "Axion LLC is a UAE-based industrial technology company delivering advanced manufacturing, robotics, drone, and IoT solutions across all 7 Emirates.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceGrid />
      <SolutionsPreview />
      <WhyAxion />
      <FlagshipPanel />
      <SectionCTA
        eyebrow="Start a Conversation"
        heading="Not sure which solution fits your needs?"
        body="Talk to our engineering team. We'll assess your requirements and recommend the right path — at no cost and no obligation."
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />
    </>
  );
}
