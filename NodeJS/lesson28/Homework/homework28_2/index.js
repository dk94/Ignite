/*
 ###Задача 2
 Рядом с файлом с задачами в папке Homework находится файл test.txt.
 Напишите код, который выведет в консоль с 10 по 15 байт этого файла.
* */
var fs = require('fs');
fs.open('lesson28/Homework/homework28_2/test.txt', 'r', function (err, fd) {
    console.log('opening file!');
    if (err) {
        console.log(err);
    }
    else {


        const buffer = Buffer.alloc(6);

        // Метод read позволяет читать данные из файла, принимает аргументы:
        // fd - число, дескриптор файла (то есть, ссылка на текущий файл, используемый данной функцией)
        // buffer - буфер, в который будут помещены прочитанные данные
        // offset, length - определяют часть буфера в которую следует записать в файл
        // position - отступ от начала файла, данные которого считываются
        // callback - функция, принимающая аргументы err, bytesRead, buffer
        fs.read(fd, buffer, 0, buffer.length, 10, function (err, bytes, buffer) {

            console.log('reading from file!');

            if (err) throw err;

            console.log(buffer);
            console.log(buffer.toString())


        });

        // закрыть файл
        fs.close(fd, function (err) {
            if (err) throw err;
            console.log('file closed!');
        })
    }
});
