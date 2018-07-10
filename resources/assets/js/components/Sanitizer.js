import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class Sanitizer extends Component {  

    render() {
        return (
        	 <section className="video-area section-padding" id="Sanitizer" >
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-md-6">
                    <div className="video-photo">
                        <img src="images/three.png" alt="" className="rotated"/>
                        
                    </div>
                </div>
                <div className="col-xs-12 col-md-5 col-md-offset-1">
                    <div className="space-60 hidden visible-xs"></div>
                    <div className="page-title">

                    <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                        <h5 className="title">Our Sanitizer</h5>
                        </ScrollAnimation>

                        <div className="space-10"></div>

                        <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                        <h3 className="dark-color"> Our Sanitizer</h3>
                        </ScrollAnimation>


                        <div className="space-20"></div>

                        <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                        <div className="desc" >
                            <p>The Sanitizer comes in three different sizes to suit your specific needs. We have a 100ml, 200ml and 
                            300ml pack. The 300ml pack comes with a dispenser and is therefore ideal for majority use. The 200ml and 100ml
                            sizes come packed in squeeze bottles that are fit for personal use; can be kept in the handbag, backpack or car. </p>
                        </div>
                        </ScrollAnimation>

                        <div className="space-50"></div>

                        <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                       <Link smooth to="Sanitizer_description" className="bttn-default">See More</Link>
                        </ScrollAnimation>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
        	);
    }
}

export default Sanitizer;
