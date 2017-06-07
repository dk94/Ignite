/**
 * Created by Dima on 26.05.2017.
 */
/*###Задача 3
 Дополните код предыдущей задачи. Добавьте 2 middleware-функции:
 * функция для обработки GET запроса по пути '/test'. Функция должна возвращать html страницу с полем ввода и кнопкой.
 * Если поле ввода не пустое, при нажатии на кнопку создается POST запрос по пути '/test'. Тело запроса - текст поля ввода.
 * функция для обработки POST запроса по пути '/test'. Функция выводит на экран тело запроса. */
    var express = require('express');
    var app = express();
    var bodyParser = require("body-parser");
    var port = process.env.port || 8080;
    var path=require('path');
    // middleware





            app.use(function (req, res,next) {
                console.log(`Path: ${req.path}`);
                console.log(`Method: ${req.method}`);
                next();

            });

            app.use(bodyParser.urlencoded({ extended: false }));


            app.get('/test', function(req, res) {

                res.sendFile(path.join(__dirname, '/public/add.html'));
                });


            app.post('/test', function(req, res) {
                // чтение данных POST запроса
                var data = req.body.text;
                console.log(`request text: ${data}`);
                res.writeHead(200, {'Content-Type':'text/html'});
                res.end(data);
            });

            app.use(function (req, res,next) {
            res.send('Hello from express!');

            });



    app.listen(port, function () {
            console.log('App listening on port ' + port);
        });