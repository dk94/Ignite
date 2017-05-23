const serviceReducer = (state = {
    data: [{btn:'Web Design',link:'design'},{btn:'Graphic Design',link:'graphic'},{btn:'Online Support',link:'support'},
        {btn:'App Design',link:"app"},{btn:'Online Marketing',link:"market"},{btn:'Seo Service',link:'seo'}],
    index:0
}, action)=>{
    switch(action.type){
        case 'CLICK':{

            return{
                data: state.data,
                index:action.id
            }
        }
    }
    return state;
}
export default serviceReducer;
