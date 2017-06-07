/**
 ### Задача 1
 Создайте HTTP сервер, который записывает заголовки каждого запроса в отдельный файл,
 имя которого - номер запроса(1 - для первого запроса, 2 - для второго и т.д.).
 */
var http=require('http');
var port=8080;
var fs=require('fs');
var count=1;
const server = http.createServer(function (req,res) {




    var headers = req.headers;

    var body = '';
    for (var prop in headers) {
        body += `${prop}: ${headers[prop]} \n\r`
    }

    var writerStream = fs.createWriteStream(`lesson29/Homework/homework29_1/${count}.txt`);


    writerStream.write(body);

    count++;
})
server.listen(port);