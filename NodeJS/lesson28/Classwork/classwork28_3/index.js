/**
 * Created by Dima on 26.05.2017.
 */
var fs = require('fs');

var text=process.argv[2];


// асинхронное создание файла
// аргументы метода - имя файла для записи, данные для записи в файл и callback-функция.
// Callback-функция срабатывает после завершения операции записи данных в файл и принимает в качестве аргумента
// объект ошибки. Если при выполнении операции ошибки не произошло, значение аргумента будет null.
fs.writeFile('./lesson28/Classwork/classwork28_3/test.txt', text, function (err) {

    // обработка ошибки
    if (err) {
        console.log(err)
    }

    // асинхронное чтение из файла
    // Метод для чтения данных из файла вызывается внутри callback функции для записи данных в файл, так как операция записи данных асинхронна
    // и при вызове метода для чтения файла вне callback-функции, он сработает раньше, чем данные будут записаны в файл.

});