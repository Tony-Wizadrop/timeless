
import React, { Component } from 'react';
import { BrowserRouter as Router,  Route, HashRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';





class Nav extends Component {  

    render() {
        return (
           
             <nav className="mainmenu-area affix">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#"><img src="images/logo.png" alt="Logo" /></a>
            </div>
            <div className="navbar-collapse collapse in" id="primary_menu">
                <ul className="nav navbar-nav mainmenu">
                    <li><Link  smooth to="/#header" >Home</Link></li>
                    <li><Link smooth to="/#about" >About</Link></li>
                    <li><Link smooth to="/#products" >Products</Link></li>
                    <li><Link smooth to="/#features" >Features</Link></li>
                    <li><Link className="active"  smooth to="/shop" >Shop</Link></li>
                   
                </ul>
             
            </div>
        </div>
    </nav>
   
        );
    }
}


export default Nav;