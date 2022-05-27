const express = require("express");
const shorts = require("./routes/shorts");
const user = require("./routes/user");
const app = express();
const PORT = 3000;

app.set("view engine", "hbs");
app.use("/user", user);
app.use("/shorts", shorts);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
