const express = require("express");
const app = express(); //function that represent express module
var cors = require("cors");

const bodyParser = require("body-parser");
app.use(bodyParser.text());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/home", function (req, res) {
  res.send(images);
});

app.listen(3000, function () {
  console.log("Server started at port 3000");
});
