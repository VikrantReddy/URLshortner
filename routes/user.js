const express = require("express");
const user = express();

user.get("/", (req, res) => {
  res.send("hello world");
});

module.exports = user;
