import scrape from "@/api/scrape";
import { NewsSkeleton } from "@/app/(dashboard)/UI/Skeleton";
import Image from "next/image";
import { Suspense } from "react";
import { FaClock } from "react-icons/fa6";

export default async function News() {
  const data = await scrape();
  console.log(data)
  return (
    <div className="w-fit">
      <p className="text-xl">Latest news</p>
      <div className="mt-3 flex flex-wrap gap-5 ">
        <div>{JSON.stringify(data)}</div>
        {data ? (
          data.map((element, index) => (
            <div
              key={index}
              className="rounded-md shadow-md h-[20.65rem] p-5 w-[25rem] grid gap-2 hover:scale-105 hover:shadow-xl transition-all duration-150"
            >
              <Suspense fallback={<NewsSkeleton />}>
                <>
                  {element.img && (
                    <Image
                      src={`${element.img}`}
                      alt="news image"
                      className="w-[50rem] h-[12.7rem]"
                      width={1000}
                      height={1000}
                    />
                  )}
                  <h3 dangerouslySetInnerHTML={{ __html: element.title }}></h3>
                  <p className="flex gap-2 justify-start items-center">
                    <i>
                      <FaClock />
                    </i>
                    {element.time}
                  </p>
                </>
              </Suspense>
            </div>
          ))
        ) : (
          <div>
            <p>News not availabel at the moment</p>
          </div>
        )
        }
      </div>
    </div>
  );
}
