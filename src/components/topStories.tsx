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
          <div key={index} className="flex flex-col gap-4 p-3 h-64 w-[45%] rounded-lg shadow-lg">
            <div className=" gap-3 flex justify-center items-center">
              <div>
                <p className="text-slate-500">{story.source}</p>
                <Link href={story.link} target="_blank" className="h-28">
                  {story.title}
                </Link>
              </div>
              <div className="w-40 h-40 overflow-hidden">
                <Image
                  src={story.thumbnail}
                  alt="news Image"
                  className="w-80  rounded-lg overflow-hidden"
                  width={200}
                  height={250}
                ></Image>
              </div>
            </div>
            <div className="">
              <FaClock />
              <p>{story.date}</p>
            </div>
          </div>
        ))}
    </>
  );
};
export default Page;
