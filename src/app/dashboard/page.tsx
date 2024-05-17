import ResultCard from "@/app/UI/resultCard";
import TopBar from "./topbar";
export default function Page() {
  return (
    <>
      <main className="flex flex-col gap-5 my-10">
        <section className="flex gap-5 w-[78rem] overflow-hidden h-full p-5">
          <ResultCard team1="RMC" team2="BAR" />
          <ResultCard team1="RMC" team2="BAR" />
          <ResultCard team1="RMC" team2="BAR" />
          <ResultCard team1="RMC" team2="BAR" />
          <ResultCard team1="RMC" team2="BAR" />
        </section>
      </main>
    </>
  );
}
