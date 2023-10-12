import BodySculpt from "../assets/BodySculpt.jpg";
import WorkoutLogs from "../assets/workoutlogs.jpg";
import WorkoutPage from "../assets/WorkoutPage.jpg";
import ExercisePage from "../assets/ExercisePage.jpg";
import AccountPage from "../assets/accountpage.jpg";
import useLoadAnimation from "../hooks/useLoadAnimation";
import Table from "../components/project-one/table";
import SlideShow, { ProjectImage } from "../components/SlideShow";

const ProjectOnePage = () => {
  const { loadAnimationOnMount, ref } = useLoadAnimation();
  const slideshowData: ProjectImage[] = [
    { id: 0, imageLocation: BodySculpt },
    { id: 1, imageLocation: WorkoutLogs },
    { id: 2, imageLocation: WorkoutPage },
    { id: 4, imageLocation: ExercisePage },
    { id: 5, imageLocation: AccountPage },
  ];

  return (
    <div ref={ref} className="h-full flex mt-20  flex-wrap">
      <div className="max-lg:mx-0 bg-white relative text-black">
        <div
          className={`flex lg:px-[12%] px-[7.5%] justify-around sm:justify-start items-start flex-wrap ${
            loadAnimationOnMount ? "mounted" : "first-render"
          }`}
        >
          <img className="mx-auto max-h-[60vh]" src={BodySculpt} />
          <div className="flex max-md:flex-col flex-row items-center justify-between w-full mt-20">
            <div className="mr-32 max-md:mr-0">
              <h2 className="font-bold text-3xl mb-5 font-title">
                Case Study: Transforming Fitness with BodySculpt - A Web App
                Powered by AI
              </h2>
              <section id="introduction">
                <h2 className="font-bold text-3xl mb-5 font-title">
                  Introduction
                </h2>
                <p>
                  At FLEX, we're passionate about harnessing the power of
                  technology to create innovative solutions. One such example is
                  our project, BodySculpt, a groundbreaking web app that has
                  revolutionized the fitness industry. In this case study, we'll
                  take you on a journey through the development of BodySculpt
                  and highlight how it's changing lives, one workout at a time.
                </p>
              </section>
              <section id="challenge">
                <h2 className="font-bold text-3xl my-5 font-title">
                  The Challenge
                </h2>
                <section>
                  <h3 className="text-xl font-title">A Fitness Dilemma</h3>
                  <p>
                    Fitness is a journey, and it's different for everyone.
                    People of all ages and fitness levels often struggle to find
                    personalized workout routines that align with their goals,
                    whether it's weight loss, muscle gain, or overall health
                    improvement.
                  </p>
                </section>
                <section>
                  <h3 className="text-xl font-title mt-2">
                    The Need for Personalization
                  </h3>
                  <p>
                    The challenge was clear: How could we create a tool that
                    caters to the unique needs and goals of individuals while
                    simplifying the process of generating customized workout
                    plans?
                  </p>
                </section>
              </section>
              <section id="solution">
                <h2 className="font-bold text-3xl my-5 font-title">
                  The Solution
                </h2>
                <section>
                  <h3 className="text-xl font-title">Enter BodySculpt</h3>
                  <p>
                    BodySculpt is an AI-powered web app that takes the guesswork
                    out of fitness. It starts with a few preliminary questions
                    to understand the user's goals, fitness level, available
                    equipment, and time commitment. Armed with this information,
                    BodySculpt's AI engine goes to work, generating tailored
                    workout splits and supplying detailed exercise information.
                  </p>
                </section>
                <section>
                  <h3 className="text-xl font-title mt-2">The Power of AI</h3>
                  <p>
                    Behind the scenes, BodySculpt leverages the latest in
                    artificial intelligence and machine learning to analyze vast
                    amounts of fitness data. It considers factors like muscle
                    groups, exercise intensity, and progression, creating
                    workouts that are not only effective but also enjoyable.
                  </p>
                </section>
              </section>
              <section id="development-process">
                <h2 className="font-bold text-3xl my-5 font-title">
                  The Development Process
                </h2>
                <section>
                  <h3 className="text-xl font-title">A Collaborative Effort</h3>
                  <p>
                    The development of BodySculpt was a true collaboration
                    between our talented team of web developers, designers, and
                    data scientists. It required meticulous planning and a deep
                    understanding of fitness principles.
                  </p>
                </section>
                <section>
                  <h3 className="text-xl font-title mt-2">
                    Iteration and User Testing
                  </h3>
                  <p>
                    We conducted extensive user testing to refine the app's user
                    interface, ensuring that it was intuitive and user-friendly.
                    Feedback from users played a crucial role in shaping the
                    final product.
                  </p>
                </section>
              </section>
              <section id="impact">
                <h2 className="font-bold text-3xl my-5 font-title">
                  The Impact
                </h2>
                <section>
                  <h3 className="text-xl font-title">Transforming Lives</h3>
                  <p>
                    BodySculpt has made fitness accessible to everyone,
                    regardless of their experience or age. It has helped users
                    achieve their fitness goals, from losing weight to building
                    strength, all while making the process enjoyable and
                    sustainable.
                  </p>
                </section>
                <section>
                  <h3 className="text-xl font-title mt-2">User Testimonials</h3>
                  Once the application was considered complete five potential
                  end users were invited to test the usability and usefulness of
                  the app. SUS, or System Usability Scale, is a widely used
                  method for evaluating the usability of a software application
                  or system. It involves administering a standardized
                  questionnaire to users to measure their subjective assessment
                  of the system's usability. The responses are then converted
                  into a numerical score, typically ranging from 0 to 100, with
                  higher scores indicating better usability. SUS testing helps
                  assess the overall user-friendliness and effectiveness of an
                  app by capturing users' perceptions of its ease of use,
                  efficiency, and learnability. The table below details each
                  participant and their responses anonymised with a final SUS
                  score computed where a score of 68 is considered above average
                  (Measuringu.com, 2011). Usefulness is a rating given by the
                  user evaluating how useful is the app on a scale of 1-10.
                  <Table />
                </section>
              </section>
              <section id="conclusion">
                <h2 className="font-bold text-3xl my-5 font-title">
                  Conclusion
                </h2>
                <p>
                  BodySculpt is more than just a web app; it's a testament to
                  the power of technology in improving lives. At FLEX, we're
                  proud to have developed this innovative solution, and we look
                  forward to continuing our mission of creating meaningful
                  digital experiences.
                </p>
                <p>
                  Ready to embark on your own digital transformation journey?{" "}
                  <a href="contact.html">Contact us today</a>, and let's make
                  your vision a reality.
                </p>
              </section>
            </div>
            <div className="flex flex-col gap-2 w-full max-md:mt-10 self-start">
              <p className=" font-bold text-blue-500 ">Link</p>
              <a
                className="cursor-pointer"
                target="_blank"
                href="https://body-sculpt-5ab47.web.app"
              >
                BodySculpt
              </a>
              <p className=" font-bold text-blue-500 ">Indurstry</p>
              <p>Fitness</p>
              <p className="font-bold text-blue-500 ">Services</p>
              <div className="leading-[20px]">
                <p className="font-medium">Design</p>
                <p className="font-medium">Web Dev</p>
              </div>
            </div>
          </div>
        </div>
        <SlideShow data={slideshowData} />
      </div>
    </div>
  );
};

export default ProjectOnePage;
