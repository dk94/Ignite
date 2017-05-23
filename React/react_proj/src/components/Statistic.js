import React from 'react';
import CountUp from 'react-countup';
export default class Statistic extends React.Component{
    constructor(props) {
        super(props);
        this.run=this.run.bind(this);
    }

    run() {
        let offsets = document.getElementById('statistic').getBoundingClientRect();

        if (offsets.top < document.documentElement.clientHeight) {
            this.props.run();
        }
    }
    componentDidMount(){

        window.addEventListener('scroll',this.run)
    }
    render(){
        let clsOdd="col-12 col-md-6 col-lg-3 statClsOdd text-center";
        let clsEven="col-12 col-md-6 col-lg-3 statClsEven text-center";
        return(
        <section id="statistic">

                <div className="row text-center">
                    <StatItem cls={clsOdd} clsImg="sprite2 sprite-statistic_img1" text="PERSONALIZED OPTIONS1" endVal={this.props.val1}/>
                    <StatItem cls={clsEven} clsImg="sprite2 sprite-statistic_img2" text="PERSONALIZED OPTIONS2" endVal={this.props.val2}/>
                    <StatItem cls={clsOdd} clsImg="sprite2 sprite-statistic_img3" text="PERSONALIZED OPTIONS3" endVal={this.props.val3}/>
                    <StatItem cls={clsEven} clsImg="sprite2 sprite-statistic_img4" text="PERSONALIZED OPTIONS4" endVal={this.props.val4}/>
                </div>
        </section>
    )

    }
}
class StatItem extends React.Component{
    constructor(props) {
        super(props);
        this.interval=null;
    }



    componentDidUpdate(){

    }
    render(){
        return(
            <div className={this.props.cls}>
                <i className={this.props.clsImg}/>
                <br/><br/>
                <h5 style={{color:"white",fontWeight:"bold"}}> <CountUp start={0} end={this.props.endVal} /></h5>
                <h5>{this.props.text}</h5>
            </div>

        )
    }
}


