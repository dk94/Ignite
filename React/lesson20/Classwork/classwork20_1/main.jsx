/*### Задача 1
Создайте React компонент Parent, отображающий на странице произвольный текст в теге h1.
    Создайте дочерний компонент Child, отображающий произвольный текст в теге h3.*/

import React from 'react';
import ReactDOM from 'react-dom';


var Parent=React.createClass({

    render(){
        return( <div>
        <h1>Parent</h1>
        <div>{this.props.children}</div>
        </div>)
    }
})

var Child=React.createClass({
    render(){
       return(<h3>Child</h3>)
    }
})
var elem=document.getElementById("root");
ReactDOM.render(<div><Parent><Child/></Parent></div>,elem);