var React = require('react');  

var bindActionCreators = require('redux').bindActionCreators; 
var connect = require('react-redux').connect; 
var actions = require('../actions/index');

class App extends React.Component {
    render() {
    return (
            <div className="text-center" style={{width:"50%",margin:"0 auto"}}>
                <h2>ReduX</h2>
                <input id="input" className="form-control" onChange={()=>this.props.show(document.getElementById('input').value)}/>
                <h1>{this.props.text}</h1>
            </div>
        )
    }
} 

// привязка state к компоненту App
function mapStateToProps(state) {
    return {
        text: state
    }
} 

// привязка actions к компоненту App
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        show: actions.showText
    }, dispatch)
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(App) 