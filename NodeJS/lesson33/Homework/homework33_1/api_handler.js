// соединение с бд 

var mysql = require('mysql');
var path = require('path');

var todos = [
    { id: 1, name: 'Work', description: 'Stuff to do' }, { id: 2, name: 'Walk the dog', description: 'Need to get up early' },
    { id: 3, name: 'Finish project', description: 'An important task' }, { id: 4, name: 'Earn a lot of money', description: 'As soon as possible' },
    { id: 5, name: 'Go to sleep', description: 'late at night'}
];

module.exports = {
    // згрузка всех элементов
    loadItems: function (req, res) {

           res.send(todos);

    },


    // создание элемента 
    createItem: function (req, res) {

        var data = req.body;
        if(todos.length==0)
            todos.push({id:0,name:data.name,description:data.description});
        else{
        var id=todos[todos.length-1].id+1;
        todos.push({id:id,name:data.name,description:data.description});
        }
        res.end();

    },
    // обновление элемента (редактирование) 
    updateItem: function (req, res) {

            var data = req.body;


        todos.map(function(item,index){

            if(item.id==+req.params.itemID)
                todos[index]={id:data.id,name:data.name,description:data.description};
        })


            res.end();


    },
    // удаление элемента 
    removeItem: function (req, res) {


            todos.map(function(item,index){

                if(item.id==+req.params.itemID)
                    todos.splice(index,1);
            })


            res.end();


        }
}