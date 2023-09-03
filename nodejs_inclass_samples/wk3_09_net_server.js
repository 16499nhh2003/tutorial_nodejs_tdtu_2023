/*
	wk3_09_net_server.js

c1.pipe(c2); 
is a short form of:
c1.on('data', function(buff) {
	c2.write(buff);
});
i.e. read data from c1 write data to c2
c1.pipe(c1);
i.e. read data and also write data from/to c1

*/

var net = require("net");

var server = net.createServer(function(connection) {
	console.log('Client connected.');
	connection.on('end', function() {
		console.log('Client disconnected.');
	});
	connection.write('Hello World!\n');
	connection.pipe(connection);
// send data back to connection object which is client
});
server.listen(8080, function() {
	console.log('Server is listening.');
});


console.log('Server Program Ended.');