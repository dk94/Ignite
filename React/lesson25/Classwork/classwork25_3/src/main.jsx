/*### Задача 3
Создайте страницу-калькулятор: 2 поля ввода и 4 кнопки (*, /, +. -),
выполняющие соответствующиематематические операции над числами, записанные в поля ввода.*/
    var React = require('react');
var ReactDOM = require('react-dom'); 

var App = require('./pages/app.jsx'); 

ReactDOM.render(<App/>, document.getElementById('app')); 