var mysql = require('mysql');

// создать подключение к бд 

var pool = mysql.createPool({
    connectionLimit: 2,
    queueLimit: 10,
    aquireTimeout: 5000,
    host: 'localhost',
    user: 'root',
    password: '1111',
    database: 'test2'
});
module.exports = pool; 