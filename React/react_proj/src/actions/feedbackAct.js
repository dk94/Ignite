export const addMsg= (title,text) => {

    return {
        type: 'ADD_MSG',
        title:title,
        text: text

    }
}

export const closeMsg = (id) => {

    return {
        type: 'REMOVE_MSG',
        id:id
    }
}