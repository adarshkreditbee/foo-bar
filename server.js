const express = require("express");
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hell Yeah!!");
//   res.sendFile("hello-world.html", { root: "./" });
});

app.get("/api", cors(), (req, res) => {
  res.send({ foo: "Bar", john: "doe", lorem: "ipsum", hello: "world" });
});

app.listen(3001, () => {
  console.log("App listening on port 3001");
});
