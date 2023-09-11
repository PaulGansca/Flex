import { BreakTheMold } from "../components/home/BreakTheMold";
import { LandingHero } from "../components/home/LandingHero";
import { ProjectWorkflow } from "../components/home/ProjectWorkflow";
import { WhatMakesUsGoodSection } from "../components/home/WhatMakesUsGoodSection";
import { WhatWeDo } from "../components/home/WhatWeDo";

const HomePage = () => (
  <div className="h-full w-full">
    <LandingHero />
    <BreakTheMold />
    <WhatMakesUsGoodSection />
    <WhatWeDo />
    <ProjectWorkflow />
  </div>
);

export default HomePage;
