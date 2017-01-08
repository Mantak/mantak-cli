import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

const Features = () => {
  return (
    <section id="features">
      <Container>
        <Row>
          <Col md={4}>
            <div data-icon="&#xe046;" className="iconbox_icon"/>
            <div className="iconbox_content">
              <h5>First Feature</h5>
              <p>Lorem ipsum dolor sit amet, consectetur elit, sed do tempor incididunt dolore.</p>
            </div>
          </Col>
          <Col md={4}>
            <div data-icon="&#xe061;" className="iconbox_icon"/>
            <div className="iconbox_content">
              <h5>Second Feature</h5>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu pariatur.</p>
            </div>
          </Col>
          <Col md={4}>
            <div data-icon="&#xe07b;" className="iconbox_icon"/>
            <div className="iconbox_content">
              <h5>Third Feature</h5>
              <p>Excepteur sint occaecat cupidatat non proptate velit ident, sunt in culpa qui officia.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
