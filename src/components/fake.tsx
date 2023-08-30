import React from 'react';
import { InfiniteLooper } from './ProjectVerticalSlider';
import { ProjectImage } from './ProjectImage';

export const LandingHero = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  const textRef = React.useRef<HTMLDivElement | null>(null);
  const onScroll = () => {
    if (
      textRef?.current?.getBoundingClientRect() &&
      textRef?.current?.getBoundingClientRect().top < 120
    ) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  React.useEffect(() => {
    document.addEventListener('scroll', onScroll, true);
    return () => document.removeEventListener('scroll', onScroll, true);
  });
  return (
    <div className="xl:px-[7.5%] 2xl:px-[10%] xl:pt-0 xl:pb-64 lg:pt-96 pt-60">
      <div className="flex flex-wrap lg:justify-center lg:items-center justify-start pointer-events-none relative landing-hero">
        <InfiniteLooper
          className="h-[100vh] px-10"
          speed={15}
          vertical
          direction="left"
        >
          <ProjectImage className={'my-6'} />
          <ProjectImage className={'my-6'} />
          <ProjectImage className={'my-6'} />
          <ProjectImage className={'my-6'} />
        </InfiniteLooper>
        <div
          ref={textRef}
          className={`-mt-[2.5%] ml-[3%] max-w-[45%] hero-text ${
            isVisible ? 'show-text' : 'hide-text'
          }`}
        >
          <h1 className="text-6xl pb-8 text-gray-800 font-bold">
            Dream Team for any Software problems
          </h1>
          <div>
            <p className="text-gray-800 font-normal">
              Bring your brand to life online with a bespoke website that boosts
              engagement and brings a{' '}
              <strong className="text-blue-500">return on creativity.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
