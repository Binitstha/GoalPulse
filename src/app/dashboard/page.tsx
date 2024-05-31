import News from "@/components/news";
import matchData from "@/lib/matches";
import MatchSlider from "../UI/slider";
import UpcomingMatches from "@/components/upcomingMatches";

const Page = async () => {
  const date = new Date();
  const matchResultdataResponse = await matchData(
    `european football match ${date.getFullYear()} results`
  );
  const upcomingmatchdataResponse = await matchData(
    `upcoming european football 2024 match schedules`
  );

  return (
    <>
      <main className="flex flex-col gap-5 my-10">
        <section>
          <p className="text-xl">Matches results</p>
          <MatchSlider matchData={matchResultdataResponse} />
        </section>
        <section className="flex justify-between">
          <div className="w-fit">
            <News />
          </div>
          <div className=" w-[50%] flex justify-center items-start ">
            <div className="sticky top-[-22rem] w-fit">
              <UpcomingMatches matchData={upcomingmatchdataResponse} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
