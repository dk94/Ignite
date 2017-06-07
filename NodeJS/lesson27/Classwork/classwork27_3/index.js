/**
 ###Задача 3
 Загрузите модуль test.js из папки test(папка находится рядом с файлом с задачами) 3-мя разными способами.
 */


//1-й способ

var test=require('./test/test.js');

test();
//2-й способ

var test=require('./test');

test();

//3-й способ

var test=require('test');

test();

