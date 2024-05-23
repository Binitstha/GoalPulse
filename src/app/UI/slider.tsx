// components/MatchSlider.tsx

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import React, { useState } from "react";
import { Match } from "../../types/match"; // Adjust the import path as needed
import { MatchCard } from "../../components/Matches";
import clsx from "clsx";

interface MatchSliderProps {
  matches: Match[];
}

const MatchSlider: React.FC<MatchSliderProps> = ({ matches }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === matches.length - 3 ? 0 : prevIndex + 3
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? matches.length - 3 : prevIndex - 3
    );
  };

  return (
    <div className="relative flex gap-5 w-full overflow-visible justify-center items-center ">
      <button
        className={clsx(`absolute left-0 rounded-full shadow-md p-3`, {
          hidden: currentIndex === 0,
        })}
        onClick={goToPrevSlide}
      >
        <FaArrowLeftLong />
      </button>
      <div className=" overflow-hidden w-[72rem] p-3">
        <div
          className="flex gap-4 w-1/3 transition-transform p-3 duration-500 transform"
          style={{ transform: `translateX(-${currentIndex * 97.5}%)` }}
        >
          {matches.map((match, index) => (
            <div key={index} className="flex-none w-full">
              <MatchCard match={match} />
            </div>
          ))}
        </div>
      </div>
      <button
        className={clsx(`absolute right-0 rounded-full shadow-md p-3`, {
          hidden: currentIndex === matches.length - 3,
        })}
        onClick={goToNextSlide}
      >
        <FaArrowRightLong />
      </button>
    </div>
  );
};

export default MatchSlider;
