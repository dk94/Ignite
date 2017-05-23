
const feedbackReducer = (state=[
    {title:"Message Title",
        msg:"Lorem ipsum dolor sit amet, " +
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Just text... "},
    {title:"Some message",msg:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
    "labore et dolore magna aliqua. Just text... "},
    {title:"Message Title",
        msg:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " +
        "dolore magna aliqua. Just text... "}
        ], action) => {

    switch( action.type) {
        case 'ADD_MSG': {

            return [...state,{title:action.title,msg:action.text}]
        break;
        }
        case 'REMOVE_MSG': {
            let newState=state.filter(function (item,index) {
                if(index!=action.id)
                    return item
            })
            return newState;
        }
        default: {
            return state
        }
    }
}
export default feedbackReducer;
