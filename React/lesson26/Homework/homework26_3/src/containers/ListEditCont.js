/**
 * Created by Dima on 29.05.2017.
 */
import { connect } from 'react-redux'
import {edit} from  '../actions/index.js'
import {toggleTodo} from  '../actions/index.js'
import ListEdit from '../components/listEdit.js'
import TableEdit from '../components/tableEdit.js'


const mapStateToProps = (state) => {
    return {
        data: state.todos
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        edit: (id) => {
            dispatch(edit(id))

},
        removeToDo:(id)=>{
            dispatch(toggleTodo(id))
        }
    }
}
const ListEditCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListEdit)
export const TableEditCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(TableEdit)
export default ListEditCont;
