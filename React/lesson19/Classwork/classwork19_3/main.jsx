/*### Задача 3
Создайте React компонент,  который принимает два числа в качестве свойств (props). Компонент должен выводить на экран сумму своих свойств*/
import React from 'react';
import ReactDOM from 'react-dom';



var Comp=React.createClass({
    render(){
        return (<h1>{+this.props.prop1+(+this.props.prop2)}</h1>)
    }
})

ReactDOM.render(<Comp prop1="1" prop2="2"/>,document.getElementById('root'));