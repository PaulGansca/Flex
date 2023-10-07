import '../../styles/Diamonds.css';

export const TeamPictures = ({
  isHovered,
}: {
  isHovered: 'paul' | 'notativo' | 'robicu' | '';
}) => {
  return (
    <div className="">
      <aside className="diamond-border">
        <div className="diamond-container">
          <ul className={`diamonds ${isHovered ? 'isActive' : ''}`}>
            <li></li>
            <li
              className={`paul ${isHovered === 'paul' ? 'isActive' : ''}`}
            ></li>
            <li></li>
            <li></li>
            <li
              className={`notativo ${
                isHovered === 'notativo' ? 'isActive' : ''
              }`}
            ></li>
            <li></li>
            <li></li>
            <li
              className={`robicu ${isHovered === 'robicu' ? 'isActive' : ''}`}
            ></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </aside>
    </div>
  );
};
