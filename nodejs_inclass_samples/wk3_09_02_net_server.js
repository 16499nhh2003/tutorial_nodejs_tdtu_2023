/*
	wk3_09_02_net_server.js
	Another way to write net.Server object/class
*/

var net = require("net");

var server = net.createServer(function(socket) {
	console.log('Socket Created.');
	socket.end('Socket End.');
});

// don't call server.address() until the 'listenering' event has been emitted.
server.listen(8080, 'localhost', function() {
	var address = server.address();
	console.log('Opened server on: %j', address);
	console.log('Server is listening to 8080.');
});



console.log('Server Program Ended.');