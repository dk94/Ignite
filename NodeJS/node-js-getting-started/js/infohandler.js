var mysql = require('mysql');
var pool = require('./connection_pool');

var queries = require('./queries');

module.exports = {
    loadEditMode: function(req, res) {

    },
    loadInfoPage: function (req, res) {

        // подключение к бд
        pool.getConnection(function (err, connection) {

            // запрос к бд
            var query = queries.findItemById(req.params.id, connection);

            query.on('end', function () {
                var row = queries.selectedRow;
                var month=new Date(row.date).getMonth()+1;

                res.render('Info', {
                    id: row.id,
                    title: row.title,
                    description: row.description,
                    author: row.author,
                    category:row.category,
                    src:row.src,
                    date:new Date(row.date).getDate()+"."+month+"."+new Date(row.date).getFullYear()

                });

                // завершение соединения
                connection.release();
            });
        })

    },

}