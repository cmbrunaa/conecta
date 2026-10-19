import { Navbar } from "../../components/layout/Navbar/Navbar";
import { Footer } from "../../components/layout/Footer/Footer";

import { SecurityHero } from "../../components/sections/Security/SecurityHero/SecurityHero";
import { SecurityTips } from "../../components/sections/Security/SecurityTips/SecurityTips";
import { SecurityCTA } from "../../components/sections/Security/SecurityCTA/SecurityCTA";

import "./Security.css";

export function Security() {
  return (
    <div className="security-page">
      <Navbar />

      <main>
        <SecurityHero />
        <SecurityTips />
        <SecurityCTA />
      </main>

      <Footer />
    </div>
  );
}