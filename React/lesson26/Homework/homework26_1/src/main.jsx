/*### Задача 1
Создайте приложение todo List. Реализуйте следующее:
    * Возможность удалять и добавлять элементы в список
* Возможность выбирать режим отображения данных: таблица или список*/
var React = require('react');
var ReactDOM = require('react-dom');  

// Provider
var Provider = require('react-redux').Provider;  
var createStore = require('redux').createStore;  
import todoApp from './reducers/todos.js'

 import App from './containers/AppCont.js';

const store = createStore(todoApp);

// Для совместного использования React и Redux следует подуючить спецальный компонент react-redux Provider. 
// Это сделает экземпляр хранилища доступным для всех компонентов, которые располагаются в компоненте Provider. 
ReactDOM.render(
      <Provider store={store}>
           <App />
      </Provider>, 
  document.getElementById('root')
)  
