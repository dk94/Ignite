
import React,{ PropTypes } from 'react'
import ListCont from './ListCont.jsx';
import {TableCont} from './ListCont.jsx';
import { connect } from 'react-redux'
import { ChangeView} from '../actions/index.js'


const Home =({flag,onChange})   => (
    <div className="text-center" style={{width:"50%",margin:"0 auto"}}>
        <h2>Redux ToDoList</h2>


        <br/>
        <h4>ListView:</h4>
        <input type="checkbox" checked={flag} onChange={()=>onChange()}/>

        {flag==true?
            <ListCont/>:
            <TableCont/>
        }

    </div>
)





const mapStateToProps = (state) => {
    return {
        flag: state.views
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: () => {
            dispatch(ChangeView())
        }
    }
}
const HomeCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)


export default HomeCont;
