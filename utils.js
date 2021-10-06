const axios = require("axios");
const { JSDOM } = require("jsdom");

const baseDomain = "https://ww.anime4up.com/";

function urlType(url) {
  if (url.startsWith(`${baseDomain}anime`)) return "anime";
  if (url.startsWith(`${baseDomain}episode`)) return "episode";
  else return "provide a valid url ( episode or anime )";
}

function getLinks(dom, quality) {
  if (quality === "1080")
    return dom.window.document.querySelector(".dw-online a[href$=download_o]")
      .href;
  if (quality === "720")
    return dom.window.document.querySelector(".dw-online a[href$=download_h]")
      .href;
  if (quality === "480")
    return dom.window.document.querySelector(".dw-online a[href$=download_n]")
      .href;
  if (quality === "360")
    return dom.window.document.querySelector(".dw-online a[href$=download_l]")
      .href;
}

function anLinks(dom) {
  const eps = [];
  const nodeList = dom.window.document.querySelectorAll(
    ".episodes-card-title a[href^='https://ww.anime4up.com/episode/']"
  );
  nodeList.forEach((el) => {
    eps.push(el.href);
  });
  return eps;
}
function getDownLink(url) {
  var config = {
    method: "get",
    url: url,
    headers: {
      referer: "https://ww.anime4up.com/",
      responseType: "stream",
    },
    maxContentLength: 1,
  };

  const epHtml = axios(config).catch(function (error) {
    return error.request.res.responseUrl;
  });
  return epHtml;
}

async function anScraper(dom, quality) {
  const animeEps = anLinks(dom);
  const downLinks = [];
  for (let i = 0; i < animeEps.length; i++) {
    const html = await axios.get(animeEps[i]);
    const newDom = new JSDOM(html.data);
    console.log(
      `Working on Ep ${i + 1} , Eps Left ${animeEps.length - (i + 1)}`
    );
    let one = await getLinks(newDom, quality);
    let two = await getDownLink(one);
    downLinks.push(two);
  }

  return downLinks;
}

module.exports = {
  urlType,
  getLinks,
  anLinks,
  getDownLink,
  anScraper,
};
