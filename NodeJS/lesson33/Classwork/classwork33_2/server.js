var restify = require('restify'),
    fs = require('fs'); 

var port = process.env.port || 8080;

// создание сервера 
var server = restify.createServer({
    name: 'myApp'
});

server.use(restify.bodyParser({ mapParams: true }));

var users = [
    { name: 'Jane', age: 23 }, { name: 'John', age: 30 }, { name: 'Vasya', age: 25 },
    { name: 'Yvonne', age: 34 }, { name: 'Will', age: 18 }, {name: 'Jack', age: 26}
];

// обработка get запроса 
server.get('/users', function (req, res, next) {
    res.send(JSON.stringify(users));

});

// обработка post запроса 
server.post('/users', function (req, res, next) {
    users.push({name: 'random user', age: 30});
    res.end();

});

server.use(function () {
    res.send(404); 
})

server.listen(port, function () {
    console.log('server running on port ' + port); 
});