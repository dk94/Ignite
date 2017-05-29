/**
 * Created by Dima on 28.05.2017.
 */

/*

Задача 1
Создайте EventEmitter, который каждую секунду будет генерировать событие 'tick'.
Создайте функцию-обработчик события 'tick', которая будет выводить в консоль количество секунд, прошедшее со времени генерации
первого события 'Tick'. */

const events = require('events');

// создание экземпляра EventEmitter
const emitter = new events.EventEmitter;

var counter=0;

emitter.on('tick',function(){
    console.log(++counter);
})


setInterval(function(){
    emitter.emit('tick');
},1000)
