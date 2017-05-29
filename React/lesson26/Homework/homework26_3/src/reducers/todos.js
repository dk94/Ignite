import { combineReducers } from 'redux'
const todos = (state=[], action) => {
    switch( action.type) {
        case 'Add': {

            return state.concat(action.data)
            break;
        }
        case 'REMOVE_TODO': {
            let newState=state.filter(function (item,index) {
                if(index!=action.id)
                    return item
            })
            return newState;
            break;
        }
        case 'EDIT_SUBMIT': {
           /* alert(action.id+" "+action.text);
            state[action.id]=action.text;*/

            return state.slice(0,action.id).concat([action.text]).concat(state.slice(action.id+1));
            break;
        }

        case 'Init': {
            alert(action.list);
            return [...state,action.list]
            break;
        }
        default: {
            return state
        }
    }
}
const views = (state=false, action) => {
    switch( action.type) {
        case 'Change': {

            return !state;
            break;
        }
        default: {
            return state
        }
    }
}
const edit= (state={editMode:false,id:0}, action) => {

    switch( action.type) {


        case 'EDIT': {

            return {
                editMode:true,
                id:action.id
            }
            break;
        }
        case 'EDIT_SUBMIT': {
            return {
                editMode:false,
                id:0
            }
        }

        default: {
            return state
        }
    }
}

const totalScore=(state={totalValue:0,qScore:0}, action)=>{
    switch( action.type) {
        case 'SET_SCORE': {
            return{
                totalValue:state.totalValue+action.value,
                qScore:state.qScore+1
            }

        }
        default: {
            return state
        }
    }
}



const todoApp = combineReducers({
    todos,
    views,
    edit,
    totalScore
})

export default todoApp