import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router';
class TableView extends React.Component{
    constructor(props){
        super();

    }

    render(){
        return(
            <div>
                <br/>
                <h2>Table</h2>
                <table className="table text-center">
                    <tr >
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                    </tr>
                    {this.props.route.data.map(function (item,index) {
                        return(
                            <tr className="text-left" key={index}>
                                <Link to={{ pathname: `/view2/${index}`, query: {...item} }}>
                            <td>{item.first_name}</td>

                                </Link>
                                <td>{item.last_name}</td>
                                <td>{item.gender}</td>
                            </tr>
                        )

                    })}
                </table>
            </div>
        )
    }
}

module.exports=TableView;