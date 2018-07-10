import React , { Component } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import axios from 'axios';

class Contact extends Component{

		constructor(props){
		super(props);

		this.state={

			name : '',
			phone : '' ,
			email : '',
			message : '',
			alert : null,

		}
		
		this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
       this.handleChange3 = this.handleChange3.bind(this);
       this.handleChange4 = this.handleChange4.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      		this.showAlert = this.showAlert.bind(this);

	}




componentDidMount(){
	    window.scrollTo(0, 0)
	this.props.showNav()

}

showAlert(){
		const getAlert = () => (
				<SweetAlert
				 success
				 title="Sent!"
				 onConfirm =
				 	{ () => this.hideAlert() }>
				 Thankyou for your feedback.
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


	 handleSubmit(e) {
        // stop browser's default behaviour of reloading on form submit
        e.preventDefault();
        	this.showAlert();

        axios.post('/message', {
                name: this.state.name,
                phone: this.state.phone,
                email: this.state.email,
                message: this.state.message
            }).then(
                this.setState({
                    name: '',
                    phone : '',
                    email : '',
                    message : ''
                })
            )
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
    handleChange3(e){
    this.setState({
      email: e.target.value
    })
  }
    handleChange4(e){
    this.setState({
      message: e.target.value
    })
  }


    render(){
        return(
        	<div className="cart-container">
	<section className="bg-title-page p-t-40 p-b-50 flex-col-c-m contact-image" >
		<h2 className="l-text2 t-center">
			Contact
		</h2>
	</section>

	<section className="bgwhite p-t-66 p-b-60">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 p-b-30 contact_col">
				<div className="contact_contents">
					<h1>Contact Us</h1>
					
					<br />
					<div >
						<p className="m-text26"><i className="fas fa-envelope"></i> &nbsp;Email</p>
						<p>CUSTOMERCARE@TIMELESS-ESSENTIALS.CO.KE</p>
						<p>SALES@TIMELESS-ESSENTIALS.CO.KE</p>
					</div>
					<br />
					
					<div>
						<p className="m-text26"><i className="fas fa-phone"></i> &nbsp;Phone</p>
						<p>0748-635-395</p>
						<p>0710-303-897</p>
					</div>

					<br />

					<p className="m-text26" ><i className="fas fa-map-marker"></i> &nbsp;Address</p>
					<p>P.O. BOX 9193-00200</p>
				</div>
				</div>

				<div className="col-md-6 p-b-30">
					<form className="leave-comment" onSubmit={this.handleSubmit}>
						<h4 className="m-text26 p-b-36 p-t-15">
							Send us your message
						</h4>

						<div className="bo4 of-hidden size15 m-b-20">
							<input className="sizefull s-text7 p-l-22 p-r-22" type="text" name="name" placeholder="Full Name" onChange={this.handleChange1} required/>
						</div>

						<div className="bo4 of-hidden size15 m-b-20">
							<input className="sizefull s-text7 p-l-22 p-r-22" type="text" name="phone-number" placeholder="Phone Number" onChange={this.handleChange2} required/>
						</div>

						<div className="bo4 of-hidden size15 m-b-20">
							<input className="sizefull s-text7 p-l-22 p-r-22" type="email" name="email" placeholder="Email Address" onChange={this.handleChange3} required/>
						</div>

						<textarea className="dis-block s-text7 size20 bo4 p-l-22 p-r-22 p-t-13 m-b-20" name="message" placeholder="Message" onChange={this.handleChange4} required></textarea>

						<div className="w-size25">
							<button className="flex-c-m size2 bg1 bo-rad-23 hov1 m-text3 trans-0-4" type="submit">
								Send
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		{this.state.alert}
	</section>
	</div>
	
        	);
    }
}

export default Contact;