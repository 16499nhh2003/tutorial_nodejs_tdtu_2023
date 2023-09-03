/*
	In nodejs_workspace/myapp/ folder
	app8.js for week04.

To call from browser: http://localhost:3000/user/0
or  http://localhost:3000/user/12

NOTE: To skip the rest of the middleware functions from a router middleware stack, 
call next('route') to pass control to the next route. 

NOTE: next('route') will work only in middleware functions that were loaded by using the app.METHOD() or router.METHOD() functions.

*/

var express = require('express');
var app = express();
var router = express.Router();

// always execute
// a middlewre function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
	var d = new Date();
	console.log('Time: ', d.toString());
	next();
});

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', function(req, res, next) {
	console.log('Request URL: ', req.originalUrl);
	next();
}, function (req, res, next) {
	console.log('Request Type: ', req.method);
	next();
});

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', function (req, res, next) {
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
router.get('/user/:id', function (req, res, next) {
	console.log(req.params.id);
	res.end('special');
});

// mount the router on the app
app.use('/', router);

app.listen(3000, function () {
	console.log('app.js listening to http://127.0.0.1:3000/ or http://localhost:3000/');
});

console.log('Program End.');