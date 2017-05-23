/**
 * Created by Dima on 21.05.2017.
 */
import React from 'react';
import { connect } from 'react-redux'
import {run,increment} from '../actions/statisticAct'





const mapStateToProps = (state) => {
    return {
        val: state.statisticReducer,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        run: () => {
            dispatch(run())
        },
        increment: (value) => {
            dispatch(increment(value))
        },
    }
}
const StatItemCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(StatItem);

    export default StatItemCont;
