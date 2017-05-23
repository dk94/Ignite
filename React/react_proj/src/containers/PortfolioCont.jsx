import { connect } from 'react-redux'
import { setFilter} from '../actions/portfolioAct.js'
import { mouseOver} from '../actions/portfolioAct.js'
import { mouseOut} from '../actions/portfolioAct.js'
import Portfolio from '../components/Portfolio.js'
const mapStateToProps = (state) => {
    return {
        data: state.portfolioReducer.navMenuReducer.buttons,
        index: state.portfolioReducer.pfFilterReducer.id,
        pfImgSet:filterSet(state.portfolioReducer.portfolioImageSetReducer.urlsPf,state.portfolioReducer.pfFilterReducer.category),
        flag:state.portfolioReducer.pfOuterBlock.flag,
        indexOuter:state.portfolioReducer.pfOuterBlock.id

    }
}

const filterSet=(set,filter)=>{
    switch(filter){
        case 'All':return set;
        default :{
            set=set.filter((item)=>{
                return item.category===filter;
            });
            console.log(set);

            return set
        }


    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       setFilter:(category,id) => {
            dispatch(setFilter(category,id))
        },
        onMouseOver:(id) => {
            dispatch(mouseOver(id))
        },
        onMouseOut:() => {
            dispatch(mouseOut())
        }


    }
}
const PortfolioCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(Portfolio)

export default PortfolioCont