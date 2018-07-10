import React , { Component } from 'react';
import Header from './Header';
import About from './About';
import Progress from './Progress';
import VideoArea from './VideoArea';
import Testimonial from './Testimonial';
import Products from './Products';
import Features from './Features';
import Download from './Download';
import Price from './Price';
import Order from './Order';
import Questions from './Questions';
import Subscribe from './Subscribe';
import Footer from './Footer';
import Pricing from './Pricing';
import More from './More';
import More2 from './More2';
import Sanitizer from './Sanitizer';
import Sanitizer_description from './Sanitizer_description';

class Homepage extends Component{

	render(){
		return(
	<div id="containered">
			     <Header />
         
           <Progress />
            <Products />
            <More />
            <More2 />
           <Features />
           <Sanitizer />
           <Sanitizer_description />
          <VideoArea />
         

          
           
    </div>
			);
	}
}

export default Homepage;