const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hell Yeah!!");
  //   res.sendFile("hello-world.html", { root: "./" });
});

app.get("/api", cors(), (req, res) => {
  res.send({
    foo: ["Bar 1", "Bar 2", "Bar 3"],
    john: ["Doe 1", "doe 2"],
    lorem: ["ipsum 1", "ipsum 2"],
    hello: ["world 1", "world 2"],
  });
});

app.listen(3001, () => {
  console.log("App listening on port 3001");
});
