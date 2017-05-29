import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { editSubmit} from '../actions'
const AddTodo= ({onSubmit,editModeFlag,editSubmit,id})=>(
    <div>


            <form>
                <input id="addInp" className="form-control" />
                {  editModeFlag==true? <h1>Edit ToDo</h1>:<h1>AddToDo</h1>}
                {  editModeFlag == true ? <button onClick={(e)=>{
                        editSubmit(id,document.getElementById('addInp').value);
                    }} type="submit" className="btn btn-lg btn-primary">Edit</button> :
                    <button onClick={(e)=>{
                        onSubmit(document.getElementById('addInp').value);
                        document.getElementById('addInp').value=""}} type="submit" className="btn btn-lg btn-primary">Add</button>
                }
            </form>

    </div>
)
const mapStateToProps = (state) => {
    return {
        id: state.edit.id
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (text) => {
            dispatch(addTodo(text))
        },
        editSubmit: (id,text) => {
            dispatch(editSubmit(id,text))
        }
    }
}
const AddToDo = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo)

export default AddToDo;