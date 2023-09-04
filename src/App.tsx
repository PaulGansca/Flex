import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';

import './App.css';
import { LandingHero } from './components/LandingHero';
import { Navbar } from './components/Navbar';
import { WhatMakesUsGoodSection } from './components/WhatMakesUsGoodSection';
import { useRef } from 'react';
import { BreakTheMold } from './components/BreakTheMold';
import { ProjectWorkflow } from './components/ProjectWorkflow';

function App() {
  const parallax = useRef<IParallax>(null!);
  return (
    <div className="bg-white h-screen w-screen">
      <div style={{ width: '100%', height: '100% ' }}>
        <Parallax ref={parallax} pages={4}>
          <ParallaxLayer sticky={{ start: 0, end: 3 }} offset={0} speed={0}>
            <Navbar />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0}>
            <LandingHero />
          </ParallaxLayer>
          <ParallaxLayer offset={0.99} speed={0.9}>
            <div className="mt-2 z-10">
              <BreakTheMold />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.1} speed={1.1}>
            <WhatMakesUsGoodSection />
          </ParallaxLayer>
          <ParallaxLayer offset={1.9} speed={1.2}>
            <ProjectWorkflow />
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
}

export default App;
