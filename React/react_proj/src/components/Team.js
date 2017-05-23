import React from 'react';
import Title from './Title'
import Wraper from './Wraper'
export default class Team extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <section id="team">
                <Wraper>
                    <Title text="Meet Our Team" color="black"/>
                    <TeamBlock/>
                </Wraper>

            </section>
        )
    }

}
class TeamBlock extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="row justify-content-center" >
                <Person url="img/theteam_img1.jpg" name="Leonardo Di" occup="Founder"/>
                <Person url="img/theteam_img2.jpg" name="Eddy Murphy" occup="UX Designer"/>
                <Person url="img/theteam_img3.jpg" name="Mr Bin" occup="Web Designer"/>
                <Person url="img/theteam_img4.jpg" name="JOHNY DEPP" occup="Worker"/>

            </div>
        )
    }

}

const Person=({url, name, occup})=>(
        <div className="col-10 col-md-6 col-lg-3">
            <div className="personTeam">
               <div style={{position:"relative"}}>
                <div className="photoTeam"><img className="img-fluid" src={url}/></div>
                <div className="nameBlockTeam">{name}<br/>{occup}</div>
               </div>
                <SocialIcon icon="fa fa-facebook" hover="socialTeam facebookItem"/>
                <SocialIcon icon="fa fa-twitter" hover="socialTeam twiterItem"/>
                <SocialIcon icon="fa fa-skype" hover="socialTeam skypeItem"/>
                <SocialIcon icon="fa fa-vimeo" hover="socialTeam vimeoItem"/>


            </div>
        </div>

)
const SocialIcon=({icon,hover})=>(
    <div className={hover}>
        <i className={icon} />
    </div>
)


