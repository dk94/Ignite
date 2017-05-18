/*
 ### Задача 3
 Модифицируйте код предыдущей задачи. Добавьте на странцу три кнопки: сбросить счет (reset), start и stop,
 которые предоставя пользователю останавлтвать/возобновлять работу таймера и сбрасывать отсчитанное время. */

import React from 'react';
import ReactDOM from 'react-dom';


var Comp=React.createClass({
    getInitialState(){
        return{
            count:0
        }
    },

    count: function() {
        this.setState({count: this.state.count + 1});
    },

    startHandler(){
        if (!this.timer)
        this.timer=setInterval(this.count,1000)

    },
    stopHandler(){
        clearInterval(this.timer);
        delete this.timer;

    },
    resetHandler(){
        clearInterval(this.timer);
        delete this.timer;
        this.setState({count:0});


    },

    render(){
        return(
            <div className="text-center">
                <h2>Timer:</h2>
                <div id="target"><h3>{this.state.count}</h3></div>
                <button className="btn btn-success" onClick={this.startHandler}>Start</button>
                <button className="btn btn-danger" onClick={this.stopHandler}>Stop</button>
                <button className="btn btn-primary" onClick={this.resetHandler}>Reset</button>
            </div>


        )
    }
})


var elem=document.getElementById("root");
ReactDOM.render(<Comp/>,elem);