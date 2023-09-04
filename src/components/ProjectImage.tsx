import Gocek from '../assets/Gocek.jpg';

export const ProjectImage = ({ className }) => {
  return (
    <div
      className={`project-img w-full rounded-3xl shadow-[5px_5px_15px_5px_rgba(0,0,0,0.3)] ${className}`}
    >
      <img
        className="w-full h-full rounded-3xl overflow-hidden z-10 pointer-events-none relative block"
        src={Gocek}
      />
    </div>
  );
};
