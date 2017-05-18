var React = require('react'); 

var appStore = require('../Stores/appStore');
var appActions = require('../Actions/appActions'); 

class App extends React.Component{
    constructor() {
        super()
        this.interval;
        this.state = {
            counter: appStore.count,

        }
        this.interval=0;
        this.startHandler = this.startHandler.bind(this);
        this.stopHandler = this.stopHandler.bind(this);
        this.resetHandler = this.resetHandler.bind(this);

    } 

    componentWillMount() { 
        // создание обработчиков событий 
        appStore.on('Start', () => {

            this.interval=setInterval(function () {
                this.setState({ counter: appStore.countClicks() })
            }.bind(this),1000)




        }) 

        appStore.on('Stop', () => {
            clearInterval(this.interval);
           appStore.stop();
        })
        appStore.on('Reset', () => {
            clearInterval(this.interval);
            this.setState({ counter: appStore.reset() })
        })


    }

    startHandler() {
     
        appActions.start();
    }

    stopHandler() {
        appActions.stop();
    } 
    resetHandler() {

        appActions.reset();
    }

    render() {
        return (
            <div className="text-center">
                <h1>{this.state.counter}</h1>

                    <button className="btn-lg btn-success btn" onClick={this.startHandler}>Start</button>
                    <button className="btn-lg btn-danger btn" onClick={this.stopHandler}>Stop</button>
                    <button className="btn-lg btn-warning btn" onClick={this.resetHandler} >Reset</button>


            </div>
    )}
}

module.exports = App; 