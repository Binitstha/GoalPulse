import Matches from "@/components/Matches";
import TopStories from "@/components/topStories";
import clubData from "@/lib/clubDetails";
import Image from "next/image";

const Page = async ({
  searchParams,
}: {
  searchParams?: { query?: string };
}) => {
  const query = searchParams?.query || "";

  const clubDetail = await clubData(query);
  return (
    <>
      <main className="my-10 flex flex-col gap-5">
        <div className="flex w-full justify-between h-full">
          <section className="w-[40%] h-96 p-10 gap-5 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-5">
              <div className=" w-full flex justify-center gap-10  items-center">
                <Image
                  src={clubDetail.sports_results.thumbnail}
                  alt={`${clubDetail.sports_results.title}'s logo`}
                  className="w-20 flex text-sm justify-between items-center"
                  width={100}
                  height={100}
                ></Image>
                <div className="w-[70%] grid gap-3">
                  <p className="text-4xl">{clubDetail.sports_results.title}</p>
                  <p className="text-sm">
                    {clubDetail.knowledge_graph.description}
                  </p>
                </div>
              </div>
              <div className="leading-loose w-full">
                <p>
                  <b>Leagues:</b> {clubDetail.knowledge_graph.leagues}
                </p>
                <p>
                  {clubDetail.knowledge_graph &&
                    clubDetail.knowledge_graph.headquarters && (
                      <>
                        <b>Headquarters:</b>{" "}
                        {clubDetail.knowledge_graph.headquarters}
                      </>
                    )}
                </p>
                <p>
                  <b>Founded:</b> {clubDetail.knowledge_graph.founded}
                </p>
              </div>
              <TopStories/>
            </div>
          </section>
          <section className="w-[50%] h-fit flex justify-center items-center">
            <div className=" flex flex-col gap-5">
              {clubDetail.sports_results.games.map((game, index) => (
                <div key={index} className="relative shadow-md p-2 rounded-md">
                  <Matches game={game} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Page;
