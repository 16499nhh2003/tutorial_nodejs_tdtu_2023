/*
	hw2_01_error.js

 err.stack property is a string describing
 the point in the code at which the error was
 instantiated. 

*/

var fs = require("fs");
fs.readFile("./wrong_file.txt", function(err, data) {
	if (err) {
		console.error(err);
		return;
	}
	console.log(data.toString());
});

console.log('Program Ended.');
