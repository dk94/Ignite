var React = require('react');
const table= ({data,onClick})=> (


    <table className="table" >

        {data.map(function (item,index) {
            return(<tr key={index+10}>
                    <td>{item}</td>
                    <button key={index} onClick={() => onClick(index)} className='btn btn-lg btn-danger'>Completed</button>
                </tr>
            )
        })}
    </table>

)

export default table;