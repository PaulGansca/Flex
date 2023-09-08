import React from 'react';
import { useInView } from 'react-intersection-observer';
import Prototyping from '../assets/Prototyping.png';
import SavedRoutes from '../assets/Saved Routes.svg';
import AddRouteDrawer from '../assets/Add Route Drawer.svg';
import SocialHomePage from '../assets/Social HomePage.svg';

export const WhatWeDo = () => {
  const [loadAnimationOnMount1, setLoadAnimationOnMount1] =
    React.useState(false);
  const [loadAnimationOnMount2, setLoadAnimationOnMount2] =
    React.useState(false);
  const [loadAnimationOnMount3, setLoadAnimationOnMount3] =
    React.useState(false);
  const [loadAnimationOnMount4, setLoadAnimationOnMount4] =
    React.useState(false);

  const [ref1, inView1] = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });
  React.useEffect(() => {
    if (inView1) setTimeout(() => setLoadAnimationOnMount1(true), 10);
    else setLoadAnimationOnMount1(false);
  }, [inView1]);
  const [ref2, inView2] = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });
  React.useEffect(() => {
    if (inView2) setTimeout(() => setLoadAnimationOnMount2(true), 10);
    else setLoadAnimationOnMount2(false);
  }, [inView2]);
  const [ref3, inView3] = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });
  React.useEffect(() => {
    if (inView3) setTimeout(() => setLoadAnimationOnMount3(true), 10);
    else setLoadAnimationOnMount3(false);
  }, [inView3]);
  const [ref4, inView4] = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });
  React.useEffect(() => {
    if (inView4) setTimeout(() => setLoadAnimationOnMount4(true), 10);
    else setLoadAnimationOnMount4(false);
  }, [inView4]);
  return (
    <div className="project-workflow py-[6rem] sm:py-[10rem] px-[7.5%] bg-black relative text-white">
      <div
        ref={ref1}
        className={`sm:flex sm:gap-8 sm:justify-between ${
          loadAnimationOnMount1 ? 'mounted' : 'first-render'
        }`}
      >
        <div className="">
          <p
            className={`text-5xl lg:text-6xl xl:text-7xl font-bold font-title mb-8 ${
              loadAnimationOnMount1 ? 'mounted' : 'first-render'
            }`}
          >
            Design for you
          </p>
          <p className="font-body lg:text-lg xl:text-xl w-full">
            Before we even get to the code we would like to save both sides some
            headhaches and time (money). We'll start with some low fidelity
            mock-ups and increase the level of detail as we find what we want to
            make. In this process both parties can understand what we're working
            with and what constraints need to be respected.
          </p>
        </div>
        <img
          className="sm:h-full max-h-[400px]sm:w-full mx-auto mt-6 sm:mt-0"
          src={Prototyping}
        />
      </div>
      <div
        ref={ref2}
        className={`hidden sm:mt-32 lg:mt-40 sm:flex sm:gap-8 sm:justify-between ${
          loadAnimationOnMount2 ? 'mounted' : 'first-render'
        }`}
      >
        <img
          className="sm:h-full max-h-[400px]sm:w-full mx-auto mt-6 sm:mt-0"
          src={Prototyping}
        />
        <div className="">
          <p
            className={`text-5xl lg:text-6xl xl:text-7xl font-bold font-title mb-8 ${
              loadAnimationOnMount2 ? 'mounted' : 'first-render'
            }`}
          >
            Practical at any size
          </p>
          <p className="font-body lg:text-lg xl:text-xl w-full">
            Above all else we want to make sure your product looks good
            regardless of size on any device. So we'll make mock-ups for
            smartphone, tablet and desktop. Kind of like body positivity huh?
          </p>
        </div>
      </div>
      <div
        ref={ref3}
        className={`mt-16 sm:hidden ${
          loadAnimationOnMount3 ? 'mounted' : 'first-render'
        }`}
      >
        <div className="">
          <p
            className={`text-5xl lg:text-6xl xl:text-7xl font-bold font-title mb-8 ${
              loadAnimationOnMount3 ? 'mounted' : 'first-render'
            }`}
          >
            Practical at any size
          </p>
          <p className="font-body lg:text-lg xl:text-xl w-full">
            Above all else we want to make sure your product looks good
            regardless of size on any device. So we'll make mock-ups for
            smartphone, tablet and desktop. Kind of like body positivity huh?
          </p>
        </div>
        <img className="mx-auto mt-6" src={Prototyping} />
      </div>
      <div
        ref={ref4}
        className={`mt-16 sm:mt-32 lg:mt-40 sm:flex sm:gap-8 sm:justify-between ${
          loadAnimationOnMount4 ? 'mounted' : 'first-render'
        }`}
      >
        <div className="sm:w-[100vw] lg:w-auto">
          <p
            className={`text-5xl lg:text-6xl xl:text-7xl font-bold font-title mb-8 ${
              loadAnimationOnMount4 ? 'mounted' : 'first-render'
            }`}
          >
            Regular Updates
          </p>
          <p className="font-body lg:text-lg xl:text-xl w-full">
            We know things can change and that's ok. By releasing regular test
            versions for you to have a play round with the cost of change can be
            minimized and you'll also see iterative improvements each week.
          </p>
        </div>
        <div className="sm:max-h-80 flex md:gap-4 mt-6 sm:mt-0 justify-around smallTablet:justify-between md:bg-white md:p-2 rounded-xl">
          <img
            className="sm:h-full sm:w-full sm:mt-0 h-96"
            src={SocialHomePage}
          />
          <img className="sm:h-full sm:w-full sm:mt-0 h-96" src={SavedRoutes} />
          <img
            className="sm:h-full sm:w-full sm:mt-0 h-96 hidden smallTablet:block"
            src={AddRouteDrawer}
          />
        </div>
      </div>
    </div>
  );
};
