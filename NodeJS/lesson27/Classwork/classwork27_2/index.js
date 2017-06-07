/**
 ###Задача 2
 Напишите код, который загрузит встроеннный модуль NodeJS events.

 */
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log('an event occurred!');
});
myEmitter.emit('event');

