/*###Задача 1
 Дополните код 3-й задачи предыдущего урока. Добавьте в приложение возможность удалять и редактировать элементы. Реализуйте следующее:
 * Добавьте на главную страницу приложения (страница, которая отображается при GET-запросе по пути '/'), поле ввода(для ввода id элемента) и 2 кнопки(Delete Item и Edit Item).

 * Если поле ввода не пустое, при нажатии на кнопку Delete Item осуществляется поиск в базе данных элемента по указанному в поле ввода ID и, в случае, если элемент найден, его удаление.

 * Если поле ввода не пустое, при нажатии на кнопку Edit Item осуществляется поиск в базе данных элемента по указанному в поле ввода ID и, в случае, если элемент найден, переход по пути '/editItem' и загрузка страницы редактирования элемента.
 * На странице редактирования элемента находятся 2 поля ввода: name и info и кнопка Apply.
 * Если поля ввода name и info не пустые, при нажатии на кнопку Apply осуществляется обновление элемента в базе данных.

 * После обновления или удаления элемента происходит перенаправление на главную страницу приложения.  */

var express  = require('express');
var app = express(); 
var path=require('path');
var mysql = require('mysql'); 
var bodyParser=require('body-parser');
var port = process.env.port || 8080;
var editIdHandler=require('./js/editIdHandler.js');
var deleteIdHandler=require('./js/deleteIdHandler.js');
var pool=require('./js/connection_pool');

// соединения могут быть объединены для облегчения их многократного использования 
// или использования больщого количесва соединений  


	app.use(bodyParser.json());



	app.set('views', path.join(__dirname, '/public/'));
	app.set('view engine', 'ejs');

	app.get('/addItem',function (req, res) {
		res.sendFile(path.join(__dirname, '/public/add.html'));
	})

	app.get('/edit/:id',editIdHandler.checkEditId)
	app.get('/editItem/:id',editIdHandler.loadEditPage)
	app.put('/editItem',editIdHandler.changeItem)
	app.get('/delete/:id',deleteIdHandler.checkDeleteId)

	app.post('/addItem',function (req, res) {

			console.log(req.body.name)
			pool.getConnection(function(err, conn){

				if (err) {
					console.log(err.stack);
					return;
				}
				var sql = 'INSERT INTO `test_table` (id, name, info) VALUES (?, ?, ?)'
				var inserts = [,req.body.name, req.body.info];
				var sql = mysql.format(sql, inserts);

				conn.query(sql, function (err, rows) {
					if (err) {
						console.log(err);
						return;
					}

					console.log('item inserted into database!');

				})


			})


			})


	app.get('/', function(req, res) {
		// создать соединение
		pool.getConnection(function(err, conn){

				if (err) {
					console.log(err.stack);
					return;
				}

				console.log('first connection');

				// использовать соединение
				conn.query('SELECT * FROM `test_table`', function(err, rows) {



					var data=`<table class="table"><th>ID</th><th>NAME</th><th>INFO</th>`
					for(var i=0;i<rows.length;i++)
					{
						data+=`
					<tr>
						<td>${rows[i].id}</td>
						<td>${rows[i].name}</td>
						<td>${rows[i].info}</td>
					</tr>
					`
					}


						data+=`</table>`;

					res.render('index', { data:  data });






				// закончить соединение, позволить ему быть использованным еще раз
					conn.release();
			});

		});
	});

	// событие connection генерируется при установлении подключения


	app.listen(port, function() {

		console.log('app listening on port ' + port);

	});


