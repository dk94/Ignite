const demoReducer = (state='Initial', action) => {
    switch( action.type) {
        case 'Show': {
            return action.value
            break;
        }
        default: {
            return state
        }
    }
}

module.exports = demoReducer