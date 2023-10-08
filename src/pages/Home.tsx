import { CraftingDigitalExcellence } from '../components/home/CraftingDigitalExcellence';
import { LandingHero } from '../components/home/LandingHero';
import { ProjectWorkflow } from '../components/home/ProjectWorkflow';
import { OurFormulaforSuccess } from '../components/home/OurFormulaforSuccess';
import { WhatWeDo } from '../components/home/WhatWeDo';

const HomePage = () => (
  <div className="h-full w-full">
    <LandingHero />
    <CraftingDigitalExcellence />
    <OurFormulaforSuccess />
    <WhatWeDo />
    <ProjectWorkflow />
  </div>
);

export default HomePage;
