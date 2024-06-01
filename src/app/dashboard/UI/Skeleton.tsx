import React from "react";

export const DashboardSkeleton = () => {
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

export const MatchSkeleton = () => {
  return (
    <div className="shadow-lg flex gap-4 h-fit rounded-lg transition-transform p-3 duration-500 transform">
      <div className="flex h-36 gap-2 w-[26.67rem]">
        <div className="absolute animate-pulse bg-gray-300 top-2 w-32 h-5 rounded-sm"></div>

        <div className="gap-4 p-3 flex w-[100%] border-r-2 flex-col justify-end items-start">
          <div className="gap-2 w-full bg-gray-300 animate-pulse rounded-sm h-5"></div>
          <div className="gap-2 w-full bg-gray-300 animate-pulse rounded-sm h-5"></div>
          <div className="flex justify-center items-center gap-2 rounded-sm bg-gray-300 animate-pulse mx-auto w-32 h-5"></div>
        </div>

        <div className="p-2 flex flex-col w-56 gap-2 justify-center items-center">
          <div className="flex justify-between flex-col items-center gap-2">
            <div className="bg-gray-300 animate-pulse rounded-sm text-sm w-10 h-4"></div>
            <div className="bg-gray-300 animate-pulse rounded-sm text-sm w-20 h-4"></div>
          </div>
          <div className="relative rounded-md overflow-hidden h-[4.4rem] w-28 bg-gray-300 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export const MatchSliderSkeleton = () => {
  return (
    <div className="flex  relative gap-5 w-full overflow-visible justify-center items-center">
      <button className="absolute left-[-2rem] flex justify-center items-center h-32 w-8 p-3 z-10"></button>
      <div className="overflow-hidden flex w-full py-3">
        <div className="flex gap-4 w-full p-3 duration-500 transform">
          <div className=" relative duration-150 flex gap-4 rounded-lg">
            <MatchSkeleton />
            <MatchSkeleton />
            <MatchSkeleton />
          </div>
        </div>
      </div>
      <button
        className="
          absolute right-[-2rem] flex justify-center items-center h-32 w-8 p-3 z-10"
      ></button>
    </div>
  );
};

export const LeagueSkeleton = () => {
  return (
    <div>
      <div className="w-[40rem] p-3 shadow-sm rounded-lg bg-slate-50">
        <table className="w-full ">
          <thead>
            <tr className="w-full">
              <th className="font-normal text-start w-72">Club</th>
              <th className="font-normal text-center w-9">MP</th>
              <th className="font-normal text-center w-9">W</th>
              <th className="font-normal text-center w-9">D</th>
              <th className="font-normal text-center w-9">L</th>
              <th className="font-normal text-center w-9">GF</th>
              <th className="font-normal text-center w-9">GA</th>
              <th className="font-normal text-center w-9">GD</th>
              <th className="font-normal text-center w-9">Pts</th>
            </tr>
          </thead>
        </table>
        <div className="h-7 bg-gray-300 w-full my-2 rounded-sm animate-pulse"></div>
        <div className="h-7 bg-gray-300 w-full my-2 rounded-sm animate-pulse"></div>
        <div className="h-7 bg-gray-300 w-full my-2 rounded-sm animate-pulse"></div>
        <div className="h-7 bg-gray-300 w-full my-2 rounded-sm animate-pulse"></div>
        <div className="h-7 bg-gray-300 w-full my-2 rounded-sm animate-pulse"></div>
        <div className="h-7 bg-gray-300 w-full my-2 rounded-sm animate-pulse"></div>
        <div className="h-7 bg-gray-300 w-full my-2 rounded-sm animate-pulse"></div>
        <div className="h-7 bg-gray-300 w-full my-2 rounded-sm animate-pulse"></div>
        <div className="h-7 bg-gray-300 w-full my-2 rounded-sm animate-pulse"></div>
        <div className="h-7 bg-gray-300 w-full my-2 rounded-sm animate-pulse"></div>
        <div className="h-7 bg-gray-300 w-full my-2 rounded-sm animate-pulse"></div>
        <div className="h-7 bg-gray-300 w-full my-2 rounded-sm animate-pulse"></div>
        <div className="h-7 bg-gray-300 w-full my-2 rounded-sm animate-pulse"></div>
        <div className="h-7 bg-gray-300 w-full my-2 rounded-sm animate-pulse"></div>
      </div>
    </div>
  );
};

export const StatsSkeleton = () => {
  return (
    <section className="rounded-xl shadow-md w-fit max-w-[18rem]">
      <div className="grid mx-auto grid-cols-1 gap-5 p-3 py-5">
        <div className="h-10 animate-pulse w-64 bg-gray-300 rounded-sm"></div>
        <div className="h-10 animate-pulse w-64 bg-gray-300 rounded-sm"></div>
        <div className="h-10 animate-pulse w-64 bg-gray-300 rounded-sm"></div>
        <div className="h-10 animate-pulse w-64 bg-gray-300 rounded-sm"></div>
        <div className="h-10 animate-pulse w-64 bg-gray-300 rounded-sm"></div>
        <div className="h-10 animate-pulse w-64 bg-gray-300 rounded-sm"></div>
        <div className="h-10 animate-pulse w-64 bg-gray-300 rounded-sm"></div>
        <div className="h-10 animate-pulse w-64 bg-gray-300 rounded-sm"></div>
      </div>
    </section>
  );
};

export const UpcomingMatchSkeletons = () => {
  return (
    <div className="flex flex-col gap-5">
      <UpcomingMatchSkeleton />
      <UpcomingMatchSkeleton />
      <UpcomingMatchSkeleton />
      <UpcomingMatchSkeleton />
      <UpcomingMatchSkeleton />
    </div>
  );
};

export const UpcomingMatchSkeleton = () => {
  return (
    <div className="shadow-lg flex w-[19rem] gap-4 h-fit rounded-lg transition-transform p-3 duration-500 transform">
      <div className="flex h-36 gap-2 w-full">
        <div className="absolute animate-pulse bg-gray-300 top-2 w-32 h-5 rounded-sm"></div>

        <div className="gap-4 p-3 flex w-[100%] border-r-2 flex-col justify-end items-start">
          <div className="gap-2 w-full bg-gray-300 animate-pulse rounded-sm h-5"></div>
          <div className="gap-2 w-full bg-gray-300 animate-pulse rounded-sm h-5"></div>
          <div className="flex justify-center items-center gap-2 rounded-sm bg-gray-300 animate-pulse mx-auto w-32 h-5"></div>
        </div>

        <div className="p-2 flex flex-col w-56 gap-2 justify-center items-center">
          <div className="flex justify-between flex-col items-center gap-2">
            <div className="bg-gray-300 animate-pulse rounded-sm text-sm w-8 h-4"></div>
            <div className="bg-gray-300 animate-pulse rounded-sm text-sm w-12 h-4"></div>
            <div className="bg-gray-300 animate-pulse rounded-sm text-sm w-20 h-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NewsSkeleton = () => {
  return (
    <div>
      <p>Loading</p>
    </div>
  );
};

export const StoriesSkeleton = () => {
  return (
    <div>
      <p>Loading</p>
    </div>
  );
};
