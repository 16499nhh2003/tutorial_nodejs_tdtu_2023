/*
	wk4_01_http_server.js
	
	This server will display the content of html file which
	will send to the browser.
	Clients can be from the web or from http_client.
*/

// http module is required to create a web server
var http = require('http');

// fs module is required to read file from file system
var fs = require('fs');

// url module is required to parse the URL passed to server
var url = require('url');

// create the server
http.createServer(function (request, response) {
	// parse the pathname containing file name
	var pathname = url.parse(request.url).pathname;
	// print the name of the file
	console.log('Request for ' + pathname + ' received.');
	// read the requested file content from file system
	fs.readFile(pathname.substr(1), function (err, data) {
		if (err) {
			console.log(err.stack);
			// HTTP status: 404 : NOT FOUND
			response.writeHead(404, {'Content-Type' : 'text/html'});
		} else {
			// Page found
			// HTTP status: 200 : OK
			response.writeHead(200, {'Content-Type' : 'text/html'});
			// write the content of the file to response body
			response.write(data.toString());
		}
		// send the response body
		response.end();
	});
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/wk4_01_test.html');

console.log('Server Program Ended.');