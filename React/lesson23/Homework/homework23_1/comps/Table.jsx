var React=require('react');

var users=["Vasilii","Petr","Valerii","Vera","Svetlana","Andrey","Aleksey"];


var AddUser=require("./AddUser.jsx");

class Table extends React.Component{

    constructor(){
        super();

        this.state=({usersArr:users});

        this.addUser = this.addUser.bind(this);
    }
    addUser(user){
        this.setState({usersArr:this.state.usersArr.concat(user)});
    }

    render(){

        var data=this.state.usersArr.map(function(user){
                return(
                    <tr>
                        <td>{user}</td>
                    </tr>
                )
            });
        return(
            <div className="text-center">
                <h2>User List</h2>
            <table className="table">
            {data}
        </table>
              <AddUser addUser={this.addUser}/>
            </div>

        )
    }
}

module.exports=Table;