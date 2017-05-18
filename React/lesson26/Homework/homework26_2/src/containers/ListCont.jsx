import { connect } from 'react-redux'
import { toggleTodo } from '../actions/index.js'
import List from '../components/list.jsx'
import Table from '../components/table.jsx'


const mapStateToProps = (state) => {
    return {
        data: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}
 const ListCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(List)
export const TableCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(Table)

export default ListCont;
