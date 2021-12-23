import React from 'react';
import {Container, Row} from "react-bootstrap";
import HeaderComp from "../header/HeaderComp";

import './HomepageComp.scss';

const HomepageComp = () => {
  return (
    <Container fluid className="homepage-comp">
      <Row>
        <HeaderComp/>
      </Row>
    </Container>
  );
};

export default HomepageComp;