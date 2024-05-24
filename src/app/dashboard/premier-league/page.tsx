import LeagueTable from "@/app/UI/leagueTable";
import { data } from "@/../a";
import { Table } from "@/types/leagueStanding";
import matchData from "@/lib/matches";
import { MatchResponse } from "@/types/matchResult";
import { upcomingMatchResponse } from "@/types/upcomingMatches";
import MatchSlider from "@/app/UI/slider";
import UpcomingMatches from "@/components/upcomingMatches";

export default async function Page() {
  // const data = await leagueStandingData();
  const matchResultdataResponse: MatchResponse = await matchData(
    "premier league match results"
  );
  const upcomingmatchdataResponse: upcomingMatchResponse = await matchData(
    "saudi pro upcoming matches"
  );

  const leagueData: Table[] = data.standings[0].table;
  return (
    <>
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
            <UpcomingMatches matchData = {upcomingmatchdataResponse}/>
          </section>
        </div>
      </div>
    </>
  );
}
