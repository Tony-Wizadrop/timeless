import React , { Component } from 'react';
import Slider from "react-slick";
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from 'react-router-dom';


class Products extends Component{

    render(){

        var settings = {
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                
            }
        }
      ]
    };
        return(

 <section className="testimonial-area section-padding" id="products" name="products" >
        <div className="container-fluid">
            <div className="row"> 

                <div className="col-xs-12">
                    <div className="page-title text-center">

                    <ScrollAnimation animateIn="fadeInUp"  duration={1}>

                        <h5 className="title">Our range of products</h5>
                        </ScrollAnimation>


                        <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                        <h3 className="dark-color">We offer a delightful variety of handwash fragrances just for you.</h3>
                        </ScrollAnimation>

                        <div className="space-60"></div>
                    </div>
                </div>

                <div className="col-xs-8 col-xs-offset-2 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2  col-lg-offset-2 col-lg-8">

                <ScrollAnimation animateIn="fadeInUp"  duration={1}>
                    <Slider {...settings} >
                       <Link to="/shop"><div className="itemed"><div className="hovered">Sweet Apple</div><img src="images/color (1).jpg" alt="" /></div></Link>
                        <Link to="/shop"><div className="itemed"><div className="hovered">Summer Fruit</div><img src="images/color (2).jpg" alt="" /></div></Link>
                        <Link to="/shop"><div className="itemed"><div className="hovered">Honey Melon</div><img src="images/color (3).jpg" alt="" /></div></Link>
                        <Link to="/shop"><div className="itemed"><div className="hovered">Mixed Berries</div><img src="images/color (4).jpg" alt="" /></div></Link>
                    </Slider>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    </section>
    );
}
}

export default Products;