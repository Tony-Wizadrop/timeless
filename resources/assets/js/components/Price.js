import React, { Component } from 'react';

class Price extends Component {  

    render() {
        return (

<section className="section-padding price-area" id="price" name="price">
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <div className="page-title text-center">
                        <h5 className="title">Pricing Plan</h5>
                        <h3 className="dark-color">Our Awesome Pricing Plan</h3>
                        <div className="space-60"></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-4">
                    <div className="price-box">
                        <div className="price-header">
                            <div className="price-icon">
                                <span className="lnr lnr-rocket"></span>
                            </div>
                            <h4 className="upper">Free</h4>
                        </div>
                        <div className="price-body">
                            <ul>
                                <li>Easy Installations</li>
                                <li>Unlimited support</li>
                                <li>Uniqe Elements</li>
                            </ul>
                        </div>
                        <div className="price-rate">
                            <sup>&#36;</sup> <span className="rate">0</span> <small>/Month</small>
                        </div>
                        <div className="price-footer">
                            <a href="#" className="bttn-white">Purchase</a>
                        </div>
                    </div>
                    <div className="space-30 hidden visible-xs"></div>
                </div>
                <div className="col-xs-12 col-sm-4">
                    <div className="price-box">
                        <div className="price-header">
                            <div className="price-icon">
                                <span className="lnr lnr-diamond"></span>
                            </div>
                            <h4 className="upper">Medium</h4>
                        </div>
                        <div className="price-body">
                            <ul>
                                <li>Easy Installations</li>
                                <li>Unlimited support</li>
                                <li>Free Forever</li>
                            </ul>
                        </div>
                        <div className="price-rate">
                            <sup>&#36;</sup> <span className="rate">49</span> <small>/Month</small>
                        </div>
                        <div className="price-footer">
                            <a href="#" className="bttn-white">Purchase</a>
                        </div>
                    </div>
                    <div className="space-30 hidden visible-xs"></div>
                </div>
                <div className="col-xs-12 col-sm-4">
                    <div className="price-box">
                        <div className="price-header">
                            <div className="price-icon">
                                <span className="lnr lnr-pie-chart"></span>
                            </div>
                            <h4 className="upper">Business</h4>
                        </div>
                        <div className="price-body">
                            <ul>
                                <li>Easy Installations</li>
                                <li>Unlimited support</li>
                                <li>Free Forever</li>
                            </ul>
                        </div>
                        <div className="price-rate">
                            <sup>&#36;</sup> <span className="rate">99</span> <small>/Month</small>
                        </div>
                        <div className="price-footer">
                            <a href="#" className="bttn-white">Purchase</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
    }
}

export default Price;