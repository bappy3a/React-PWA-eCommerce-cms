import React, { Component, Fragment } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from '../../assets/images/slider1.jpg';
import Slider2 from '../../assets/images/slider2.jpg';
import Slider3 from '../../assets/images/slider3.jpg';
import axios from 'axios';
import AppUrl from '../../api/AppUrl';

class HomeSlider extends Component {

    constructor(){
        super()
        this.state = {
            sliders : [],
        }
    }
    componentDidMount(){
        this.getSlider();
    }

    getSlider(){
        axios.get(AppUrl.allSlider)
        .then((response)=>{
            this.setState({sliders:response.data});
        })
        .catch((e)=>{
            console.log(e);
        })
    }


    render() {

        const MyView = this.state.sliders.map((slider,id)=>{
            return <div>
                    <img className='slider-img' src={slider.slider_image} alt="" />
                </div>
        })

        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 3500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
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
                <Slider {...settings}>
                    {MyView}
                </Slider>
            </Fragment>
        )
    }
}

export default HomeSlider