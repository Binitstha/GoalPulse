import { matchData } from "@/lib/index";

export default async function upcomingMatches() {
  const data = await matchData("premier league matches");
  // console.log("data",data)
  return (
    <>
      <div className="w-[25rem]">
        <p className="text-xl">Upcoming Matches</p>
        {/* <div>{data && data.map((el) => return (<div>{el}</div>))}</div> */}
      </div>
    </>
  );
}
