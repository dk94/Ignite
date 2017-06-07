var restify = require('restify'),
    fs = require('fs'); 

var port = process.env.port || 8080;

// создание сервера 
var server = restify.createServer({
    name: 'myApp'
});

server.use(restify.bodyParser({ mapParams: true }));

// обработка get запроса 
server.get('/test', function (req, res, next) {
    res.send(req.headers);

});

// обработка post запроса 
server.post('/test', function (req, res, next) {
    res.send(req.body);

});

server.use(function () {
    res.send(404); 
})

server.listen(port, function () {
    console.log('server running on port ' + port); 
});