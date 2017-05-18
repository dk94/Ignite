const demoReducer = (state=[], action) => {
    switch( action.type) {
        case 'Send': {
            return action.data
            break;
        }
        default: {
            return state
        }
    }
}

module.exports = demoReducer