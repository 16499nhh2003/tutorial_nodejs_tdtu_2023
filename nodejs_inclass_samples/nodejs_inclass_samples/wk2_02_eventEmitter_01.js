/*
	wk2_02_eventEmitter_01.js
*/
var events = require('events');
var eventEmitter = new events.EventEmitter();

var connected = function connected() {
	console.log('connection successful.');

	eventEmitter.emit('data_receive');
}

eventEmitter.on('connection', connected);
eventEmitter.on('data_receive', function() {
	console.log('data received successful.');
});

eventEmitter.emit('connection');

console.log('Program Ended.');

console.log(eventEmitter.listeners('connection'));

console.log(eventEmitter.listeners('data_receive'));