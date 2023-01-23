const getTweetUrl = (tweetId) => {
  const BASE_URL = "https://twitter.com/i/web/status/";
  return [BASE_URL, tweetId].join("");
};

const getUserUrl = (username) => {
  const BASE_URL = "https://twitter.com/";
  return [BASE_URL, username].join("");
};

module.exports = { getTweetUrl, getUserUrl };
