import React from 'react';
import ReactDOM from 'react-dom';
var Scroll  = require('react-scroll');

var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;;


export default class Navbar extends React.Component{

    render(){

    return(
        <header id="header">
                <nav className="navbar navbar-toggleable-md navbar-light fixed-top menu">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <a className="navbar-brand logo" href="#"><img src="img/logo.png" className="img-fluid"/></a>
                <div className="collapse navbar-collapse  justify-content-end mainMenu" id="navbarNavDropdown">

                    <ul className="navbar-nav ">
                        {
                            this.props.data.map((item,index)=> {
                                    return(<NavItem key={index} id={index}  link={item.link} name={item.name}/>)
                                }
                            )
                        }
                    </ul>

                </div>
            </nav>
        </header>
    )
    }
}

export class NavItem extends React.Component {

    render() {

        return (

            <Link to={this.props.link} spy={true} smooth={true} duration={1500}  className="nav-link nav-item">
                <span>{this.props.name}</span>
            </Link>

        );
    }
}