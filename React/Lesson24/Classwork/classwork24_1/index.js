/*### Задача 1
Создайте 2 файла с React компонентами, содержащими текст ‘View 1’ и ‘View2’. Создайте файл index.js,
    в котором выполните настройку маршрутизации для переключения между путями “/view1” и “/view2”.*/
var React = require('react');
var ReactDOM = require('react-dom');


var router = require('react-router');

var Router = router.Router;
var Route = router.Route;
var Link = router.Link;
var IndexRoute = router.IndexRoute;
var hashHistory = router.hashHistory;


var View1 = require('./views/view1.jsx');
var View2 = require('./views/view2.jsx');



class App extends React.Component {
    render() {
        return (
            <div>
                <div className="text-center">
                    <h1>Menu</h1>

                       <Link to="/view1"><button className="btn btn-lg btn-primary">View 1</button></Link>
                        <Link to="/view2"><button className="btn btn-lg btn-primary">View 2</button></Link>

                </div>
                <div className="text-center">{this.props.children}</div>
            </div>
        )}
}




ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>

            <Route path="view1" component={View1} />
            <Route path="view2" component={View2} />
        </Route>
    </Router>, document.getElementById('root'));