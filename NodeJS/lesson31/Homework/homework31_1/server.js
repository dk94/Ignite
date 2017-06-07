/*###Задача 1
Создайте подключение к базе данных test через пул соединений.
    При GET-запросе по пути '/' выполните запрос к базе данных для выбора всех элементов таблицы test_table и отобразите ихз в виде таблицы.*/

var express  = require('express');
var app = express(); 

var mysql = require('mysql');
var path=require('path');
var port = process.env.port || 8080;


// соединения могут быть объединены для облегчения их многократного использования 
// или использования больщого количесва соединений  
var pool = mysql.createPool({
	connectionLimit: 1, // максимальное количество соединений, которые могут быть созданы одновременно
	queueLimit: 10, // максимальное разрешенное количество соединений в очереди обработки 
	aquireTimeout: 5000, // максимальное время ожидания при установке соединения 
	host: 'localhost', 
	user: 'root', 
	password: '1111',
	database: 'test2'
});

app.set('views', path.join(__dirname, '/public/'));
app.set('view engine', 'ejs');


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
                console.log(data);
                res.render('index', { data:  data });
                
			// закончить соединение, позволить ему быть использованным еще раз
			    conn.release();
		}); 

	});
});

// событие connection генерируется при установлении подключения 
pool.on('connection', function() {
	console.log('connected');  
}); 

app.listen(port, function() { 

	console.log('app listening on port ' + port); 

}); 


