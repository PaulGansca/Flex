import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';

import './App.css';
import { LandingHero } from './components/LandingHero';
import { Navbar } from './components/Navbar';
import { WhatMakesUsGoodSection } from './components/WhatMakesUsGoodSection';
import { useRef } from 'react';
import { BreakTheMold } from './components/BreakTheMold';

function App() {
  const parallax = useRef<IParallax>(null!);
  return (
    <div className="bg-white h-screen w-screen">
      <div style={{ width: '100%', height: '100% ' }}>
        <Parallax ref={parallax} pages={3}>
          <ParallaxLayer sticky={{ start: 0, end: 3 }} offset={0} speed={0}>
            <Navbar />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0}>
            <LandingHero />
          </ParallaxLayer>
          <ParallaxLayer factor={1} offset={0.99} speed={1.1}>
            <div className="mt-2">
              <BreakTheMold />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.3} speed={1}>
            <WhatMakesUsGoodSection />
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
}

export default App;
