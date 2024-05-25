import React from "react";
import Image from "next/image";
import "@/style/style.css";
import { Game } from "@/types/matchResult";
import Link from "next/link";

interface MatchesProps {
  game: Game;
}

const Matches: React.FC<MatchesProps> = ({ game }) => {
  return (
    <div className="flex">
      <span className="absolute text-gray-500 top-1">{game.tournament}</span>
      <div className="gap-3 p-3 flex w-[65%] border-r-2 flex-col h-28 justify-end items-start">
        <div className="gap-2 flex w-full justify-between items-center">
          <div className="flex gap-2 justify-start  items-center">
            <Image
              src={game.teams[0].thumbnail}
              alt={game.teams[0].name}
              className="w-7 "
              width={50}
              height={50}
            />
            <span className="text-ellipsis text-nowrap">
              {game.teams[0].name}
            </span>
          </div>
          <span className="text-nowrap text-center">{game.teams[0].score}</span>
        </div>
        <div className="gap-2 w-full flex justify-between items-center">
          <div className="flex gap-2 justify-start items-center">
            <Image
              src={game.teams[1].thumbnail}
              alt={game.teams[1].name}
              className="w-7"
              width={50}
              height={50}
            />
            <span className="text-ellipsis text-nowrap">
              {game.teams[1].name}
            </span>
          </div>
          <span className="text-nowrap text-center">{game.teams[1].score}</span>
        </div>
      </div>
      <div className="highlights p-2 flex flex-col gap-2 justify-center items-center">
        <div className="flex justify-between flex-col items-center">
          <div className="text-slate-600 text-sm">{game.status}</div>
          <div className="text-slate-600 text-sm">{game.date}</div>
        </div>
        {game.video_highlights && (
          <Link
            href={game.video_highlights.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative rounded-md overflow-hidden">
              <Image
                src={game.video_highlights.thumbnail}
                alt="Video Highlights"
                width={200}
                height={100}
              />
              <span className="absolute right-0 bottom-0 bg-transparent backdrop-blur-2xl w-12 text-white text-sm rounded-sm flex justify-center items-center">
                {game.video_highlights.duration}
              </span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Matches;
