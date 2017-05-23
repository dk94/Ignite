import React from 'react';
import Title from './Title'
import Progress from 'react-progressbar';

export default class AboutCompany extends React.Component{
    constructor(props) {
        super(props);
        this.scrollHandler = this.scrollHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);

    }

    componentDidMount() {
        document.addEventListener('scroll', this.scrollHandler);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.scrollHandler);
    }

    scrollHandler(e) {
        let top = document.querySelector('#aboutCompany').getBoundingClientRect().top;
        let bottom = document.querySelector('#aboutCompany').getBoundingClientRect().bottom;
        let headerOffset = 100;

        if (top <= document.documentElement.clientHeight && bottom >= headerOffset) {
            document.removeEventListener('scroll', this.scrollHandler);
            this.props.showSkills();
        }
    }
    clickHandler(index){

        this.props.click(index);

    }
    render(){

        let clsActive="col-3 text-center menuAbout menuAboutAct";
        let clsDef="col-3 text-center menuAbout";
        let data
        switch(this.props.index){
            case 0:{
                data=<OurHistory/>;
                break;
            }
            case 1:{
                data=<OurBiography/>
                break;
            }
            case 2:{
                data=<SkillsBlock skillsShow={this.props.skillsShow} />
                break;
            }
        }

        return(

            <section id="aboutCompany">
                <div className="row">
                    <div className="col-12 col-lg-10">
                        <div className="row">
                            <div className="col-12 col-lg-7 text-center">
                                <img src="img/pf_img2.png" className="img-fluid"/>
                            </div>
                            <div className="col-12 col-lg-5">
                                <div className="row text-center justify-content-center">
                                    <div className="col-12">
                                    <Title text="About Our Company" color="white"/>
                                    </div>

                                    {
                                    this.props.data.map((item,index)=>{
                                        return(
                                            <div onClick={()=>{ this.props.click(index)}} className={this.props.index==index?clsActive:clsDef}  key={index}>
                                                <span style={{cursor:"pointer"}}> {item}</span>
                                            </div>

                                        )
                                    })
                                }

                                 {data}

                                 </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        )
    }

}

const OurBiography=()=>(

        <div className="col-lg-12 text-left ourBiography">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec odio ipsum Suspendisse cursus malesuada facilisis. Nunc con sectetur odio sed dolor tincidunt porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibu lum nec odio ipsum. Sus pendisse cursus malesua da facilisis. Vestibulum nec odio ipsum. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec odio ipsum Suspendisse cursus malesuada facilisis. Nunc con sectetur odio sed dolor tincidunt porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibu lum nec odio ipsum. Sus pendisse cursus malesua da facilisis. Vestibulum nec odio ipsum. </p>
        </div>



)
const OurHistory=()=>(
    <div>
    <div className="col-lg-12 text-left history">
       <span> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua.
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
    </div>
        <div className="row">
            <HistoryImg/>
            <HistoryImg/>
            <HistoryImg/>
            <HistoryImg/>
            <HistoryImg/>
            <HistoryImg/>
            <HistoryImg/>
            <HistoryImg/>
        </div>
    </div>

)

const HistoryImg=()=>(
    <div className="col-lg-5 text-left historyImg">
        <i style={{margin:"auto auto"}} className="sprite2 sprite-aboutIcon"/>
        <span>Lorem ipsum dolor sit amet</span>
    </div>
)
let data = [
    {text: 'User interface', width: '75%', backgroundColor: '#9c5da5'},
    {text: 'Web design', width: '85%', backgroundColor: '#11b0de'},
    {text: 'Wordpress', width: '70%', backgroundColor: '#d67f7f'},
    {text: 'HTML & CSS', width: '90%', backgroundColor: '#20bc9d'},
    {text: 'App design', width: '85%', backgroundColor: '#bb8a36'}
];

class SkillsBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let items = data.map((item, index) => {
            return (
                <div  key={index} className="skills-diagram-container">
                    <div className="skills-diagram" style={{
                        width: this.props.skillsShow ? item.width : 0,
                        backgroundColor: item.backgroundColor
                    }}>
                        {item.text}
                    </div>
                </div>
            );
        });

        return (
            <div className="about-content col-12">
                {items}
            </div>
        );
    }
}

const Navs=({name})=>(
    <li>
        {name}
    </li>
)