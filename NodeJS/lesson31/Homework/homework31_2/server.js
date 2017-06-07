/*###Задача 2
 Дополните код предыдущей задачи. Реализуйте следующее:
 * При GET-запросе по пути '/addItem' открывается html страница с 2 полями ввода(name, info) и кнопкой.
 * Если поля ввода(или одно из полей ввода) не пустые, при нажатии на кнопку выполняется добавление нового элемента в базу
   данных(данные полей ввода сохраняются в соответсвующих колонках таблицы базы данных).
 * После завершения запроса добавления элемента в базу данных, происходит редирект на главную страницу(GET-запрос по пути '/'). */

var express  = require('express');
var app = express(); 
var path=require('path');
var mysql = require('mysql'); 
var bodyParser=require('body-parser');
var port = process.env.port || 8080;


// соединения могут быть объединены для облегчения их многократного использования 
// или использования больщого количесва соединений  
var pool = mysql.createPool({
	connectionLimit: 2, // максимальное количество соединений, которые могут быть созданы одновременно
	queueLimit: 10, // максимальное разрешенное количество соединений в очереди обработки 
	aquireTimeout: 5000, // максимальное время ожидания при установке соединения 
	host: 'localhost', 
	user: 'root', 
	password: '1111',
	database: 'test2'
});

	app.use(bodyParser.json());



app.set('views', path.join(__dirname, '/public/'));
app.set('view engine', 'ejs');



app.get('/addItem',function (req, res) {
    res.sendFile(path.join(__dirname, '/public/add.html'));
})

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
        res.end('/');

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


