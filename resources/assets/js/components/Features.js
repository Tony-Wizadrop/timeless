import React, { Component } from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import VideoArea from './VideoArea';
import ScrollAnimation from 'react-animate-on-scroll';

class Features extends Component {  

    render() {
        return (

 <section className="section-padding" id="features" name="features">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-6">
                    <div className="page-title">
                    <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                        <h5 className="title" >Handwash features</h5>
                    </ScrollAnimation>
                        <div className="space-10"></div>

                        <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                        <h3 className="dark-color" >Our handwashes are packed with features that your hands will love </h3>
                        </ScrollAnimation>

                    </div>
                    <div className="space-20"></div>

                    <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                    <div className="desc" >
                        <p> We know the importance of a handshake, that is why we unsure your hands receive the care they deserve to give you soft palms for that firm but gentle handshake. </p>
                    </div>
                    </ScrollAnimation>

                    <div className="space-50"></div>
                     <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                       <Link smooth to="videoarea" className="bttn-default">Learn More</Link>
                    </ScrollAnimation>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-5 col-md-offset-1">
                    <div className="space-60 hidden visible-xs"></div>

                    <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                    <div className="service-box" >
                        <div className="box-icon">
                            <i className="fas fa-leaf"></i>
                        </div>
                        <h4>Sweet Scent</h4>
                        <p>Leaves a sweet long-lasting fragrance on your hands</p>
                    </div>
                    </ScrollAnimation>

                    <div className="space-50"></div>

                    <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                    <div className="service-box" >
                        <div className="box-icon">
                           <i className="fas fa-tint"></i>
                        </div>
                        <h4>Moisturizing</h4>
                        <p>Locks in moisture to ensure your palms stay soft and smooth.</p>
                    </div>
                    </ScrollAnimation>

                    <div className="space-50"></div>

                    <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                    <div className="service-box" >
                        <div className="box-icon">
                            <i className="fas fa-balance-scale"></i>
                        </div>
                        <h4>Balanced pH</h4>
                        <p>Ensures that the formula is safe for your palms so no scotching occurs.</p>
                    </div>
                    </ScrollAnimation>

                     <div className="space-50"></div>
                     <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                    <div className="service-box" >
                        <div className="box-icon">
                            <i className="fas fa-check"></i>
                        </div>
                        <h4>100% Clean</h4>
                        <p>Perfectly cleans your palms to protect from germs.</p>
                    </div>

                    </ScrollAnimation>
                </div>
            </div>
        </div>
    </section>
    );
    }
}

export default Features;