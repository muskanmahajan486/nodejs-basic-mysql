
const express = require('express');
const bodyParser = require('body-parser');
const mysqlConnection = require('./connection')
const peopleRoute = require("./routes/people");

var app = express();
app.use(bodyParser.json());
app.use("/people",peopleRoute);



app.listen(3000);
