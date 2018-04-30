import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import { Link } from 'react-router-dom';
import '../signin/signin.css';

class RegisterModal extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {

    return (
      <div>

      <button type="button" style={{marginLeft: "75%", marginTop: "10px"}} id="btn-default" onClick={this.handleShow}>SIGN UP</button>

        <Modal show={this.state.show} onHide={this.handleClose} style = {{marginTop: '150px'}}>

        <div className="col-md-12 col-sm-12">
          <div className="sign container-fluid" style={{ backgroundColor:'', height:'0px'}}>
              <div id="signupbox" style={{ backgroundColor:'', right:'0px', bottom:'75px'}}
                  className="col-md-12 col-sm-12">
                  <div className="panel panel-info">
                      <div className="panel-headingB" style={{paddingTop: "15px"}}>
                          <center><font size="5" style={{color: "white"}}>Sign Up</font></center>
                      </div>
                      <div style={{paddingTop: "20px"}} className="panel-bodyB">
                          <form id="signupform" className="form-horizontal" role="form" method="POST" action="/register">
                              <font style={{color: "white", marginLeft: "50px", fontFamily: "AppleGothic"}} size="3">Name</font>
                              <div style={{marginBottom: "25px"}} className="input-group">
                                  <span className="input-group-addon"><i className="glyphicon glyphicon-book"></i></span>
                                  <input id="signup-name" type="text" className="form-control"
                                      name="name" style={{width: "95%"}} placeholder="Name"/>
                              </div>
                              <font style={{color: "white", marginLeft: "50px", fontFamily: "AppleGothic"}} size="3">Email</font>
                              <div style={{marginBottom: "25px"}} className="input-group">
                                  <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                  <input id="signup-email" type="text" className="form-control"
                                      name="email" style={{width: "95%"}} placeholder="Email"/>
                              </div>
                              <font style={{color: "white", marginLeft: "50px", fontFamily: "AppleGothic"}} size="3">Username</font>
                              <div style={{marginBottom: "25px"}} className="input-group">
                                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                  <input id="signup-username" type="text" className="form-control"
                                      name="username" style={{width: "95%"}} placeholder="Username"/>
                              </div>
                              <font style={{color: "white", marginLeft: "50px", fontFamily: "AppleGothic"}} size="3">Password</font>
                              <div style={{marginBottom: "25px"}} className="input-group">
                                  <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                  <input id="signup-password" type="password" className="form-control"
                                      name="password" style={{width: "95%"}} placeholder="Password"/>
                              </div>
                              <font style={{color: "white", marginLeft: "50px", fontFamily: "AppleGothic"}} size="3">Confirm Password</font>
                              <div style={{marginBottom: "25px"}} className="input-group">
                                  <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                  <input id="signup-password" type="password" className="form-control"
                                      name="confirmedPassword" style={{width: "95%"}} placeholder="Password"/>
                              </div>
                              <div className="input-group">
                                  <div style={{marginTop: "10px"}} className="form-group">
                                      <input type="submit" style={{marginLeft: "30px"}}
                                          className="createAccountButton" value="Create Account" />
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        </Modal>
      </div>
    );
  }
}

export default RegisterModal;
