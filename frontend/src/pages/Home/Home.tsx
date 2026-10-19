import { Navbar } from "../../components/layout/Navbar/Navbar";
import { Hero } from "../../components/sections/Hero/Hero";
import { Problem } from "../../components/sections/Problem/Problem";
import { Features } from "../../components/sections/Features/Features";
import { HowItWorks } from "../../components/sections/HowItWorks/HowItWorks";
import { ODS } from "../../components/sections/ODS/ODS";
import { FinalCTA } from "../../components/sections/FinalCTA/FinalCTA";
import { Footer } from "../../components/layout/Footer/Footer";

export function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <ODS />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}