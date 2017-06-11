var mysql = require('mysql');
var pool = require('./connection_pool');

var queries = require('./queries');

module.exports = {
    displayItems: function(req, res) {
        pool.getConnection(function (err, connection) {
            console.log(req.session);
            console.log(req.session.user);
            switch (req.url) {
                case "/print":
                    category="print";
                    break;
                case "/photography":
                    category="photography";
                    break;
                case "/web":
                    category="web";
                    break;
                case "/applications":
                    category="applications";
                    break;
                case "/home":
                    category="*";
                    break;
                default:
                    category="*";
            }
            var query = queries.getAllItems(connection,category);

            query.on('end', function() {

               if(req.session.user)
                   var user=req.session.user;
                res.render('index', { data: queries.tableRows,log:user,cat:category });

                connection.release();
            })

        })
    }
}
