/*
 ### Задача 3
 Модицифицируйте код предыдущей задачи. Реализуйте следующее:
 * При клике по каждому элементу списка происходит перенаправление на страницу “/tableView/:id” или “/listView/:id”,
 в зависимости от текущего пути приложения, где id – соответствующее свойтво id элемента списка или таблицы, по которому
 кликнул пользователь
 * На странице, на которую будет происходить перенаправление, должна отображаться инфомация об элементе массива users,
 id которого был передан в поисковой строке. Реализуйте передачу этой информации через query параметры.*/



import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var router=require('react-router');
var applyRouterMiddleware=router.applyRouterMiddleware;
var Router=router.Router;
var Route=router.Route;
var Link=router.Link;
var IndexRoute=router.IndexRoute;
var hashHistory=router.hashHistory;
import {useTransitions, withTransition} from 'react-router-transitions';
import infoView from "./infoView.js"
var listView=require("./listView.jsx");
var TableView=require("./TableView.jsx");



var users = [
    {first_name:"Matthew",last_name:"Phillips",email:"mphillips0@myspace.com",gender:"Male",ip_address:"14.241.172.154", id:23468},
    {first_name:"Larry",last_name:"Weaver",email:"lweaver1@slideshare.net",gender:"Male",ip_address:"126.139.9.128", id:89078},
    {first_name:"Barbara",last_name:"Tucker",email:"btucker2@cbc.ca",gender:"Female",ip_address:"92.195.229.16", id: 56435},
    {first_name:"Jonathan",last_name:"Cook",email:"jcook3@fc2.com",gender:"Male",ip_address:"187.79.225.71", id:78908},
    {first_name:"Jean",last_name:"Flores",email:"jflores4@last.fm",gender:"Female",ip_address:"222.197.158.249, id:67653"},
    {first_name:"Kimberly",last_name:"Nelson",email:"knelson5@nifty.com",gender:"Female",ip_address:"111.174.89.57", id:83425},
    {first_name:"Willie",last_name:"Banks",email:"wbanks6@abc.net.au",gender:"Male",ip_address:"97.0.19.154", id:99873},
    {first_name:"Michael",last_name:"King",email:"mking7@w3.org",gender:"Male",ip_address:"149.114.62.6", id: 34239}]


class App extends React.Component{


    render(){

        return(

            <div className="text-center">
                <h1>Menu</h1>
                <Link to="/listView"><button className="btn btn-lg btn-success">listView</button></Link>
                <Link to="/TableView"><button className="btn btn-lg btn-success">TableView</button></Link>
                <ReactCSSTransitionGroup
                    component="div"
                    className="transition-group"
                    transitionName="page"
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1000}
                >

                    {React.cloneElement(this.props.children, {
                        key: Math.random()
                    })}
                </ReactCSSTransitionGroup>

            </div>

        )
    }

}



ReactDOM.render(
    <Router history={hashHistory}>

        <Route path="/" component={App}>
            <IndexRoute component={listView} data={users}/>
            <Route path="listView" component={listView}  data={users}/>
            <Route path="TableView" component={TableView}  data={users}/>
            <Route path="view1/:id" component={infoView} />
            <Route path="view2/:id" component={infoView} />
        </Route>
    </Router>
    ,document.getElementById('root'));



