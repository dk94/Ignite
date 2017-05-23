import { connect } from 'react-redux'
import { changeID} from '../actions/aboutCompanyAct.js'
import { showSkills} from '../actions/aboutCompanyAct.js'
import AboutCompany from '../components/AboutCompany.js'
import React from 'react';

const mapStateToProps = (state) => {
    return {
        index:state.aboutCompanyReducer.id,
        data:state.aboutCompanyReducer.buttonsN,
        skillsShow: state.aboutCompanyReducer.skillsShow
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        click: (id) => {
            dispatch(changeID(id))
        },
        showSkills:()=>{
            dispatch(showSkills())
        }
    }
}
const AboutCompanyCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(AboutCompany);


export default AboutCompanyCont;
