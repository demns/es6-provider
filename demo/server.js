var express = require('express');
var es6functions = require('../middleware/es6-functions.js').es6functions;

var app = express();
app.use(es6functions);

var server = app.listen(3000);