import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class Addbutton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }
  render() {
    return (
      <Container >
        <Row style={{ 'marginTop': "20px" }}>
          <Col>
            <Button variant="success" onClick={() => this.props.popShow("Add")}>Add Money (+)</Button>
          </Col>
          <Col>
            <Button variant="danger" onClick={() => this.props.popShow()}>Spended Money (-)</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Addbutton;
