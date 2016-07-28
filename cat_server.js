var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cats');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

var cats = require('./routes/cat_routes.js')(app);

var server = app.listen(3000, function() {
	console.log('Server running at http://120.0.0.1:3000/');
});