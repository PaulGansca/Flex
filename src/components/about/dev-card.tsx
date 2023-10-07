export const DevCard = ({
  title,
  subtitle,
  onMouseEnter,
  onMouseLeave,
  cv,
}: {
  title: string;
  subtitle: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  cv: string;
}) => {
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="rounded-xl shadow-lg">
        <div className="bg-gray-200 rounded-t-xl p-4 flex items-center justify-between">
          {title}
          <div className="flex flex-wrap justify-center text-gray-300">
            <a
              target="_blank"
              href={cv}
              className="cv-button px-5 py-3 bg-gray-800 hover:bg-gray-700 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
            >
              CV
            </a>
          </div>
        </div>
        <div className="bg-blue-400 text-white rounded-b-xl p-4">
          {subtitle}
        </div>
      </div>
    </div>
  );
};
