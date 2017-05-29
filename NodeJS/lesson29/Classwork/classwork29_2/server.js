/**
 ### Задача 2
 Модифицируйте код предыдущей задачи. Добавьте код, который отправляет GET запрос по пути '/test'.
 */

var http=require('http');
var port=8080;

const server = http.createServer(function (req,res) {
    console.log(`Request method: ${req.method}`);
    console.log(`Request url: ${req.url}`);
})
server.listen(port,function () {

    var options = {
        host: 'localhost',
        port: port,
        path: '/test'
    };


    var req = http.request(options);
    req.end();

});
