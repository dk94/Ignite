
/*### Задача 1
Создайте React компонент, который выведет на экран массив users в виде таблицы.
    Массив users для задачи:
    ```
var users = [{name:"Anne Montgomery",gender:"Female"},
{name:"Annie George",gender:"Female"},
{name:"Gary Butler",gender:"Male"},
{name:"Lisa Mendoza",gender:"Female"},
{name:"Marilyn Henry",gender:"Female"},
{name:"Johnny Tucker",gender:"Male"},
{name:"Chris Jacobs",gender:"Male"},
{name:"Benjamin James",gender:"Male"}]
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
    {name:"Benjamin James",gender:"Male"}]

var Comp=React.createClass({
    propTypes: {
        user: React.PropTypes.array
    },

    render: function () {
        return (
            <div>
            <h1 className="text-center ">TABLE</h1>
            <table className="table table-inverse">

                <tbody>
                {this.props.user.map(function (row, i) {
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
        );
    }
})
    ReactDOM.render(<Comp user={users}/>,document.getElementById('root'));