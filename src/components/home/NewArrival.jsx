import React, { Component, Fragment } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class NewArrival extends Component {
    render() {

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
                            <div>
                                <Card className='image-box card'>
                                    <img className='center' src="https://rukminim2.flixcart.com/image/880/1056/kjvrdzk0/shoe/z/c/s/sx0168l-6-sparx-navybluepink-original-imafzcsfyruyypgu.jpeg?q=50" alt="" />
                                    <Card.Body>
                                        <p className='product-name-on-card'>Realme GT 2 Pro (Paper White, 128 GB)  (8 GB RAM)</p>
                                        <p className='product-price-on-card'>Price $300</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className='image-box card'>
                                    <img className='center' src="https://rukminim2.flixcart.com/image/880/1056/k6zda4w0/shoe/c/r/h/11008242-40-fila-lt-pea-blk-original-imafpbppkmfgmcxd.jpeg?q=50" alt="" />
                                    <Card.Body>
                                        <p className='product-name-on-card'>Realme GT 2 Pro (Paper White, 128 GB)  (8 GB RAM)</p>
                                        <p className='product-price-on-card'>Price $300</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className='image-box card'>
                                    <img className='center' src="https://rukminim2.flixcart.com/image/880/1056/kxf0jgw0/shoe/q/c/n/-original-imag9vf8mdwkyja6.jpeg?q=50" alt="" />
                                    <Card.Body>
                                        <p className='product-name-on-card'>Realme GT 2 Pro (Paper White, 128 GB)  (8 GB RAM)</p>
                                        <p className='product-price-on-card'>Price $300</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className='image-box card'>
                                    <img className='center' src="https://rukminim2.flixcart.com/image/880/1056/ks99aq80/shoe/5/m/0/8-pro-us-212100-provogue-brown-original-imag5ug8vfsrkmfz.jpeg?q=50" alt="" />
                                    <Card.Body>
                                        <p className='product-name-on-card'>Realme GT 2 Pro (Paper White, 128 GB)  (8 GB RAM)</p>
                                        <p className='product-price-on-card'>Price $300</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className='image-box card'>
                                    <img className='center' src="https://rukminim2.flixcart.com/image/880/1056/kr83ukw0/shoe/t/1/d/6-jump-08-arivo-black-original-imag52gzw7jwz7xy.jpeg?q=50" alt="" />
                                    <Card.Body>
                                        <p className='product-name-on-card'>Realme GT 2 Pro (Paper White, 128 GB)  (8 GB RAM)</p>
                                        <p className='product-price-on-card'>Price $300</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className='image-box card'>
                                    <img className='center' src="https://rukminim2.flixcart.com/image/880/1056/kyj0vbk0/shoe/v/q/c/10-popkorn-01cwhtorng-asian-white-original-imagaqugk6wgwk5q.jpeg?q=50" alt="" />
                                    <Card.Body>
                                        <p className='product-name-on-card'>Realme GT 2 Pro (Paper White, 128 GB)  (8 GB RAM)</p>
                                        <p className='product-price-on-card'>Price $300</p>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Slider>

                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default NewArrival