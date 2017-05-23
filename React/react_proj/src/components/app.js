import React from 'react';
import ReactDOM from 'react-dom';
import{Router, Route,IndexRoute, hashHistory, Redirect} from 'react-router';
import NavbarCont from '../containers/NavbarCont.jsx';
import SliderCont from '../containers/SliderCont.jsx';
import Team from './Team.js'
import PortfolioCont from '../containers/PortfolioCont.jsx';
import FeedbackCont from '../containers/FeedbackCont.jsx';
import KeepInTouch from './KeepInTouch.js'
import StatisticCont from '../containers/StatisticCont.jsx';
import BreakingNewsCont from '../containers/BreakingNewsContainer.js';
import ServicesCont from '../containers/ServicesCont.jsx';
import WebDesign from './servicesView/WebDesign.js'
import AboutCompanyCont from '../containers/AboutCompanyCont.jsx';
import Footer from './Footer.js'


class App extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {

        console.log(this.props.children);
        return (
            <div className="container-fluid" style={{padding:"0"}}>
                <NavbarCont/>
                <SliderCont/>

                {this.props.children}
                <AboutCompanyCont/>
                <PortfolioCont/>
                <StatisticCont/>
                <Team/>
                <BreakingNewsCont/>
                <FeedbackCont/>
                <KeepInTouch/>
                <Footer/>



            </div>
        )

    }
}


const AppR=()=>(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute components={ServicesCont}/>
            <Route path="services" component={ServicesCont}>
                <IndexRoute component={WebDesign} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac diam feugiat, blandit nisl sit amet, fringilla enim. Integer consectetur ligula in sagittis accumsan. In ullamcorper volutpat maximus. Praesent facilisis tortor eu sapien sagittis eleifend. Curabitur vulputate, lorem in fringilla porta, odio odio posuere velit, condimentum consequat ligula sapien ut ex. Maecenas commodo ex sed odio ultrices porta" url="img/pf_img1.png" />
                <Route path="design" component={WebDesign} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac diam feugiat, blandit nisl sit amet, fringilla enim. Integer consectetur ligula in sagittis accumsan. In ullamcorper volutpat maximus. Praesent facilisis tortor eu sapien sagittis eleifend. Curabitur vulputate, lorem in fringilla porta, odio odio posuere velit, condimentum consequat ligula sapien ut ex. Maecenas commodo ex sed odio ultrices porta" url="img/pf_img1.png" />
                <Route path="graphic" text="amet, consectetur adipiscing elit. Nam ac diam feugiat, blandit nisl sit amet, fringilla enim. Integer consectetur ligula in sagittis accumsan. In ullamcorper volutpat maximus. Praesent facilisis tortor eu sapien sagittis eleifend. Curabitur vulputate, lorem in fringilla porta, odio odio posuere velit, condimentum consequat ligula sapien ut ex. Maecenas commodo ex sed odio ultrices porta" url="img/pf_img3.png" component={WebDesign} />
                <Route path="support" text="ipsum dolor sit amet, consectetur adipiscing elit. Nam ac diam feugiat, blandit nisl sit amet, fringilla enim. Integer consectetur ligula in sagittis accumsan. In ullamcorper volutpat maximus. Praesent facilisis tortor eu sapien sagittis eleifend. Curabitur vulputate, lorem in fringilla porta, odio odio posuere velit, condimentum consequat ligula sapien ut ex. Maecenas commodo ex sed odio ultrices porta" url="img/pf_img4.png" component={WebDesign} />
                <Route path="app" text=" dolor Lorem ipsum  sit amet, consectetur adipiscing elit. Nam ac diam feugiat, blandit nisl sit amet, fringilla enim. Integer consectetur ligula in sagittis accumsan. In ullamcorper volutpat maximus. Praesent facilisis tortor eu sapien sagittis eleifend. Curabitur vulputate, lorem in fringilla porta, odio odio posuere velit, condimentum consequat ligula sapien ut ex. Maecenas commodo ex sed odio ultrices porta" url="img/pf_img5.png" component={WebDesign} />
                <Route path="market" text="ipsum  sit amet, consectetur adipiscing elit. Nam ac diam feugiat, blandit nisl sit amet, fringilla enim. Integer consectetur ligula in sagittis accumsan. In ullamcorper volutpat maximus. Praesent facilisis tortor eu sapien sagittis eleifend. Curabitur vulputate, lorem in fringilla porta, odio odio posuere velit, condimentum consequat ligula sapien ut ex. Maecenas commodo ex sed odio ultrices porta" url="img/pf_img6.png" component={WebDesign} />
                <Route path="seo" text=" dolor Lorem ipsum  sit amet, consectetur adipiscing elit. Nam ac diam feugiat, blandit nisl sit amet, fringilla enim. Integer consectetur ligula in sagittis accumsan. In ullamcorper volutpat maximus. Praesent facilisis tortor eu sapien sagittis eleifend. Curabitur vulputate, lorem in fringilla porta, odio odio posuere velit, condimentum consequat ligula sapien ut ex. Maecenas commodo ex sed odio ultrices porta" url="img/pf_img7.png" component={WebDesign} />
            </Route>

        </Route>
    </Router>
)



export default AppR;


