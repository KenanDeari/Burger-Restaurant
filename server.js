var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var burger = require('./controllers/burgersController.js')

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use('/', burger)

app.listen(PORT, function () {
  // Log when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
