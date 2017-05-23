import { connect } from 'react-redux'
import {run} from '../actions/statisticAct.js'

import Statistic from '../components/Statistic.js'

const mapStateToProps = (state) => {
    return {
        val1:state.statisticReducer.val1,
        val2:state.statisticReducer.val2,
        val3:state.statisticReducer.val3,
        val4:state.statisticReducer.val4,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        run:()=>{
            dispatch(run());
        }
    }
}
const StatisticCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(Statistic)


export default StatisticCont;