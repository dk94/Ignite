import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router';
class listView extends React.Component{
    constructor(props){
        super();

    }

    render(){
        return(
            <div>
                <br/>
                <h2>List</h2>
            <ul className="list-group">
                {this.props.route.data.map(function (item,index) {
                    return(
                    <Link to={{ pathname: `/view1/${index}`, query: {...item} }}>
                        <li className="list-group-item" key={index}>{item.first_name}{"\u00a0"} {item.last_name}</li>
                    </Link>
                    )

                })}
            </ul>
            </div>
        )
    }
}

module.exports=listView;
