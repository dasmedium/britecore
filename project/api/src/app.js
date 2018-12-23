var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var cors = require("cors");

var indexRoute = require("./routes/index");
var customersRoute = require("./routes/customers");

var app = express();

//Cors
app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRoute);
app.use("/customers", customersRoute);

module.exports = app;
