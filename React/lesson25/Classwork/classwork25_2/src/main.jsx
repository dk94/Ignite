/*### Задача 2
Используя flux, реализуйте следующее:
    * Создайте страницу-таймер: React компонент, который будет выводить на экран количество секунд, прошедших с момента ее открытия.
* Добавьте на страницу три кнопки: start, stop, reset, выполняющие соответствующие функции*/
var React = require('react');
var ReactDOM = require('react-dom'); 

var App = require('./pages/app.jsx'); 

ReactDOM.render(<App/>, document.getElementById('app')); 