import { sports_results } from "@/types/upcomingMatches";
import React from "react";
import Matches from "./Matches";

interface matchDataProps {
  matchData: sports_results;
}

const upcomingMatches: React.FC<matchDataProps> = async ({ matchData }) => {
  return (
    <>
      <div className="w-[28rem]">
        <p className="text-xl mb-2">Upcoming Matches</p>
        <div className=" flex flex-col gap-4">
          {matchData.games ? (
            matchData.games.map((game, index) => (
              <div
                key={index}
                className="w-[10rem] h-[7rem]"
              >
                <Matches game={game} />
              </div>
            ))
          ) : (
            <>
              <div>No upcoming Matches</div>
            </>
          )}
        </div>
        <div>{JSON.stringify(matchData.game_spotlight)}</div>
      </div>
    </>
  );
};

export default upcomingMatches;
