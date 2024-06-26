import { Table } from "@/types/leagueStanding";
import Image from "next/image";

type LeagueTableProps = {
  leagueData: Table[];
};

const LeagueTable = ({ leagueData }: LeagueTableProps) => {
  return (
    <>
      <div className="w-[40rem] p-3 shadow-sm rounded-lg bg-slate-50">
        <table className="w-full ">
          <thead>
            <tr className="w-full">
              <th className="font-normal text-start w-72">Club</th>
              <th className="font-normal text-center w-9">MP</th>
              <th className="font-normal text-center w-9">W</th>
              <th className="font-normal text-center w-9">D</th>
              <th className="font-normal text-center w-9">L</th>
              <th className="font-normal text-center w-9">GF</th>
              <th className="font-normal text-center w-9">GA</th>
              <th className="font-normal text-center w-9">GD</th>
              <th className="font-normal text-center w-9">Pts</th>
            </tr>
          </thead>
          <tbody className="leading-8">
            {leagueData.map((team, index) => (
              <tr className="border-t-2 hover:scale-105 transition-all duration-150" key={index}>
                <td className="flex gap-3 justify-start items-center">
                  <div className="w-5 pl-1">{team.position}</div>
                  <Image
                    className="w-5 h-5"
                    src={team.team.crest}
                    alt={team.team.tla}
                    width={100}
                    height={100}
                  />
                  <div>{team.team.name}</div>
                </td>
                <td className="text-center">{team.playedGames}</td>
                <td className="text-center">{team.won}</td>
                <td className="text-center">{team.draw}</td>
                <td className="text-center">{team.lost}</td>
                <td className="text-center">{team.goalsFor}</td>
                <td className="text-center">{team.goalsAgainst}</td>
                <td className="text-center">{team.goalDifference}</td>
                <td className="text-center">{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default LeagueTable;