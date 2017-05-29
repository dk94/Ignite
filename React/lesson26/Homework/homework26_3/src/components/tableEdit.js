var React = require('react');
const table= ({data,onClick,edit,editInp,removeToDo})=> (


    <table className="table" >

        {data.map(function (item,index) {
            return(<tr key={index+10}>
                    <td>{item}
                    <div className="text-center">
                        <i onClick={()=>{edit(index);document.getElementById('addInp').value=item}} className="fa fa-pencil-square-o" aria-hidden="true"/>
                        <i onClick={()=>{removeToDo(index)}} className="fa fa-times" aria-hidden="true"/>
                    </div>
                    </td>
                </tr>
            )
        })}
    </table>

)

export default table;