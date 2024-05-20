import { GiSoccerBall } from "react-icons/gi";
import NavLinks from "./navlinks";
import { GiPowerButton } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";

export default function Sidenav() {
  return (
    <>
      <section className="border-r-2 h-full p-3 flex flex-col gap-3">
        <div className="bg-blue-400 h-40 rounded-lg flex justify-items-end items-center p-3 text-3xl">
          <div className="mt-auto flex relative justify-start items-center gap-1">
            <Link href={'/dashboard'}>
              <div className="flex gap-2 justify-center items-center">
                {/* <Image src='/logo.png' alt="logo" width={70}  height={70}/> */}
                <p>GoalPulse</p>
              </div>
            </Link>
          </div>
        </div>
        <div className=" h-full flex flex-col gap-2 justify-between">
          <div className="flex gap-2 flex-col">
            <NavLinks />
          </div>
          <div className="w-full justify-center items-center gap-2 p-3 bg-white rounded-lg flex">
            <span className="">
              <GiPowerButton />
            </span>
            <p className="">sign out</p>
          </div>
        </div>
      </section>
    </>
  );
}
