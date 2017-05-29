/**
 * Created by Dima on 28.05.2017.
 */
var http=require('http');
var port=8080;

const server = http.createServer(function (req,res) {
    console.log(`Request method: ${req.method}`);
    console.log(`Request url: ${req.url}`);

    if(req.url=='/test'&&req.method=='GET'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        var json=JSON.stringify({"message": "Hello World!"});
        res.end(json);
        console.log("data sent");

    }
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