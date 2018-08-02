
var express = require("express");
var morgan = require("morgan");
var data = require("./data.json");

var app = express();

app.use(express.static("client"));

app.use(morgan("dev"));

app.get("/", function(req, res) {
     res.send("index.html")
});

app.get("/data", function(req, res) {
    res.send(data);
});

module.exports = app;
