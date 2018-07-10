// App.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import About from './About';
import Progress from './Progress';
import VideoArea from './VideoArea';
import Feature from './Feature';
import Testimonial from './Testimonial';
import Products from './Products';
import Download from './Download';
import Price from './Price';
import Cart from './Cart';
import Cart2 from './Cart2';
import Order from './Order';
import Questions from './Questions';
import Subscribe from './Subscribe';
import Modal from './Modal';
import Homepage from './Homepage';
import Shop from './Shop';
import CustomScroll from 'react-custom-scroll';
import HeaderCart from './HeaderCart';
import { DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Contact from './Contact';
import onClickOutside from "react-onclickoutside";
import Footer from './Footer';



class App extends Component {
  
   constructor(props) {
        super(props);
        this.state = {
            active : true,
            isTop : true,
            count : '',
            id : true,
            on : true,
            cartitems : [],
            total : ''

        };
        // bind
        this.handleMenu = this.handleMenu.bind(this);
        this.handleMenuTwo = this.handleMenuTwo.bind(this);
        this.getCount = this.getCount.bind(this);
        this.toggleCart = this.toggleCart.bind(this);
         this.toggleCarter = this.toggleCarter.bind(this);
        this.refreshCart = this.refreshCart.bind(this);
        this.showNav = this.showNav.bind(this);
        this.changeState = this.changeState.bind(this);
        this.getCartitems = this.getCartitems.bind(this);
            this.getTotal = this.getTotal.bind(this);

    }


getTotal(){
    axios.get('/cart.total').then((
  response
      ) =>

      this.setState({
        total : [...response.data]
      })
        )
  }


    getCartitems() {
axios.get('/cart.display').then((
      response
    )=>
      this.setState({
        cartitems: [...response.data.itemed]
      })
    ).then(

      this.getCount()

    )
}

 
    refreshCart(){
      this.getCartitems();
    }

changeState(){
    this.setState(prevState => {
         active : !prevState.active
      }),
    console.log('AWESOME')
  }


    handleMenu(){

       this.setState(prevState => ({
          active : !prevState.active 

       }));


           this.setState({
          id : true

       })
         }

         handleMenuTwo(){

           this.setState(prevState => ({
          active : !prevState.active 

       }));

           this.setState({
          id : false

       });

         }


 

  getCount() {
        axios.get('/cart.count').then(response => {
                console.log('from getCount', response);
                // set state
                this.setState({
                    count: response.data.count
                });
                
                });
       
    }

    toggleCart(){


           this.setState(prevState => ({
          on : !prevState.on 

       })),
            this.getCartitems();
            this.getTotal();
    }


        toggleCarter(){


           this.setState({
          on : true

       })
       
    }

    showNav(){

      this.setState({
        isTop : false
      })
    }



  componentDidMount(){

            this.getCount();
            this.getCartitems();
            this.getTotal();

    document.addEventListener('scroll' , ()=>{
      const isTop = window.scrollY < 1;


        if (isTop !== this.state.isTop ){
      
   this.setState({
          isTop : false
   })

     } 



    })
}


    render() {
        return (
         <HashRouter>
         <div>

           <div className="zero">

          <nav className={ this.state.isTop ? "mainmenu-area affix-top" : "mainmenu-area affix" } id={ this.state.id ? null : "show" }>
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" onClick={ this.handleMenu } >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#"><img src="images/lago2.png" alt="Logo" /></a>
                       <div className="cartbox-phone"  onClick={this.toggleCart}>
                <i className="fas fa-shopping-cart"></i>
               <span className="badge">
                {this.state.count}
                </span>
              </div>
            </div>
            <div className={ this.state.active ? "collapse navbar-collapse" : "collapse navbar-collapse in" } id="primary_menu">
                <ul className="nav navbar-nav mainmenu">
               


                                        <li onClick={ this.handleMenu }><NavLink activeClassName="active" to="/home#home"   smooth={true} duration={500}  >Home</NavLink></li>
                                       <li onClick={ this.handleMenu }><NavLink activeClassName="active" to="/home#about" smooth={true} duration={500} >About</NavLink></li>
                                       <li onClick={ this.handleMenu }><NavLink activeClassName="active" to="/home#products"  smooth={true} duration={500} >Products</NavLink></li>

                                      <li onClick={ this.handleMenu }><NavLink activeClassName="active" to="/home#features"  smooth={true} duration={500} >Features</NavLink></li>
                                      <li onClick={ this.handleMenu }><NavLink  activeClassName="active" to="/shop">Shop</NavLink></li>
                                      <li onClick={ this.handleMenu }><NavLink  activeClassName="active" to="/contact">Contact</NavLink></li>

                                      <li onClick={ this.handleMenu }><NavLink  activeClassName="active" to="/cart">Cart</NavLink></li>



              <div className="cartbox-pc" onClick={this.toggleCart}>
                <i className="fas fa-shopping-cart"></i>

                <span className="badge badge-success">
                {this.state.count}
                </span>

              </div>


                </ul>

            </div>
        </div>

      

    </nav>
     



    <Route exact path="/" component={Homepage} />
    <Route path="/home" component={Homepage} />
    <Route path="/contact"  render={(props) => <Contact showNav={this.showNav} /> }  />
    <Route path="/cart"  render={(props) => <Cart {...props} getCount={this.getCount} showNav={this.showNav} refreshCart={this.refreshCart}/> }  />
    <Route path="/cart2" component={Cart2} />
    <Route path="/shop" render={(props) => <Shop {...props} getCount={this.getCount}  showNav={this.showNav} refreshCart={this.refreshCart}/> } />
            

           </div>
         <HeaderCart carter={this.toggleCarter} toggled={ this.state.on ? "header-cart header-dropdown" : "header-cart header-dropdown show-header-dropdown on-phone" } toggleCart={this.toggleCart} {...this.state} />
         <Footer />
</div>

</HashRouter>

        );
    }
}


export default App;