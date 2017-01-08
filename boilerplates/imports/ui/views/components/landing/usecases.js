import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

const Features = () => {
  return (
    <section id="usecases">
       <Container>
         <Row>
           <Col md={6}>
             <h3>This is your first amazing feature and it's awesome!</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
             <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           </Col>
           <Col md={6}>
            <img src="images/feature_mockup_1.png" alt="" className="img_responsive"/>
           </Col>
         </Row>
         <Row>
           <Col md={6}>
             <img src="images/feature_mockup_2.png" alt="" className="img_responsive"/>
           </Col>
           <Col md={6}>
             <h3>And this is your second amazing feature!</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
             <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           </Col>
         </Row>
      </Container>
    </section>
  );
};

export default Features;
