import './App.css';
import { LandingHero } from './components/LandingHero';
import { Navbar } from './components/Navbar';
import { WhatMakesUsGoodSection } from './components/WhatMakesUsGoodSection';
import { BreakTheMold } from './components/BreakTheMold';
import { ProjectWorkflow } from './components/ProjectWorkflow';
import { WhatWeDo } from './components/WhatWeDo';

function App() {
  return (
    <div className="">
      <div>
        <Navbar />
        <LandingHero />
        <BreakTheMold />
        <WhatMakesUsGoodSection />
        <WhatWeDo />
        <ProjectWorkflow />
      </div>
    </div>
  );
}

export default App;
