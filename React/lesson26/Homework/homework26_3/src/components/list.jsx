var React = require('react');
const list= ({data,onClick})=> (


            <ul className="list-group" >

                {data.map(function (item,index) {
                    return(<div key={index+10}>
                        <li className="list-group-item">{item}</li>

                        </div>
                    )
                })}
            </ul>

            )

    export default list;

