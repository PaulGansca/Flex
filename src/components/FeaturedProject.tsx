export const FeaturedProject = ({
  width,
  height,
  title,
  content,
  img,
  onClick,
}: {
  width: string;
  height: string;
  title: string;
  content: string;
  onClick?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img: any;
}) => {
  return (
    <div
      className="w-full sm:w-[47%] md:w-[49% - 2rem] mb-12 group"
      onClick={onClick}
    >
      <div
        className={`${width} ${height} p-0 relative overflow-hidden bg-cover bg-no-repeat`}
      >
        <img className="w-full h-full" src={img} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-blue-300 bg-fixed opacity-0 transition duration-300 ease-in-out group-hover:opacity-50"></div>
      </div>
      <div className="mt-7">
        <div className="text-blue-500 uppercase font-title text-sm">
          <span>Web Design</span>
          <span className="ml-4">Web Development</span>
        </div>
        <h3 className="font-title mt-5 mb-4 text-4xl ease-in-out transition-colors duration-300 group-hover:text-blue-500">
          {title}
        </h3>
        <p className="font-body text-lg">{content}</p>
      </div>
    </div>
  );
};
