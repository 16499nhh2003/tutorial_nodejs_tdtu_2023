/*
	In nodejs_workspace/myapp/ folder
	app2.js for week04.

To call from browser: http://localhost:3000/admin/new

*/

var express = require('express');
var app = express();

app.use('/admin', function(req, res, next) {
	// GET http://localhost/admin/new
	console.log(req.originalUrl); // '/admin/new'
	console.log(req.baseUrl); // '/admin'
	console.log(req.path);  // '/new'
	next();
});


app.get('/admin', function(req, res) {
	res.send('/admin req - get');
});

app.get('/admin/new', function (req, res) {
	res.send('Hello World! get method');
});

app.get('/admin/new/baby', function (req, res) {
	res.send('/admin/new/baby! get method');
});

app.listen(3000, function () {
	console.log('app.js listening to http://127.0.0.1:3000/admin/new or http://localhost:3000/admin/new');
});

console.log('Program End.');