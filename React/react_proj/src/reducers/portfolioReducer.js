import { combineReducers } from 'redux'
const portfolioImageSetReducer = (state={
    urlsPf:[{url:"img/pf_img1.png",category:"Graphic Design"},{url:"img/pf_img2.png",category:"Graphic Design"},
    {url:"img/pf_img3.png",category:"Graphic Design"},{url:"img/pf_img4.png",category:"Web Design"},
        {url:"img/pf_img5.png",category:"Web Design"},{url:"img/pf_img6.png",category:"Web Design"},
        {url:"img/pf_img7.png",category:"Landing Pages"},{url:"img/pf_img8.png",category:"Landing Pages"},
        {url:"img/pf_img9.png",category:"Landing Pages"},{url:"img/pf_img10.png",category:"Wordpress"},
        {url:"img/pf_img11.png",category:"Wordpress"},{url:"img/pf_img12.png",category:"Wordpress"}]

},
                                  action) => {
    return state

    }


const navMenuReducer=(state={


        buttons:['All','Graphic Design','Web Design','Landing Pages','Wordpress']
},action)=>{
    switch(action.type){
        case 'CLICKPf':{

            return{
                buttons: state.buttons,


            }

        }
    }
    return state;
}
const pfFilterReducer=(state={category:'All',id:0,flag:false},action)=>{
    switch(action.type){
        case 'SET_FILTER':{
            return{
                category:action.category,
                id:action.id
            }

        }

    }
       return state;
}
const pfOuterBlock=(state={id:0,flag:false},action)=>{
    switch(action.type){
        case 'MOUSE_OVER':{
            return{
                flag:true,
                id:action.id
            }

        }

    }
    switch(action.type){
        case 'MOUSE_OUT':{
            return{
                flag:false,
                id:0
            }

        }

    }
    return state;
}




const portfolioReducer= combineReducers({
   portfolioImageSetReducer,
    navMenuReducer,
    pfFilterReducer,
    pfOuterBlock
})

export default portfolioReducer;