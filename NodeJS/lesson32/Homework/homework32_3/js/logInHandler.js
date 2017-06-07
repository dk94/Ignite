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
        var username = req.body.username;



        var password = passwordHandler.encryptPassword(req.body.password);



        var sql = 'SELECT * FROM `users` WHERE username=?'
        var inserts = [username];
        var sql = mysql.format(sql, inserts);

        var query=connection.query(sql,function (err, rows) {
            if (err) {
                console.log(err);
                return;
            }

            if(rows.length==0)
                res.end('Wrong username or password. Please, check in')
            else if(rows[0].passwordHash!==password)
                res.end('Wrong username or password. Please, check in')
             else {
                req.session.nick=username;

                res.end('true');


            }

        })







    })

}
