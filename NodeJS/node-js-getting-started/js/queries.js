var mysql = require('mysql');

module.exports = {
    maxid:'',
    selectedRow: '',
    // поиск элемента по id 
    findItemById: function (id, connection) {
        var self = this;
        var query = connection.query('SELECT * FROM `projects` WHERE id=?', [id], function (err, rows) {
            if (err) console.log(err);
            self.selectedRow = rows[0];
        })
        return query;
    },
    // редактирование элемента 
    updateItem: function (data, connection) {

        // форматирование запроса
        var sql = 'UPDATE `projects` SET title=?, description=?, author=?,category=?  WHERE id=?';
        var inserts = [data.title, data.description, data.author,data.category, data.id];
        sql = mysql.format(sql, inserts);

        var query = connection.query(sql, function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log('database updated');
            }
        });
        return query;
    },
    tableRows: '',
    // выбор всех элементов и отображение
    getAllItems: function (connection,category) {
        var self = this;
        if(category=="*"){
            var sql='SELECT * FROM `projects`  ';
        }else{
            var sql='SELECT * FROM `projects` WHERE category=? ';
        }
        var query = connection.query(sql, [category], function (err, rows) {
            if (err) console.log(err)


            var table_rows = rows.map((row) => {
                return (` <div class="col-md-6 col-lg-4"  style="padding:5px;" id="${row.id}">
                                <img class="img-fluid" src="${row.src}">
                                <div class="outer">
                                    <div class="icons">
                                    <i class="edit fa fa-pencil fa-2x fa-border" aria-hidden="true"></i>
                                    <i class="information fa fa-info fa-2x fa-border" aria-hidden="true"></i>
                                    <br>
                                    <i class="delete fa fa-times fa-lg fa-border" aria-hidden="true"></i>
                                    </div>
                                </div>
                             </div> 
                `)
            })

            self.tableRows = table_rows.join(' ');

        });
        return query;
    },

    getMaxId:function(connection){
        var self=this;
        var  query=connection.query('SELECT MAX(id) AS id FROM projects', function (err, rows) {
            self.maxid= rows[0].id;
        })
        return query;
    },
    insertItem: function (data, connection) {
        var date=new Date();
        var id =this.maxid+1;
        // форматирование запроса
        var sql = 'INSERT INTO `projects` (title, description, author, category, date, src, id) VALUES (?, ?, ?, ?, ?, ?, ?)'
        var inserts = [data.title, data.description, data.author, data.category, date, "uploads/001.jpg", id];
        var sql = mysql.format(sql, inserts);

        // запрос к бд
        return query = connection.query(sql, function (err, rows) {
            if (err) {
                console.log(err);
                return;
            }

            console.log('item inserted into database!');
        })
    },

    removeItem: function (id, connection) {
        // форматирование запроса 
        var sql = 'DELETE FROM `projects` WHERE id=?';
        var inserts = id;
        sql = mysql.format(sql, inserts);

        // запрос к бд 
        return connection.query(sql, function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log('item removed from database!');
            }
        })
    }

}