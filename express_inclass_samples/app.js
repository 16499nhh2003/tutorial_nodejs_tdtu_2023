/*
	In nodejs_workspace/myapp/ folder
	app.js for week04.

To call from browser: http://localhost:3000/
	http://localhost:3000/user
	http://localhost:3000/random.txt
	http://localhost:3000/abcd  abXYZcd  abRandomcd
	http://localhost:3000/abcd  abbcd  abbbcd...
	http://localhost:3000/acd abcd
	http://localhost:3000/butterfly  dragonfly
	http://localhost:3000/users/34/books/8989
	http://localhost:3000/flights/SFO-LAX
	http://localhost:3000/floats/123.456	

*/

var express = require('express');
var app = express();

/* 	response with Hello World! on the homepage or root route
	http://localhost:3000/  
*/
/* 	app.get('/user'), function (req, res) {
	will response to /user route (http://localhost:3000/user) 
*/

// This route path will match requests to the root route, /
app.get('/', function (req, res) {
	res.send('Hello World! get method');
});

app.post('/', function (req, res) {
	res.send('Hello World! post method');
});

// This route path will match requests to /user
app.all('/user', function (req, res, next) {
	console.log('Accessing /user...');
	res.send('Hello World! /user request...');
	next();
});

// This route path will match requests to /random.text
app.get('/random.txt', function (req, res) {
	res.send('Hello World! get /random.text');
});

// This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.
app.get('/ab*cd', function(req, res) { 
	res.send('ab*cd'); 
});

// This route path will match abcd, abbcd, abbbcd, and so on.
app.get('/ab+cd', function(req, res) { 
	res.send('ab+cd'); 
});

// This route path will match acd and abcd.
app.get('/ab?cd', function(req, res) { 
	res.send('ab?cd'); 
});

// This route path will match butterfly and dragonfly, but not butterflyman, dragonfly man, and so on.
app.get(/.*fly$/, function(req, res) { 
	res.send('/.*fly$/'); 
});

// To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.
app.get('/users/:userId/books/:bookId', function(req, res) { 
	res.send(req.params); 
});

// Since the hyphen (-) and the dot (.) are interpreted literally, they can be used along with route parameters for useful purposes.
app.get('/flights/:from-:to', function(req, res) { 
	res.send(req.params); 
});


app.get('/floats/:digit.:decimal', function(req, res) { 
	res.send(req.params); 
});

app.listen(3000, function () {
	console.log('app.js listening to http://127.0.0.1:3000/ or http://localhost:3000/');
});

console.log('Program End.');