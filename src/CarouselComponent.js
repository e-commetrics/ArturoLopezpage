import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import s1 from './img/s1.png'
import s2 from './img/s2.png'
import s3 from './img/s3.png'
import s4 from './img/s4.png'
import s5 from './img/s5.png'
import s6 from './img/s6.png'
import s7 from './img/s7.png'
import s8 from './img/s8.png'
import s9 from './img/s9.png'
import s10 from './img/s10.png'
import s11 from './img/s11.png'
import s12 from './img/s12.png'

function CarouselComponent() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div>
            <Slider {...settings}>
            <div className="overflow-hidden rounded-lg">
                    <img src={s1} className="w-full"/>
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img src={s2} className="w-full"/>
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img src={s3} className="w-full"/>
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img src={s4} className="w-full"/>
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img src={s5} className="w-full"/>
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img src={s6} className="w-full"/>
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img src={s7} className="w-full"/>
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img src={s8} className="w-full"/>
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img src={s9} className="w-full"/>
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img src={s10} className="w-full"/>
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img src={s11} className="w-full"/>
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img src={s12} className="w-full" />
                </div>
            </Slider>
        </div>
    );
}


export default CarouselComponent;
