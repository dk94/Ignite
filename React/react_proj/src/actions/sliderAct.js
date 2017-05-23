/**
 * Created by Dima on 19.05.2017.
 */

export const nextSlide= (id) => {

    return {
        type: 'IMG_NEXT'
    }
}
export const previousSlide= (id) => {

    return {
        type: 'IMG_PREVIOUS'
    }
}
export const autoSwitch = () => {
    console.log('switch');
    return {
        type: 'AUTO_SWITCH'
    }
}
export const setFlag = () => {
    console.log('switch');
    return {
        type: 'SET_FLAG'
    }
};

