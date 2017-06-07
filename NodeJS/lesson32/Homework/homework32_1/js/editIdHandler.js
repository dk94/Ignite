var mysql = require('mysql');
var pool = require('./connection_pool');
var queries=require('./queries')


module.exports =  {


    checkEditId:function(req,res){

        pool.getConnection(function (err, conn) {
            if (err) {

                console.log(err.stack);
                return;
            }

             var query=queries.findItemById(req.params.id,conn)
                
            query.on('end', function () {
               var row= queries.selectedRow;
               if(row){

                   res.end(`editItem/${req.params.id}`);
               }
               else
                   res.end('error')
               conn.release();

            })
            })


    },
    loadEditPage: function (req, res) {

        // подключение к бд
        pool.getConnection(function (err, connection) {

            // запрос к бд
            var query = queries.findItemById(req.params.id, connection);

            query.on('end', function () {
                var row = queries.selectedRow;

                res.render('edit', {
                    id: row.id,
                    name: row.name,
                    info: row.info,

                });

                // завершение соединения
                connection.release();
            });
        })

    },
    changeItem: function (req, res) {

        // подключение к бд
        console.log(333);
        pool.getConnection(function (err, connection) {
            // запрос к бд
            var query = queries.updateItem(req.body, connection);

            query.on('end', function () {
                res.end();
                // завершение соединения
                connection.release();

            });
        });
    }


}