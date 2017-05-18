var React = require('react');
class List extends React.Component {
    render() {
        return (
            <ul className="list-group">

                {this.props.data.map(function (item,index) {
                    return(<li className="list-group-item" key={index}>{item.first_name}{"\u00a0"}{item.last_name}{"\u00a0"}{item.email}{"\u00a0"}{item.gender}</li>)
                })}
            </ul>
        )
    }
}
module.exports = List;