/*###Задача 1
Создайте приложение usersList, которое состоит из 2х компонентов: список элементов массива
users в виде таблицы и кнопка для добавления новых пользователей в список. Для сборки приложения используйте Webpack.*/
    var ReactDOM= require('react-dom');
var React =require('react');



var Table=require('./comps/Table.jsx');


ReactDOM.render(<Table/>,document.getElementById('root'));



