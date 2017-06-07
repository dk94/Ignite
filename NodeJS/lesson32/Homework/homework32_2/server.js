/*###Задача 2
 Создайте страницу регистрации пользователей.

 База данных для сохранения сессий(таблица sessions) и пользователей(таблица users) находится в папке db рядом с файлом с задачами.
 Модуль для работы с паролем(его хэширования и проверки) находится в папке Homework рядом с файлом с задачами.

 * Создайте страницу с полями ввода username и password и кнопкой sign up.
 * Если поля ввода не пустые, при нажатии на кнопку sign up, пароль хэшируется.
 * Хэш пароля и имя пользователя сохраняются в таблице users базы данных session_test. */

var express  = require('express');
var app = express(); 
var path=require('path');
var mysql = require('mysql'); 
var bodyParser=require('body-parser');
var port = process.env.port || 8080;
var signUpHandler=require('./js/signUpHandler')

// соединения могут быть объединены для облегчения их многократного использования 
// или использования больщого количесва соединений  


	app.use(bodyParser.json());





	app.get('/',function (req, res) {
		res.sendFile(path.join(__dirname, '/public/signUp.html'));
	})


	app.post('/signUp',signUpHandler)




	app.listen(port, function() {

		console.log('app listening on port ' + port);

	});


