import useLoadAnimation from '../hooks/useLoadAnimation';
import { DevCard } from '../components/about/dev-card';
import { TeamPictures } from '../components/about/team-pictures';
import { useState } from 'react';
import cvPaul from '../assets/PaulMihaiGanscaCV.pdf';
import cvNotativo from '../assets/Cristian-D-current-CV-Cluj-updated.pdf';
import cvRobicu from '../assets/CsisRobert_CV.pdf';

const AboutPage = () => {
  const { loadAnimationOnMount, ref } = useLoadAnimation();
  const { loadAnimationOnMount: loadAnimationOnMount2, ref: ref2 } =
    useLoadAnimation();
  const [isHovered, setIsHovered] = useState<
    'paul' | 'notativo' | 'robicu' | ''
  >('');

  return (
    <div ref={ref} className="h-full flex md:mt-40 mt-28 max-lg:mx-0 flex-wrap">
      <div
        className={`w-full flex max-md:flex-col text-black items-center ${
          loadAnimationOnMount ? 'mounted' : 'first-render'
        }`}
      >
        <h1 className=" max-lg:pl-0 pl-[10%] m-auto w-[130px] font-bold text-[100px] leading-[120px]">
          {'TE\nAM'}
        </h1>
        <div className="max-w-[400px] max-lg:max-w-[300px] m-auto px-4">
          <h1 className="font-bold  mb-8 leading-[50px] text-4xl sm:text-5xl lg:text-6xl font-title ">
            This is us
          </h1>
          <p className="text-md font-medium font-body">
            So far you’ve seen what we can do. Now we’ll show you who’s been
            doing it. We're currently expanding our team in order to keep up
            with the growing number of projects. We're quite picky and like to
            take our time in finding hidden gems. People who don't aren't locked
            into a 40 hour work week mentality looking to run out the clock, but
            rather prefer to spend time delivering quality and levelling up
            their skills.
          </p>
        </div>
      </div>
      <div
        ref={ref2}
        className="lg:px-[12%] px-[7.5%] bg-white relative text-black pt-32"
      >
        <div
          className={`flex justify-around sm:justify-start items-start flex-wrap ${
            loadAnimationOnMount2 ? 'mounted' : 'first-render'
          }`}
        >
          <div className="lg:w-[48%] flex flex-col gap-4">
            <DevCard
              cv={cvPaul}
              onMouseEnter={() => setIsHovered('paul')}
              onMouseLeave={() => setIsHovered('')}
              title="Paul Mihai Gansca - Senior Developer & Designer"
              subtitle={`Paul's professional expertise shines in web development and mobile dev
          using react & react native. Paul prides himself on his creativity and speed of
          implementation. Ready to take initiative and keen to notice latest industry trends
           in terms of technologies and design he's always on top of things.`}
            />
            <DevCard
              cv={cvNotativo}
              onMouseEnter={() => setIsHovered('notativo')}
              onMouseLeave={() => setIsHovered('')}
              title="Cristian Radu Dumitrana - Senior Developer & Consultant"
              subtitle={`A passionate software developer with strong troubleshooting skills, a solutions-oriented mindset and direct approach to
              design and implementation. Interested in devising efficient problem-solving methods for challenging tasks and learning new
              technologies and tools if the need arises.`}
            />
            <DevCard
              cv={cvRobicu}
              onMouseEnter={() => setIsHovered('robicu')}
              onMouseLeave={() => setIsHovered('')}
              title="Robert Csis - Senior Developer & Architect"
              subtitle={`Highly enthusiastic Front End Developer with 3 years of experience in creating versatile, easily accessible and user focused websites. Fast learner and always curious about up to date technologies. Genuinely passionate for coding. It's not just a job for me; it's a deeply rooted hobby that keeps me inspired and engaged even outside regular working hours.`}
            />
          </div>
          <div className="lg:w-[48%] flex justify-center items-center">
            <TeamPictures isHovered={isHovered} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
