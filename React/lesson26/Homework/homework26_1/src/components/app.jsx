import React,{ PropTypes } from 'react'
import AddToDo from './AddToDo.jsx';
import ListCont from '../containers/ListCont.jsx';
import {TableCont} from '../containers/ListCont.jsx';

const App =({flag,onChange})   => (
            <div className="text-center" style={{width:"50%",margin:"0 auto"}}>
                <h2>Redux ToDoList</h2>

                <AddToDo/>
                <br/>
                <h4>ListView:</h4>
                <input type="checkbox" checked={flag} onChange={()=>onChange()}/>

                {flag==true?
                    <ListCont/>:
                    <TableCont/>
                    }

            </div>
)



export default App;

