/**
 * Created by Dima on 21.05.2017.
 */
const statisticReducer = (state= {val1:0,val2:0,val3:0,val4:0}, action)=>{
    switch(action.type){
        case 'RUN':{return {val1:4400,val2:3000,val3:2000,val4:2222};}

    }
return state;
}

export default statisticReducer;
