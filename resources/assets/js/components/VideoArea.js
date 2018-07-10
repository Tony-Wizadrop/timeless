import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class VideoArea extends Component {  

    render() {
        return (
        	 <section className="video-area section-padding" id="videoarea" name="videoarea">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-md-6">
                    <div className="video-photo">
                        <img src="images/both.png" alt="" className="rotated"/>
                        
                    </div>
                </div>
                <div className="col-xs-12 col-md-5 col-md-offset-1">
                    <div className="space-60 hidden visible-xs"></div>
                    <div className="page-title">

                    <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                        <h5 className="title">Portable</h5>
                        </ScrollAnimation>

                        <div className="space-10"></div>

                        <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                        <h3 className="dark-color"> Handy Design</h3>
                        </ScrollAnimation>


                        <div className="space-20"></div>

                        <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                        <div className="desc" >
                            <p>Our comfortable 100ml and 200ml squeeze bottle design can slip right into your pocket.
                            Need one for your sink instead ? Our 300ml with a squeezable top dispenser has got you covered.  </p>
                        </div>
                        </ScrollAnimation>

                        <div className="space-50"></div>

                    
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
        	);
    }
}

export default VideoArea;
