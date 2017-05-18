/*### Задача 2
Создайте React компонент, который отображает на странице форму с полями ‘name’ , ‘login’ и кнопкой Submit*/
import React from 'react';
import ReactDOM from 'react-dom';



var Comp=React.createClass({


    render(){
        return(
            <div className="block">
                <h1 className="text-center">Form</h1>
                <form onSubmit={(e)=>{e.preventDefault();alert("Done");}}>
                <div className="form-group">
                <label>Name:</label>
                <input type="text" placeholder="Name" className="form-control"/>
                </div>
                <div className="form-group">
                <label>Login:</label>
                <input type="text" placeholder="Login" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        );
    }
})

ReactDOM.render(<Comp prop1="1" prop2="2"/>,document.getElementById('root'));