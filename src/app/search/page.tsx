import { Metadata } from 'next';
import clubData from "@/lib/clubDetails";
import { top_stories, knowledge_graph } from "@/types/clubDetail";
import { sports_results } from '@/types/matchResult';
import Image from "next/image";
import Matches from "@/components/Matches";
import TopStories from "@/components/topStories";
import {
  SearchPageSkeleton,
} from "../(dashboard)/UI/Skeleton";
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Club Details',
};

const Page = async ({ searchParams }: { searchParams: { query: string } }) => {
  const query = searchParams.query || '';

  let clubDetail;
  try {
    clubDetail = await clubData(query);
  } catch (error) {
    console.error('Failed to fetch data:', error);
    clubDetail = null;
  }

  if (!clubDetail) {
    return <div>Error loading club details</div>;
  }

  const topStoriesData: top_stories[] = clubDetail.top_stories;

  return (
    <Suspense fallback={<SearchPageSkeleton />}>
      <PageContent clubDetail={clubDetail} topStoriesData={topStoriesData} />
    </Suspense>
  );
};

type PageContentProps = {
  clubDetail: {
    sports_results: sports_results;
    knowledge_graph: knowledge_graph;
    top_stories: top_stories[];
  };
  topStoriesData: top_stories[];
}

const PageContent = ({ clubDetail, topStoriesData }: PageContentProps) => {
  return (
    <main className="my-10 flex flex-col gap-5">
      <div className="flex w-full justify-between h-full">
        <section className="w-[100%] min-h-96 p-10 gap-10 flex flex-col justify-start items-center">
          <div className="flex flex-col justify-center items-center gap-5">
            <div className=" w-full flex justify-center gap-10 items-center">
              <Image
                src={clubDetail.sports_results.thumbnail}
                alt={`${clubDetail.sports_results.title}'s logo`}
                className="w-20 flex text-sm justify-between items-center"
                width={100}
                height={100}
              />
              <div className="w-[70%] grid gap-3">
                <p className="text-4xl">{clubDetail.sports_results.title}</p>
                <p className="text-sm">
                  {clubDetail.knowledge_graph.description}
                </p>
              </div>
            </div>
            <div className="leading-loose w-full">
              {clubDetail.knowledge_graph.leagues && (
                <p>
                  <b>Leagues:</b> {clubDetail.knowledge_graph.leagues}
                </p>
              )}
              <p>
                {clubDetail.knowledge_graph.headquarters && (
                  <>
                    <b>Headquarters:</b> {clubDetail.knowledge_graph.headquarters}
                  </>
                )}
              </p>
              <p>
                <b>Founded:</b> {clubDetail.knowledge_graph.founded}
              </p>
            </div>
            <div className="w-full flex flex-wrap gap-5">
              <TopStories stories={topStoriesData} />
            </div>
          </div>
        </section>
        <section className="w-[50%] h-fit flex justify-center items-center">
          <div className="flex flex-col gap-5">
            {clubDetail.sports_results.games.map((game, index) => (
              <div
                key={index}
                className="hover:shadow-xl hover:scale-105 transition-all duration-150 relative shadow-md p-2 rounded-md"
              >
                <Matches game={game} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Page;
