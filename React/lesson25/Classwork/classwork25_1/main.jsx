/*### Задача 1
Используя flux, реализуйте следующее:
    * Создайте React компонент, содержащий кнопку и элемент div
* При клике по кнопке присвойте элементу div произвольные стили.*/

    import React from 'react';
import ReactDOM from 'react-dom';
import flux from 'flux';


var Dispatcher = flux.Dispatcher;
var EventEmitter = require('events').EventEmitter;

var dispatcher=new Dispatcher();

function emitClick() {
    dispatcher.dispatch({
            type:"CLICK"
    })
}

class AppStore extends EventEmitter{
    handleAction(action){
        switch(action.type){
            case "CLICK":{
                this.emit("changeStyle");
            }
        }
    }
}

const appStore=new AppStore;

dispatcher.register(appStore.handleAction.bind(appStore));

class App extends React.Component{
    constructor(){
        super();
        this.state={divStyle:{backgroundColor:"black",minHeight:266}}
    }

    componentDidMount(){
        appStore.on("changeStyle",()=>
            {
                this.setState({divStyle:{backgroundColor:this.state.divStyle.backgroundColor=='red'?'black':'red',minHeight:266}});
            }
        )
    }

    clickHandler(){
        emitClick();
    }

    render(){
        return(
        <div className="text-center">
            <div style={this.state.divStyle}> </div>
            <button className="btn btn-lg btn-primary" onClick={this.clickHandler} >Click me!</button>
        </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));