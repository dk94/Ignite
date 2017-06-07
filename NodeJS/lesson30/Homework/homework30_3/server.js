/**
 * Created by Dima on 26.05.2017.
 */
/*###Задача 3
 Модифицируйте код предыдущией задачи. Добавьте в код middleware-функцию для обработки ошибок. */
    var express = require('express');
    var app = express();

    var port = process.env.port || 8080;
    var path=require('path');
    // middleware

            users = [
                { name: 'Jane', age: 23 }, { name: 'John', age: 30 }, { name: 'Vasya', age: 25 },
                { name: 'Yvonne', age: 34 }, { name: 'Will', age: 18 }, {name: 'Jack', age: 26}
            ]
            app.get('/users', function(req, res) {

            res.sendFile(path.join(__dirname, '/public/add.html'));
            });

                app.use('/users/:id', function (req, res) {
                    res.send(`user id:${req.params.id}\nuser name:${users[req.params.id].name}\nuser age:${users[req.params.id].age}`);

                })

            app.use('/error', function(req, res, next) {
                next(new Error('Some error'));
            });

            app.use(function(err, req, res, next) {
                res.status(500).send('Server Error! ' + err.message);
                next(err.message);
            });

            app.use(function(req, res) {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('404 Page not found!');
            });



            app.listen(port, function () {
                console.log('App listening on port ' + port);
            });