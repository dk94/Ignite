import { connect } from 'react-redux'
import { nextSlide} from '../actions/sliderAct.js'
import { previousSlide} from '../actions/sliderAct.js'
import { autoSwitch} from '../actions/sliderAct.js'
import { setFlag} from '../actions/sliderAct.js'
import Slider from '../components/Slider.js'


const mapStateToProps = (state) => {
    return {
        src: state.sliderReducer.urls[state.sliderReducer.index],
        autoSwitchFlag:state.sliderReducer.autoSwitchFlag,
        switchTime:state.sliderReducer.time
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        autoSwitch: () => {
            dispatch(autoSwitch())
        },
        clickPrevious: () => {
            dispatch(previousSlide())
        },
        clickNext: () => {
            dispatch(nextSlide())
        },

        setFlag:()=>{
            dispatch(setFlag())
        }


    }
}
const SliderCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(Slider)


export default SliderCont;
