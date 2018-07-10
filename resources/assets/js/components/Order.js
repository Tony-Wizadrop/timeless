import React , { Component } from 'react';

class Order extends Component{

    render(){
        return(
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-md-10 col-md-offset-1">
                    <div className="page-title text-center">
                        <img src="images/about-logo.png" alt="About Logo" />
                        <div className="space-20"></div>
                        <h5 className="title">Timeless</h5>
                        <div className="space-30"></div>
                        <h3 className="blue-color"> We care about you and your family's hands. We care about your cleanliness </h3>
                        <div className="space-20">Using the latest clean-tech to ensure that germs are killed fast and effectively</div>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>

        	);
    }

}

export default Order;