/*
	In nodejs_workspace/myapp/ folder
	app3.js for week04.

To call from browser: http://localhost:3000/

NOTE: the following code loads the myLogger middleware function 
	before the route to the root path (/).

NOTE: Every time the app receives a request, 
	it prints the message “LOGGED” to the terminal.

NOTE: The order of middleware loading is important: 
	middleware functions that are loaded first are also executed first.

NOTE: If myLogger is loaded after the route to the root path, 
	the request never reaches it and the app doesn’t print “LOGGED”, 
	because the route handler of the root path terminates the request-response cycle.

NOTE: The middleware function myLogger simply prints a message, 
	then passes on the request to the next middleware function in the stack by calling the next() function.

*/

var express = require('express');
var app = express();

var myLogger = function (req, res, next) {
	console.log('LOGGED'); 
	next();
};

/* did not provide the route information, therefore default to / */
app.use(myLogger);

/* this middleware is ok to output to browser because myLogger function
	send output to console.log(), if use res.send(), then this 
	middleware cannot send data to res.send() anymore.
*/
app.get('/', function (req, res) {
	res.send('Hello World! called middleware myLogger');
});

app.listen(3000, function () {
	console.log('app.js listening to http://127.0.0.1:3000/ or http://localhost:3000/');
});

console.log('Program End.');