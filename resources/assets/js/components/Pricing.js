import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

class Pricing extends Component{

    render(){
        return(

<section className="section-padding price-area" id="pricing">
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                 <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                    <div className="page-title text-center">

                        <h5 className="title">Pricing Plan</h5>
                        <h3 className="dark-color">Our Awesome Pricing Plan</h3>
                        <div className="space-60"></div>
                    </div>
                    </ScrollAnimation>
                </div>
            </div>
            <div className="row">

                <div className="col-xs-12 col-sm-6">
                    <div className="price-box">
                        <div className="price-header">
                            <div className="price-icon">
                                <i className="fas fa-truck"></i>
                            </div>
                            <h4 className="upper">Wholesale</h4>
                        </div>
                        <div className="price-body">
                            <ul>
                                <li>Handwash 500ml - Ksh.150</li>
                                <li>Handwash 5 Litres - Ksh.900</li>
                                <li>Handwash 10 Litres - Ksh.1,700</li>
								<li>Handwash 20 Litres - Ksh.3,000</li>
								< br />
								<li>Hand Sanitizer 100ml - Ksh.100 </li>
								<li>Hand Sanitizer 200ml - Ksh.170</li>
								<li>Hand Sanitizer 300ML - Ksh.250</li>
                            </ul>
                        </div>
                       
                        <div className="price-footer">
                            <Link to="/shop" className="bttn-white">Purchase</Link>
                        </div>
                    </div>
                    <div className="space-30 hidden visible-xs"></div>
                </div>
          
                
				
                <div className="col-xs-12 col-sm-6">
                    <div className="price-box">
                        <div className="price-header">
                            <div className="price-icon">
                                <i className="fas fa-hand-holding-usd"></i>
                            </div>
                            <h4 className="upper">Retail</h4>
                        </div>
                        <div className="price-body">
                          <ul>
                                <li>Handwash 500ml - Ksh.180</li>
                                <li>Handwash 5 Litres - Ksh.1,000</li>
                                <li>Handwash 10 Litres - Ksh.1,900</li>
								<li>Handwash 20 Litres - Ksh.3,200</li>
								< br />
								<li>Hand Sanitizer 100ml - Ksh.120 </li>
								<li>Hand Sanitizer 200ml - Ksh.200</li>
								<li>Hand Sanitizer 300ML - Ksh.300</li>
                            </ul>
                        </div>
                        
                        <div className="price-footer">
                            <Link to="/shop" className="bttn-white">Purchase</Link>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </section>

    );
}
}

export default Pricing