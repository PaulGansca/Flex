import { WorkflowStep } from './WorkflowStep';
import { PlayIcon } from './PlayIcon';
import { FeaturedProject } from '../FeaturedProject';
import Gocek from '../../assets/Gocek.jpg';
import BodySculpt from '../../assets/WorkoutPage.jpg';
import useLoadAnimation from '../../hooks/useLoadAnimation';
import { useNavigate, Link } from 'react-router-dom';

export const ProjectWorkflow = () => {
  const { loadAnimationOnMount, ref } = useLoadAnimation();
  const navigate = useNavigate();

  return (
    <div
      ref={ref}
      className="project-workflow py-[6rem] sm:py-[10rem] lg:py-64 lg:px-[12%] px-[7.5%] bg-white relative text-black"
    >
      <div
        className={`md:flex md:gap-8 md:justify-between  ${
          loadAnimationOnMount ? 'mounted' : 'first-render'
        }`}
      >
        <p
          className={`text-5xl md:text-7xl xl:text-8xl md:mb-0 md:w-[45%] font-bold font-title mb-16 sm:mb-8 ${
            loadAnimationOnMount ? 'mounted' : 'first-render'
          }`}
        >
          Project Workflow
        </p>
        <p className="md:w-[45%] font-body xl:text-xl w-full">
          This shows the stages of our typical website design and development
          process, from the initial kick-off meeting all the way to launch day.
          Our project managers will work with you every step of the way to
          ensure you have visibility over this process.
        </p>
      </div>
      <div
        className={`mt-24 flex gap-6 w-full overflow-auto project-workflow-list`}
      >
        <WorkflowStep stepNumber={'01'} content={'Meeting with Stakeholders'} />
        <WorkflowStep
          stepNumber={'02'}
          content={'Wireframing & Figma Prototyping'}
        />
        <WorkflowStep stepNumber={'03'} content={'Functional Requirements'} />
        <WorkflowStep stepNumber={'04'} content={'Implementation Phase'} />
        <WorkflowStep stepNumber={'05'} content={'Demo & Optimisation'} />
        <WorkflowStep stepNumber={'06'} content={'Bug Fixing'} />
        <WorkflowStep stepNumber={'07'} content={'Go Live!'} />
      </div>
      <div className="my-4 flex justify-between w-full items-center">
        <div className="flex justify-center items-center">
          <PlayIcon
            fill="rgb(6 182 212)"
            stroke="rgb(6 182 212)"
            width="w-8"
            height="h-8"
          />
          <span className="ml-2">Design</span>
        </div>
        <hr className="w-full flex h-1 ml-4 my-4 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 rounded " />

        <div className="flex justify-center items-center">
          {' '}
          <PlayIcon
            fill="rgb(59 130 246)"
            stroke="rgb(59 130 246)"
            width="w-8"
            height="h-8"
          />
          Development
        </div>
      </div>
      <div className="flex justify-around sm:justify-start items-start flex-wrap">
        <h1 className="font-title text-6xl mt-24">Featured Projects</h1>
        <div className="flex flex-wrap justify-between items-center w-full pt-4">
          <FeaturedProject
            img={Gocek}
            title={'Gocek Turizsm'}
            onClick={() => navigate('/our-work/project-1')}
            content={
              "We crafted a beautiful & responsive website that's easy to use for yacht renting, Gocek Turism"
            }
            width="w-full"
            height="h-full"
          />
          <FeaturedProject
            img={BodySculpt}
            title={'Body Sculpt'}
            content={
              'We put together a solution for helping people get in shape effectively, BodySculpt'
            }
            width="w-full"
            height="h-full"
          />
        </div>
        <div data-dial-init className="">
          <Link
            to="/our-work"
            className="hover:text-white hover:bg-blue-500 bg-white transition-all duration-300 text-blue-500 border-2 border-blue-500 focus:outline-none focus:ring-4 line focus:ring-blue-300 rounded-full text-lg font-body px-8 pb-1 pt-2 text-center"
          >
            View all projects
          </Link>
        </div>
      </div>
    </div>
  );
};
