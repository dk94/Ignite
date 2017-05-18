/*
 ### Задача 1
 Создайте React компонент, отображающий кнопку и элемент div.
 Добавьте на страницу тег style с двумя классами – black и red, задающими соответствующий background-color элементу.
 Реализуйте переключение этих классов для элемента div при клике по кнопке. */

import React from 'react';
import ReactDOM from 'react-dom';


var Comp=React.createClass({
    getInitialState(){
    return{
       cls:'black'
    }
},

    handler(){
       var clsCur= this.state.cls=='black'?'red':'black';
        this.setState({cls:clsCur});
    },

    render(){
        return(
            <div className="text-center">
                <div id="test" className={this.state.cls}></div>
                 <button className="btn btn-primary" onClick={this.handler}>Click</button>
            </div>


        )
    }
})


var elem=document.getElementById("root");
ReactDOM.render(<Comp/>,elem);