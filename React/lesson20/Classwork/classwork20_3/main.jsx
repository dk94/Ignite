/*### Задача 3
Создайте React компонент, который содержит checkbox и элемент div.
    При клике по checkbox элементу div присваиваиваются новые стили (выбор стиля призвольный).*/

import React from 'react';
import ReactDOM from 'react-dom';




var Comp=React.createClass({

    getInitialState: function() {
        return {
            checked: true,
            cls:"cls1"
        }
    },

    handler:function () {
        this.state.checked=!this.state.checked;
        var flag=this.state.checked;
        var clas=flag?"cls1":"cls2";
        this.setState({cls:clas});
    },

    render(){
        return(
        <div className="text-center">
            <div className={this.state.cls}></div>
            <h4>Toggle style:</h4>
            <input type="checkbox" onChange={this.handler} defaultChecked ={this.state.checked}/>
        </div>
        )
    }
})


ReactDOM.render(<Comp/>, document.getElementById('root'));