const express = require("express");
const shorts = express();

shorts.get("/", (req, res) => {
  res.send("hello world");
});

module.exports = shorts;
