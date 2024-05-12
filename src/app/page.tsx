import { GiSoccerBall } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <main className="m-7">
        <section className="rounded-xl bg-blue-400  ">
          <div className="h-64 p-5 flex justify-start items-end gap-2 text-6xl">
            <GiSoccerBall />
            <Link href={"./"}>GoalPulse</Link>
          </div>
        </section>
        <section className="text-black p-4 flex justify-between pb-0">
          <div className="flex gap-5 flex-col justify-center items-start p-10 text-2xl pb-0">
            <b className="text-3xl">Welcome to GoalPulse!</b>
            <p>
              Your Ultimate Football Companion Live Updates. Comprehensive
              Stats. Streaming Links. Get ready for the ultimate football
              experience. Follow every goal, every pass, and every tackle with
              GoalPulse. Join us now and never miss a moment of the action.
            </p>
            <button className=" flex justify-center items-center gap-3 bg-blue-400 p-2 rounded-lg text-xl w-32">
              <p>Login</p>
              <FaArrowRight />
            </button>
          </div>
          <div>
            <div className=" h-[38rem] w-[70rem] relative overflow-clip ">
              <Image
                src="/cover1.jpeg"
                layout="fill"
                objectFit="cover"
                alt="coverImage"
                className="rounded-xl absolute scale-[1.22] -z-10 transition-all duration-700"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
