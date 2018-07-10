import React , { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component{

    render(){
        return(
        	 <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-5">
                                <span>Copyright &copy; 2018 All rights reserved | Timeless Essentials </span>

                       
                        <div className="space-30 hidden visible-xs"></div>
                    </div>
                    <div className="col-xs-12 col-md-7">
                        <div className="footer-menu">
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Footer;