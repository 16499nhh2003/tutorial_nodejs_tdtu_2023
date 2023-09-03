/*
	In nodejs_workspace/myapp/ folder
	app6.js for week04.

To call from browser: http://localhost:3000/user/12

router.use([path],[function, ...] function)
router.param(name, callback)

*/

var express = require('express');
var app = express();
var router = express.Router();

// all requests to this router will first hit this middleware
router.use(function(req, res, next) {
	console.log('%s %s %s', req.method, req.url, req.path);
	next();
});

router.param('id', function (req, res, next, id) {
	console.log('id is: ' + id);
	next();
});

// this will only be invoked if the path starts with /user from the mount point
router.get('/user/:id', function (req, res, next) {
	console.log('although this matches');
	next();
});

router.get('/user/:id', function (req, res) {
	console.log('and this matches too');
	res.end('/user');
});

app.use(router);

app.listen(3000, function () {
	console.log('app.js listening to http://127.0.0.1:3000/ or http://localhost:3000/');
});

console.log('Program End.');