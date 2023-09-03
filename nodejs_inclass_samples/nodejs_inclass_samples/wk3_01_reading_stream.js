/*
	wk3_01_reading_stream.js
*/
var fs = require('fs');
var my_data = '';

// create a readable stream
var readerStream = fs.createReadStream('./hw1_test.txt');

// set the encoding to be utf8
readerStream.setEncoding('UTF8');

// handle stream events - data, end, error events.
readerStream.on('data', function(chunk) {
	my_data += chunk;
});

readerStream.on('end', function() {
	console.log(my_data);
});

readerStream.on('error', function(err) {
	console.log(err.stack);
});

console.log('Program Ended.');