import { connect } from 'react-redux'
import { ChangeView} from '../actions/index.js'
import app from '../components/app.jsx'


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
const AppCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(app)


export default AppCont;