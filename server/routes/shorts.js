const express = require("express");
const shorts = express();

const URLS = {
  shorty1: "https://www.google.com/",
};

shorts.get("/:shorturl", (req, res) => {
  res.redirect(URLS[req.params.shorturl]);
});

shorts.post("/shorten", (req, res) => {
  console.log(req.body);
  res.send("Recieved Url");
});

module.exports = shorts;
