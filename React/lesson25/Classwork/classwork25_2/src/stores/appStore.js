var EventEmitter = require('events').EventEmitter;
import dispatcher from '../dispatcher'

class AppStore extends EventEmitter {
    constructor() {
        super() 
        this.count = 0;
        this.startFirstClick=true;

    } 


    countClicks() {

        this.count++ ;
        return this.count
    }
    reset() {

        this.count=0 ;
        this.startFirstClick=true;
        return this.count
    }
    stop (){
        this.startFirstClick=true;

    } 


    handleActions(action) {
        switch (action.type) {
            case "Start": {
                if(this.startFirstClick){
                    this.startFirstClick=false;
                    this.emit('Start');

                }
                break;
            }
            case "Stop": {

                this.emit('Stop');
                break; 
            }
            case "Reset": {

                this.emit('Reset');
                break;
            }
        }
    } 

   
} 

const appStore = new AppStore; 
dispatcher.register(appStore.handleActions.bind(appStore)); 

module.exports = appStore; 