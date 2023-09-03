/*
	wk3_03_piping_stream.js
*/
var fs = require('fs');

// create a readable stream
var readerStream = fs.createReadStream('./hw1_test.txt');

// create a writable stream
var writeStream = fs.createWriteStream('./wk3_03_output.txt');

// pipe the read and write operations
// read hw1_test.txt and write data to wk3_03_output.txt
readerStream.pipe(writeStream);

console.log('Program Ended.');