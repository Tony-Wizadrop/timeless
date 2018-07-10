import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import More2 from './More2';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class More extends Component{

	render(){
		return(

    <section className="video-areas section-padding">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-md-6">
                    <div className="video-photospecial">
                        <img src="images/washing.svg" alt="Beautiful hands" />
                        
                    </div>
                </div>
                <div className="col-xs-12 col-md-5 col-md-offset-1">
                    <div className="space-60 hidden visible-xs"></div>
                    <div className="page-title">
                    <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                        <h5 className="title wow">MORE GOODNESS</h5>
                    </ScrollAnimation>

                        <div className="space-10"></div>

                        <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                        <h3 className="dark-color" >For your skin</h3>
                        </ScrollAnimation>

                        <div className="space-20"></div>

                        <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                        <div className="desc">
                            <p>Timeless handwash goes way beyond just cleaning your palms, it also washes away the day as you set to unwind with sweet scents. 
                            The key to having clear beautiful skin on your hands is moisture, and Timeless handwashs are made to ensure your skin remains hydrated. No cracks. No dry palms. It's made to mildly cleanse as it thoroughly cleans. 
                            It leaves your palms feeling smooth, soft and more radiant than ordinary handwashs.  </p>
                        </div>
                        </ScrollAnimation>
                        <div className="space-50"></div>

                        <ScrollAnimation animateIn="fadeInUp"  delay={500} duration={1}>
                        <Link smooth to="More2" className="bttn-default pointed">Learn More</Link>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
    
	}
}

export default More;