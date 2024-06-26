// components/stats.tsx
import { PlayerStats } from "@/types/stat";
import Image from "next/image";

const Stats = ({ data }: { data: PlayerStats[] }) => {
  if (!data || data.length === 0) {
    return (
      <>
        <p>No score data available</p>
      </>
    );
  }

  return (
    <>
      <section className="rounded-xl shadow-lg w-fit max-w-[18rem]">
        <div className="grid grid-cols-1 gap-1 p-3">
          {data.map((scorer, index) => (
            <div key={scorer.player.id}>
              <div className="items-center flex  justify-between p-3 gap-4 hover:scale-105 transition-all duration-150">
                <div className="flex gap-3 justify-start items-center">
                  <div>{index + 1}</div>
                  <div>
                    <Image
                      src={scorer.team.crest}
                      alt={scorer.team.name}
                      className="w-7"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <p>{scorer.player.name}</p>
                    <p className="text-slate-600">{scorer.team.name}</p>
                  </div>
                </div>
                <div>{scorer.goals}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Stats;
