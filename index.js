const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.set("view engine", "hbs");
app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${port}`);
});
