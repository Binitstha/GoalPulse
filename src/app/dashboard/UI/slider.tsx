"use client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Suspense, useState } from "react";
import clsx from "clsx";
import dynamic from "next/dynamic";
import { sports_results } from "@/types/matchResult";
import { MatchSkeleton } from "./Skeleton";

const Matches = dynamic(() => import('@/components/Matches'), { suspense: true });

type MatchSliderProps = {
  matchData: sports_results;
};

const MatchSlider = ({ matchData }: MatchSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === matchData.games.length - 5 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? matchData.games.length - 5 : prevIndex - 1
    );
  };

  return (
    <>

      <div className="flex relative gap-5 w-full overflow-visible justify-center items-center">
        <button
          className={clsx(
            `absolute left-[-2rem] flex justify-center items-center h-32 w-8 p-3 z-10`,
            {
              hidden: currentIndex === 0,
            }
          )}
          onClick={goToPrevSlide}
        >
          <FaChevronLeft />
        </button>
        <div className="overflow-hidden flex w-full py-3">
          <div
            className="flex gap-4 w-full scroll-smooth scroll transition-transform p-3 duration-500 transform"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {matchData.games.map((game, index) => {
              return (
                <div
                  key={index}
                  className="shadow-lg relative hover:shadow-xl hover:scale-105 transition-all duration-150 flex gap-3 p-3 rounded-lg"
                >
                  <Suspense fallback={<MatchSkeleton />}>
                    <Matches game={game} />
                  </Suspense>
                </div>
              );
            })}
          </div>
        </div>
        <button
          className={clsx(
            `absolute right-[-2rem] flex justify-center items-center h-32 w-8 p-3 z-10`,
            {
              hidden: currentIndex === matchData.games.length - 5,
            }
          )}
          onClick={goToNextSlide}
        >
          <FaChevronRight />
        </button>
      </div>
    </>
  );
};

export default MatchSlider;
