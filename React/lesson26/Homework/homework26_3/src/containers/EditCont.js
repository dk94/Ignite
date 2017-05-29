/**
 * Created by Dima on 29.05.2017.
 */
import React,{ PropTypes } from 'react'
import ListEditCont from './ListEditCont.js';
import {TableEditCont} from './ListEditCont.js';
import AddToDo from '../components/AddToDo.jsx';
import { connect } from 'react-redux'
import { ChangeView} from '../actions/index.js'


const Edit =({flag,onChange,editMode})   => (
    <div className="text-center" style={{width:"50%",margin:"0 auto"}}>
        <h2>Redux ToDoList</h2>


        <br/>
        <h4>ListView:</h4>
        <input type="checkbox" checked={flag} onChange={()=>onChange()}/>

        {flag==true?
            <ListEditCont/>:
            <TableEditCont/>
        }

            <AddToDo editModeFlag={editMode}/>




    </div>
)





const mapStateToProps = (state) => {
    return {
        flag: state.views,
        editMode: state.edit.editMode
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: () => {
            dispatch(ChangeView())
        }
    }
}
const EditCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(Edit)


export default EditCont;
