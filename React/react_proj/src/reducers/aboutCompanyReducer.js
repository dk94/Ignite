const aboutMenuReducer=(state={


    buttonsN:['OUR HISTORY','OUR BIOGRAPHY','OUR SKILLS'],id:2,skillsShow:false
},action)=>{
    switch(action.type){
        case 'CHANGE':{

            return{
                buttonsN: state.buttonsN,
                id:action.id


            }

        }
        case 'SHOW_SKILLS': {
            return {...state, skillsShow: true};

        }
    }
    return state;
}

export default aboutMenuReducer;