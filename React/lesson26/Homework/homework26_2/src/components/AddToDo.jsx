import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions'
const AddTodo= ({onSubmit})=>(
    <div>
    <form onSubmit={(e)=>{e.preventDefault();onSubmit(document.getElementsByTagName('input')[0].value)}}>
        <input className="form-control" />
        <button type="submit" className="btn btn-lg btn-primary">Add</button>
    </form>
    </div>
)
const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (text) => {
            dispatch(addTodo(text))
        }
    }
}
const AddToDo = connect(
    null,
    mapDispatchToProps
)(AddTodo)

export default AddToDo;