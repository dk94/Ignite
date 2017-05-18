/*### Задача 3
Модифицируйте код предыдущей задачи так, чтобы загрузка массива users происходила асинхронно.
    Файл с данными в формате JSON находится в папке Classwork.*/
var React = require('react');
var ReactDOM = require('react-dom');  

// Provider
var Provider = require('react-redux').Provider;  


var demoReducer = require('./reducers/demoReducer'); 
var App = require('./components/app.jsx'); 
import {fetchData} from "./actions/index.js"
import {showText} from "./actions/index.js"
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
const store = createStore(demoReducer, applyMiddleware(thunkMiddleware));




// Для совместного использования React и Redux следует подуючить спецальный компонент react-redux Provider. 
// Это сделает экземпляр хранилища доступным для всех компонентов, которые располагаются в компоненте Provider. 
ReactDOM.render(
      <Provider store={store}>
           <App />
      </Provider>, 
  document.getElementById('root')
)

