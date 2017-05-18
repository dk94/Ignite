var React=require('react');

class AddUser extends React.Component{
    constructor(props){
        super(props);

        this.state={user:''}

        this.handleInput=this.handleInput.bind(this);
        this.handleClick=this. handleClick.bind(this);
    }


    handleInput(e){
        this.setState({user:e.target.value});
    }

    handleClick(){
        this.props.addUser(this.state.user);
        this.setState({user:''});
    }


    render(){
        return(
        <div style={{"marginTo":40}}>
            <h3>Add user</h3>
            <input className="form-control" value={this.state.user} onChange={this.handleInput}/><br/>
            <button className="btn btn-large btn-primary" onClick={this.handleClick}>Add</button>
        </div>
        )
    }
}

module.exports=AddUser;





