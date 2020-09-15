import React, {Component} from 'react';


import { Modal, ModalBody, ModalFooter, Button, ModalTitle} from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';

export default class Login extends Component{

  state = {
    open: false,
    user: "",
    pass: "",
    error: "",
    display: "none",
  }

  handleModal = () => {
    this.setState({open: !this.state.open});
    this.setState({display: "none"});
  }
 
  validateData = () => {
    this.setState({
        user: document.getElementById("user").value,
        pass: document.getElementById("pass").value
    })
    console.log(this.state.user,this.state.pass,"results")
    if(this.state.user === "" || this.state.pass === ""){
        this.setState({error: "Por favor ingrese todos sus datos"});
        this.setState({display: "block"});
        return;
    }
    this.setState({display: "none"})
  }

  render(){
    return <div className="container">
      
      <Button 
        onClick={this.handleModal}
        className="m-0"
      >
          Login
      </Button>

      <Modal show={this.state.open}>
        <ModalHeader className="bg-info">
          <ModalTitle className="text-muted">Login</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <label>Usuario:</label>
          <input 
            className="d-block form-control"
            placeholder="Insert an user"
            id="user"
          />
          <label>Password:</label>
          <input 
            className="d-block form-control"
            placeholder="Insert a password"
            type="password"
            id="pass"
          />
          <div 
            className="alert alert-danger mt-3" 
            style={{display: this.state.display}}
            role="alert"
          >
            <p>{this.state.error}</p>

          </div>

        </ModalBody>
        <ModalFooter>
          <button 
            className="form-group btn btn-info"
            onClick={this.validateData}    
          >
              Send
         </button>
          
          <button 
            className="form-group btn btn-outline-dark"
            onClick={this.handleModal}
          >
            Cancel
          </button>
        </ModalFooter>
      </Modal>

    
    </div>
  }
}
