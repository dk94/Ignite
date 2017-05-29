// Действия — это структура, которая передает данные из вашего приложения в хранилище. 
// По соглашению, действия должны иметь строковое поле type, которое указывает на тип исполняемого действия. 

// Генераторы действий — функции, которые создают действия. В // Redux генераторы действий являются чистыми функциями, 
// что делает их портативными и простыми для тестирования, т.к. они не имеют сайд-эффектов.
var $=require('jquery');

export const addTodo = (text) => {

    return {
        type: 'Add',

        data: text
    }
}

export const setScore=(value)=>{
    alert(value);
    return{
        type:'SET_SCORE',
        value:value
    }
}


export const toggleTodo = (id) => {

    return {
        type: 'REMOVE_TODO',
        id:id
    }
}
export const ChangeView = () => {

    return {
        type: 'Change'

    }
}
export const edit= (id) => {

    return {
        type: 'EDIT',
        id:id

    }
}
export const editSubmit= (id,text) => {

    return {
        type: 'EDIT_SUBMIT',
        id:id,
        text:text

    }
}
export function Init() {


    return function (dispatch) {


        $.ajax({
            url: "src/data.json",
        })
            .done(function( data ) {

                dispatch(addTodo(data))

            });


    }
}
