// Действия — это структура, которая передает данные из вашего приложения в хранилище. 
// По соглашению, действия должны иметь строковое поле type, которое указывает на тип исполняемого действия. 
var connect = require('react-redux')
// Генераторы действий — функции, которые создают действия. В // Redux генераторы действий являются чистыми функциями, 
// что делает их портативными и простыми для тестирования, т.к. они не имеют сайд-эффектов.

var $=require('jquery');



export function fetchData() {


    return function (dispatch) {


        $.ajax({
            url: "src/data.json",
        })
            .done(function( data ) {
               dispatch(showText(data))
            });


    }
}



export const showText = (arr) => {



    return {
        type: 'Send',
        data: arr
    }
} 

