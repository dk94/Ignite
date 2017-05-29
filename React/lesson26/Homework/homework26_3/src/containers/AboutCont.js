
import React,{ PropTypes } from 'react'
import { connect } from 'react-redux'
import { setScore} from '../actions/index.js'


const About =({flag,onChange,editMode,click,total,qScore})   => (
    <div className="text-center" style={{width:"50%",margin:"0 auto"}}>
        <h2>Redux ToDoList</h2>


        <h3>Your score of app</h3>
        <select id="select" className="form-control">
            <option disabled>Score:</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option selected value="5">5</option>

        </select>
        <p><input onClick={()=>{var e=document.getElementById("select");click(+e.options[e.selectedIndex].value)}} className="btn btn-primary" type="submit" value="Отправить"/></p>

        <h2>Total score:</h2>

        <h2>{total/qScore}</h2>




    </div>
)





const mapStateToProps = (state) => {
    return {
        total:state.totalScore.totalValue,
        qScore:state.totalScore.qScore
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        click: (value) => {
            dispatch(setScore(value))
        }
    }
}
const AboutCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(About)


export default AboutCont;