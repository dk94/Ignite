/*
 ###Задача 3
 Добавьте в таблицу test_table базы данных test один элемент.  */
var express  = require('express');
var app = express(); 

var port = process.env.port || 8080;

var mysql = require('mysql'); 

// параметры соединеня с бд
var connection = mysql.createConnection({
	host: 'localhost', // имя хоста базы данных
	user: 'root', // MySQL пользователь, под именем которого авторизоваться
	password: '1111', // пароль пользователя MySQL
	database: 'test', // имя базы данных
	port: 3306 // порт, на котором установлен MySQL сервер
}); 

app.use(function(req, res) { 



		// подключение к базе данных
		connection.connect(function(err) { 

			if (err) console.log(err.stack); 

			 console.log('connected as id ' + connection.threadId);
		});


    		var sql = 'INSERT INTO `test_table` (id, name, info) VALUES (?, ?, ?)'
    		var inserts = [, 'Item3', 'A lot of stuff'];
    		var sql = mysql.format(sql, inserts);

			// запрос к бд
			connection.query(sql, function (err, rows) {
				if (err) {
					console.log(err);
					return;
				}

				console.log('item inserted into database!');

			})


		// запрос к базе данных 
		connection.query('SELECT * FROM `test_table`', function(err, rows) {


            if (err) console.log(err.stack);

            res.write('<table>');

            for (var i = 0; i < rows.length; i++) {
                res.write(`
				<tr>
					<td>${rows[i].id}</td>
					<td>${rows[i].name}</td>
					<td>${rows[i].info}</td>
				</tr>
			`)
            };
            res.write('</table>');
            res.end();

			console.log('query to database successful'); 
		}); 

		res.on('finish', function() {

			// отключение от базы данных 
			connection.end(function(err) {

				if (err) console.log(err.stack); 

				console.log('disconnected from database'); 
			}); 

		})


}); 

app.listen(port, function() { 

	console.log('app listening on port ' + port); 

}); 