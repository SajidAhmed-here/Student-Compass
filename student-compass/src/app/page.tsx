import type { Metadata } from "next";
import { HeroSlider } from "@/components/HeroSlider";
import { CourseFinder } from "@/components/CourseFinder";
import { Cities } from "@/components/Cities";
import { WhyChooseUs, Guideline, ClosingCta } from "@/components/HomeSections";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <HeroSlider />
      <CourseFinder />
      <Cities />
      <WhyChooseUs />
      <Guideline />
      <ClosingCta />
    </>
  );
}
