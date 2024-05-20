import puppeteer from "puppeteer";

interface Articles {
  title: string;
  img?: string;
  time: string;
}

async function scrapper(url: string): Promise<Articles[]> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const allArticles = await page.evaluate(() => {
    const articles = document.querySelectorAll("article");

    return Array.from(articles)
      .map((article) => {
        const titleElement =  article.querySelector("h3");
        const title =  titleElement ? titleElement.innerHTML : "No title";

        const imgElement = article.querySelector("img");
        const img = imgElement ? imgElement?.src : undefined;

        const timeElement = article.querySelector("time span");
        const time = timeElement ? timeElement.innerHTML : "No time";
        return { title, img, time };
      });
  });
  await browser.close();
  return allArticles;
}

export default scrapper;
