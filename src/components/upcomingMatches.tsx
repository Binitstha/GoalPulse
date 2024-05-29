import { sports_results } from "@/types/matchResult";
import Matches from "./Matches";

type matchDataProps = {
  matchData: sports_results;
};

const upcomingMatches = async ({ matchData }: matchDataProps) => {
  return (
    <>
      <div className="">
        <p className="text-xl mb-2">Upcoming Matches</p>
        <div className=" flex flex-col gap-4">
          {matchData.games ? (
            matchData.games.map((game, index) => (
              <div
                key={index}
                className="w-[20rem] shadow-lg relative rounded-lg p-3 pt-6"
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
      </div>
    </>
  );
};

export default upcomingMatches;
