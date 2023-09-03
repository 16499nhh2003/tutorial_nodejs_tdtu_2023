/*
	wk3_07_process.js
*/

// printing to console using stdout property
process.stdout.write("Hello World!" + "\n");

// looking at argv property
process.argv.forEach(function (val, index, array) {
	console.log(index + ': ' + val + " : " + array);
});

// process.argv[]
console.log(process.argv[0]);

// execPath()
console.log(process.execPath);

// print the current working directory
console.log('Current Directory: ' + process.cwd());

// print the node version property
console.log('Current Version: ' + process.version);

// print the platform
console.log('Platform: ' + process.platform);

// process events
process.on("exit", function () {
	console.log("process exit event");
});

process.on("beforeExit", function () {
	console.log("process beforeExit event");
});

console.log('Program Ended.');

// process methods
//process.exit();   // will exec exit event, but not beforeExit event
//process.abort();