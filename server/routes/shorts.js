const express = require("express");
const shorts = express();

shorts.get("/", (req, res) => {
  res.send("Hello world");
});

shorts.post("/shorten", (req, res) => {
  console.log(req.body);
  res.send("Recieved Url");
});

module.exports = shorts;
