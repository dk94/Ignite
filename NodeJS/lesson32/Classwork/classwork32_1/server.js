var express = require('express');
var http = require('http');
var app = express();

var port = process.env.port || 8080;

var cookieParser = require('cookie-parser');


app.use(cookieParser('this is a secret!!!'))


app.all('*',function (req, res) {

    res.cookie('cookie', 'DemoSignedCookie', {
        expires: new Date(Date.now() + 604800000),
        httpOnly: true,
        // создание cookie с подписью 
        signed: true
    })


    res.end(`Cookie: ${req.signedCookies.cookie}`);



    console.log('Cookies: ', req.signedCookies)
})

app.listen(port, function () {
    console.log('app running on port ' + port);
})