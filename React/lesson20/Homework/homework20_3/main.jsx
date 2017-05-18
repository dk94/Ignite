



/*### Задача 3
 Добавьте на страницу checkbox, клик по которому будет переключать режим отображения данных массива users между таблицей и списком
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
            style:getRandomColor(),
            checked:true
        }

    },



    handler:function(e){

        this.setState({quant:e.target.value,
            style:getRandomColor()})

    },
    handlerCheck:function(){
        this.setState({checked:!this.state.checked})
    },

    render(){

        return(
            <div className="form-group block text-center">
                <h2 className="text-center">Введите количество отображаемых элементов :</h2>
                <input type="text" className="form-control" onChange={this.handler}/>
                <input type="checkbox" onChange={this.handlerCheck}/>
                <CompChild user={this.props.user} num={this.state.quant} color={this.state.style} check={this.state.checked}/>
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
        if(this.props.check){

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
        }else{
            return(
                <div>
                    <h1 className="text-center ">TABLE</h1>
                    <table className="table">

                        <tbody  style={{"backgroundColor":col}}>
                        {targetArr.map(function (row, i) {
                            return (
                                <tr key={i}>
                                    {Object.values(row).map(function (col, j) {
                                        return <td key={j}>{col}</td>;
                                    })}
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            )
        }
    }
})
ReactDOM.render(<CompParent user={users}></CompParent>,document.getElementById('root'));
