import LeagueTable from "@/app/UI/leagueTable";
// import { matches } from "@/lib";
import { data } from "@/../a";
import { Table } from "@/types/leagueStanding";

export default async function Page() {
  // const data = await matches();
  const leagueData: Table[] = data.standings[0].table;
  return (
    <>
      <div className="my-10 flex flex-col gap-5">
        <section>Matches</section>
        <section className="flex flex-col gap-2">
          <h1 className="text-lg">League table</h1>
          <LeagueTable leagueData={leagueData} />
        </section>
      </div>
    </>
  );
}
