/*
 ### Задача 2
 Создайте страницу-таймер, которая будет отображать количество секунд, прошедшее с момента ее открытия. */

import React from 'react';
import ReactDOM from 'react-dom';


var Comp=React.createClass({
    getInitialState(){
    return{
       count:0
    }
},

    counter(){
       this.setState({count:this.state.count+1});
    },


    render(){
        if (!this.timer) {

            this.timer = setInterval(this.counter, 1000);
        }
        return(
            <div className="text-center">
                <h2>Timer:</h2>
                <div id="target"><h3>{this.state.count}</h3></div>
            </div>


        )
    }
})


var elem=document.getElementById("root");
ReactDOM.render(<Comp/>,elem);