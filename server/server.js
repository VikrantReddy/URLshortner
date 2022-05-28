const express = require("express");
const shorts = require("./routes/shorts");
const user = require("./routes/user");
const app = express();
const PORT = 8000;

app.set("view engine", "hbs");
app.use(express.json());

app.use((req, res, next) => {
  console.log("Recieved Request: " + req.url);
  next();
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.use("/user", user);
app.use("/shorts", shorts);
