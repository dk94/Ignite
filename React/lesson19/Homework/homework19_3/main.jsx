/*### Задача 3
Создайте React компонент, который отображает на странице произвольный текст.
Компонент должен иметь такие свойства: color и fontSize.
 Установите на основе этих свойств стили для компонента.*/


    import React from 'react';
import ReactDOM from 'react-dom';



var Comp=React.createClass({
    render(){
        return (<h1 className="text-center" style={{"color":this.props.color, "fontSize":this.props.fontSize+"px"}}>This is some text!!!</h1>)
    }
})

ReactDOM.render(<Comp color="green" fontSize="40"/>,document.getElementById('root'));
