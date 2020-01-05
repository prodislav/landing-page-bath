import React, { Component } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export class ImageSlider extends Component {
    componentDidMount() {
        [].slice.call(document.querySelectorAll('.slick-dots > li')).map(el => {
            el.style.width = '100px'
            el.style.height = '100px'
            el.style.border = '1px solid white'

            return el;
        })
        console.log(document.querySelector('.slick-dots').children)
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dotsClass: "slick-dots slick-thumb",
            customPaging: function (i) {
                return (
                    <div className="q1234" style={{
                        backgroundImage: 'url(' + require(`./images/project11-${i + 1}.jpg`) + ')'
                    }}>
                    </div>
                );
            },
        };
        return (
            <Slider {...settings}>
                {
                    [1, 2, 3, 4].map(el => {
                        return (
                            <div className="outline-no">
                                <div className="q123" style={{
                                    backgroundImage: 'url(' + require(`./images/project11-${el}.jpg`) + ')'
                                }}>
                                </div>
                            </div>
                            // <div className='q123' style={{backgroundColor:`url('/images/project11-${el}.jpg')!important`}}>
                            //     {/* <img src={'/images/project11-' + el + '.jpg'} height='500' /> */}
                            // </div>
                        )
                    })
                }
            </Slider>
        )
    }
}
