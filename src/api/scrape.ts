import scrapper from "@/lib/scrapper";
import { unstable_noStore as noStore } from "next/cache";

export default async function scrape() {
  const url = process.env.NEXT_NEWS_URL;
  if (!url) {
    console.error("url is not received");
    return;
  }
  noStore();

  try {
    const article = await scrapper(url);
    return article;
  } catch (err) {
    console.log("Error while scrapping data.");
  }
}
