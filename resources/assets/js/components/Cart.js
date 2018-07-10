import React , { Component } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import axios from 'axios';
import { Link, browserHistory } from 'react-router';

class Cart extends Component{

	constructor(props){
		super(props);

		this.state={

			cartitems : [],
			alert : null,
			qty : '',
			total : '',
			name : '',
			phone : ''
		}
		

		this.getCart = this.getCart.bind(this);
		this.getTotal = this.getTotal.bind(this);
		this.destroyCart = this.destroyCart.bind(this);
		this.showAlert = this.showAlert.bind(this);
		this.deleteThis = this.deleteThis.bind(this);
		this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
	}

showAlert(){
		const getAlert = () => (
				<SweetAlert
				 success
				 title="Success!"
				 onConfirm =
				 	{ () => this.hideAlert() }>
				 Thankyou for shopping at Timeless!.We'll contact you shortly to confirm your order. 
				 </SweetAlert>
			);

				this.props.changeState;


		this.setState({
			alert : getAlert()
		});
	}

	handleChange1(e){
    this.setState({
      name: e.target.value
    })
  }
  handleChange2(e){
    this.setState({
      phone: e.target.value
    })
  }



  handleSubmit(e) {
        // stop browser's default behaviour of reloading on form submit
        e.preventDefault();


        axios.post('/cart.checkout', {
                name: this.state.name,
                phone: this.state.phone
            }).then(
                this.setState({
                    name: '',
                    phone : ''
                })
            ).then(
            		this.destroyCart()
	            )
    }

	hideAlert(){
		console.log('Hiding Alert....');
		this.setState({
			alert : null
		})
	}

	componentWillMount(){
		this.getCart(),
		this.getTotal(),
		  
    window.scrollTo(0, 0)

	}

	getCart(){

axios.get('/cart.display').then((
			response
		)=>
			this.setState({
				cartitems: [...response.data.itemed]
			})
		)
}


	deleteThis(id){
    

		 // remove from local state
        const isNotId = cartitem => cartitem.rowId !== id;
        const updatedTasks = this.state.cartitems.filter(isNotId);
        this.setState({ cart: updatedTasks });
        // make delete request to the backend
        axios.post(`/cart.remove/${id}`).then(
        		this.getCart(),
        		this.getTotal(),
        		this.props.getCount()
        	)

	}

	destroyCart(){

		axios.post('/cart.empty'),
						
				this.getCart(),
				this.getTotal(),
				this.props.getCount(),
				this.props.refreshCart(),
				this.showAlert()

		
	}

	getTotal(){

axios.get('/cart.total').then((
			response
		)=>
			this.setState({
				total: [...response.data]
			})
		)
}



	increase(){
			if(this.state.qty >= 0){
			this.setState({
				qty: this.state.qty + 1
			})
		}
	}

	componentDidMount(){
		this.props.showNav()
	}

		decrease(){
			if(this.state.qty > 1){
			this.setState({
				qty: this.state.qty - 1
		 	})
		  }
		}

	renderCartitems(){

		if (this.state.cartitems != ''){
		return this.state.cartitems.map(cartitem => (

		<tr  key={cartitem.rowId} className="table-row">
							<td className="column-1">
								<div className="cart-img-product b-rad-4 o-f-hidden" onClick={ () => { this.deleteThis(cartitem.rowId) }}>
									<img src={cartitem.options.image} alt="IMG-PRODUCT" />
								</div>
							</td>
							<td className="column-2">{cartitem.name}</td>
							<td className="column-6">{cartitem.options.size}</td>
							<td className="column-3">Ksh. {cartitem.price}</td>
							<td className="column-4">
								<div className="flex-w bo5 of-hidden w-size5 remove-right-margin">
									

									<input className="align-mid" type="number" placeholder={cartitem.qty}></input>

									
								</div>
							</td>

							<td className="column-5">Ksh. {cartitem.price*cartitem.qty} </td>
							

						</tr>
						));

	}

	else {

		return (

				<div className="size30 trans-0-4 m-t-10 m-b-10 m-r-10">

					<h4  className="m-text20 p-b-24" > Your Cart is  currently empty, please shop to add items to your cart </h4>							

				</div>
						);

	}

	}


    render(){
        return(

        	<div className="cart-container">

        		<section className="bg-title-page p-t-40 p-b-50 flex-col-c-m cart-image" >
		<h2 className="l-text2 t-center">
			CART
		</h2>
	</section>

        		<section className="cart bgwhite p-t-70 p-b-100">
		<div className="container p-r-l-150" >
			
			<div className="container-table-cart pos-relative">
				<div className="wrap-table-shopping-cart bgwhite no-scrolling">
					<table className="table-shopping-cart">
					<tbody>
						<tr className="table-head">
							<th className="column-1"></th>
							<th className="column-2">Product</th>
								<th className="column-6">Size</th>
							<th className="column-3">Price</th>
							<th className="column-4 p-l-70">Quantity</th>
							<th className="column-5">Totals</th>
							
						
						</tr>

												{this.renderCartitems()}
						</tbody>
					</table>
				</div>
			</div>

			<div className="flex-w flex-sb-m p-t-25 p-b-25 bo8 p-l-35 p-r-60 p-lr-15-sm">
				<div className="flex-w flex-m w-full-sm">
					

					<div className="size30 trans-0-4 m-t-10 m-b-10 m-r-10">
										<h5 className="m-text20 p-b-24 left">Current Total: &nbsp;   Ksh. {this.state.total}</h5>

						
					</div>
				</div>

				<div className="size10 trans-0-4 m-t-10 m-b-10">
					

					
				</div>
			</div>

			<div className="bo9 w-size18 p-l-40 p-r-40 p-t-30 p-b-38 m-t-30 m-r-0 m-l-auto p-lr-15-sm">
				<h5 className="m-text20 p-b-24">
					Cart Totals
				</h5>

				
				<div className="flex-w flex-sb-m p-b-12">
					<span className="s-text18 w-size19 w-full-sm">
						Total
					</span>

					<span className="m-text21 w-size20 w-full-sm">
						Ksh. &nbsp; {this.state.total}
					</span>
				</div>

			 <form onSubmit={this.handleSubmit}>

				<div className="flex-w flex-sb bo10 p-t-15 p-b-20">
					<span className="s-text18 w-size19 w-full-sm">
						Order
					</span>

					<div className="w-size20 w-full-sm">
						<p className="s-text8 p-b-23">
					Kindly fill in your name and contact information (email or phone) so we can contact you concerning your order.
						</p>

						<i className="fa fa-user"></i>
						<div className="size25 m-t-12 bo4 m-b-22">						
							<input className="sizefull s-text7 p-l-15 p-r-15" type="text" name="postcode" placeholder="John Doe" onChange={this.handleChange1} required/>
						</div>

							<i className="fa fa-phone"></i>
						<div className="size25 m-t-12 bo4 m-b-22">
							<input className="sizefull s-text7 p-l-15 p-r-15" type="text" name="postcode" placeholder="0712-345-678 / example@gmail.com" onChange={this.handleChange2} required/>

						</div>
					</div>
				</div>

				
				<div className="flex-w flex-sb-m p-t-26 p-b-30">
					<span className="m-text22 w-size30 w-full-sm">
						Total: &nbsp; &nbsp; Ksh. {this.state.total}

					
					</span>
				</div>

				<div className="size15 trans-0-4">
					
					<button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4" type="submit">
						Finish
					</button>
				</div>

				</form>
			</div>
		</div>
	</section>

{this.state.alert}
	</div>


        	)
    }
}

export default Cart;