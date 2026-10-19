import { Navbar } from "../../components/layout/Navbar/Navbar";
import { Footer } from "../../components/layout/Footer/Footer";

import { GuideHero } from "../../components/sections/Guide/GuideHero/GuideHero";
import { GuideSteps } from "../../components/sections/Guide/GuideSteps/GuideSteps";
import { GuideContent } from "../../components/sections/Guide/GuideContent/GuideContent";
import { GuideCTA } from "../../components/sections/Guide/GuideCTA/GuideCTA";

import "./Guide.css";

export function Guide() {
  return (
    <div className="guide-page">
      <Navbar />

      <main>
        <GuideHero />
        <GuideSteps />
        <GuideContent />
        <GuideCTA />
      </main>

      <Footer />
    </div>
  );
}