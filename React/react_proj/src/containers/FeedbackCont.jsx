import { connect } from 'react-redux'
import { closeMsg} from '../actions/feedbackAct.js'
import { addMsg} from '../actions/feedbackAct.js'
import Feedback from '../components/Feedback.js'

const mapStateToProps = (state) => {
    return {
        data: state.feedbackReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMsg: (title,text) => {
            dispatch(addMsg(title,text))
        },
        closeMsg: (index) => {
            dispatch(closeMsg(index))
        }
    }
}
const FeedbackCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(Feedback)


export default FeedbackCont;