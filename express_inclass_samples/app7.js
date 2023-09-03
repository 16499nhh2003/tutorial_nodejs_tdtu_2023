/*
	In nodejs_workspace/myapp/ folder
	app7.js for week04.

To call from browser: http://localhost:3000/foo
or   http://localhost:3000/foo/user

If you use http://localhost:3000/
No GET and no output to console.

router.use([path],[function, ...] function)

*/

var express = require('express');
var app = express();
var router = express.Router();

// always invoked
// all requests to this router will first hit this middleware
router.use(function(req, res, next) {
	console.log('%s %s %s', req.method, req.url, req.path);
	next();
});


// this will only be invoked if the path starts with /user from the mount point
router.use('/user', function (req, res, next) {
	console.log('call router with /user');
	next();
});

// always invoked
router.use(function (req, res) {
	console.log('always call this router');
	res.end('Hello World!');
});

app.use('/foo', router);

app.listen(3000, function () {
	console.log('app.js listening to http://127.0.0.1:3000/ or http://localhost:3000/');
});

console.log('Program End.');