import food2 from "../assets/food2.png";
import food3 from "../assets/food3.png";
import food4 from "../assets/food4.png";
import food5 from "../assets/food5.png";
import food10 from "../assets/food10.png";
import food11 from "../assets/food11.png";
import useLoadAnimation from "../hooks/useLoadAnimation";
import SlideShow, { ProjectImage } from "../components/SlideShow";
import { Link } from "react-router-dom";

const ProjectTwoPage = () => {
  const { loadAnimationOnMount, ref } = useLoadAnimation();
  const slideshowData: ProjectImage[] = [
    { id: 0, imageLocation: food4 },
    { id: 1, imageLocation: food2 },
    { id: 2, imageLocation: food11 },
    { id: 3, imageLocation: food5 },
    { id: 4, imageLocation: food3 },
  ];

  return (
    <div ref={ref} className="h-full flex mt-20  flex-wrap">
      <div className="max-lg:mx-0 bg-white relative text-black">
        <div
          className={`flex lg:px-[12%] px-[7.5%] justify-around sm:justify-start items-start flex-wrap ${
            loadAnimationOnMount ? "mounted" : "first-render"
          }`}
        >
          <img
            className="max-lg:w-full w-2/3 mx-auto rounded-xl"
            src={food10}
          />
          <div className="flex max-md:flex-col flex-row items-center justify-between w-full mt-20">
            <div className="mr-32 max-md:mr-0">
              <h2 className="font-bold text-3xl mb-5">Case Study:</h2>
              <p>
                Cooking can be a challenging task when you don’t have all the
                correct ingredients for a dish. You might have not fully
                restocked your pantry or fridge, maybe because the nearby stores
                did not have any of your desired products or you just forgot to
                buy them.
                <br />
                <br />
                This project aims to alleviate this inconvenience by producing a
                web application which will enable the user to find recipes based
                on ingredients they already have at home. It will make it easier
                than ever to waste less food while cooking healthy, delicious
                meals from an array of easy- to-make recipes. Additionally, the
                app shall track the already used recipes and keep them in mind
                when generating new suggestions, so that it can deliver a
                diversified set of new recipes that will fulfil the user’s needs
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full max-md:mt-10">
              <p className=" font-bold text-blue-500 ">Link</p>
              <Link
                className="cursor-pointer hover:text-blue-700"
                target="_blank"
                to="https://food-assistant-29fb3.web.app/"
              >
                Demo app
              </Link>
              <p className=" font-bold text-blue-500 ">Link</p>
              <p>test</p>
              <p className="font-bold text-blue-500 ">Link</p>
              <div className="leading-[20px]">
                <p className="font-medium">Design</p>
                <p className="font-medium">Web Dev</p>
                <p className="font-medium">Mobile App</p>
              </div>
            </div>
          </div>
        </div>
        <SlideShow data={slideshowData} />
      </div>
    </div>
  );
};

export default ProjectTwoPage;
