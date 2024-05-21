import scrape from "@/api/scrape";
import Image from "next/image";
import { FaClock } from "react-icons/fa6";
interface Article {
  title: string;
  img?: string;
  time: string;
}

export default async function News() {
  const data = await scrape();
  return (
    <div className="w-fit">
      <p className="text-xl">Latest news</p>
      <div className="mt-3 flex flex-wrap gap-5">
        {data &&
          data.map((element, index) => (
            <div key={index} className="rounded-md shadow-md p-5 w-[25rem] grid gap-2">
              {element.img && (
                <Image
                  src={`${element.img}`}
                  alt="news image"
                  className="w-[50rem]"
                  width={1000}
                  height={1000}
                />
              )}
              <h3 dangerouslySetInnerHTML={{__html: element.title}}></h3>
              <p className="flex gap-2 justify-start items-center"><i><FaClock/></i>{element.time}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
