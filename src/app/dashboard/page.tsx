import News from "@/components/news";
import ResultCard from "@/components/liveMatches";
import UpcomingMatches from "@/components/upcomingMatches";
export default function Page() {
  return (
    <>
      <main className="flex flex-col gap-5 my-10">
        <section className="flex flex-col  w-[78rem] overflow-hidden h-full">
          <p className="text-red-700 animate-pulse">Live mathes</p>
          <ResultCard />
        </section>
        <section className="flex justify-between">
          <News />
          <UpcomingMatches />
        </section>
      </main>
    </>
  );
}
