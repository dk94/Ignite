/*###Задача 2
 Модифицируйте код предыдущей задачи. Реализуйте следующее:
 * При каждом обновлении свойств компонента, содержащего список users,  его текст окрашивается в случайный цвет.
 * Используйте при решении задачи методы жизненного цикла React компонентов.
 Функция для получения случайного цвета:
 ```
 function getRandomColor() {
 var h = Math.floor(Math.random() * (255 - 1) + 1);
 var s = Math.floor(Math.random() * (100 - 1) + 1) + '%';
 var l = '50%';
 var randomColor = 'hsl(' + h + ',' + s + ',' + l + ')';
 return randomColor;
 }
 ```*/

import React from 'react';
import ReactDOM from 'react-dom';




var users = [{name:"Anne Montgomery",gender:"Female"},
    {name:"Annie George",gender:"Female"},
    {name:"Gary Butler",gender:"Male"},
    {name:"Lisa Mendoza",gender:"Female"},
    {name:"Marilyn Henry",gender:"Female"},
    {name:"Johnny Tucker",gender:"Male"},
    {name:"Chris Jacobs",gender:"Male"},
    {name:"Benjamin James",gender:"Male"}];
function getRandomColor() {
    var h = Math.floor(Math.random() * (255 - 1) + 1);
    var s = Math.floor(Math.random() * (100 - 1) + 1) + '%';
    var l = '50%';
    var randomColor = 'hsl(' + h + ',' + s + ',' + l + ')';
    return randomColor;
}

var CompParent=React.createClass({
    getInitialState() {
        return{
            quant:this.props.user.length,
            style:getRandomColor()
        }

    },



    handler:function(e){

        this.setState({quant:e.target.value,
                        style:getRandomColor()})

    },

    render(){

        return(
            <div className="form-group block">
                <h2 className="text-center">Введите количество отображаемых элементов :</h2>
                <input type="text" className="form-control" onChange={this.handler}/>
                <CompChild user={this.props.user} num={this.state.quant} color={this.state.style}/>
            </div>
        )
    }
})
var CompChild=React.createClass({
    propTypes: {
        user: React.PropTypes.array,


    },




    render: function () {

        var col=this.props.color;
        var targetArr=[];
        if(this.props.num>this.props.user.length||this.props.num<0)
            var number=this.props.user.length;
        else
            number=this.props.num;
        for(var i=0;i<number;i++){
            targetArr.push(this.props.user[i]);
        }

        return (
            <div className="listC" >
                <h1 className="text-center">LIST</h1>

                <ul   className="list-group text-center">
                    {targetArr.map(function (row, i) {
                        return (
                            <li style={{"backgroundColor":col}} className="list-group-item" key={i}>
                                {Object.values(row).map(function (col, j) {
                                    return <span key={j}>{col+"\u00a0"}</span>;
                                })}
                            </li>
                        );
                    })}
                </ul>


            </div>
        );
    }
})
ReactDOM.render(<CompParent user={users}></CompParent>,document.getElementById('root'));