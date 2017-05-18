/*
 ### Задача 1
 Создайте React компонент-счетчик. Он должен отображать на странице две кнопки (+ и -) и элемент h1
 для вывода текущего счета на экран. */

import React from 'react';
import ReactDOM from 'react-dom';


var Comp=React.createClass({
    getInitialState(){
        return{
            count:0
        }
    },



    plusHandler(){
       this.setState({count:this.state.count+1})

    },
    minusHandler(){
        this.setState({count:this.state.count-1})

    },


    render(){
        return(
            <div className="text-center">
                <h2>Counter:</h2>
                <div id="target"><h3>{this.state.count}</h3></div>
                <button className="btn btn-success" onClick={this.plusHandler}>+</button>
                <button className="btn btn-danger" onClick={this.minusHandler}>-</button>

            </div>


        )
    }
})


var elem=document.getElementById("root");
ReactDOM.render(<Comp/>,elem);