export const SmallProjectImage = ({ className, img }) => {
  return (
    <img
      className={`rounded-3xl h-[30vh] bigPhone:w-[50vw] z-10 pointer-events-none relative block ${className}`}
      src={img}
    />
  );
};
