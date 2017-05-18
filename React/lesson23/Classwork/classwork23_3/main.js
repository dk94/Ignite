/*### Задача 3
Переделайте задание из предыдущей задачи с использованием browserify.
    Реализуйте выполнение команд browserify через поле scripts файла package.json.*/
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



