var React = require('react'); 

var appStore = require('../Stores/appStore');
var appActions = require('../Actions/appActions'); 

class App extends React.Component{
    constructor() {
        super()

        this.state = {
            answer: appStore.answer,

        }

        this.plusHandler = this.plusHandler.bind(this);
        this.minusHandler = this.minusHandler.bind(this);
        this.multHandler = this.multHandler.bind(this);
        this.divideHandler = this.divideHandler.bind(this);

    } 

    componentWillMount() { 
        // создание обработчиков событий 
        appStore.on('Plus', () => {

            this.setState({answer:appStore.answer})

 })

        appStore.on('Minus', () => {

            this.setState({answer:appStore.answer})

        })
        appStore.on('Mult', () => {

            this.setState({answer:appStore.answer})

        })
        appStore.on('Divide', () => {

            this.setState({answer:appStore.answer})

        })


    }

    plusHandler() {
     
        appActions.plus(document.getElementById('input1').value,document.getElementById('input2').value);

    }

    minusHandler() {
        appActions.minus(document.getElementById('input1').value,document.getElementById('input2').value);
    } 
    multHandler() {

        appActions.mult(document.getElementById('input1').value,document.getElementById('input2').value);
    }
    divideHandler() {

        appActions.divide(document.getElementById('input1').value,document.getElementById('input2').value);
    }

    render() {
        return (
            <div className="text-center" style={{width:"20%",margin:"0 auto"}}>
                    <h2>Calculator</h2>
                    <input className="form-control" id="input1"/>
                    <input className="form-control" id="input2"/>

                    <button className="btn-lg  btn" onClick={this.plusHandler}>+</button>
                    <button className="btn-lg  btn" onClick={this.minusHandler}>-</button>
                    <button className="btn-lg  btn" onClick={this.multHandler} >*</button>
                    <button className="btn-lg  btn" onClick={this.divideHandler} >/</button>
                    <h3>{this.state.answer}</h3>


            </div>
    )}
}

module.exports = App; 