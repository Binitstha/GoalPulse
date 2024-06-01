import Image from "next/image";
import { top_stories } from "@/types/clubDetail";
import { FaClock } from "react-icons/fa6";
import Link from "next/link";

type stotiesProps = {
  stories: top_stories[];
};

const Page = ({ stories }: stotiesProps) => {
  return (
    <>
      {stories &&
        stories.map((story, index) => (
          <div key={index} className="flex hover:shadow-xl hover:scale-105 transition-all duration-150 flex-col gap-4 p-3 h-64 w-[45%] rounded-lg shadow-lg">
            <div className=" gap-3 flex justify-center items-center">
              <div className="w-[100%]">
                <p className="text-slate-500">{story.source}</p>
                <Link href={story.link} target="_blank" className="h-28">
                  {story.title}
                </Link>
              </div>
              <div className="w-48 h-40 overflow-hidden flex justify-center items-center">
                <Image
                  src={story.thumbnail}
                  alt="news Image"
                  className="w-96 rounded-lg overflow-hidden"
                  width={100}
                  height={100}
                ></Image>
              </div>
            </div>
            <div className="flex justify-start gap-2 items-center">
              <FaClock />
              <p>{story.date}</p>
            </div>
          </div>
        ))}
    </>
  );
};
export default Page;
