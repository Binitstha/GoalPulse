import { sports_results } from "@/types/matchResult";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineStadium } from "react-icons/md";

type matchDataProps = {
  matchData: sports_results;
};

const upcomingMatches = async ({ matchData }: matchDataProps) => {
  return (
    <>
      <div className="">
        <div className=" flex flex-col gap-4">
          {matchData.games ? (
            matchData.games.map((game, index) => (
              <div
                key={index}
                className="w-[19rem] shadow-lg relative rounded-lg p-3 pt-6 hover:scale-105 hover:shadow-xl transition-all duration-150"
              >
                <div className="flex mt-3">
                  <span className="absolute text-gray-500 top-1">
                    {game.tournament}
                  </span>
                  <div className="gap-3 p-3 flex w-52 border-r-2 flex-col justify-end items-start">
                    <div className="gap-2 flex w-full justify-between items-center">
                      <div className="flex gap-2 justify-start  items-center">
                        <Image
                          src={game.teams[0].thumbnail}
                          alt={game.teams[0].name}
                          className="w-7 text-[0.3rem] flex justify-center items-center"
                          width={50}
                          height={50}
                        />
                        <span className="text-ellipsis text-nowrap">
                          {game.teams[0].name}
                        </span>
                      </div>
                      <span className="text-nowrap text-center">
                        {game.teams[0].score}
                      </span>
                    </div>
                    <div className="gap-2 flex w-full justify-between items-center">
                      <div className="flex gap-2  justify-start items-center">
                        <Image
                          src={game.teams[1].thumbnail}
                          alt={game.teams[1].name}
                          className="w-7 text-[0.3rem] flex justify-center items-center"
                          width={50}
                          height={50}
                        />
                        <span className="text-ellipsis text-nowrap">
                          {game.teams[1].name}
                        </span>
                      </div>
                      <span className="text-nowrap text-center">
                        {game.teams[1].score}
                      </span>
                    </div>
                    <div className="w-full flex justify-center items-center gap-2 text-gray-500">
                      <MdOutlineStadium />
                      <p className="text-ellipsis text-nowrap overflow-hidden text-sm">
                        {game.stadium}
                      </p>
                    </div>
                  </div>
                  <div className="highlights p-2 flex flex-col w-20 gap-2 justify-center items-center">
                    <div className="flex justify-between flex-col items-center">
                      <div className="text-slate-600 text-sm">
                        {game.status}
                      </div>
                      <div className="text-slate-600 text-sm text-center">
                        {game.date}
                      </div>
                      <div className="text-slate-600 text-sm">{game.time}</div>
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
                            width={150}
                            height={75}
                          />
                          <span className="absolute right-0 bottom-0 bg-transparent backdrop-blur-2xl w-12 text-white text-sm rounded-sm flex justify-center items-center">
                            {game.video_highlights.duration}
                          </span>
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
              <div>No upcoming Matches</div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default upcomingMatches;
