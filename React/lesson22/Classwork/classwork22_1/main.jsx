/*
 ### Задача 1
 Дано следующий объект:
 ```
 let options = {
 title: "Menu",
 width: 100,
 height: 200
 };
 ```
 Используя деструктуризацию, присвойте свойства объекта options переменным с соответствующими именами и выведите их на экран.  */

'use strict';


let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let {title, width, height} = options;

alert(title);
alert(width);
alert(height);
