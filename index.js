const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Backend working!</h1>");
});

function start() {
  app.listen(PORT, () => {
    console.log("Server has been started on port:", PORT);
  });
}

start();
