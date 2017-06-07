/**
 * Created by Dima on 26.05.2017.
 */
/*###Задача 2
Дополните код предыдущей задачи. Напишите middleware-функцию, которая будет выводить в консоль путь и HTTP метод запроса.*/
    var express = require('express');
var app = express();

var port = process.env.port || 8080;

// middleware
app.use(function (req, res,next) {
    res.send('Hello from expresfdfs!');
    next();
});
app.use(function (req, res) {
    console.log(`Path: ${req.path}`);
    console.log(`Method: ${req.method}`);
    res.end();

});

app.listen(port, function () {
    console.log('App listening on port ' + port);
});