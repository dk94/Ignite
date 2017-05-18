/*### Задача 2
 Используя Redux, реализуйте следующее:
 * Создайте React компонент, который содержит кнопку
 * Создайте его дочерний компонент, который принимает в качестве свойства
 массив users и отображает его в виде списка при клике по кнопке первого компонента*/
var React = require('react');
var ReactDOM = require('react-dom');  

// Provider
var Provider = require('react-redux').Provider;  
var createStore = require('redux').createStore;  

var demoReducer = require('./reducers/demoReducer'); 
var App = require('./components/app.jsx'); 

const store = createStore(demoReducer);  

// Для совместного использования React и Redux следует подуючить спецальный компонент react-redux Provider. 
// Это сделает экземпляр хранилища доступным для всех компонентов, которые располагаются в компоненте Provider. 
ReactDOM.render(
      <Provider store={store}>
           <App />
      </Provider>, 
  document.getElementById('root')
)  
