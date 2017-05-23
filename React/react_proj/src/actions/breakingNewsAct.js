/**
 * Created by Dima on 22.05.2017.
 */


import $ from 'jquery';

export function initBN() {


    return function (dispatch) {


        $.ajax({
            url: "../src/data.json",
        })
            .done(function( data ) {

                dispatch(addNews(data))

            });


    }
}
export const addNews = (text) => {

    return {
        type: 'Add',

        data: text
    }
}

export const loadMore= () => {
    return {
        type: 'LOAD_MORE',


    }
}