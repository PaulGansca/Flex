import Prototyping from '../../assets/Prototyping.png';
import SavedRoutes from '../../assets/Saved Routes.svg';
import AddRouteDrawer from '../../assets/Add Route Drawer.svg';
import SocialHomePage from '../../assets/Social HomePage.svg';
import DigitalEmpire from '../../assets/christopher-gower-m_HRfLhgABo-unsplash.jpg';
import useLoadAnimation from '../../hooks/useLoadAnimation';

export const WhatWeDo = () => {
  const { loadAnimationOnMount: loadAnimationOnMount1, ref: ref1 } =
    useLoadAnimation();
  const { loadAnimationOnMount: loadAnimationOnMount2, ref: ref2 } =
    useLoadAnimation();
  const { loadAnimationOnMount: loadAnimationOnMount3, ref: ref3 } =
    useLoadAnimation();
  const { loadAnimationOnMount: loadAnimationOnMount4, ref: ref4 } =
    useLoadAnimation();
  return (
    <div className="project-workflow section py-[6rem] md:py-[10rem] px-[7.5%] bg-black relative text-white">
      <div
        ref={ref1}
        className={`md:flex md:gap-8 md:justify-between ${
          loadAnimationOnMount1 ? 'mounted' : 'first-render'
        }`}
      >
        <div className="">
          <p
            className={`text-5xl lg:text-6xl xl:text-7xl font-bold font-title mb-8 ${
              loadAnimationOnMount1 ? 'mounted' : 'first-render'
            }`}
          >
            Design for you & Practical at any size
          </p>
          <p className="font-body lg:text-lg xl:text-xl w-full">
            Before we even get to the code we would like to save both sides some
            headhaches and time (money). We'll start with some low fidelity
            mock-ups and increase the level of detail as we find what we want to
            make. In this process both parties can understand what we're working
            with and what constraints need to be respected.
            <br />
            Above all else we want to make sure your product looks good
            regardless of size on any device. So we'll make mock-ups for
            smartphone, tablet and desktop. Kind of like body positivity huh?
          </p>
        </div>
        <img
          className="md:h-full max-h-[400px]md:w-full mx-auto mt-6 md:mt-0"
          src={Prototyping}
        />
      </div>
      <div
        ref={ref2}
        className={`hidden md:mt-32 lg:mt-40 md:flex md:gap-8 md:justify-between ${
          loadAnimationOnMount2 ? 'mounted' : 'first-render'
        }`}
      >
        <img
          className="md:h-full w-[40%] mx-auto mt-6 md:mt-0"
          src={DigitalEmpire}
        />
        <div className="">
          <p
            className={`text-5xl lg:text-6xl xl:text-7xl font-bold font-title mb-8 ${
              loadAnimationOnMount2 ? 'mounted' : 'first-render'
            }`}
          >
            Let's Build Your Digital Empire
          </p>
          <p className="font-body lg:text-lg xl:text-xl w-full">
            Whether it's a sleek corporate website, a dynamic e-commerce
            platform, or a customized web application, we've got the skills,
            creativity, and dedication to make it happen. Join us on this
            digital journey, and together, we'll make your online presence
            shine!
            <br />
            In the ever-evolving digital landscape, your online presence is your
            kingdom, and we're here to help you build a digital empire that
            stands the test of time. At Flex, we understand that the internet is
            more than just websites; it's a realm of endless opportunities,
            where your brand can thrive, connect, and conquer.
          </p>
        </div>
      </div>
      <div
        ref={ref3}
        className={`mt-16 md:hidden ${
          loadAnimationOnMount3 ? 'mounted' : 'first-render'
        }`}
      >
        <div className="">
          <p
            className={`text-5xl lg:text-6xl xl:text-7xl font-bold font-title mb-8 ${
              loadAnimationOnMount3 ? 'mounted' : 'first-render'
            }`}
          >
            Let's Build Your Digital Empire
          </p>
          <p className="font-body lg:text-lg xl:text-xl w-full">
            Whether it's a sleek corporate website, a dynamic e-commerce
            platform, or a customized web application, we've got the skills,
            creativity, and dedication to make it happen. Join us on this
            digital journey, and together, we'll make your online presence
            shine! <br />
            In the ever-evolving digital landscape, your online presence is your
            kingdom, and we're here to help you build a digital empire that
            stands the test of time. At Flex, we understand that the internet is
            more than just websites; it's a realm of endless opportunities,
            where your brand can thrive, connect, and conquer.
          </p>
        </div>
        <img className="mx-auto mt-6" src={DigitalEmpire} />
      </div>
      <div
        ref={ref4}
        className={`mt-16 md:mt-32 lg:mt-40 md:flex md:gap-8 md:justify-between ${
          loadAnimationOnMount4 ? 'mounted' : 'first-render'
        }`}
      >
        <div className="md:w-[100vw] 2xl:w-auto">
          <p
            className={`text-5xl lg:text-6xl xl:text-7xl font-bold font-title mb-8 ${
              loadAnimationOnMount4 ? 'mounted' : 'first-render'
            }`}
          >
            Your Success, Our Triumph
          </p>
          <p className="font-body lg:text-lg xl:text-xl w-full">
            Success isn't just a destination; it's a journey we take together.
            As we work side by side, you'll witness your digital empire grow,
            adapt, and conquer new horizons. We measure our success by yours,
            and we're not satisfied until your online presence shines brighter
            than the rest. We know things can change and that's ok. By releasing
            regular test versions for you to have a play round with the cost of
            change can be minimized and you'll also see iterative improvements
            each week.
          </p>
        </div>
        <div className="md:max-h-80 flex md:gap-4 mt-6 md:mt-0 justify-around smallTablet:justify-between md:bg-white md:p-2 rounded-xl">
          <img
            className="md:h-full md:w-full md:mt-0 h-96"
            src={SocialHomePage}
          />
          <img className="md:h-full md:w-full md:mt-0 h-96" src={SavedRoutes} />
          <img
            className="md:h-full md:w-full md:mt-0 h-96 hidden smallTablet:block"
            src={AddRouteDrawer}
          />
        </div>
      </div>
    </div>
  );
};
