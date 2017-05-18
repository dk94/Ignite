/*
 ### Задача 3
 Создайте React компонент(используя ES6 синтаксис), который выведет на экран в виде таблицы массив users из предыдущей задачи.
 При клике по каждой ячейке таблицы,
 содержащей имя плоьзователя, должен запускаться метод sayHi соотстветствующего элемента массива users. */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';



import Person from '.././homework22_1/main.jsx';

class User extends Person{
    constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male", signUpDate = 0){
        super(firstName, lastName, age, gender)

        this.signUpDate=signUpDate;
        this.id=User.id++;
    }

}

User.defaultProps={signUpDate:0, id:0}
User.id=0;


var users=[];


users.push(new User());
users.push(new User("Petr","Petrov",23,"Male","28/2/2017"));


class ShowArray extends React.Component{
    constructor(props){
        super(props);

        this.array=props.array;
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(e){
        if(e.target.tagName=="TD"){
            var tr=e.target.closest("TR");
            var ID=tr.lastElementChild.innerHTML;
            this.props.array[ID].sayHi();
        }

            ;
    }

    render(){
        var list2=<tbody>
        {this.props.array.map(function (row, i) {
            return (
                <tr key={i}>
                    {Object.values(row).map(function (col, j) {
                        return <td key={j}>{col}</td>;
                    })}
                </tr>
            );
        })}
        </tbody>





        return(
            <div >
                <h1 className="text-center">Table</h1>
                <table className="table" onClick={this.handleClick}>

                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Sign Up Date</th>
                        <th>ID</th>

                    </tr>

                    {list2}
                </table>
            </div>
        )
    }
}

ReactDOM.render(<ShowArray array={users}/>,document.getElementById('root'));
