import useLoadAnimation from '../../hooks/useLoadAnimation';

export const OurFormulaforSuccess = () => {
  const { loadAnimationOnMount, ref } = useLoadAnimation();
  return (
    <div className="xl:h-screen section bg-gradient-to-r from-cyan-500 to-blue-500">
      <div
        ref={ref}
        className="lg:flex lg:gap-8 py-[4rem] sm:py-[10rem] px-[7.5%] relative xl:-translate-x-1/2 xl:-translate-y-1/2 xl:left-1/2 xl:top-1/2"
      >
        <p
          className={`text-5xl lg:text-7xl lg:mb-0 lg:min-w-[33%] font-bold font-title mb-16 sm:mb-8 sm:w-[80%] sm:max-w-[15ch] ${
            loadAnimationOnMount ? 'mounted' : 'first-render'
          }`}
        >
          Our Formula for Success...
        </p>
        <div
          className={`flex flex-wrap justify-between gap-5 ${
            loadAnimationOnMount ? 'mounted' : 'first-render'
          }`}
        >
          <div className="sm:w-[48%]">
            <h3 className="text-3xl font-bold font-title mb-2">
              Innovative Design:
            </h3>
            <p className="font-body">
              We blend aesthetics and functionality to create visually striking
              websites that resonate with your audience.
            </p>
          </div>
          <div className="sm:w-[48%]">
            <h3 className="text-3xl font-bold font-title mb-2">
              Cutting-Edge Technology:
            </h3>
            <p className="font-body">
              We stay ahead of the curve, harnessing the latest technologies and
              trends to power your online presence.
            </p>
          </div>
          <div className="sm:w-[48%]">
            <h3 className="text-3xl font-bold font-title mb-2">
              User-Centric Approach:
            </h3>
            <p className="font-body">
              Your users are at the center of our design philosophy, ensuring
              seamless navigation and exceptional user experiences.
            </p>
          </div>
          <div className="sm:w-[48%]">
            <h3 className="text-3xl font-bold font-title mb-2">
              Results-Driven:
            </h3>
            <p className="font-body">
              We're not satisfied until your website drives tangible results, be
              it increased traffic, leads, or conversions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
