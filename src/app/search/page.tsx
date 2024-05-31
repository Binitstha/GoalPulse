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
      <div className="my-10 flex flex-col gap-5">
        <section className="flex w-full justify-between h-full">
          <div className="w-[40%] border-2 p-4 gap-5 flex flex-col justify-center items-center">
            <div className=" w-full  flex gap-7 justify-center  items-center">
              <Image
                src={clubDetail.thumbnail}
                alt={`${clubDetail.title}'s logo`}
                className="w-16 flex justify-center items-center"
                width={100}
                height={100}
              ></Image>
              <div className="w-[60%] grid gap-4">
                <p className="text-3xl">{clubDetail.title}</p>
                <p className="text-sm">{clubDetail.description}</p>
              </div>
            </div>
            <div className=" border-2">
              <p>Leagues</p>
              <p>Headquarters</p>
              <p>Founders</p>
              <p>Founded</p>
              <p>President</p>
              <p>Ethnicity</p>
            </div>
          </div>
          <div className="w-[50%] h-96 flex justify-center items-center border-2">
            <p>match results</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
