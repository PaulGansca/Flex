import './App.css';
import { LandingHero } from './components/LandingHero';
import { Navbar } from './components/Navbar';
import { WhatMakesUsGoodSection } from './components/WhatMakesUsGoodSection';
import { BreakTheMold } from './components/BreakTheMold';
import { ProjectWorkflow } from './components/ProjectWorkflow';

function App() {
  return (
    <div className="">
      <div>
        <Navbar />

        <LandingHero />

        <BreakTheMold />

        <WhatMakesUsGoodSection />

        <ProjectWorkflow />
      </div>
    </div>
  );
}

export default App;
