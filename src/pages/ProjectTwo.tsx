import food1 from "../assets/food1.png";
import food2 from "../assets/food2.png";
import food3 from "../assets/food3.png";
import SlideShow, { ProjectImage } from "../components/SlideShow";
import useLoadAnimation from "../hooks/useLoadAnimation";

const ProjectTwoPage = () => {
  const { loadAnimationOnMount, ref } = useLoadAnimation();
  const slideshowData: ProjectImage[] = [
    { id: 0, imageLocation: food1 },
    { id: 1, imageLocation: food2 },
    { id: 2, imageLocation: food3 },
  ];

  return (
    <div ref={ref} className="h-full flex mt-20  flex-wrap">
      <div className="max-lg:mx-0 bg-white relative text-black">
        <div
          className={`flex lg:px-[12%] px-[7.5%] justify-around sm:justify-start items-start flex-wrap ${
            loadAnimationOnMount ? "mounted" : "first-render"
          }`}
        >
          <img className="w-full h-full" src={food1} />
          <div className="flex max-md:flex-col flex-row items-center justify-between w-full mt-20">
            <div className="mr-32 max-md:mr-0">
              <h2 className="font-bold text-3xl mb-5">Case Study:</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full max-md:mt-10">
              <p className=" font-bold text-blue-500 ">Link</p>
              <p>test</p>
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
