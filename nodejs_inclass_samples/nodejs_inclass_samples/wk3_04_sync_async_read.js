/*
	wk3_04_sync_async_read.js
*/
var fs = require('fs');

// Asynchronous read
fs.readFile('./hw1_test.txt', function (err, data) {
	if (err) return console.error(err);
	console.log('Asynchronous read: ' + data.toString());
});

// Synchronous read
var data = fs.readFileSync('./hw1_test.txt');
console.log('Synchronous read: ' + data.toString());

console.log('Program Ended.');