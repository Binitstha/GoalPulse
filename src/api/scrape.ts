import { newsScrapper } from "@/lib/scrapper";
import { unstable_noStore as noStore } from "next/cache";

export default async function scrape() {
  const url = 'https://www.goal.com/en-in/news';
  if (!url) {
    console.error("url is not received");
    return;
  }
  noStore();

  try {
    const article = await newsScrapper(url);
    return article;
  } catch (err) {
    console.log("Error while scrapping data.",err);
  }
}
