import { Navbar } from "../../components/layout/Navbar/Navbar";
import { Footer } from "../../components/layout/Footer/Footer";

import { OpportunitiesHero } from "../../components/sections/Opportunities/OpportunitiesHero/OpportunitiesHero";
import { OpportunitiesJobs } from "../../components/sections/Opportunities/OpportunitiesJobs/OpportunitiesJobs";
import { OpportunitiesInternships } from "../../components/sections/Opportunities/OpportunitiesInternships/OpportunitiesInternships";
import { OpportunitiesPublic } from "../../components/sections/Opportunities/OpportunitiesPublic/OpportunitiesPublic";
import { OpportunitiesCTA } from "../../components/sections/Opportunities/OpportunitiesCTA/OpportunitiesCTA";

import "./Opportunities.css";

export function Opportunities() {
  return (
    <div className="opportunities-page">
      <Navbar />

      <main>
        <OpportunitiesHero />

        <OpportunitiesJobs />

        <OpportunitiesInternships />

        <OpportunitiesPublic />

        <OpportunitiesCTA />
      </main>

      <Footer />
    </div>
  );
}