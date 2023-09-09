import React from 'react';
import { InfiniteLooper } from './ProjectVerticalSlider';
import { ProjectImage } from './ProjectImage';

export const LandingHero = () => {
  const [loadAnimationOnMount, setLoadAnimationOnMount] = React.useState(false);
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
    setTimeout(() => setLoadAnimationOnMount(true), 10);
  }, []);

  React.useEffect(() => {
    document.addEventListener('scroll', onScroll, true);
    return () => document.removeEventListener('scroll', onScroll, true);
  }, []);
  return (
    <div className="lg:px-[7.5%] section 2xl:px-[10%]  min-h-screen lg:pt-0 md:pt-96 pt-[25vh] bg-white">
      <div className="flex justify-center items-center  pointer-events-none relative landing-hero">
        <InfiniteLooper
          className="h-[100vh] max-w-[60%] pl-20 pr-10 hidden lg:block"
          speed={35}
          vertical
          direction="left"
        >
          <ProjectImage className={'my-6'} />
          <ProjectImage className={'my-6'} />
          <ProjectImage className={'my-6'} />
          <ProjectImage className={'my-6'} />
          <ProjectImage className={'my-6'} />
          <ProjectImage className={'my-6'} />
        </InfiniteLooper>
        <div
          ref={textRef}
          className={`lg:-mt-[2.5%] lg:mb-0 lg:mr-0 lg:ml-[5%] lg:max-w-[40%] w-full mx-6 mb-[10%] sm:mx-[7.5%] sm:mb-[10%] hero-text ${
            isVisible ? 'show-text' : 'hide-text'
          } ${loadAnimationOnMount ? 'mounted' : 'first-render'}`}
        >
          <h1 className="text-6xl pb-8 text-gray-800 font-title font-bold">
            Dream Team for any Software problems
          </h1>
          <div>
            <p className="text-gray-800 font-body text-lg">
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
