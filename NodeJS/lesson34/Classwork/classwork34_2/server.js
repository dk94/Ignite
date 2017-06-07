// подключение express и socket.io 
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var path = require('path'); 

var port = process.env.port || 8080;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', function (socket) {
   
    // метод send автоматически генерирует событие 'message'
    socket.emit('greet',{text: 'Hello from Socket.IO'})
    socket.on('receive_message', function(){
        console.log('message received');
    })

})



server.listen(port, function () {
    console.log('app running on port ' + port); 
})