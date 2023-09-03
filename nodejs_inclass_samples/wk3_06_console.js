/*
	wk3_06_console.js
*/
var fs = require('fs');

// console.log take multiple arguments
console.log("Console Module %s, use %d process", "take multiple arguments", 2);

// Asynchronous read
// console.time() and console.timeEnd() to check the performance
console.time("check asynchronous");
fs.readFile('./hw1_test.txt', function (err, data) {
	if (err) return console.error(err);
	console.log('Asynchronous read: ' + data.toString());
});
console.timeEnd("check asynchronous");

console.info("Console.info");
console.error("Console.error");
console.warn("Console.warn");

// Synchronous read
console.time("check synchronous");

for (var i=0; i < 100000; i++) {

}

setTimeout(console.log("setTimeout to 2 sec..."), 2000);
var data = fs.readFileSync('./hw1_test.txt');
console.log('Synchronous read: ' + data.toString());
console.timeEnd("check synchronous");

console.log('Program Ended.');