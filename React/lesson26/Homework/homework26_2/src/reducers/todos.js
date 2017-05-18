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

const todoApp = combineReducers({
    todos,
    views
})

export default todoApp