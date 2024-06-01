import { LeagueSkeleton, MatchSliderSkeleton, StatsSkeleton, UpcomingMatchSkeletons } from "@/app/dashboard/UI/Skeleton";

const Page = () => {
  return (
    <>
      <div className="my-10 flex flex-col gap-5">
        <section className="">
          <p className="text-center text-lg">Matches Results</p>
          <MatchSliderSkeleton />
        </section>
        <div className="flex justify-between">
          <section className="flex flex-col gap-2">
            <h1 className="text-lg text-center">League table</h1>

            <LeagueSkeleton />
          </section>
          <section>
            <h1 className="text-center">Top Scorers</h1>

            <StatsSkeleton />
          </section>
          <section>
            <p className="text-xl mb-2 text-center">Upcoming matches</p>

            <UpcomingMatchSkeletons />
          </section>
        </div>
      </div>
    </>
  );
};

export default Page;
