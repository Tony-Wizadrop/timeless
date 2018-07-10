 import React , { Component } from 'react';
 import ScrollAnimation from 'react-animate-on-scroll';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';



class Header extends Component{

    render(){
        return(
 <header className="home-area overlay" id="home" name="home">
        <div className="container">
            <div className="row">
                <div className="theimagebox">
                    <figure className="mobile-image" >
                    <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                        <img src="images/prime.png" className="main-image" alt="product image" />
                    </ScrollAnimation>
                    </figure>
                </div>
                <div className="thewordbox">
                    <div className="space-80 hidden-xs"></div>
                                        <ScrollAnimation animateIn="fadeInUp"  duration={1}>

                    <h3 className="wow fadeInUp real-big" >Timeless Essentials</h3>
                    </ScrollAnimation>

                                        <ScrollAnimation animateIn="fadeInUp" delay={500} duration={1}>

                    <div className="medium-big"> Simply Timeless</div>
                    </ScrollAnimation>

                    <div className="space-30"></div>
                                                <ScrollAnimation animateIn="fadeInUp" delay={1000} duration={1}>

                       <Link smooth to="about" className="bttn-default">Learn More</Link>
                       </ScrollAnimation>
                </div>
            </div>
        </div>
    </header>
    );
    }
}

export default Header;