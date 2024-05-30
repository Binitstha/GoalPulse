// pages/index.tsx or wherever the Page component is located
import LeagueTable from "@/components/leagueTable";
import { Table } from "@/types/leagueStanding";
import matchData from "@/lib/matches";
import MatchSlider from "@/app/UI/slider";
import UpcomingMatches from "@/components/upcomingMatches";
import Stats from "@/components/stats";
import { Suspense } from "react";
import Loading from "@/app/Loading";
import statsData from "@/lib/stats";
import { PlayerStats } from "@/types/stat";
import { leagueStandingData } from "@/lib/leagueTable";

type paramsProps = {
  params: {
    league: string;
  };
};
export default async function Page({ params }: paramsProps) {
  const leagueCode: Record<string, string> = {
    "premier-league": "PL",
    "seria-A": "SA",
    "la-liga": "PD",
    "Ligue-1": "FL1",
    "Bundesliga": "BL1",
  };

  const { league } = params;
  const matchResultdataResponse = await matchData(
    `${league} league sport match results`
  );

  const upcomingmatchdataResponse = await matchData(
    `saudi league upcoming matches`
  );

  const leagueData: Table[] = await leagueStandingData(leagueCode[league]);

  const scorersData: PlayerStats[] = await statsData(leagueCode[league]);

  return (
    <>
      <div className="my-10 flex flex-col gap-5">
        <section className="">
          <p>Matches</p>
          <MatchSlider matchData={matchResultdataResponse} />
        </section>
        <div className="flex justify-between">
          <section className="flex flex-col gap-2">
            <LeagueTable leagueData={leagueData} />
          </section>
          <section>
            <Stats data={scorersData} />
          </section>
          <section>
            <UpcomingMatches matchData={upcomingmatchdataResponse} />
          </section>
        </div>
      </div>
    </>
  );
}
