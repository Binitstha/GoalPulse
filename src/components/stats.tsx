import statsData from "@/lib/stats";
import { statData } from "@/types/stat";
import Image from "next/image";
import { Scorers } from "@/types/stat";

const stats = async ({ data }: { data: statData }) => {
  if(!data){
    return (<><p>no score data available</p></>)
  }
  return (
    <>
      <h1>TOP SCORRER</h1>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.scorers.map((scorer: Scorers, index: number) => (
          <div key={index} className="card shadow-lg p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <Image
                src={scorer.team[0].crest}
                alt={scorer.team[0].name}
                className="w-16 h-16"
              />
              <div>
                <h2 className="text-xl font-bold">{scorer.player[0].name}</h2>
                <p className="text-sm">{scorer.team[0].name}</p>
              </div>
            </div>
            <div className="mt-4">
              <p>Goals: {scorer.goals}</p>
              <p>Matches: {scorer.playedMatches}</p>
              <p>Assists: {scorer.assists}</p>
              <p>Penalties: {scorer.penalties ?? 0}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default stats;
