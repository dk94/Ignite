/**
 ### Задача 3
 Добавьте в код предыдущих задач обработку ошибок: при запросе по несуществующему пути(все пути, кроме '/' и '/test'
 (с POST запросом)) на экран должно выводиться сообщение об ошибке,
 а статус-код ответа сервера должен быть 404.
 */
var http=require('http');
var port=8080;
var fs=require('fs');
var count=1;
const server = http.createServer(function (req,res) {

    if(req.method=='GET'&&req.url=='/'){

        var headers = req.headers;

        var body = '';
        for (var prop in headers) {
            body += `${prop}: ${headers[prop]} \n\r`
        }

        var writerStream = fs.createWriteStream(`lesson29/Homework/homework29_2/${count}.txt`);
        res.end(body);
        console.log("data from get req written")


        writerStream.write(body);

        count++;
    }

    else if(req.method=='POST'&&req.url=='/test'){
    var headers = req.headers;

    var body = '';
    req.on('data', function (data) {

        body = data.toString();

        // создание тела ответа
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(body);
        res.end();

        console.log(`data from request: ${body}`);
    });



    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('Resource not found');
    }
})
server.listen(port,function () {

    // Создание POST запроса
    // данные для передачи с POST запросом
    var postData = 'This is sample POST data!';

    // Параметры создаваемого запроса
    var options = {
        host: 'localhost',
        port: port,
        method: 'POST',
        headers: {'Content-Type': 'text/plain'},
        path: '/test'
    };


    // сделать запрос на сервер
    var req = http.request(options);


    req.write(postData); // запись данных в тело запроса
    req.end();
});