import React, { Component } from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Feature from './Feature';
import ScrollAnimation from 'react-animate-on-scroll';



class Progress extends Component {  

    render() {
        return (

 <section className="progress-area gray-bg" id="about" name="progress">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-md-5">
                    <div className="page-title section-padding">
                          <ScrollAnimation animateIn="fadeInUp"  duration={1}>

                        <h5 className="title" >Our Commitment</h5>
                        </ScrollAnimation>

                        <div className="space-10"></div>

                              <ScrollAnimation animateIn="fadeInUp"  duration={1}>

                        <h3 className="dark-color" >We Care About Your Hands</h3>
                        </ScrollAnimation>

                        <div className="space-20"></div>
                        <div className="desc" >
                              <ScrollAnimation animateIn="fadeInUp"  duration={1}>

<p>We are committed to ensure the highest level of hygiene and safety for your hands as you 
 interact with our products day after day. Our skill and passion in production is just for you; to give you
 the best of handwashs and instant hand sanitizers at a pocket friendly price.</p>
                            </ScrollAnimation>
                        </div>
                        <div className="space-50"></div>
                                                      <ScrollAnimation animateIn="fadeInUp"  duration={1}>

                       <Link smooth to="products" className="bttn-default">Learn More</Link>
                       </ScrollAnimation>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    );
}
}

export default Progress;