import React , { Component } from 'react';

class About extends Component{

    render(){
        return(
        	<section className="section-padding" name="about" id="about">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-md-10 col-md-offset-1">
                    <div className="page-title text-center">
                        <img src="images/T.png" alt="About Logo" />
                        <div className="space-20"></div>
                      
                        <div className="space-30"></div>
                        <h3 className="blue-color">Simply timeless</h3>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

        	);
    }

}

export default About;