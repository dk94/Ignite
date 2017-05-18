var React = require('react');  

var bindActionCreators = require('redux').bindActionCreators; 
var connect = require('react-redux').connect; 
var actions = require('../actions/index');
var List = require('./list.jsx');

class App extends React.Component {
    render() {
    return (
            <div className="text-center" style={{width:"50%",margin:"0 auto"}}>
                <h2>Redux ListGet</h2>
                <button className="btn btn-large btn-primary" onClick={() =>this.props.sendArr(["item1","item2","item3","item4","item5"]) }>Click me</button>

                <List data={this.props.data}/>
            </div>
        )
    }
} 

// привязка state к компоненту App
function mapStateToProps(state) {
    return {
        data: state
    }
} 

// привязка actions к компоненту App
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        sendArr: actions.showText
    }, dispatch)
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(App) 