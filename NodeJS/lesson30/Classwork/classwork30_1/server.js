/**
 * Created by Dima on 26.05.2017.
 */
var express = require('express');
var app = express();

var port = process.env.port || 8080;

// middleware
app.use(function (req, res) {
    res.send('Hello from express!');
});

app.listen(port, function () {
    console.log('App listening on port ' + port);
});