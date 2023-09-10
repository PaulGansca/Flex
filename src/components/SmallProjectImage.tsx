import Gocek from '../assets/Gocek.jpg';

export const SmallProjectImage = ({ className }) => {
  return (
    <img
      className={`rounded-3xl h-[30vh] bigPhone:w-[50vw] z-10 pointer-events-none relative block ${className}`}
      src={Gocek}
    />
  );
};
