import React, { Component } from 'react';

class Download extends Component {  

    render() {
        return (
            <div className="download-area overlay " name="download">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-6 hidden-sm">
                    <figure className="mobile-image">
                        <img src="images/download-image.png" alt="" />
                    </figure>
                </div>
                <div className="col-xs-12 col-md-6 section-padding">
                    <h3 className="white-color">Download The App</h3>
                    <div className="space-20"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam possimus eaque magnam eum praesentium unde.</p>
                    <div className="space-60"></div>
                    <a href="#" className="bttn-white sq"><img src="images/apple-icon.png" alt="apple icon" /> Apple Store</a>
                    <a href="#" className="bttn-white sq"><img src="images/play-store-icon.png" alt="Play Store Icon" /> Play Store</a>
                </div>
            </div>
        </div>
    </div>
    );
    }
}

export default Download;