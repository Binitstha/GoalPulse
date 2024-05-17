import ResultCard from "@/app/UI/resultCard";
import TopBar from "./topbar";
export default function Page() {
  return (
    <>
      <main className="flex flex-col gap-5">
        <section>
          <ResultCard team1="RMC" team2="BAR" />
        </section>
      </main>
    </>
  );
}
