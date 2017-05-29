/*### Задача 2
Модифицируйте код предыдущей задачи таким образом, чтобы список заданий(todo List) загружался асинхронно.*/
    var React = require('react');
var ReactDOM = require('react-dom');  

// Provider
var Provider = require('react-redux').Provider;
import { createStore, applyMiddleware } from 'redux'
import todoApp from './reducers/todos.js'
import {Init} from './actions/index.js'
 import App from './components/app.jsx';
import Home from './containers/Home.js';
import Edit from './containers/EditCont.js';
import About from './containers/AboutCont.js';
import thunkMiddleware from 'redux-thunk'
import {Router, Route, IndexRoute, hashHistory, Redirect} from 'react-router';

const store = createStore(todoApp,applyMiddleware(thunkMiddleware));
store.dispatch(Init());

// Для совместного использования React и Redux следует подуючить спецальный компонент react-redux Provider. 
// Это сделает экземпляр хранилища доступным для всех компонентов, которые располагаются в компоненте Provider. 
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Home} />
                <Route path="edit" component={Edit} />
                <Route path="about" component={About} />
                <Redirect from="*" to="/" />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);