import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import Features from './Features';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class More2 extends Component{

	render(){
		return(

    <section className="video-areas2 section-padding" id="More2">
        <div className="container">
            <div className="row">
                
                <div className="col-xs-12 col-md-5 col-md-offset-1">
                    <div className="space-60 hidden visible-xs"></div>
                    <div className="page-title">

           <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                        <h5 className="title">MORE GOODNESS</h5>
                    </ScrollAnimation>

                        <div className="space-10"></div>

                        <ScrollAnimation animateIn="fadeInUp"  duration={1}>

                        <h3 className="dark-color " >For your every need</h3>
                        </ScrollAnimation> 

                        <div className="space-20"></div>
                        <div className="desc">

                        <ScrollAnimation animateIn="fadeInUp"  duration={1}>

                            <p>Timeless handwash comes in four different variants to ensure that we have exactly what you need depending 
                            on the occassion. The green bottled honey melon smells great and looks even better in outdoor events whereas  the summer fruit smells 
                            and looks at home indoors. The purple mixed-berries variant is ideal for those who prefer alittle bit of every scent beautifully put together and the sweet apple 
                            boasts a strong fruity scent to ensure you're hands smell and look the part</p>
                    </ScrollAnimation>
                        </div>
                        <div className="space-50"></div>
                    </div>
                </div>

                <div className="col-xs-12 col-md-6">
                    <div className="video-photospecial viewed">
                        <img src="images/both (2).svg" alt="Beautiful hands" />
                        
                    </div>
                </div>

            </div>
        </div>
    </section>
    );
    
	}
}

export default More2;