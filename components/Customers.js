import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Customers = () => {
    let settings = {
        dots: false,
        speed: 500,
        slidesToScroll: 4,
        initialSlide: 10,
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <section className="section" id="customers">
            <Container fluid>
                <Row>
                    <Col>
                        <section
                            dir="rtl"
                            className="customers d-flex justify-content-center position-relative"
                        >
                            <div className="w-100">
                                <h1 className=" title mb-4 ">
                                    مشتریان پیشتازان سفر
                                </h1>
                                <div className="label-title"></div>
                                <div className="img-cus">
                                {/* <Slider {...settings}>
                                    <div>
                                        <img src="/images/ds3.jpeg"/>
                                    </div>
                                    <div>
                                        <img src="/images/ds3.jpeg"/>
                                    </div>
                                    <div>
                                        <img src="/images/ds3.jpeg"/>
                                    </div>
                                    <div>
                                        <img src="/images/ds3.jpeg"/>
                                    </div>
                                    <div>
                                        <img src="/images/ds3.jpeg"/>
                                    </div>
                                    <div>
                                        <img src="/images/ds3.jpeg"/>
                                    </div>
                                    <div>
                                        <img src="/images/ds3.jpeg"/>
                                    </div>
                                    
                                </Slider> */}
                                </div>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Customers;
