const puppeteer = require("puppeteer");
const config = require("../config");

/** Opens Twitter, gets data, closes browser and returns */
const browse = async (goto, handleLoadedHtmlStr) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setUserAgent(config.userAgent);

  // navigate to goto and wait for page js to load
  await page.goto(goto, { waitUntil: "networkidle2" });

  // save a local screenshot for debugging, if enabled
  if (config.screenshotPreviewEnabled) {
    // path relative to index.js
    const path = ["./screenshots", new Date().getTime() + "_preview.png"].join(
      "/"
    );
    await page.screenshot({ path });
  }

  const htmlStr = await page.content();

  //  close the browser
  await browser.close();

  return handleLoadedHtmlStr(htmlStr);
};

module.exports = browse;
