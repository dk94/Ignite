var mysql = require('mysql');
var pool = require('./connection_pool');

var queries = require('./queries');

module.exports = {
    loadEditMode: function(req, res) {

    },
    loadEditPage: function (req, res) {

        // подключение к бд
        pool.getConnection(function (err, connection) {

            // запрос к бд
            var query = queries.findItemById(req.params.id, connection);

            query.on('end', function () {
                var row = queries.selectedRow;

                res.render('EditItem', {
                    id: row.id,
                    title: row.title,
                    description: row.description,
                    author: row.author,
                    category:row.category,
                    src:row.src
                });

                // завершение соединения
                connection.release();
            });
        })

    },

    changeItem: function (req, res) {

        // подключение к бд
        pool.getConnection(function (err, connection) {
            // запрос к бд
            var query = queries.updateItem(req.body, connection);

            query.on('end', function () {

                res.end();

                // завершение соединения
                connection.release();


            });
        });
    },

    removeItem: function (req, res) {
        // подключение к бд
        pool.getConnection(function (err, connection) {
            // запрос к бд
            var query = queries.removeItem(req.params.id, connection);

            query.on('end', function () {
                res.end();
                // завершение соединения
                connection.release();

            })
        })

    }
}

