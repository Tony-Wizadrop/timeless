import React , { Component } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import axios from 'axios';


class Modal extends Component{

	constructor(props){
		super(props);

		this.state={
		price: '180',
			qty : 1,
		    alert : null , 
		    size : '500 ml',
		    shake : false,

		};

	this.updatePrice = this.updatePrice.bind(this);
	this.increase = this.increase.bind(this);
	this.decrease =  this.decrease.bind(this);
	this.showAlert = this.showAlert.bind(this);
	this.handleClick = this.handleClick.bind(this);
	this.shake = this.shake.bind(this);

			}


	showAlert(){
		const getAlert = () => (
				<SweetAlert
				 success
				 title="Done!"
				 onConfirm =
				 	{ () => {this.hideAlert() ; this.props.changeIt() }}>
				 Added to Cart
				 </SweetAlert>
			);

				this.props.changeState;


		this.setState({
			alert : getAlert()
		});
	}

	hideAlert(){
		console.log('Hiding Alert....');
		this.setState({
			alert : null
		})
	}

		shake(){
			this.setState( prevstate => {
				shake : !prevstate.shake
			})
		}

		updatePrice(event){

	if(this.props.category == 'handwash'){





			if (event.target.value == '500 ml'){
			this.setState({
				size: '500 ml',
				price : 180
			})
		} else if (event.target.value == '5 Litres'){
			this.setState({
				size: '5 Litres',
				price : 1000
			})
		} else if (event.target.value == '10 Litres'){
			this.setState({
				size : '10 Litres',
				price : 1900
			})
		} else if (event.target.value == '20 Litres'){
			this.setState({
				size: '20 Litres',
				price : 3200
			})
		}


} else {
 
 		if (event.target.value == '100 ml'){
			this.setState({
				size: '100 ml',
				price : 120
			})
		} else if (event.target.value == '200 ml'){
			this.setState({
				size: '200 ml',
				price : 200
			})
		} else if (event.target.value == '300 ml'){
			this.setState({
				size : '300 ml',
				price : 300
			})
		}

}
		}

		increase(){
			if(this.state.qty >= 0){
			this.setState({
				qty: this.state.qty + 1
			})
		}
	}

		decrease(){
			if(this.state.qty > 1){
			this.setState({
				qty: this.state.qty - 1
		 	})
		  }
		}

		    handleClick(id, name , price , image, qty, size){    	

    	console.log( 'from Modal', id + name + price + image + qty + size);

        axios
            .post('/cart.post', {
            
            	id : id,
                name: name,
                price: price,
                image : image,
                qty : qty,
                size : size
         

            })
            .then(response => {
                console.log('from handle submit', response);
        
               
    }).then(
    	this.props.getCount(),
    	this.props.refreshCart
    )
    }


