import React, { Component } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export class ImageSlider extends Component {
    // componentDidMount() {
    //     [].slice.call(document.querySelectorAll('.slick-dots > li')).map(el => {
    //         el.style.width = '100px'
    //         el.style.height = '100px'
    //         el.style.border = '1px solid white'

    //         return el;
    //     })
    //     console.log(document.querySelector('.slick-dots').children)
    //     console.log('this.props', this.props)
    // }

    handleImageView = (i) => (
        <div className="q1234" style={{
            backgroundImage: 'url(' + require(`./images/${this.props.type}/${this.props.type}-${this.props.id}-${i + 1}.jpg`) + ')'
        }}>
        </div>
    )

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dotsClass: "slick-dots slick-thumb",
            id: this.props.id,
            // customPaging: this.handleImageView,
        };
        return (
            <Slider {...settings}>
                {
                    this.props.projectPhotos.map(el => {
                        return (
                            <div className="outline-no">
                                <div className="q123" style={{
                                    backgroundImage: 'url(' + require(`./images/${this.props.type}/${el}`) + ')'
                                }}>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        )
    }
}
