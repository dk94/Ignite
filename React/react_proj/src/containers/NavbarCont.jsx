import { connect } from 'react-redux'
import { clickItem} from '../actions/headerAct.js'
import Navbar from '../components/Navbar.js'


const mapStateToProps = (state) => {
    return {
        data: state.navbarReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(clickItem())
        }
    }
}
const NavbarCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar)


export default NavbarCont;