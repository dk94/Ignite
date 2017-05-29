/**
 * Created by Dima on 29.05.2017.
 */
var React = require('react');
const list= ({data,onClick,edit,removeToDo})=> (


    <ul className="list-group" >

        {data.map(function (item,index) {
            return(<div key={index+10}>
                    <li className="list-group-item">{item}</li>
                    <div className="text-center">
                        <i onClick={()=>{edit(index);document.getElementById('addInp').value=item}} className="fa fa-pencil-square-o" aria-hidden="true"/>
                        <i onClick={()=>{removeToDo(index)}} className="fa fa-times" aria-hidden="true"/>
                    </div>


                </div>
            )
        })}
    </ul>

)

export default list;
