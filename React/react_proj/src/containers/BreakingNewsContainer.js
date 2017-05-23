import { connect } from 'react-redux'
import { loadMore} from '../actions/breakingNewsAct.js'
import BreakingNews from '../components/BreakingNews.js'
import React from 'react';
const mapStateToProps = (state) => {
    return {
        data:getNumberOfData(state.breakingNewsReducer.dataBNReducer,state.breakingNewsReducer.numberOfElementsReducer)
    }
}

function getNumberOfData(data,nums){

    if(nums>=data.length)
        return data;
   else{
       let newData=[]
        for(var i=0; i<nums;i++){
           newData.push(data[i]);
        }

        return newData;
    }


}

const mapDispatchToProps = (dispatch) => {
    return {
        loadMore: () => {
            dispatch(loadMore())
        },
    }
}
const BreakingNewsCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(BreakingNews);


export default BreakingNewsCont;
