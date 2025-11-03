const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) =>
  res.send("Hello World! I am Edro! Part 2 w with Review"),
);

app.listen(port);
console.log(`App running on http://localhost:${port}`);
