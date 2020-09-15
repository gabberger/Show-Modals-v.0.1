import React, {Component} from 'react';


import { Modal, ModalBody, ModalFooter, Button, ModalTitle} from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';

export default class Signup extends Component{

  state = {
    open: false,
  }

  handleModal = () => {
    this.setState({open: !this.state.open});
  }

  render(){
    return <div className="container">
      
      <Button 
        onClick={this.handleModal}
        className="m-0"
      >
        Signup
      </Button>

      <Modal show={this.state.open}>
        <ModalHeader className="bg-info">
          <ModalTitle className="text-muted">Signup</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <label className="mt-0">Usuario:</label>
          <input 
            className="d-block form-control"
            placeholder="Insert an user"
          />
          <label>Password:</label>
          <input 
            className="d-block form-control"
            placeholder="Insert a password"
            type="password"
          />
          <label>email:</label>
          <input 
            className="d-block form-control"
            placeholder="Insert an email"
          />
            <label>City:</label>
          <input 
            className="d-block form-control"
            placeholder="Insert your city"
          />
          

        </ModalBody>
        <ModalFooter>
          <button className="form-group btn btn-outline-info">Send</button>
          
          <button 
            className="form-group btn btn-outline-dark "
            onClick={this.handleModal}
          >
            Cancel
          </button>
        </ModalFooter>
      </Modal>

    
    </div>
  }
}