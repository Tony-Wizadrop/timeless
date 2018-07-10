
import React, { Component } from 'react';

class Small extends Component {


  render() {
    return (

<div className="header-cart-item">
									<div className="header-cart-item-img">
										<img src={this.props.obj.image} alt="IMG" />
									</div>

									<div className="header-cart-item-txt">
										<a href="#" className="header-cart-item-name">
											{this.props.obj.name}
										</a>

										<span className="header-cart-item-info">
											{this.props.obj.qty} x {this.props.obj.price}
										</span>
									</div>
								</div>

								);
  }
}

export default Small;