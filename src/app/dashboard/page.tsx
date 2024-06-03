import News from "@/components/news";
import matchData from "@/lib/matches";
import MatchSlider from "./UI/slider";
import UpcomingMatches from "@/components/upcomingMatches";
import { Suspense } from "react";
import {
  MatchSliderSkeleton,
  NewsSkeletons,
  UpcomingMatchSkeleton,
  UpcomingMatchSkeletons,
} from "./UI/Skeleton";

const Page = async () => {
  const date = new Date();
  const matchResultdataResponse = await matchData(
    `europe footballs matches ${date.getFullYear()} results`
  );
  const upcomingmatchdataResponse = await matchData(
    `upcoming europe football 2024 match schedules`
  );

  return (
    <>
      <main className="flex flex-col gap-5 my-10">
        <section>
          <p className="text-xl">Matches results</p>
          <Suspense fallback={<MatchSliderSkeleton />}>
            <MatchSlider matchData={matchResultdataResponse} />
          </Suspense>
        </section>
        <section className="flex justify-between">
          <div className="w-fit">
            <Suspense fallback={<NewsSkeletons />}>
              <News />
            </Suspense>
          </div>
          <div className=" w-[50%] flex justify-center items-start ">
            <div className="sticky top-[-22rem] w-fit">
              <Suspense fallback={<UpcomingMatchSkeletons />}>
                <UpcomingMatches matchData={upcomingmatchdataResponse} />
              </Suspense>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
