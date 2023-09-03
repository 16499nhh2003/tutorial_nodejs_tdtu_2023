/*
	wk2_02_eventEmitter_02.js
*/
var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
var listener1 = function listener1() {
	console.log('listener1 executed.');
}
// add/bind listener1 to connection event
eventEmitter.addListener('connection', listener1);

// display array of listener for connection event
console.log(eventEmitter.listeners('connection'));

// listener #2
var listener2 = function listener2() {
	console.log('listener2 executed.');
}

// when connection event happen, add/bin listener2 to connection event
eventEmitter.on('connection', listener2);

// display array of listeners for connection event
console.log(eventEmitter.listeners('connection'));

// fire the connection event
eventEmitter.emit('connection');

// remove the binding of listener2 from connection event
eventEmitter.removeListener('connection', listener2);
console.log('listener2 will not listen now.');

console.log(eventEmitter.listeners('connection'));

// fire the connection event
eventEmitter.emit('connection');

console.log('Program Ended.');
