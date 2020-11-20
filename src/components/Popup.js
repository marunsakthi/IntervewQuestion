import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
        loaded: false
        };
    }

    showModal = (props) => {  
    return (
        <Modal show={this.props.showPopup} >
        <Modal.Header >
            <Modal.Title>{this.props.incomeType ? "Add Spended Money" : "Add Received Money"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={this.handleFormSubmit}>
            <label>
                {this.props.incomeType ? "Spended Money" : "Add Money"}    : <input name="addedMoney" type="number" onChange={(event) => this.props.handleInput(event)} />
            </label>
            <label>
                Add Description: <input name="description" type="text" onChange={(event) => this.props.handleInput(event)} />
            </label>

            </form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => this.props.closePopup()} >
            Close
        </Button>
            <Button variant="primary" onClick={() => this.props.handleSubmit()}>
            Save Changes
        </Button>
        </Modal.Footer>
        </Modal>
     )
    }

  render() {
    return (
      <Container >
        {this.showModal()}
      </Container>
    );
  }
}

export default Popup;
