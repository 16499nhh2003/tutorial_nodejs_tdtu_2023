/*
	wk3_10_net_client.js
*/

var net = require("net");
/*  use ip address or hostname
var client = net.connect({port: 8080}, '127.0.0.1', function() {
	console.log('Connected to Server.');
});
*/
var client = net.connect({port: 8080}, 'localhost', function() {
	console.log('Connected to Server.');
});

client.on('data', function (data) {
	console.log(data.toString());
	client.end();
});

client.on('end', function () {
	console.log('Disconnected from server.');
});

console.log('Client Program Ended.');