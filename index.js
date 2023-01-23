const { getTweet, getUser } = require("./lib/opHandlers");

const TEST_TWEET = "1617308934465024001";
const TEST_USER = "clairefroe";

const run = async () => {
  // start timer
  console.time("done");
  try {
    console.log("fetching...");

    const res = await getUser(TEST_USER);
    // const res = await getTweet(TEST_TWEET);

    // TODO: edit this to do something with response
    console.log(res);
  } catch (e) {
    console.log("Sorry :( Something went wrong with the request.", e);
  } finally {
    console.timeEnd("done");
  }
};

run();
