import React from "react";
import { Footer } from "../lib/features/landing_page/presentation/footer";
import HeroSection from "../lib/features/landing_page/presentation/hero_section";
import { Section1 } from "../lib/features/landing_page/presentation/section_1";
import { Section2 } from "../lib/features/landing_page/presentation/section_2";
import { Section3 } from "../lib/features/landing_page/presentation/section_3";
import { SubHero } from "../lib/features/landing_page/presentation/sub_hero";

export default function LandingPage() {
  return (
    <div className="bg-gray-100">
      <HeroSection />
      <SubHero />
      <Section1 />
      <hr />
      <Section2 />
      <hr />
      <Section3 />
      <Footer />
    </div>
  );
}
