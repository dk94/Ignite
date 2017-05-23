/**
 * Created by Dima on 19.05.2017.
 */
const sliderReducer = (state = {
    urls: ['img/slide_img1.png','img/slide_img2.png','img/slide_img3.png'],
    index: 0,
    autoSwitchFlag:true,
    time:3
}, action)=>{
    let len = state.urls.length;
    switch (action.type) {

        case 'AUTO_SWITCH':

            return {
                urls: state.urls,
                index: state.index + 1 > len - 1 ? 0 : state.index + 1,
                autoSwitchFlag:true
            };
        case 'IMG_PREVIOUS':
            let nextIdx = state.index - 1;
            return {
                urls: state.urls,
                index: nextIdx < 0 ? len - 1 : nextIdx,
                autoSwitchFlag:false
            };
        case 'IMG_NEXT':

            return {
                urls: state.urls,
                index: state.index + 1 > len - 1 ? 0 : state.index + 1,
                autoSwitchFlag:false
            };
        case 'SET_FLAG':

            return {
                urls: state.urls,
                index: state.index,
                autoSwitchFlag:true,
            }
        default: {
            return state
        }
    }
}
export default sliderReducer ;