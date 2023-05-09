import React from 'react';
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  const links = [
    { id : 1, title : "فهرست",
      child : [
          { title : "صفحه اصلی", link : "/" },
          { title : "قوانین و مقررات", link : "/" },
          { title : "ثبت شکایت", link : "/" },
          { title : "درباره ما", link : "/" },
          { title : "ارتباط با ما", link : "/" }
      ]
    },
    { id : 2, title : "خدمات",
      child : [
          { title : "خدمات به ایرلاین ها", link : "/" },
          { title : "خدمات به آژانس ها", link : "/" },
          { title : "راهنمای وب سرویس", link : "/" },
          { title : "همکاری با ما", link : "/" },
      ]
    },
  ];
  
  return (
    <section className="footer section">
      <Container fluid>
        <Row>
          <Col lg={3}>
              <div className="mb-4">
                <div className="text-light about mt-4 mb-2"> شرکت پیشتازان سفر به عنوان اولین زیر ساخت ارتباطی توزیع خدمات گردشـگری ایـران، فعالیت خود را از شـهریور سال 1394 آغاز نمود.چشـم انداز این مجموعه کمــک به توسعه گردشگری الکترونیک ایـران از طـریق ارائه وب سرویس و نرم افزارهای رزرواسیون در تمامی حوزه ها می باشد
                </div>
              </div>
          </Col>

          <Col lg={8}>
            <Row className='mx-5'>
              {
                links.map((link, key) =>
                  <Col key={key} md={4} >
                    <h3 className=" mb-3">{link.title}</h3>
                    <ul className="list-unstyled company-sub-menu">
                      {
                        link.child.map((fLink, key) =>
                          <li key={key}><a href={fLink.link}>{fLink.title}</a></li>
                        )
                      }
                    </ul>
                  </Col>
                )
              }
              
              <Col md={4}>
                <h3 className="mb-3">ارتباط با ما</h3>
                <p className="f-14">آدرس : مشهد ، خیابان امام رضا , امام رضا 26 , پلاک 97</p>
                <h6 className="pb-2">تلفن : 05131808</h6>
                <h6 className="pb-2">فکس : 05131808</h6>
                <h6 className="pb-2">ایمیل : info@safarbooking.com</h6>
                <ul className="list-unstyled footer-social-list mt-4">
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-facebook"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-linkedin"></i></a></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={12}>
            <div className="address-bar">
              <p className="mb-0 f-15">
              تمامی حقوق این وب سایت متعلق به شرکت <a href='/' className='text-primary'>پیشتازان سفر آسمان پاژ</a> می باشد .
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;