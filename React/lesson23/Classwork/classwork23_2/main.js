/*### Задача 2
Создайте конфигурацию webpack, которая позволяет работать с ReactJS и ES6.
    Создайте 2 страницы с произвольными React компонентами и файл main.js, который будет являться входной точкой приложения(entry point).
С помощью webpack свяжите эти страницы в файл bundle.js и подключите его к html странице.*/
    var React = require('react');
var ReactDOM= require('react-dom');

var Comp1=require('./comps/comp1.jsx');
var Comp2=require('./comps/comp2.jsx');

class MainComp extends React.Component{
    render(){
        return(
            <div className="text-center">
                <Comp1/>
                <Comp2/>
            </div>
        )
    }
}

ReactDOM.render(<MainComp/>,document.getElementById('root'));



