export const WorkflowStep = ({
  stepNumber,
  content,
}: {
  stepNumber: string;
  content: string;
}) => {
  return (
    <div className="max-w-fit">
      <div className="flex flex-col flex-wrap justify-end p-12 bg-gradient-to-r from-cyan-500 to-blue-500 w-[70vw] phone:w-[60vw] bigPhone:w-[50vw] sm:w-[35vw] lg:w-80 h-[40vh] rounded-3xl">
        <h1 className="font-title text-5xl">{stepNumber}</h1>
        <p className="font-body text-2xl text-white">{content}</p>
      </div>
    </div>
  );
};
