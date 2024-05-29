// pages/index.tsx or wherever the Page component is located
import LeagueTable from "@/app/UI/leagueTable";
import { data } from "@/../a";
import { Table } from "@/types/leagueStanding";
import matchData from "@/lib/matches";
import { MatchResponse } from "@/types/matchResult";
import { upcomingMatchResponse } from "@/types/upcomingMatches";
import MatchSlider from "@/app/UI/slider";
import UpcomingMatches from "@/components/upcomingMatches";
import Stats from "@/components/stats";
import { Suspense } from "react";
import Loading from "@/app/Loading";
import statsData from "@/lib/stats";
import { PlayerStats } from "@/types/stat";

export default async function Page() {
  const matchResultdataResponse = (await matchData(
    "english league sport match results"
  )) as MatchResponse;

  const upcomingmatchdataResponse = (await matchData(
    "saudi league upcoming matches"
  )) as upcomingMatchResponse;

  const scorersData: PlayerStats[] = await statsData();

  const leagueData: Table[] = data.standings[0].table;

  return (
    <>
      <Suspense fallback={<Loading />} />
      <div className="my-10 flex flex-col gap-5">
        <section className="">
          <p>Matches</p>
          <MatchSlider matchData={matchResultdataResponse} />
        </section>
        <div className="flex justify-between">
          <section className="flex flex-col gap-2">
            <h1 className="text-lg">League table</h1>
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
