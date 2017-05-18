/*### Задача 2
Модифицируйте код предыдущей задачи. Добавьте React компонент,
содержащий поле ввода и кнопку Search. При нажатии на кнопку,  видимыми пользователю должны быть только элементы списка,
соответствующие значению поля ввода.*/
    var React = require('react');
var ReactDOM = require('react-dom'); 

// загрузка компонентов маршрутизации react-router
var router = require('react-router'); 

var Router = router.Router; 
var Route = router.Route; 
var Link = router.Link; 
var IndexRoute = router.IndexRoute; 
var hashHistory = router.hashHistory; 

// загрузка модулей с React компонентами 
var App = require('./pages/app.jsx');  
var Edit = require('./pages/edit.jsx'); 

// конфигурация маршрутизации 
ReactDOM.render(<Router history={hashHistory}>
    <Route path="/">
        <IndexRoute component={App} />
        <Route path="edit" component={Edit}/>
    </Route>
</Router>, document.getElementById('app'))