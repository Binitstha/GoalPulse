import { GiSoccerBall } from "react-icons/gi";
import NavLinks from "./navlinks";
import { GiPowerButton } from "react-icons/gi";

export default function Sidenav() {
  return (
    <>
      <section className="border-2 h-full p-3 flex flex-col gap-3">
        <div className="bg-blue-400 h-40 rounded-lg flex justify-center items-baseline p-3 text-2xl gap-3">
          <GiSoccerBall />
          GoalPulse
        </div>
        <div className="flex flex-col gap-2 justify-between">
          <NavLinks />
          <div className="w-full p-3 bg-white rounded-lg"><span className="w-14"><GiPowerButton/></span>sign out</div>
        </div>
      </section>
    </>
  );
}
