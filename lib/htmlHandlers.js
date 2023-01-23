const { parse } = require("node-html-parser");
const { buildResponse } = require("./buildResponse");
const { getMissing } = require("./util");

const buildMissingMsg = (missing) =>
  `Failed to find data for propertie(s) '${missing}'. Twitter may have changed it's UI - time to debug!`;

const getTweetHandleHtml = (htmlStr) => {
  const html = parse(htmlStr);

  /** Selectors */
  const text = html.querySelector("div[data-testid='tweetText']").innerText;
  const postedAt = html.querySelector("time").attributes.datetime;
  const username = html
    .querySelector("div[data-testid='User-Names'] a")
    .attributes.href.replace("/", "");
  /** End Selectors */

  const data = { text, username, postedAt };

  const required = ["text", "username", "postedAt"];
  const missing = getMissing(data, required);

  if (!missing.length) {
    return buildResponse(data);
  } else {
    return buildResponse(null, buildMissingMsg(missing));
  }
};

const getUserHandleHtml = (htmlStr) => {
  const html = parse(htmlStr);
  href = "/clairefroe/following";

  /** Selectors */
  const username = html
    .querySelector("div[data-testid='UserName'] div:nth-child(2) span")
    .innerText.replace("@", "");
  const bio = html.querySelector(
    "div[data-testid='UserDescription']"
  ).innerText;
  const following = parseInt(
    html.querySelector(`a[href='/${username}/following'] span`).innerText
  );
  const followers = parseInt(
    html.querySelector(`a[href='/${username}/followers'] span`).innerText
  );
  /** End Selectors */

  const data = { username, bio: bio || "<n/a>", following, followers };

  const required = ["username", "following", "followers"];
  const missing = getMissing(data, required);

  if (!missing.length) {
    return buildResponse(data);
  } else {
    return buildResponse(null, buildMissingMsg(missing));
  }
};

module.exports = { getTweetHandleHtml, getUserHandleHtml };
