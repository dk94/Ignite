var mysql = require('mysql');

// создать подключение к бд 
var pool = mysql.createPool({
    host: 'us-cdbr-iron-east-03.cleardb.net',
    port: 3306,
    user: 'b65b5b170a3038',
    password: '8b2b9daa',
    database: 'heroku_d33178b88958149'
});

module.exports = pool; 