/**
 * Created by Dima on 26.05.2017.
 */
/*###Задача 1
Напишите код, который выводит в консоль сумму аргументов, переданных в командной строке при запуске файла.*/
    var array=process.argv[2].split(',');
var result = array.reduce(function(sum, current) {
    return sum + (+current);
}, 0);


console.log(`sum: ${result}`);