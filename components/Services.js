import React from "react";
import { Container, Row, Col, Button } from "reactstrap";


const Service = () => {
    const services = [
        {
            title: " شرکت پیشتازان سفر آسمان پاژ",
            desc: "شرکت پیشتازان سفر به عنوان اولین زیر ساخت ارتباطی توزیع خدمات گردشگری ایران، فعالیت خود را از شهریور سـال 1394 آغـاز نمود. چشم انـداز این مجموعه کمــک به توسعه گردشـگری الکترونیک ایــران از طریق ارائه وب سرویس و نرم افزارهای زیرساختی رزرواسیون در تمامی حوزه ها می باشد. ما در طول همکاری با مشتریان‌مان نرم‌افزارهایی با سرعت و کارایی بالا را تضمین می کنیم که نتیجه عملکرد یک سازمان پویا و ساختار چابک است.",
            img: "/images/company-logo.png",
            btn: [
                <Button color="warning" className="mx-5" size="">
                    ادامه مطلب
                </Button>,
                <Button color="primary" className="mx-5" size="">
                    ارتباط با ما
                </Button>,
            ],
        },
        {
            title: "نرم افزار ایرلاینی گریفین",
            desc: "نرم افزار گریفین به صورت تخصصی ویژه شرکت های هواپیمایی طراحی شده است. و کلیه امکانات مورد نیاز جهت مدیریت و فروش آنلاین بلیت و همچنین عملیات پرواز و ... را دارا می باشد. نرم افزار گریفین کلیه خدمات ایرلاینی شامل مدیریت هوشمند نرخ پرواز و مدیریت مشتریان CRM و مدیریت گروه پرواز و همچنین ارایه خدمات به مشتریان از جمله انتخاب صندلی و میزان بار و انتخاب حیوان خانگی و .. را در اختیار شما قرار می دهد ...",
            img: "/images/griffin.png",
            btn: (
                <Button color="warning" className="mx-5" size="">
                    ادامه مطلب
                </Button>
            ),
        },
        {
            title: "کیوسک فروش پرواز و سلف چکین",
            desc: "امکان رزرو آنلاین خدمات گردشگری ( شامل پرواز و هتل و قطار) در هر مکان و 24 ساعت شبانه روز قابلیت انتخاب صندلی و تعیین مقدار بار اضافه همراه برای مسافرین امکان فروش پرواز توسط کارمندان فروش در فرودگاه ها",
            img: "/images/kiosk-back.png",
            btn: (
                <Button color="warning" className="mx-5" size="">
                    ادامه مطلب
                </Button>
            ),
        },
        {
            title: "وب سرویس تجمیع شده خدمات گردشگری سفر",
            desc: "امکان رزرو آنلاین خدمات گردشگری ( شامل پرواز و هتل و قطار) در هر مکان و 24 ساعت شبانه روز قابلیت انتخاب صندلی و تعیین مقدار بار اضافه همراه برای مسافرین امکان فروش پرواز توسط کارمندان فروش در فرودگاه ها و ...",
            img: "/images/GDS.png",
            btn: (
                <Button color="warning" className="mx-5" size="">
                    ادامه مطلب
                </Button>
            ),
        },
    ];

    return (
        <section className="section" id="service">
            <Container fluid>
                <Row>
                    <Col>
                        {services.map((service, key) => (
                            <section
                                dir="rtl"
                                className="service d-flex p-5 justify-content-center position-relative"
                            >
                                <Container>
                                    <Row className="align-items-center service-item d-flex">
                                        <Col sm={4} lg={4}>
                                            <div className="mt-5 mt-lg-0">
                                                <img
                                                    src={service.img}
                                                    alt=""
                                                    className="img-fluid mx-auto d-block"
                                                />
                                            </div>
                                        </Col>
                                        <Col sm={8} lg={8}>
                                            <div className="pr-lg-5">
                                                <h1 className=" title mb-4 font-weight-normal line-height-1_4">
                                                    {service.title}
                                                </h1>
                                                <div className="label-title"></div>
                                                <p className="desc text-muted mb-4 pb-2">
                                                    {service.desc}
                                                </p>
                                                <div className="d-flex justify-content-center w-100">
                                                    {service.btn}
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </section>
                        ))}
                    </Col>
                </Row>
                <Row>
                    <div className="plane-back w-100"></div>
                </Row>
            </Container>
        </section>
    );
};

export default Service;
