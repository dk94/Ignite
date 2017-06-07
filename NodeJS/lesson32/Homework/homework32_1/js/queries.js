var mysql = require('mysql');

module.exports = {


    selectedRow: '',
    // поиск элемента по id 
    findItemById: function (id, connection) {
        var self = this;
        var query = connection.query('SELECT * FROM `test_table` WHERE id=?', [id], function (err, rows) {
            if (err) console.log(err);
            self.selectedRow = rows[0];
        })
        return query;
    },
    // редактирование элемента
    updateItem: function (data, connection) {

        // форматирование запроса
        var sql = 'UPDATE `test_table` SET name=?, info=? WHERE id=?';
        var inserts = [data.name, data.info, data.id];
        console.log(data);
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

    deleteItemById: function (id, connection) {
            var query = connection.query('DELETE  FROM `test_table` WHERE id=?', [id], function (err, rows) {
            if (err) console.log(err);
        })
        return query;
    }
}
