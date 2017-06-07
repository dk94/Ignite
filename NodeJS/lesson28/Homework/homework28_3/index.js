/**
 ###Задача 3
 Используя потоки(Streams) прочитайте с 10 по 20 байт файла test.txt и сохраните результат в файле output.txt.
 */
const fs = require('fs');
var path=require('path');


var fileReadStream = fs.createReadStream(path.join(__dirname,'test.txt'), {start: 10, end: 20});

var fileWriteStream = fs.createWriteStream(path.join(__dirname,'output.txt'));

fileReadStream.pipe(fileWriteStream);

fileWriteStream.on('finish', function () {
    console.log('data written to file output.txt');
});