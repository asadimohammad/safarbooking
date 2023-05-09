import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import BootstrapCarousel from './Carousels/Bootstrap';

const Hero = () => {
  return (
    <section className="align-items-center section hero position-relative">
      <Container>
        <Row className="align-items-center justify-content-center">
          <BootstrapCarousel/>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;