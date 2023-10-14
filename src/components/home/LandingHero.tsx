import React from "react";
import { InfiniteLooper } from "./ProjectVerticalSlider";
import { ProjectImage } from "./ProjectImage";
import { SmallProjectImage } from "./SmallProjectImage";
import Marquee from "react-fast-marquee";
import _ from "lodash";
import PubCrawl from "../../assets/mockuper(9).png";
import WorkoutPage from "../../assets/BodySculpt.png";
import FoodApp from "../../assets/food10.png";

export const LandingHero = () => {
  const [loadAnimationOnMount, setLoadAnimationOnMount] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const [direction, setDirection] = React.useState<"left" | "right" | null>(
    null
  );
  const textRef = React.useRef<HTMLDivElement | null>(null);
  const lastScrollTop = React.useRef(0);
  const onScroll = () => {
    if (
      textRef?.current?.getBoundingClientRect() &&
      textRef?.current?.getBoundingClientRect().top < -300
    ) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    if (
      Number(textRef?.current?.getBoundingClientRect().top) >
      lastScrollTop.current
    ) {
      updateDirection("left");
    } else {
      updateDirection("right");
    }
    lastScrollTop.current = Number(
      textRef?.current?.getBoundingClientRect().top
    );
  };

  const updateDirection = _.debounce((val) => setDirection(val), 10);

  React.useEffect(() => {
    lastScrollTop.current = Number(
      textRef?.current?.getBoundingClientRect().top
    );
    setTimeout(() => setLoadAnimationOnMount(true), 10);
  }, []);

  React.useEffect(() => {
    document.addEventListener("scroll", onScroll, true);
    return () => document.removeEventListener("scroll", onScroll, true);
  }, []);

  return (
    <div className="lg:px-[7.5%] section 2xl:px-[10%] lg:min-h-screen lg:pt-0 pt-[15vh] bg-white">
      <div className="flex justify-center items-center  pointer-events-none relative landing-hero">
        <InfiniteLooper
          className="h-[100vh] max-w-[60%] pl-20 pr-10 hidden lg:block"
          speed={35}
          vertical
          direction="left"
        >
          <ProjectImage img={PubCrawl} className={"my-6"} />
          <ProjectImage img={FoodApp} className={"my-6"} />
          <ProjectImage img={WorkoutPage} className={"my-6"} />
          <ProjectImage img={PubCrawl} className={"my-6"} />
          <ProjectImage img={FoodApp} className={"my-6"} />
          <ProjectImage img={WorkoutPage} className={"my-6"} />
        </InfiniteLooper>
        <div
          ref={textRef}
          className={`lg:-mt-[2.5%] lg:mb-0 lg:mr-0 lg:ml-[5%] lg:max-w-[40%] w-full mx-6 mb-[10%] sm:mx-[7.5%] sm:mb-[10%] hero-text ${
            isVisible ? "show-text" : "hide-text"
          } ${loadAnimationOnMount ? "mounted" : "first-render"}`}
        >
          <h1 className="text-6xl pb-8 text-gray-800 font-title font-bold">
            Dream Team for any Software problems
          </h1>
          <div>
            <p className="text-gray-800 font-body text-lg">
              Welcome to Flex, Where{" "}
              <strong className="text-blue-500">
                Digital Dreams Become Reality!
              </strong>
            </p>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <Marquee
          style={{ padding: 16, zIndex: 0 }}
          speed={70}
          direction={direction === "right" ? "right" : "left"}
        >
          <SmallProjectImage
            img={PubCrawl}
            className={`mx-3 shadow-[1px_1px_12px_3px_rgba(0,0,0,0.4)]`}
          />
          <SmallProjectImage
            img={FoodApp}
            className={`mx-3 shadow-[1px_1px_12px_3px_rgba(0,0,0,0.4)]`}
          />
          <SmallProjectImage
            img={WorkoutPage}
            className={`mx-3 shadow-[1px_1px_12px_3px_rgba(0,0,0,0.4)]`}
          />
          <SmallProjectImage
            img={PubCrawl}
            className={`mx-3 shadow-[1px_1px_12px_3px_rgba(0,0,0,0.4)]`}
          />
          <SmallProjectImage
            img={FoodApp}
            className={`mx-3 shadow-[1px_1px_12px_3px_rgba(0,0,0,0.4)]`}
          />
          <SmallProjectImage
            img={WorkoutPage}
            className={`mx-3 shadow-[1px_1px_12px_3px_rgba(0,0,0,0.4)]`}
          />
        </Marquee>
      </div>
    </div>
  );
};
