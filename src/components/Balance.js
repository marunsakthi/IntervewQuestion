import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Balance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  render() {

    const expenditure = localStorage.getItem('expenditure') == null ? this.state.expenditure : JSON.parse(localStorage.getItem('expenditure'))

    return (
      <Container >
        <Row>
          <Col style={{ "backgroundColor": "#c3c3c3", "height": "100px" }}>
            <div >
              <Col style={{ "textAlign": "start", "marginTop": "35px" }}>
                <label><b>Balances: </b> Rs. {localStorage.getItem('currentBalance')}</label>
                <div>
                  <Row>
                    <Col>
                      <label>Income: {localStorage.getItem('income')}</label>
                    </Col>
                    <Col>
                      <label>Spended: {localStorage.getItem('spendedMoney')}</label>
                    </Col>
                  </Row>
                </div>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Balance;
