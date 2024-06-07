import { unstable_noStore } from "next/cache";
import puppeteer from "puppeteer-core";
import chromium from "chrome-aws-lambda";

interface Articles {
  title: string;
  img?: string;
  time: string;
}

export const newsScrapper = async (url: string): Promise<Articles[]> => {
  unstable_noStore();

  let browser;
  if (process.env.NODE_ENV === 'production') {
    browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
    });
  } else {
    browser = await puppeteer.launch({
      executablePath: "/usr/bin/google-chrome",
    });
  }

  const page = await browser.newPage();
  await page.goto(url);

  const allArticles = await page.evaluate(() => {
    const articles = document.querySelectorAll("article");

    return Array.from(articles).map((article) => {
      const titleElement = article.querySelector("h3");
      const title = titleElement ? titleElement.innerHTML : "No title";

      const imgElement = article.querySelector("img");
      const img = imgElement ? imgElement.src : undefined;

      const timeElement = article.querySelector("time span");
      const time = timeElement ? timeElement.innerHTML : "No time";
      return { title, img, time };
    });
  });

  await browser.close();
  return allArticles;
};
