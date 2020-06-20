// jshint esversion: 6

const express = require("express");
// const bodyParser = require("body-parser");
// const request = require("request");
// const https = require("https");

const app = express();

app.use(express.static("assets"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/know-more.html", function (req, res) {
  res.sendFile(__dirname + "/know-more.html");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running at port 3000");
});
