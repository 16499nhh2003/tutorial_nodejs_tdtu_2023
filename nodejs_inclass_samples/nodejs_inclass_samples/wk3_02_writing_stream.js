/*
	wk3_02_writing_stream.js
*/
var fs = require('fs');
var my_data = 'Output to a file\nHello World.';

// create a writable stream
var writeStream = fs.createWriteStream('./wk3_02_output.txt');

// write the data to stream
// set the encoding to be utf8
writeStream.write(my_data, 'UTF8');

// mark the end of file
writeStream.end();

// handle stream events - finish, error events.
writeStream.on('finish', function(chunk) {
	console.log('write completed.');
});

writeStream.on('error', function(err) {
	console.log(err.stack);
});

console.log('Program Ended.');