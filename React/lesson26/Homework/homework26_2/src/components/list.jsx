var React = require('react');
const list= ({data,onClick})=> (


            <ul className="list-group" >

                {data.map(function (item,index) {
                    return(<div key={index+10}>
                        <li className="list-group-item">{item}</li>
                            <button key={index} onClick={() => onClick(index)} className='btn btn-lg btn-danger'>Completed</button>
                        </div>
                    )
                })}
            </ul>

            )

    export default list;