	render(){

		if(this.props.category == 'handwash'){

		return(

				<div className={this.props.theClassName}>
		<div className="overlay-modal1 js-hide-modal1"></div>

		<div className="container">
			<div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent white">
				<button className="how-pos3 hov3 trans-04 js-hide-modal1 onTop" onClick={this.props.changeIt}>
					<img src="images/icons/icon-close.png" alt="CLOSE" />
				</button>

				<div className="row">
					<div className="col-md-6 col-lg-7 p-b-30">
						<div className="p-l-25 p-r-30 p-lr-0-lg">
							<div className="wrap-slick3 flex-sb flex-w">
							<div className="modal-image">
								<img src={this.props.image} alt="product image"  />
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-md-6 col-lg-5 p-b-30 leftpad" >
						<div className="p-r-50 p-t-5 p-lr-0-lg">
							<h4 className="mtext-105 cl2 js-name-detail p-b-14">
								{this.props.name}
							</h4>

							<span className={ this.state.shake? "mtext-106 cl2" : "mtext-106 cl2 shake" }>
								Ksh. {this.state.price}
							</span>

				
							<div className="p-t-33">
								<div className="flex-w flex-r-m p-b-10">
									<div className="size-203 flex-c-m sizelabel">
										Size
									</div>

									<div className="size-204 respon6-next">
										<div className="rs1-select2 bor8 bg0 padded">
											<select onChange={this.updatePrice} className="js-select2" name="time">
												<option value="500 ml">500ml</option>
												<option value="5 Litres">5 Litres</option>
												<option value="10 Litres">10 litres</option>
												<option value="20 Litres">20 Litres</option>
											</select>
											<div className="dropDownSelect2"></div>
										</div>
									</div>
								</div>

							

								<div className="flex-w flex-r-m p-b-10">
								<div className="size-150 m-b-60 sizelabel">
										Pieces
									</div>
									<div className="size-204 flex-w flex-m respon6-next">

									
										<div className="wrap-num-product flex-w m-r-20 m-tb-10">
											<div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m" onClick={this.decrease}>
												<i className="fas fa-minus"></i>
											</div>

											<input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product" value={this.state.qty}></input>

											<div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m" onClick={this.increase}>
												<i className="fas fa-plus"></i>
											</div>
										</div>

										<button className="flex-c-m stext-101 cl0 size-101 b312 bor1 hov-btn1 p-lr-15 trans-04 add-button js-addcart-detail" onClick={ () => {this.handleClick(this.props.id ,this.props.name , this.state.price , this.props.image , this.state.qty , this.state.size); this.showAlert() }}>
											Add to cart
										</button>
									</div>
								</div>	
							</div>

							
							<div className="flex-w flex-m p-l-100 p-t-40 respon7">
								<div className="flex-m bor9 p-r-10 m-r-11">
									<a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100" data-tooltip="Add to Wishlist">
										<i className="zmdi zmdi-favorite"></i>
									</a>
								</div>

							{this.state.alert}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

				);

	} else {

				return(

				<div className={this.props.theClassName}>
		<div className="overlay-modal1 js-hide-modal1"></div>

		<div className="container-sized">
			<div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent white">
				<button className="how-pos3 hov3 trans-04 js-hide-modal1 onTop" onClick={this.props.changeIt}>
					<img src="images/icons/icon-close.png" alt="CLOSE" />
				</button>

				<div className="row">
					<div className="col-md-6 col-lg-7 p-b-30">
						<div className="p-l-25 p-r-30 p-lr-0-lg">
							<div className="wrap-slick3 flex-sb flex-w">
							<div className="modal-image">
								<img src={this.props.image} alt="product image"  />
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-md-6 col-lg-5 p-b-30 leftpad" >
						<div className="p-r-50 p-t-5 p-lr-0-lg">
							<h4 className="mtext-105 cl2 js-name-detail p-b-14">
								{this.props.name}
							</h4>

							<span className={ this.state.shake? "mtext-106 cl2" : "mtext-106 cl2 shake" }>
								Ksh. {this.state.price}
							</span>

				
							<div className="p-t-33">
								<div className="flex-w flex-r-m p-b-10">
									<div className="size-203 flex-c-m sizelabel">
										Size
									</div>

									<div className="size-204 respon6-next">
										<div className="rs1-select2 bor8 bg0 padded">
											<select onChange={this.updatePrice} className="js-select2" name="time">
												<option value="100 ml">100 ml</option>
												<option value="200 ml">200 ml</option>
												<option value="300 ml">300 ml</option>
											</select>
											<div className="dropDownSelect2"></div>
										</div>
									</div>
								</div>

							
<div className="flex-w flex-r-m p-b-10">
								<div className="size-150 m-b-60 sizelabel">
										Pieces
									</div>
									<div className="size-204 flex-w flex-m respon6-next">
										<div className="wrap-num-product flex-w m-r-20 m-tb-10">
											<div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m" onClick={this.decrease}>
												<i className="fas fa-minus"></i>
											</div>

											<input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product" value={this.state.qty}></input>

											<div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m" onClick={this.increase}>
												<i className="fas fa-plus"></i>
											</div>
										</div>

										<button className="flex-c-m stext-101 cl0 size-101 b312 bor1 hov-btn1 p-lr-15 trans-04 add-button js-addcart-detail" onClick={ () => {this.handleClick(this.props.id ,this.props.name , this.state.price , this.props.image , this.state.qty , this.state.size); this.showAlert() }}>
											Add to cart
										</button>
									</div>
								</div>	
							</div>

							
							<div className="flex-w flex-m p-l-100 p-t-40 respon7">
								<div className="flex-m bor9 p-r-10 m-r-11">
									<a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100" data-tooltip="Add to Wishlist">
										<i className="zmdi zmdi-favorite"></i>
									</a>
								</div>

							{this.state.alert}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

				);

	}

	}
}

export default Modal;