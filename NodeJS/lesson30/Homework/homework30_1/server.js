/**
 * Created by Dima on 26.05.2017.
 */
/*###Задача 2
 Дано массив users:
 ```
 users = [
 { name: 'Jane', age: 23 }, { name: 'John', age: 30 }, { name: 'Vasya', age: 25 },
 { name: 'Yvonne', age: 34 }, { name: 'Will', age: 18 }, {name: 'Jack', age: 26}
 ]
 ```

 Реализуйте следующее:
 * При GET-запросе по пути /users массив users отображается на странице в виде списка(по свойству name).
 * При клике по каждому из элементов списка отправляется GET-запрос по пути /users/userID, где userID - свойство id массива users,
  * соответствующее элементу списка.  */
var express = require('express');
var app = express();
var port = process.env.port || 8080;
var path=require('path');

app.use(express.static(path.join(__dirname,'/public')));

app.listen(port, function () {
    console.log('App listening on port ' + port);
});