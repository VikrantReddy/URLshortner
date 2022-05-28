const express = require("express");
const shorts = require("./routes/shorts");
const user = require("./routes/user");
const app = express();
const PORT = 8000;

app.set("view engine", "hbs");
app.use(express.json());

app.use("/user", user);
app.use("/shorts", shorts);

app.use((req, res, next) => {
  console.log("Recieved Request: " + req.url);
  next();
});

app.post("/hello", (req, res) => {
  console.log(req.body);
  res.send("Hello World!");
});

app.post("/shorten", (req, res) => {
  console.log(req.body);
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
