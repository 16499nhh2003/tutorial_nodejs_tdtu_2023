/*
	wk3_05_fs.js
*/
var fs = require('fs');

/*
	1. buffer Module can be imported using the following:
		var buffer = require('buffer');
	2. Buffer class is a global class and can be accessed in 
	application without importing buffer moduel.
		var buffer = new Buffer(size);
*/
var buffer = new Buffer(1024);

// Function openFile(fn, op)
// fd is an integer file descriptor
function openFile(fn, op) {
	console.log('\nOpen File');
	fs.open(fn, op, function (err, fd) {
		if (err) console.log(err.stack);
		console.log('File opened');
	});
}

// Function getStats(fn)
function getStats(fn) {
	console.log('\nGetting File Info');
	fs.stat(fn, function (err, stats) {
		if (err) console.log(err.stack);
		console.log(stats);
		console.log('isFile ? ' + stats.isFile());
		console.log('isDirectory ? ' + stats.isDirectory());
	});
}

// Function writeFile(fn, op)
function writeFile(fn, op) {
	console.log('\nWrite File');
	fs.open(fn, op, function (err, fd) {
		var data = "Line one: Hello World!\n";
		data += "Line two: Learning Node.js is fun!\n";
		data += "Line three: End of file\n";
		buffer.write(data);

		fs.write(fd, buffer,0,data.length,0,function (err, bytes) {
			if (err) console.log(err.stack);
			console.log(bytes + ' written.');
		});
	});
}

// Function readFile(fn, op)
function readFile(fn, op) {
	console.log('\nRead File');
	fs.open(fn, op, function (err, fd) {
		if (err) console.log(err.stack);
		fs.read(fd, buffer,0,buffer.length,0,function (err, bytes) {
			if (err) console.log(err.stack);
			console.log(bytes + ' read.');
			if (bytes > 0) {
				console.log(buffer.slice(0,bytes).toString());
			}
		});
	});
}

// Function closeFile(fn, op)
function closeFile(fn, op) {
	console.log('\nClose File');
	fs.open(fn, op, function (err, fd) {
		if (err) console.log(err.stack);
		fs.close(fd, function() {
			if (err) console.log(err.stack);
			console.log('File Closed.');
		});
	});
}

// Function truncateFile(fn, op)
function truncateFile(fn, op) {
	console.log('\nTruncate File');
	fs.open(fn, op, function (err, fd) {
		fs.ftruncate(fd, function(err) {
			if (err) console.log(err.stack);
			console.log('File truncated.');
		});
	});
}

// Function deleteFile(fn, op)
function deleteFile(fn, op) {
	console.log('\nDelete File');
	fs.open(fn, op, function (err, fd) {
		fs.unlink(fn, function (err) {
			if (err) console.log(err.stack);
			console.log('File deleted.');
		});
	});
}

// Function createDirectory(dn)
function createDirectory(dn) {
	console.log('\nCreate Directory');
	fs.mkdir(dn, function (err) {
		if (err) {
			console.log('Error creating directory.');
			if (err.code === 'EEXIST') {
				console.log('Directory Exist.');
			} else {
				console.log(err.stack);
			}
		} else {
			console.log('Directory Created.');
		}
	});
}

// Function removeDirectory(dn)
function removeDirectory(dn) {
	console.log('\nRemove Directory');
	fs.rmdir(dn, function (err) {
		if (err) {
			console.log('Directory do not exist.');
		} else {
			console.log('Directory removed.');
		}
	});
}



// Call the functions here:
openFile('./hw1_test.txt', 'r+');

writeFile('./wk3_01_output.txt', 'w+');

readFile('./wk3_01_output.txt', 'r');

closeFile('./hw1_test.txt', 'r');

getStats('./hw1_test.txt');

truncateFile('./wk3_01_output.txt', 'r+');

deleteFile('./wk3_01_output.txt', 'r+');

createDirectory('./test');

removeDirectory('./test');



console.log('Program Ended.');