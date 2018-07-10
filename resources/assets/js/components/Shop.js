import React , { Component } from 'react';
import ProductList from './ProductList';
import Slider from "react-slick";
import Modal from './Modal';
import axios from 'axios';


class Shop extends Component{

   constructor(props){
    super(props);

    this.state = {
      active : true,
      id: '',
      name: '',
      image: '',
      category: '',
    }

    this.changeState = this.changeState.bind(this);
  }

   
  changeState(id){
    const currentState = this.state.active;
    this.setState({
         active : !currentState
      }) ;


axios.get(`/products/${id}`).then((
            response // console.log(response.data.tasks)
        ) =>
            this.setState({
                id: response.data.theprod.id,
                name: response.data.theprod.name,
                image: response.data.theprod.image,
                category: response.data.theprod.category
            })
        );
    
}

  componentWillMount(){
    window.scrollTo(0, 0);
}


  componentDidMount(){
        this.props.showNav()
  }

    render(){

        
        return(
          <div className="shopbox">
  

        


  <section className="bgwhite">


  <section className="bg-title-page p-t-50 p-b-40 flex-col-c-m shopping ">
    <h2 className="l-text2 t-center">
      Shop
    </h2>
    <p className="m-text13 t-center">
      (Shop prices are as per their retail value)
    </p>
  </section>



             <ProductList  ref="child" changeState={this.changeState}/>
          

      </section>

 <Modal theClassName={this.state.active ? "wrap-modal1 js-modal1 p-t-60 p-b-20 modal-body " : " wrap-modal1 js-modal1 p-t-60 p-b-20 modal-body show-modal1" } changeIt={this.changeState} name={this.state.name} image={this.state.image} category={this.state.category} id={this.state.id} getCount={this.props.getCount} refreshCart={this.props.refreshCart}/>
                              
      </div>
    );
}
}

export default Shop;