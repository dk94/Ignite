var EventEmitter = require('events').EventEmitter;
import dispatcher from '../dispatcher'

class AppStore extends EventEmitter {
    constructor() {
        super() 
        this.answer = 0;


    } 

    plus(val1,val2){
        this.answer=val1+val2;
}
    minus(val1,val2){
        this.answer=val1-val2;
    }
    mult(val1,val2){
        this.answer=val1*val2;
    }
    divide(val1,val2){
        this.answer=val1/val2;
    }



    handleActions(action) {
        switch (action.type) {
            case "Plus": {

                this.plus(action.val1,action.val2);
                this.emit('Plus');
                break;
            }
            case "Minus": {
                this.minus(action.val1,action.val2);
                this.emit('Minus');
                break;
            }
            case "Mult": {

                this.mult(action.val1,action.val2);
                this.emit('Mult');
                break;
            }
            case "Divide": {

                this.divide(action.val1,action.val2);
                this.emit('Divide');
                break;
            }
        }
    } 

   
} 

const appStore = new AppStore; 
dispatcher.register(appStore.handleActions.bind(appStore)); 

module.exports = appStore; 