import "./SlideShowStyles.scss";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export type ProjectImage = {
  id: number;
  imageLocation: string;
};
const SlideShow2 = ({ data }: { data: ProjectImage[] }) => {
  const [activeOption, setActiveOption] = useState<number | null>(0);

  const handleOptionClick = (index: number) => {
    setActiveOption(index);
  };

  return (
    <div className="flex w-full mt-20">
      <div className="options mx-auto">
        {data.map((data) => (
          <div
            key={data.id}
            className={twMerge("option", data.id == activeOption && "active")}
            onClick={() => handleOptionClick(data.id)}
            style={{
              background: `url(${data.imageLocation})`,
              backgroundSize: "550px 500px",
            }}
          >
            <div className="shadow"></div>
            <div className="label">
              <div className="info">
                <div className="main">Blonkisoaz</div>
                <div className="sub">Omuke trughte a otufta</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideShow2;
