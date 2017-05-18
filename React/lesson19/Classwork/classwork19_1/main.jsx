/*### Задача 1
Используя JSX, отобразите на странице текст Hello World в теге h1*/

import React from 'react';
import ReactDOM from 'react-dom';




var elem = <h1>Hello world</h1>;
ReactDOM.render(elem, document.getElementById('root'));