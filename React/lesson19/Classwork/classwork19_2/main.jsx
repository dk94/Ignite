
/*
### Задача 2
Реализуйте задание задачи 1 с помощью создания React компонента
*/

import React from 'react';
import ReactDOM from 'react-dom';




var Comp = React.createClass({
    render(){
        return(<h1>Hello world</h1>);
    }
})
ReactDOM.render(<Comp/>, document.getElementById('root'));