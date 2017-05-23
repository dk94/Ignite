export const clickItem = (id) => {

    return {
        type: 'CLICKPf',

        id: id
    }
}
    export const setFilter = (category,id) => {


    return {
        type: 'SET_FILTER',

        category:category,
        id:id
    }

}
export const mouseOver = (id) => {
    console.log(id);

    return {
        type: 'MOUSE_OVER',
        id:id
    }

}
export const mouseOut = () => {


    return {
        type: 'MOUSE_OUT',

    }

}
