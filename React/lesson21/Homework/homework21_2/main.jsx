/*
 ### Задача 2
 Создайте страницу-калькулятор. На странице должно быть 4 кнопки(по кнопке на математическую операцию: сложение, вычитание,
 умножение, деление), 2 поля ввода и элемент для отображения результата. Сделайте так, чтобы в поля ввода разрешалось вводить
 только цифры.  */

import React from 'react';
import ReactDOM from 'react-dom';


var Comp=React.createClass({
    getInitialState(){
        return{
            count:0
        }
    },

    val1:0,
    val2:0,

    plusHandler(){

        this.setState({count:(this.val1+this.val2)})

    },
    minusHandler(){
        this.setState({count:this.val1-this.val2})

    },
    multHandler(){
        this.setState({count:this.val1*this.val2})

    },
    divideHandler(){
        this.setState({count:this.val1/this.val2})

    },
    input1Handler(e){
         var val=e.target.value;

        if(val.match(/[^0-9]/)){
            e.target.value = e.target.value.slice(0, e.target.value.length - 1);
            this.val1=+e.target.value;
        }
        else
        this.val1=+val;

    },
    input2Handler(e){
        var val=e.target.value;
        if(val.match(/[^0-9]/)){
            e.target.value = e.target.value.slice(0, e.target.value.length - 1);
            this.val2=+e.target.value;
        }
        else
            this.val2=+val;
    },



    render(){
        return(
            <div className="text-center">
                <h2>Calculator:</h2>
                <div id="target2">
                <input type="text" onChange={this.input1Handler} className="form-control" />
                <input type="text" onChange={this.input2Handler} className="form-control" />
                </div>
                <button className="btn btn-primary" onClick={this.plusHandler}>+</button>
                <button className="btn btn-primary" onClick={this.minusHandler}>-</button>
                <button className="btn btn-primary" onClick={this.multHandler}>*</button>
                <button className="btn btn-primary" onClick={this.divideHandler}>/</button>
                <div id="target"><h3>{this.state.count}</h3></div>

            </div>


        )

    }
})


var elem=document.getElementById("root");
ReactDOM.render(<Comp/>,elem);