import React, { Component, Fragment } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import AppUrl from '../../api/AppUrl';

class NewArrival extends Component {

    constructor(){
        super();
        this.state = {
            NewArrival : [],
        }
    }
    
    componentDidMount(){
        this.getAllNewArrival();
    }

    getAllNewArrival(){
        axios.get(AppUrl.allArrival)
            .then((response)=>{
                this.setState({NewArrival:response.data})
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    }


    render() {

        const NewArrival = this.state.NewArrival;

        const MyView = NewArrival.map((product,i)=>{
            return <div>
                <Card className='image-box card'>
                    <img className='center' src={product.image} alt="" />
                    <Card.Body>
                        <p className='product-name-on-card'>{product.name}</p>
                        <p className='product-price-on-card'>Price ${product.price}</p>
                    </Card.Body>
                </Card>
            </div>
        });

        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            arrows:false,
            slidesToScroll: 1,
            autoplay: true,
            speed: 800,
            autoplaySpeed: 3000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        return (
            <Fragment>
                <Container className='text-center '>
                    <div className='section-title text-center mb-55'>
                        <h2>New Arrival</h2>
                        <p>Sume Of Our Exclusive Collection, You may Like</p>
                    </div>
                    <Row>
                        <Slider {...settings}>
                            {MyView}
                        </Slider>

                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default NewArrival