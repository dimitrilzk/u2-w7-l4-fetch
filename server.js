const fantasy = require("./fantasy.json");
const history = require("./history.json");
const horror = require("./horror.json");
const romance = require("./romance.json");
const scifi = require("./scifi.json");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/hello", (req, res) => {
  res.send(">>>>>>>>>>>>>>>> Hello <<<<<<<<<<<<<<<<<<<<<");
});

app.get("/fantasy", (req, res) => {
  res.send(require("./fantasy.json"));
});

app.get("/history", (req, res) => {
  res.send(require("./history.json"));
});

app.get("/horror", (req, res) => {
  res.send(require("./horror.json"));
});

app.get("/romance", (req, res) => {
  res.send(require("./romance.json"));
});

app.get("/scifi", (req, res) => {
  res.send(require("./scifi.json"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
