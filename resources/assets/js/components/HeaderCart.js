import React , { Component } from 'react';
import axios from 'axios';
import Small from './Small';
import Cart from './Cart';
import { Link } from 'react-router-dom';
import onClickOutside from "react-onclickoutside";



class HeaderCart extends Component{

	constructor(props){
		super(props);

		this.destroyCart = this.destroyCart.bind(this);
		this.renderCartitems = this.renderCartitems.bind(this);
	}





handleClickOutside (evt){
    this.props.carter()
  };

	

	getTotal(){
		axios.get('/cart.total').then((
	response
			) =>

			this.setState({
				total : [...response.data]
			})
				)
	}

	destroyCart(){

		axios.post('/cart.empty');
					this.props.getCartitems();	
				this.props.getCount	;	

		
	}

	 renderCartitems(){
        return this.props.cartitems.map(cartitem => (

        	<div key={cartitem.rowId} className="header-cart-item">
									<div className="header-cart-item-img">
										<img src={cartitem.options.image} alt="IMG" />
									</div>

									<div className="header-cart-item-txt">
										<a href="#" className="header-cart-item-name">
										{cartitem.name}  
										</a>

										<span className="header-cart-item-info">
											{cartitem.qty} pieces x  Ksh. {cartitem.price}
										</span>

										<span className="header-cart-item-info">
											{cartitem.options.size}
										</span>
									</div>
								</div>


        	));
     }




	render(){
		return(
				
											
						<div className={this.props.toggled}>
							<ul className="header-cart-wrapitem belowthis" >

									{this.renderCartitems()}

							</ul>

							<div className="header-cart-total">
								Total: Ksh. {this.props.total}
							</div>

							<div className="header-cart-buttons">
							

								<div className="header-cart-wrapbtn">
									
									<Link to="/cart" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4"  onClick={this.props.toggleCart}>
										View Cart
									</Link>
								</div>
							</div>
						</div>
				
				
				);
			}
		}

export default onClickOutside(HeaderCart);