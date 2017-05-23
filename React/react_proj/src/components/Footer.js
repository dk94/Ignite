import React from 'react';
var Scroll  = require('react-scroll');

var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;;

const Footer=()=>(
    <section id="footer">
    <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-6 col-xl-4" >
            Copyright 2017 <span>The Ham</span>| All rights reserved
            <Link to="header" spy={true} smooth={true} duration={500}>
                <i style={{display:"inline-block",margin:"5px"}} className="sprite2 sprite-arrowTop"/>
            </Link>

        </div>
    </div>
    </section>
        )
 export default Footer;