import { combineReducers } from 'redux'
const todos = (state=['Поесть','Поcпать','Погулять','Смотреть телевизор'], action) => {
    switch( action.type) {
        case 'Add': {

            return [...state,action.data]
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