import React , { Component } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import axios from 'axios';


class ProductList extends Component{

	constructor(props){
		super(props);

		this.state = {
			active : true,
			alert : null , 
			id : '1',
			name : '2',
			price : '3',
			quantity : '4',			
			products : [],
			all : false,
			handwashs : true,
			sanitizers : true
		};

		 this.showAlert = this.showAlert.bind(this);
		 this.handleClick = this.handleClick.bind(this);
		 this.getHandwashs = this.getHandwashs.bind(this);
		 this.getSanitizers = this.getSanitizers.bind(this);
		 this.getProducts = this.getProducts.bind(this);
		 this.handleSubmit = this.handleSubmit.bind(this);
		 this.renderProducts = this.renderProducts.bind(this);
		 this.all = this.all.bind(this);


		 
	}

	
	showAlert(){
		const getAlert = () => (
				<SweetAlert
				 success
				 title="Done!"
				 onConfirm =
				 	{ () => this.hideAlert() }>
				 Added to Cart
				 </SweetAlert>
			);

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


	  handleSubmit(e) {
        // stop browser's default behaviour of reloading on form submit
        e.preventDefault();
        axios
            .get('/cart', {
            
            	id : this.state.id,
                name: this.state.name,
                price: this.state.price,
                quantity : this.state.quantity,
         

            })
            .then(response => {
                console.log('from handle submit', response);
        
               
    });
    }


    handleClick(id, name , price , image, quantity){    	

    	console.log(id + name + price + quantity + image);

        axios
            .post('/cart.post', {
            
            	id : id,
                name: name,
                price: price,
                quantity : quantity,
                image : image,
         

            })
            .then(response => {
                console.log('from handle submit', response);
        
               
    }).then (
    	this.props.getCount()
    )

    }

   
    renderProducts(){
    	return this.state.products.map(product => (

    		<div key={product.id} className="col-xs-8 for-phone col-sm-3  col-md-3 col-lg-3 p-b-50">
														<div className="block2">
								<div className="block2-img wrap-pic-w of-hidden pos-relative">
									<img src={product.image} alt="IMG-PRODUCT" />

									<div className="block2-overlay trans-0-4">
										
										<div className="block2-btn-addcart w-size1 trans-0-4">
										


											<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4" onClick={ ()=>{ this.props.changeState(product.id) }} >
												Add to Cart
											</button>
									
										</div>
									</div>
								</div>

								<div className="block2-txt p-t-20">
									<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
										{product.name}
									</a>

									<span className="block2-price p-r-5">
										Ksh. {product.price}
									</span>
								</div>
							</div>


				
						</div>
    		));
    }



getProducts() {
        axios.get('/products').then((
            response // console.log(response.data.tasks)
        ) =>
            this.setState({
                products: [...response.data.products]
            })
        );
    }

getHandwashs(){
	axios.get('/products.handwashs').then((
			response
		)=>
			this.setState({
				products: [...response.data.handwashs]
			})
		).then( 
			this.setState( prevState => ({
				handwashs : false,
				all : true,
				sanitizers : true
			}))
		)

	console.log('Got Handwashs')
}



all(){
	this.setState(prevState => ({
		all : false,
		handwashs : true,
		sanitizers : true
	}))
}

getSanitizers(){
	axios.get('/products.sanitizers').then((
			response
		)=>
			this.setState({
				products: [...response.data.sanitizers]
			})
		).then( 
			this.setState( prevState => ({
				sanitizers : false,
				all : true,
				handwashs : true
			}))
			)
}


 componentWillMount() {
        this.getProducts();
        this.renderProducts();
     

    }


    render(){
        return(

<div className="container p-t-100">
      <div className="row">



              <div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
          <div className="leftbar p-r-20 p-r-0-sm">
           
            <h4 className="m-text14 p-b-7" >
              Categories
            </h4>


            <ul className="p-b-54">

            <li className="p-t-4">
                <a  className={this.state.all? "s-text13" : "s-text13 active1" } onClick={ () => {this.getProducts() ; this.all() }}>
                All
                </a>
              </li>

              <li className="p-t-4">
                <a  className={this.state.handwashs? "s-text13" : "s-text13 active1" }  onClick={this.getHandwashs}>
                Handwashes
                </a>
              </li>

              <li className="p-t-4">
                <a className={this.state.sanitizers? "s-text13" : "s-text13 active1" } value="sanitizer" onClick={this.getSanitizers} >
                  Sanitizers
                </a>
              </li>

            </ul>

          </div>
        </div>
        	 <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
					<div className="row">
					
						{this.renderProducts()}

						{this.state.alert}
					</div>
				

				</div>

		
				 </div>



        </div>

    );
  }
}

export default ProductList;
