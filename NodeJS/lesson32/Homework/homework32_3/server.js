/*###Задача 3
 Дополните код предыдущей задачи.
 Создайте страницу авторизации.

 * Создайте страницу с полями ввода username, password и кнопкой log in.
 * Если поля ввода не пустые, при нажатии на кнопку происходит проверка пароля и имени пользователя.
 * При успешном исходе проверки пароля и имени пользователя, сохраните имя пользователя в качестве свойства сессии. */

var express  = require('express');
var app = express();
var path=require('path');
var mysql = require('mysql'); 
var bodyParser=require('body-parser');
var port = process.env.port || 8080;
var signUpHandler=require('./js/signUpHandler')
var logInHandler=require('./js/logInHandler')
var session = require('express-session');
var cookieParser=require('cookie-parser');

// подключение модуля express-mysql-session
var MySQLStore = require('express-mysql-session')(session);

var options = {
    // параметры соединения с бд
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1111',
    database: 'session_test2',
    checkExpirationInterval: 900000,
    // время жизни сессии(миллисекунды)
    expiration: 86400000

};


var sessionStore = new MySQLStore(options);
app.use(cookieParser());
app.use(session({

    secret: 'secret',
    saveUninitialized: true,
    resave: true,
    store: sessionStore
}));
	app.set('views', path.join(__dirname, './public'));
	app.set('view engine', 'ejs');

	app.use(bodyParser.json());





	app.get('/',function (req, res) {
		console.log(req.session.nick);
		res.render('index.ejs',{data:req.session.nick});
	})

	app.get('/logIn',function (req, res) {
		res.sendFile(path.join(__dirname, '/public/logIn.html'));
	})
	app.get('/signUp',function (req, res) {
		res.sendFile(path.join(__dirname, '/public/signUp.html'));
	})



    app.post('/signUp',signUpHandler)
	app.post('/logIn',logInHandler)




	app.listen(port, function() {

		console.log('app listening on port ' + port);

	});


