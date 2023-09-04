import React from 'react';
import { useInView } from 'react-intersection-observer';

export const WhatMakesUsGoodSection = () => {
  const [loadAnimationOnMount, setLoadAnimationOnMount] = React.useState(false);
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.2,
  });
  React.useEffect(() => {
    if (inView) setTimeout(() => setLoadAnimationOnMount(true), 10);
    else setLoadAnimationOnMount(false);
  }, [inView]);
  return (
    <div
      ref={ref}
      className="what-makes-us-good lg:flex lg:gap-8 md:mt-16 sm:mt-44 bigPhone:mt-48 phone:mt-60 py-[6rem] sm:py-[10rem] px-[7.5%] bg-gradient-to-r from-fuchsia-600 to-pink-600 relative"
    >
      <p
        className={`text-5xl lg:text-7xl lg:mb-0 lg:min-w-[33%] font-bold font-title mb-16 sm:mb-8 sm:w-[80%] sm:max-w-[15ch] ${
          loadAnimationOnMount ? 'mounted' : 'first-render'
        }`}
      >
        What makes us sooo good at it…
      </p>
      <div
        className={`flex flex-wrap justify-between gap-5 ${
          loadAnimationOnMount ? 'mounted' : 'first-render'
        }`}
      >
        <div className="sm:w-[48%]">
          <h3 className="text-3xl font-bold font-title mb-2">Bespoke</h3>
          <p className="font-body">
            We’re artists at heart, and it shows. Your new website will be
            hand-crafted to create one-of-a-kind websites that break industry
            stereotypes
          </p>
        </div>
        <div className="sm:w-[48%]">
          <h3 className="text-3xl font-bold font-title mb-2">Thoughtful</h3>
          <p className="font-body">
            We’ll draw on insights from discovery workshops to make informed
            decisions on the user journeys, content hierarchy and sitemap.
          </p>
        </div>
        <div className="sm:w-[48%]">
          <h3 className="text-3xl font-bold font-title mb-2">Seamless</h3>
          <p className="font-body">
            Our designers combine creativity with a deep understanding of user
            needs to deliver meaningful and relevant digital experiences.
          </p>
        </div>
        <div className="sm:w-[48%]">
          <h3 className="text-3xl font-bold font-title mb-2">Impactful</h3>
          <p className="font-body">
            Your website’s the centrepiece of your visual identity. We make
            every click count through creative design and UX that converts.
          </p>
        </div>
      </div>
    </div>
  );
};
