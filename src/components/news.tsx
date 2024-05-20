import scrapper from "@/lib/scrapper";

interface Article {
  title: string;
  img?: string;
  time: string;
}

export default function News() {
  const data = scrapper("https://www.goal.com/en-in/news");
  return (
    <>
      <p>Latest news</p>
    </>
  );
}
