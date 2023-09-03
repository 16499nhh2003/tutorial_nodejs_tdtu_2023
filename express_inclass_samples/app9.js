/*
	In nodejs_workspace/myapp/ folder
	app9.js for week04.

To call from browser: http://localhost:3000/
	http://localhost:3000/images/ucb_seal.png
	(the file is coming from /public/images/ucb_seal.png)

if use app.use('/static', express.static('public'));
Then http://localhost:3000/static/images/ucb_seal.png

*/

var express = require('express');
var app = express();

app.use(express.static('public'));

// To create a virtual path prefix - '/static' (where the path does not actually exist in the file system) 
// for files that are served by the express.static function.
/*
app.use('/static', express.static('public'));
or
app.use('/static', express.static(__dirname + '/public'));
*/

app.get('/', function (req, res) {
	res.send('Hello there!');
});


app.listen(3000, function () {
	console.log('app.js listening to http://127.0.0.1:3000/ or http://localhost:3000/');
	console.log('__dirname: ' + __dirname);
});

console.log('Program End.');