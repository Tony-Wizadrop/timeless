import React, { Component } from 'react';

class Subscribe extends Component {  

    render() {
        return (

    <div className="subscribe-area section-padding" name="subscribe">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                    <div className="subscribe-form text-center">
                        <h3 className="blue-color">Subscribe for More Features</h3>
                        <div className="space-20"></div>
                        <form id="mc-form">
                            <input type="email" className="control" placeholder="Enter your email" required="required" id="mc-email" />
                            <button className="bttn-white active" type="submit"><span className="lnr lnr-location"></span> Subscribe</button>
                            <label className="mt10" for="mc-email"></label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Subscribe;