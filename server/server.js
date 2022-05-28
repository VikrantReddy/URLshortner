const express = require("express");
const shorts = require("./routes/shorts");
const user = require("./routes/user");
const app = express();
const PORT = 8000;
const path = require("path");

app.use((req, res, next) => {
  console.log("Recieved Request: " + req.url);
  next();
});

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.use("/user", user);
app.use("/shorts", shorts);

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
