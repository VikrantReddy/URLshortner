const express = require("express");
const user = express();

user.get("/", (req, res) => {
  res.send("Hello User");
});

user.post("/login", (req, res) => {
  console.log(req.body);
  res.send("Recieved Credentials");
});

module.exports = user;
