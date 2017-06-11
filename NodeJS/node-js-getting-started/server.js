var express  = require('express');
var app = express();

var fs = require('fs');

const session = require('express-session');
const mySQLStore = require('express-mysql-session')(session);
var bodyParser = require('body-parser');

const sessionStore = new mySQLStore({
    host: 'us-cdbr-iron-east-03.cleardb.net',
    port: 3306,
    user: 'b65b5b170a3038',
    password: '8b2b9daa',
    database: 'heroku_d33178b88958149',
    checkExpirationInterval: 900000,
    // время жизни сессии(миллисекунды)
    expiration: 86400000

});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({


    secret: 'S3CRE7',
    saveUninitialized: true,
    resave: false,
    store: sessionStore

}));


var path = require('path');
var bodyParser = require('body-parser');

var port = process.env.PORT || 5000;

var mysql = require('mysql');

// подключение модулей для обработки запросов
var displayHandler = require('./js/displayhandler');
var insertHandler = require('./js/inserthandler');
var editHandler = require('./js/edithandler');
var infoHandler = require('./js/infohandler');

// установка генератора шаблонов
app.set('views', path.join(__dirname, 'pages'));
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'pages')));


var jsonParser = bodyParser.json();
var textParser = bodyParser.text();

app.use(jsonParser);
app.use(textParser);


app.get('/',  function(req, res) {
    res.redirect('/home');
});
app.post('/send',  function(req, res) {
    var data="Name:"+req.body.name+",Email:"+req.body.email+",Subject:"+req.body.subject+",Message:"+req.body.message+'\n';

    fs.appendFile('file.txt', data, function(err) {
        if(err) {
            console.log(err)
        }
    });
    res.redirect('/home')
});
app.get('/home', displayHandler.displayItems);
app.get('/web', displayHandler.displayItems);
app.get('/print', displayHandler.displayItems);
app.get('/applications', displayHandler.displayItems);
app.get('/photography', displayHandler.displayItems);

// загрузка страницы для создания нового элемента
app.get('/new', insertHandler.loadAddPage);
app.get('/contact', function (req, res) {
    res.render('Contact.ejs');
});


app.post('/login',function(req,res){
    var logged=false;
    if (req.body.name=="admin"&&req.body.password=="12345" ) {
        logged = true;

        req.session.user = req.body.name;
        console.log(req.session)
        console.log(req.session.user)
        res.send("You are logged");
    }
    else {req.session.user=false;
        logged = false;
        res.send('Name or password is not correct');
    }

});
// добавить новый элемент
app.post('/upload', insertHandler.addRow);

// загрузка страницы для редактирования элементов
app.get('/edit/:id', editHandler.loadEditPage);
app.get('/info/:id', infoHandler.loadInfoPage);

// редактирование элемента в бд
app.put('/update/:id', editHandler.changeItem);

// удаление элемента из бд
app.delete('/edit/:id', editHandler.removeItem);



// обработка ошибок
app.use(function(err, req, res, next) {
    if (err) console.log(err.stack);

    res.status(500).send('oops...something went wrong');
});

app.listen(port, function() {

    console.log('app listening on port ' + port);

});

