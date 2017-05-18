/*

 ### Задача 2
 Используя Promise, асинхронно загрузите на страницу файл image.jpg, находящийся в папке Classwork рядом с файлом с задачами.
. */

let promise = new Promise((resolve, reject) => {


    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'image.jpg', false);



        resolve(xhr.send());


});

// promise.then навешивает обработчики на успешный результат или ошибку
promise
    .then(
        (result) => {

            document.write("<img src='image.jpg'>")
        },
        (error) => {

            alert("Error"); // error - аргумент reject
        }
    );
