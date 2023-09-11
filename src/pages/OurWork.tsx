import { FeaturedProject } from "../components/FeaturedProject";
import Gocek from "../assets/Gocek.jpg";
import BodySculpt from "../assets/WorkoutPage.jpg";
import useLoadAnimation from "../hooks/useLoadAnimation";

const OurWorkPage = () => {
  const { loadAnimationOnMount, ref } = useLoadAnimation();
  const { loadAnimationOnMount: loadAnimationOnMount2, ref: ref2 } =
    useLoadAnimation();

  return (
    <div ref={ref} className="h-full flex m-20 max-lg:mx-0 flex-wrap">
      <div
        className={`w-full flex max-md:flex-col text-black items-center ${
          loadAnimationOnMount ? "mounted" : "first-render"
        }`}
      >
        <h1 className=" max-lg:pl-0 pl-[10%] m-auto w-[130px] font-bold text-[100px] leading-[120px]">
          {"FL\nEX"}
        </h1>
        <div className="max-w-[400px] max-lg:max-w-[300px] m-auto px-4">
          <h1 className="font-bold  mb-8 leading-[50px] text-4xl sm:text-5xl lg:text-6xl font-title ">
            This is how we do it!
          </h1>
          <p className="text-md font-medium font-body">
            FLEX is a nimble service provider, ready to offer high quality
            software solutions and meet all your needs. We pride ourselves in
            our ability to understand your idea and bring it to life.
          </p>
        </div>
      </div>
      <div
        ref={ref2}
        className="lg:px-[12%] px-[7.5%] bg-white relative text-black"
      >
        <div
          className={`flex justify-around sm:justify-start items-start flex-wrap ${
            loadAnimationOnMount2 ? "mounted" : "first-render"
          }`}
        >
          <h1 className="font-title text-6xl mx-auto text-center my-24">
            Featured Projects
          </h1>
          <div className="flex flex-wrap justify-between items-center w-full pt-4 pb-20 sm:pb-60">
            <FeaturedProject
              img={Gocek}
              title={"Gocek Turizsm"}
              content={
                "We crafted a beautiful & responsive website that's easy to use for yacht renting, Gocek Turism"
              }
              width="w-full"
              height="h-full"
            />
            <FeaturedProject
              img={BodySculpt}
              title={"Body Sculpt"}
              content={
                "We put together a solution for helping people get in shape effectively, BodySculpt"
              }
              width="w-full"
              height="h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorkPage;
