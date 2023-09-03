/*
	In nodejs_workspace/myapp/ folder
	app5.js for week04.

To call from browser: http://localhost:3000/user/0
or  http://localhost:3000/user/12

NOTE: To skip the rest of the middleware functions from a router middleware stack, 
call next('route') to pass control to the next route. 

NOTE: next('route') will work only in middleware functions that were loaded by using the app.METHOD() or router.METHOD() functions.

*/

var express = require('express');
var app = express();

app.get('/user/:id', function (req, res, next) {
	// if the user ID is 0, skip to the next route
	if (req.params.id == 0) {
		next('route');
	} else {
		next();
	}
}, function (req, res, next) {
	// render a regular page
	res.end('regular');
});

// handler for the /user/:id path, which renders a special page.
app.get('/user/:id', function (req, res, next) {
	res.end('special');
});

app.listen(3000, function () {
	console.log('app.js listening to http://127.0.0.1:3000/user/0 or http://localhost:3000/user/12');
});

console.log('Program End.');