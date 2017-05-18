import dispatcher from '../dispatcher' 

// Flux Действия различаются по типу — константе, которая посылается вместе с данными действия. 
// В зависимости от типа, Действия могут быть соответствующим образом обработаны в зарегистрированных обработчиках, 
// при этом данные из этих Действий используются как аргументы внутренних методов.

export function plus(val1,val2) {
    dispatcher.dispatch({
        type: 'Plus',
        val1:(+val1),
        val2:(+val2)
    })
} 


export function minus(val1,val2) {
    dispatcher.dispatch({
        type: 'Minus',
        val1:(+val1),
        val2:(+val2)
    })
} 

export function mult(val1,val2) {
    dispatcher.dispatch({
        type: 'Mult',
        val1:(+val1),
        val2:(+val2)

    })
}
export function divide(val1,val2) {
    dispatcher.dispatch({
        type: 'Divide',
        val1:(+val1),
        val2:(+val2)

    })
}