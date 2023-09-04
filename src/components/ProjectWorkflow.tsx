import React from 'react';
import { useInView } from 'react-intersection-observer';

export const ProjectWorkflow = () => {
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
      className="project-workflow md:flex md:gap-8 md:mt-16 sm:mt-44 bigPhone:mt-48 phone:mt-60 md:justify-between py-[6rem] sm:py-[10rem] px-[7.5%] bg-white relative text-black"
    >
      <p
        className={`text-5xl md:text-7xl md:mb-0 md:w-[45%] font-bold font-title mb-16 sm:mb-8 ${
          loadAnimationOnMount ? 'mounted' : 'first-render'
        }`}
      >
        Project Workflow
      </p>
      <p className="md:w-[45%] font-body w-full">
        This shows the stages of our typical website design and development
        process, from the initial kick-off meeting all the way to launch day.
        Our project managers will work with you every step of the way to ensure
        you have visibility over this process.
      </p>
    </div>
  );
};
