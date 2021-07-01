import React from 'react';
import { Carousel } from 'react-bootstrap';
import './bootstrap.min.css';


function CarouselContainer(){
    return(
        <div className = "carousel-slider">
        <Carousel>
            <Carousel.Item interval={5000}>
                <img
                    className="carousel-slider"
                    src="contents/banners/1.png"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="carousel-slider"
                    src="contents/banners/2.png"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carousel-slider"
                    src="contents/banners/3.png"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default CarouselContainer;