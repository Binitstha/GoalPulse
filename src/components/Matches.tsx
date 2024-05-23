"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import matchData from "@/../a"; // Adjust the import path as needed
import "@/style/style.css";
import MatchSlider from "../app/UI/slider";

interface MatchCardProps {
  match: Match;
}

export const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  const { time, teams, league } = match;
  if (!teams) {
    return;
  }

  return (
    <div className="card shadow-lg w-[22rem] flex flex-col gap-3 p-4 rounded-lg">
      <div className="flex justify-between">
        <div className="text-slate-600 text-sm">{league.name}</div>
      </div>
      <div className="teams gap-3 flex justify-center items-center">
        <div className="team w-[7rem] flex flex-col justify-center items-center">
          <Image
            src={teams.home?.img}
            alt={teams.home?.name}
            width={50}
            height={50}
          />
          <span className="text-ellipsis text-nowrap w-full overflow-clip text-center">
            {teams.home?.name}
          </span>
        </div>
        <div className="versus">vs</div>
        <div className="team w-[7rem] flex flex-col justify-center items-center">
          <Image
            src={teams.away?.img}
            alt={teams.away?.name}
            width={50}
            height={50}
          />
          <span className="text-ellipsis text-nowrap w-full overflow-clip text-center">
            {teams.away?.name}
          </span>
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [scheduledMatch, setScheduledMatch] = useState<Match[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: Match[] = matchData.data.map((item: any) => ({
          ...item,
          round_name: item.round_name || "",
          week: item.week || "",
          info: item.info || "",
          attendance: item.attendance || "",
        })); // Access the data array from the imported object
        setScheduledMatch(response);
      } catch (error) {
        console.error("Error fetching scheduled matches:", error);
      }
    };

    fetchData();
  }, []);

  if (!scheduledMatch.length) {
    return <div>Loading...</div>; // Or any other loading indicator
  }

  return (
    <>
      <MatchSlider matches={scheduledMatch} />
    </>
  );
};

export default Home;
