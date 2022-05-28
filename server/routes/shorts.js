const express = require("express");
const shorts = express();
const makeid = require("../controllers/shorts.controller.js");
const URLS = [
  {
    shorturl: "shorty1",
    original: "https://www.google.com/",
  },
];

shorts.get("/:shorturl", (req, res) => {
  console.log(req.params.shorturl);
  console.log(URLS);
  console.log(
    URLS.filter((el) => {
      return el.shorturl == req.params.shorturl;
    })
  );

  for (item of URLS) {
    if (item.shorturl == req.params.shorturl) {
      return res.redirect(item["original"]);
    }
  }
  res.status(404);
});

shorts.post("/shorten", (req, res) => {
  let shorturl = makeid(7);
  URLS.push({ shorturl: shorturl, original: req.body["url"] });
  console.log(URLS);
  res.send(shorturl);
});

module.exports = shorts;
