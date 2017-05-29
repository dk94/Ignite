/**
 ### Задача 1
 Создайте HTTP сервер, который выводит в консоль HTTP методы запросов и их пути.
 */
var http=require('http');
var port=8080;

const server = http.createServer(function (req,res) {
    console.log(`Request method: ${req.method}`);
    console.log(`Request url: ${req.url}`);
})
    server.listen(port);

