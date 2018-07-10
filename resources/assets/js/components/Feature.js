import React, { Component } from 'react';

class Feature extends Component {  

    render() {
        return (
 <section className="feature-area section-padding-top" id="feature" name="feature">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                    <div className="page-title text-center">
                        <h5 className="title">Features</h5>
                        <div className="space-10"></div>
                        <h3>Pwoerful Features As Always</h3>
                        <div className="space-60"></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="service-box">
                        <div className="box-icon">
                            <i className="lnr lnr-rocket"></i>
                        </div>
                        <h4>Fast &amp; Powerful</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="space-60"></div>
                    <div className="service-box" >
                        <div className="box-icon">
                            <i className="lnr lnr-paperclip"></i>
                        </div>
                        <h4>Easily Editable</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="space-60"></div>
                    <div className="service-box">
                        <div className="box-icon">
                            <i className="lnr lnr-cloud-download"></i>
                        </div>
                        <h4>Cloud Storage</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="space-60"></div>
                </div>
                <div className="hidden-xs hidden-sm col-md-4">
                    <figure className="mobile-image">
                        <img src="images/feature-image.png" alt="Feature Photo" />
                    </figure>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="service-box" >
                        <div className="box-icon">
                            <i className="lnr lnr-clock"></i>
                        </div>
                        <h4>Easy Notifications</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="space-60"></div>
                    <div className="service-box" >
                        <div className="box-icon">
                            <i className="lnr lnr-laptop-phone"></i>
                        </div>
                        <h4>Fully Responsive</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="space-60"></div>
                    <div className="service-box wow" >
                        <div className="box-icon">
                            <i className="lnr lnr-cog"></i>
                        </div>
                        <h4>Editable Layout</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="space-60"></div>
                </div>
            </div>
        </div>
    </section>
        	);
    }
}

export default Feature;
