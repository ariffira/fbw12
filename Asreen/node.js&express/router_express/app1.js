
"use strict";
const express = require("express");
const app = express();
const port = process.env.port || 4444;
const router = require("./routes/router1");
router.get("/add-username", (req, res) => {
res.send('Hello from main page')
});

app.listen(port, err => {
  if (err) {
    return console.log("ERROR", err);
  }
  console.log(`Listening on port ${port}`);
});