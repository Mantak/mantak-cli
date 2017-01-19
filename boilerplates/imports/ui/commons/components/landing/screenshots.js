import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

const Usecases = () => {
  return (
    <section id="screenshots">
        <div className="container">
          <br/>
          <br/>
          <h3>Screenshots</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <Container>
          <Row>
            <Col md={2} sm={4} xs={6}>
              <a href="images/5.jpg">
                <img src="images/5.jpg"/>
              </a>
            </Col>
            <Col md={2} sm={4} xs={6}>
              <a href="images/5.jpg">
                <img src="images/6.jpg"/>
              </a>
            </Col>
            <Col md={2} sm={4} xs={6}>
              <a href="images/5.jpg">
                <img src="images/7.jpg"/>
              </a>
            </Col>
            <Col md={2} sm={4} xs={6}>
              <a href="images/5.jpg">
                <img src="images/8.jpg"/>
              </a>
            </Col>
            <Col md={2} sm={4} xs={6}>
              <a href="images/5.jpg">
                <img src="images/9.jpg"/>
              </a>
            </Col>
            <Col md={2} sm={4} xs={6}>
              <a href="images/5.jpg">
                <img src="images/10.jpg"/>
              </a>
            </Col>
          </Row>
        </Container>
    </section>
  );
};

export default Usecases;
