import React, { Component } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';


function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="slick-prev slick-arrow"
            onClick={onClick}
        />
    );
}

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="slick-next slick-arrow"
            onClick={onClick}
        />
    );
}

export class ImageSlider extends Component {
    componentDidMount() {
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dotsClass: "slick-dots slick-thumb",
            id: this.props.id,
            customPaging: param => <div className="dots">{console.log(param)}</div>,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <Slider {...settings}>
                {
                    this.props.main.map(el => {
                        return (
                            <div className="outline-no">
                                <div className="q123" style={{
                                    backgroundImage: 'url(' + require(`./images/${this.props.type}/${this.props.id}/${el}`) + ')'
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
