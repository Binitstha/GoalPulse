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
          <div className=" w-[40%] flex gap-3 justify-center items-center border-2">
            <Image
              src={clubDetail.thumbnail}
              alt={`${clubDetail.title}'s logo`}
              className="w-20"
              width={50}
              height={50}
            ></Image>
            <div>
              <p className="">{clubDetail.title}</p>
              <p>{clubDetail.description}</p>
            </div>
            {/* <p>{JSON.stringify(clubDetail)}</p> */}
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
