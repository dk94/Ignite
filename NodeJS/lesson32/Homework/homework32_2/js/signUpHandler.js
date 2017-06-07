/**
 * Created by Dima on 04.06.2017.
 */
var mysql = require('mysql');
var pool = require('./connection_pool');
var passwordHandler=require('./password_handler');
module.exports=function(req,res){

    pool.getConnection(function(err,connection){
        if (err) {

            console.log(err.stack);
            return;
        }
        var username=req.body.username;
        var password=passwordHandler.encryptPassword(req.body.password);

        var sql = 'INSERT INTO `users` (username, passwordHash) VALUES (?, ?)'
        var inserts = [username, password];
        var sql = mysql.format(sql, inserts);
        connection.query(sql,function (err, rows) {
            console.log(1);
            if (err) {
                console.log(err);
                return;
            }

            res.end('done');
            console.log('item inserted into database!');

        })
        connection.release();


    })

}