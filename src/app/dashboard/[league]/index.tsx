// // components/LeaguePage.tsx
// "use client";

// import { usePathname } from "next/navigation";
// import MatchSlider from "@/app/UI/slider";
// import UpcomingMatches from "@/components/upcomingMatches";
// import Stats from "@/components/stats";
// import LeagueTable from "@/components/leagueTable";
// import { Table } from "@/types/leagueStanding";
// import { PlayerStats } from "@/types/stat";

// type LeaguePageProps = {
//   matchResultdataResponse: any;
//   upcomingmatchdataResponse: any;
//   leagueData: Table[];
//   scorersData: PlayerStats[];
// };

// const LeaguePage = ({
//   matchResultdataResponse,
//   upcomingmatchdataResponse,
//   leagueData,
//   scorersData,
// }: LeaguePageProps) => {

//   return (
//     <div className="my-10 flex flex-col gap-5">
//       <section className="">
//         <p>Matches</p>
//         <MatchSlider matchData={matchResultdataResponse} />
//       </section>
//       <div className="flex justify-between">
//         <section className="flex flex-col gap-2">
//           <LeagueTable leagueData={leagueData} />
//         </section>
//         <section>
//           <Stats data={scorersData} />
//         </section>
//         <section>
//           <UpcomingMatches matchData={upcomingmatchdataResponse} />
//         </section>
//       </div>
//     </div>
//   );
// };

// export default LeaguePage;
