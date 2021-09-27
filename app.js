const {
  urlType,
  getLinks,
  anLinks,
  getDownLink,
  anScraper,
} = require("./utils");
const axios = require("axios");
const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const URL = process.argv[2] || null;
const QUALITY = process.argv[3] || "720";

if (!URL) {
  console.log("Please Provide A link");
}

async function main() {
  const html = await axios.get(URL);
  const dom = new JSDOM(html.data);

  if (urlType(URL) === "anime") {
    console.log("it an anime");
    const allEps = await anScraper(dom, QUALITY);

    fs.appendFile("Anime_final_links.txt", allEps, function (err) {
      if (err) throw err;
      console.log("Saved!");
    });
  }

  if (urlType(URL) === "episode") {
    const epLink = getLinks(dom, QUALITY);
    const epDownLink = await getDownLink(epLink);

    fs.writeFileSync("./Final_Episode_Link.txt", epDownLink);
  }
  if (urlType(URL) !== "episode" && urlType(URL) !== "anime")
    return "provide a vilde link";
}
main();