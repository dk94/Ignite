
import { combineReducers } from 'redux'

    const  dataBNReducer = (state=[], action) => {
    switch (action.type) {
        case 'Add': {

            return state.concat(action.data)

        }

    }
    return state;

}

    const numberOfElementsReducer=(state=8, action) => {
        switch (action.type) {
        case 'LOAD_MORE': {

            return state+8;

        }

        }
        return state;
}

const breakingNewsReducer= combineReducers({
            dataBNReducer,
            numberOfElementsReducer
})
export default breakingNewsReducer;
