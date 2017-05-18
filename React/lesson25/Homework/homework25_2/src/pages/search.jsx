var React = require('react');

// импорт действий toDoActions
var TodoActions = require('../actions/toDoActions');

class Search extends React.Component {
    constructor(props) {
        super(props)
    }
    searchHandler(){
        var value=document.getElementById('taskName').value;
        TodoActions.search(value);
    }
    render() {
        // создание списка заданий на основе props
        return(
                <div>
                    <label>Search: &nbsp; <input id="taskName" type="text" className="form-control" /></label>
                    <button id="btn" className="btn btn-sm btn-warning" onClick={this.searchHandler}>Search</button>
                </div>
        )}
}

module.exports = Search;