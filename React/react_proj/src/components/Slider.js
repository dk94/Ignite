import React from 'react';

var Scroll  = require('react-scroll');

var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;;
export default class Slider extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
         console.log(this.props.autoSwitchFlag+" fromDidmount");
        if(this.props.autoSwitchFlag){
        setInterval(() => {
            if (this.props.autoSwitchFlag) {
                this.props.autoSwitch();
            }
        }, this.props.switchTime*1000);
        }



    }
    componentDidUpdate() {

        setTimeout(() => {
            if (!this.props.autoSwitchFlag) {
                this.props.setFlag();
            }
        },6000);
    }
render(){
    return(
    <section id="slider">
        <div className="container-fluid">
            <div className="row justify-content-center">
            <Slide url={this.props.src}/>
            <Controls clickNext={this.props.clickNext} clickPrevious={this.props.clickPrevious}/>

          </div>
            <Advantages/>

        </div>
    </section>
    )
}
}

const Slide=({url})=>(
    <div>
        <img className="img-fluid" src={url}/>
    </div>

)

    const Controls=({clickNext,clickPrevious})=>(
        <div className="col-12 text-center slider_content" >
            <div className="row align-items-center">
                <div className="col-2 col-md-3">
                    <i  className="sprite sprite-l_arr-fw" onClick={()=>clickPrevious()}/>
                </div>
                <div className="col-8 col-md-6">
                    <BigText/>
                </div>
                <div className="col-2 col-md-3">
                    <i className="sprite sprite-r_arr-fw" onClick={()=>clickNext()}/>
                </div>
            </div>

        </div>

    )
const BigText=()=>(
    <div id="slide_caption">
        <h4>THE HUM IS <span>A PSD TEMPLATE</span></h4>
        <h1 id="slogan">WE ARE CREATIVE</h1>
        <Link to="portfolio" spy={true} smooth={true} duration={1500}>
            <a href="#"  ><div className="btn butt">EXPLORE  NOW</div></a>
        </Link>
        <Link to="keepInTouch" spy={true} smooth={true} duration={1500}>
            <a href="#" ><div className="btn butt">PURCHASE NOW</div></a>
        </Link>
    </div>
)

class Advantages extends React.Component {
    render(){
        let clsEven='advClsEven col-12 col-md-6 col-lg-3';
        let clsOdd='advClsOdd col-12 col-md-6 col-lg-3';
        return(
        <div className="row text-center">

            <Advantage cls={clsOdd} clsI="sprite sprite-adv1"  text="PERSONALIZED OPTIONS"/>
            <Advantage cls={clsEven} clsI="sprite sprite-adv_2" text="FULLY CUSTOMIZABLE"/>
            <Advantage cls={clsOdd} clsI="sprite sprite-adv3" text="UNLIMMITED SUPPORT"/>
            <Advantage cls={clsEven} clsI="sprite sprite-adv4" text="RESPONSIVE ALL DEVICE"/>

        </div>
        )
    }
}


const Advantage=({url,cls,text,clsI})=>(
        <div className={cls}>
            <i className={clsI}/>
            <br/><br/>
                <h5>{text}</h5>
        </div>
)
