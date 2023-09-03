/*
	wk3_08_os.js
*/

var os = require("os");

// tmpdir()
console.log("tmpdir : " + os.tmpdir());

// hostname()
console.log("hostname : " + os.hostname());

// type()
console.log("type : " + os.type());

// platform()
console.log("platform : " + os.platform());

// arch()
console.log("arch : " + os.arch());

// release()
console.log("release : " + os.release());

// totalmem()
console.log("totalmem : " + os.totalmem());

// freemem()
console.log("freemem : " + os.freemem());

// cpus()
console.log("cpus : " + os.cpus());

// EOL property
console.log("EOL : " + os.EOL);

console.log('Program Ended.');