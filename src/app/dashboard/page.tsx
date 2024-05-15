import Link from "next/link";
import Avatar from "@/app/UI/avatar";
import Search from "@/app/UI/search";
import ResultCard from "@/app/UI/resultCard";
export default function Page() {
  return (
    <>
      <main className="flex flex-col gap-5">
        <section className="flex justify-center items-center gap-5">
          <Search />
          <p>|</p>
          <Link href="./help">Help</Link>
          <Avatar />
        </section>
        <section>
          <ResultCard team1="RMC" team2="BAR"/>
        </section>
      </main>
    </>
  );
}
