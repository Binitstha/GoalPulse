import LeagueTable from "@/components/leagueTable";
import { Table } from "@/types/leagueStanding";
import matchData from "@/lib/matches";
import MatchSlider from "@/app/dashboard/UI/slider";
import UpcomingMatches from "@/components/upcomingMatches";
import Stats from "@/components/stats";
import { Suspense } from "react";
import Loading from "@/app/Loading";
import statsData from "@/lib/stats";
import { PlayerStats } from "@/types/stat";
import { leagueStandingData } from "@/lib/leagueTable";
import {
  LeagueSkeleton,
  MatchSkeleton,
  StatsSkeleton,
  UpcomingMatchSkeletons,
} from "@/app/dashboard/UI/Skeleton";

type paramsProps = {
  params: {
    league: string;
  };
};
export default async function Page({ params }: paramsProps) {
  const leagueCode: Record<string, string> = {
    "premier-league": "PL",
    "Bundesliga": "BL1",
    "seria-A": "SA",
    "la-liga": "PD",
    "Ligue-1": "FL1",
  };

  const { league } = params;
  const matchResultdataResponse = await matchData(
    `${league} league sport matches results`
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
          <Suspense fallback={<MatchSkeleton />}>
            <p className="text-center text-lg">Matches Results</p>
            <MatchSlider matchData={matchResultdataResponse} />
          </Suspense>
        </section>
        <div className="flex justify-between">
          <section className="flex flex-col gap-2">
            <h1 className="text-lg text-center">League table</h1>

            <Suspense fallback={<LeagueSkeleton />}>
              <LeagueTable leagueData={leagueData} />
            </Suspense>
          </section>
          <section>
            <h1 className="text-center">Top Scorers</h1>

            <Suspense fallback={<StatsSkeleton />}>
              <Stats data={scorersData} />
            </Suspense>
          </section>
          <section>
            <p className="text-xl mb-2 text-center">Upcoming matches</p>

            <Suspense fallback={<UpcomingMatchSkeletons />}>
              <UpcomingMatches matchData={upcomingmatchdataResponse} />
            </Suspense>
          </section>
        </div>
      </div>
    </>
  );
}
