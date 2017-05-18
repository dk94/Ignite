/*###Задача 1
 Создайте 2 React компонента – родительские компонент, содержащий поле ввода и дочерний компонент, содержащий список элементов массива users:
 ```
 var users = [{name:"Anne Montgomery",gender:"Female"},
 {name:"Annie George",gender:"Female"},
 {name:"Gary Butler",gender:"Male"},
 {name:"Lisa Mendoza",gender:"Female"},
 {name:"Marilyn Henry",gender:"Female"},
 {name:"Johnny Tucker",gender:"Male"},
 {name:"Chris Jacobs",gender:"Male"},
 {name:"Benjamin James",gender:"Male"}]
 ```
 Реализуйте следующее:
 При вводе числа в поле ввода должно отображаться соответсвующее количество элементов списка. */
    import React from 'react';
import ReactDOM from 'react-dom';




var users = [{name:"Anne Montgomery",gender:"Female"},
    {name:"Annie George",gender:"Female"},
    {name:"Gary Butler",gender:"Male"},
    {name:"Lisa Mendoza",gender:"Female"},
    {name:"Marilyn Henry",gender:"Female"},
    {name:"Johnny Tucker",gender:"Male"},
    {name:"Chris Jacobs",gender:"Male"},
    {name:"Benjamin James",gender:"Male"}]

var CompParent=React.createClass({
       getInitialState() {
       return{
            quant:this.props.user.length
       }

       },



        handler:function(e){

               this.setState({quant:e.target.value})

    },

    render(){

        return(
            <div className="form-group block">
                <h2 className="text-center">Введите количество отображаемых элементов :</h2>
                <input type="text" className="form-control" onChange={this.handler}/>
                <CompChild user={this.props.user} num={this.state.quant}/>
            </div>
        )
    }
})
var CompChild=React.createClass({
    propTypes: {
        user: React.PropTypes.array

    },


    render: function () {

        var targetArr=[];
        if(this.props.num>this.props.user.length||this.props.num<0)
            var number=this.props.user.length;
        else
            number=this.props.num;
        for(var i=0;i<number;i++){
            targetArr.push(this.props.user[i]);
        }

        return (
            <div className="listC">
                <h1 className="text-center">LIST</h1>

                <ul className="list-group text-center">
                {targetArr.map(function (row, i) {
                    return (
                        <li className="list-group-item" key={i}>
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