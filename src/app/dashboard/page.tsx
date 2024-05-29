import News from "@/components/news";
import ResultCard from "@/components/Matches";
import UpcomingMatches from "@/components/upcomingMatches";
export default function Page() {
  return (
    <>
      <main className="flex flex-col gap-5 my-10">
        <section className="flex justify-between">
          <News />
        </section>
      </main>
    </>
  );
}
