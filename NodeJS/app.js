/**
 * Created by Dima on 24.05.2017.
 */
const http = require('http');
const port = process.env.port || 8080;

var express=require('express');
const server = http.createServer().listen(port);

server.on('request', function (request, response) {
    //response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('Hello Worxld');


});

server.on('connection', function () {
    console.log("connection");
});
