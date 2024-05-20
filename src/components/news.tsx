import scrapper from "@/lib/scrapper";
import scrape from "@/api/scrape";
import Image from "next/image";
interface Article {
  title: string;
  img?: string;
  time: string;
}

export default async function News() {
  const data = await scrape();
  return (
    <div>
      <p>Latest news</p>
      <div>
        {data &&
          data.map((element, index) => (
            <div key={index}>
              <h3>{element.title}</h3>
              {element.img && (
                <Image
                  src={`${element.img}`}
                  alt="news image"
                  width={30}
                  height={30}
                />
              )}
              <p>{element.time}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
