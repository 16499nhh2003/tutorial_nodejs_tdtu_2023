/*
	In nodejs_workspace/myapp/ folder
	app2_1.js for week04.

To call from browser: http://localhost:3000/

/
/admin
/admin/new
/admin/new/baby 
will all display Hello world because it is a middleware mount to '/'

*/

var express = require('express');
var app = express();

// this middleware end the req/res cycle by using res.send(), therefore will not exec get route.
// if this middleware dont end the req/res cycle, then the next route is ok to process.
app.use(function(req, res, next) {
	res.send('Hello world');

// use the following statements instead will display 'Welcome'
//	console.log('Time: %d', Date.now());
//	next();

});


// Request will never reach this route
app.get('/', function(req, res) {
	res.send('Welcome');
});

app.listen(3000, function () {
	console.log('app.js listening to http://127.0.0.1:3000/ or http://localhost:3000/');
});

console.log('Program End.');