/*
	In nodejs_workspace/myapp/ folder
	app4.js for week04.

To call from browser: http://localhost:3000/

NOTE: The app now uses the requestTime middleware function. 
Also, the callback function of the root path route uses the property 
that the middleware function adds to req (the request object).

NOTE: When you make a request to the root of the app, 
the app now displays the timestamp of your request in the browser.

*/

var express = require('express');
var app = express();

/* create requestTime property in req object 
*/
var requestTime = function (req, res, next) {
	var d = new Date();
	req.requestTime = d.toString();
	next();
};

app.use(requestTime);

/* use req.requestTime property here */
app.get('/', function (req, res) {
	var responseText = 'Hello World! called middleware requestTime <br>';
	responseText += '<small>Requested at: ' + req.requestTime + '</small>';
	res.send(responseText);
});

app.listen(3000, function () {
	console.log('app.js listening to http://127.0.0.1:3000/ or http://localhost:3000/');
});

console.log('Program End.');