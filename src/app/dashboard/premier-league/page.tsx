import LeagueTable from "@/app/UI/leagueTable";
import { leagueStandingData } from "@/lib/leagueTable";
import { data } from "@/../a";
import { Table } from "@/types/leagueStanding";
import Matches from "@/components/Matches";
import matchData from "@/lib/matches";
import { MatchResponse } from "@/types/match";
import MatchSlider from "@/app/UI/slider";

export default async function Page() {
  // const data = await leagueStandingData();
  const matchdataResponse: MatchResponse = await matchData("premier league match results");

  const leagueData: Table[] = data.standings[0].table;
  return (
    <>
      <div className="my-10 flex flex-col gap-5">
        <section className="">
          <p>Matches</p>
          <MatchSlider matchData={matchdataResponse} />
        </section>
        <section className="flex flex-col gap-2">
          <h1 className="text-lg">League table</h1>
          <LeagueTable leagueData={leagueData} />
        </section>
      </div>
    </>
  );
}
