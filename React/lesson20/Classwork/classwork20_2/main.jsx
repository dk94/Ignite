/*
### Задача 2
Создайте React компонент, который имеет два свойства(props)
типа number  и свойство mode типа boolean. В зависимости от значения свойства mode(true/false)
компонент должен выводить на экран либо сумму свойств типа number, либо результат их конкатенации.*/
    import React from 'react';
import ReactDOM from 'react-dom';


var Comp=React.createClass({

        propTypes: {

                prop1: React.PropTypes.number,
                prop2: React.PropTypes.number,
                mode:React.PropTypes.bool,
            },

            render(){
            return(

                <h2>{this.props.mode?(+this.props.prop1+this.props.prop2):this.props.prop1+""+this.props.prop2}</h2>)
        }

})


ReactDOM.render(<Comp prop1={1} prop2={2} mode={false}/>, document.getElementById('root'));
