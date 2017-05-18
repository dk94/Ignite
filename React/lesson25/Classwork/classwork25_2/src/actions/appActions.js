import dispatcher from '../dispatcher' 

// Flux Действия различаются по типу — константе, которая посылается вместе с данными действия. 
// В зависимости от типа, Действия могут быть соответствующим образом обработаны в зарегистрированных обработчиках, 
// при этом данные из этих Действий используются как аргументы внутренних методов.

export function start() {
    dispatcher.dispatch({
        type: 'Start'
    })
} 


export function stop() {
    dispatcher.dispatch({
        type: 'Stop'
    })
} 

// передача параметра от view к action, от action к store  
export function reset() {
    dispatcher.dispatch({
        type: 'Reset',

    })
}