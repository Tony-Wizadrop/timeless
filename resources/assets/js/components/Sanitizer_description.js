import React, { Component } from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import VideoArea from './VideoArea';
import ScrollAnimation from 'react-animate-on-scroll';

class Sanitizer_description extends Component {  

    render() {
        return (

 <section className="section-padding" id="Sanitizer_description" >
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-6">
                    <div className="page-title">
                    <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                        <h5 className="title" >Sanitizer features</h5>
                    </ScrollAnimation>
                        <div className="space-10"></div>

                        <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                        <h3 className="dark-color" >Our Sanitizers are just what your palms need.</h3>
                        </ScrollAnimation>

                    </div>
                    <div className="space-20"></div>

                    <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                    <div className="desc" >
                        <p>We strive to keep your palms germ free. Our Sanitizers are packed with features just for this need. </p>
                    </div>
                    </ScrollAnimation>

                    <div className="space-50"></div>
                     <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                       <Link smooth to="videoarea" className="bttn-default">Learn More</Link>
                    </ScrollAnimation>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-5 col-md-offset-1">
                    <div className="space-60 hidden visible-xs"></div>

                    <div className="space-50"></div>

                    <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                    <div className="service-box" >
                        <div className="box-icon">
                           <i className="fas fa-tint"></i>
                        </div>
                        <h4>99.9% germ proof.</h4>
                        <p>Kills 99.9% of germs instantly</p>
                    </div>
                    </ScrollAnimation>

                    <div className="space-50"></div>

                    <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                    <div className="service-box" >
                        <div className="box-icon">
                            <i className="fas fa-balance-scale"></i>
                        </div>
                        <h4>Used alone.</h4>
                        <p>Cleans your hands without water.</p>
                    </div>
                    </ScrollAnimation>


                    <div className="space-50"></div>


                 <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                    <div className="service-box" >
                        <div className="box-icon">
                            <i className="fas fa-check"></i>
                        </div>
                        <h4>Easy Application</h4>
                        <p>Well prepared gel form makes it easy to apply.</p>
                    </div>

                    </ScrollAnimation>

                    <div className="space-50"></div>

                    <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                    <div className="service-box" >
                        <div className="box-icon">
                            <i className="fas fa-clock"></i>
                        </div>
                        <h4>Fast dry</h4>
                        <p>Dries within seconds so you can continue with your work.</p>
                    </div>
                    </ScrollAnimation>

                    <div className="space-50"></div>

                    <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                    <div className="service-box" >
                        <div className="box-icon">
                            <i className="fas fa-hand-paper"></i>
                        </div>
                        <h4>Soft skin</h4>
                        <p>Leaves your skin soft and germ free.</p>
                    </div>
                    </ScrollAnimation>

                    <div className="space-50"></div>

                    <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                    <div className="service-box" >
                        <div className="box-icon">
                            <i className="fas fa-leaf"></i>
                        </div>
                        <h4>Natural</h4>
                        <p>Safe for all time use.</p>
                    </div>
                    </ScrollAnimation>


                </div>
            </div>
        </div>
    </section>
    );
    }
}

export default Sanitizer_description;