const browse = require("./browse");
const { getTweetUrl, getUserUrl } = require("./urlBuilders");
const { getTweetHandleHtml, getUserHandleHtml } = require("./htmlHandlers");

const getTweet = async (tweetId) => {
  return await browse(getTweetUrl(tweetId), getTweetHandleHtml);
};

const getUser = async (username) => {
  return await browse(getUserUrl(username), getUserHandleHtml);
};

module.exports = { getTweet, getUser };
