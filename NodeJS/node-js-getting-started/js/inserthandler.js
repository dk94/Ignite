var mysql = require('mysql');
var pool = require('./connection_pool');
var path = require('path');
var multer = require('multer');
var queries = require('./queries');


module.exports = {
    loadAddPage: function(req, res) {
        pool.getConnection(function (err, connection) {
            queries.getMaxId( connection);
            res.render('newItem.ejs');

        })

    },
    addRow: function (req, res) {
        console.log(req.file);
        // подключение к бд
        pool.getConnection(function (err, connection) {
            var query = queries.insertItem(req.body, connection);

           
            query.on('end', function () {
              
                res.end();
                // завершение соединения
                connection.release();
            })
        })
    }
}