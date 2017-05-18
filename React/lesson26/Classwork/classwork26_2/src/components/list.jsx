var React = require('react');
class List extends React.Component {
    render() {
        return (
            <ul className="list-group">

                {this.props.data.map(function (item,index) {
                    return(<li className="list-group-item" key={index}>{item}</li>)
                })}
            </ul>
        )
    }
}
module.exports = List;