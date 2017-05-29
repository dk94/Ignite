import { connect } from 'react-redux'
import { toggleTodo } from '../actions/index.js'
import List from '../components/list.jsx'
import Table from '../components/table.jsx'


const mapStateToProps = (state) => {
    return {
        data: state.todos
    }
}

 const ListCont = connect(
    mapStateToProps
)(List)
export const TableCont = connect(
    mapStateToProps
)(Table)

export default ListCont;
