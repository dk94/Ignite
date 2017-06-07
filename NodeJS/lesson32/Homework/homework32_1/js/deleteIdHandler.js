/**
 * Created by Dima on 03.06.2017.
 */
var mysql = require('mysql');
var pool = require('./connection_pool');
var queries=require('./queries')

module.exports = {

        checkDeleteId:function(req,res){

            pool.getConnection(function (err, conn) {
                if (err) {

                    console.log(err.stack);
                    return;
                }

                var query=queries.findItemById(req.params.id,conn)

                query.on('end', function () {
                    var row= queries.selectedRow;
                    if(row){
                        conn.release();
                        pool.getConnection(function (err, conn) {
                            if (err) {

                                console.log(err.stack);
                                return;
                            }
                            var query=queries.deleteItemById(req.params.id,conn)
                            query.on('end',function () {
                                res.end('/');
                                conn.release();
                            })
                        })
                    }

                })
            })


        },
}