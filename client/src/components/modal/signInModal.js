import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import { Link } from 'react-router-dom';
import RegisterModal from './registerModal.js'


class SignInModal extends React.Component {

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

        <button type="button" className="btn btn-link" onClick={this.handleShow}>Sign In / Create Account</button>

        <Modal show={this.state.show} onHide={this.handleClose} style = {{marginTop: '150px'}}>

                <div id="loginbox" style={{top: "0px", width:"500px", right:"100px"}}
                    className="mainbox col-sm-6 col-sm-offset-3 col-md-6 col-offset-3 col-lg-6 col-lg-offset-3">
                    <div className="panel panel-info">
                        <div className="panel-headingA" style={{paddingTop: "15px"}}>
                            <center><font size="5" color="white">Sign In</font></center>
                        </div>
                        <div style={{paddingTop: "20px"}} className="panel-bodyA">
                            <form id="loginform" className="form-horizontal" role="form" method="POST" action="/signin">
                                <div style={{marginBottom: "25px"}} className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                    <input id="login-username" type="text" className="form-control"
                                        name="username" style={{width: "95%"}} placeholder="Username"/>
                                </div>
                                <div style={{marginBottom: "25px"}} className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                    <input id="login-password" type="password" className="form-control"
                                        name="password" style={{width: "95%"}} placeholder="Password"/>
                                </div>
                                <div className="input-group">
                                    <div style={{marginTop: "10px"}} className="form-group">
                                        <div className="row">
                                            <input type="submit" style={{marginLeft: "75%"}}
                                                id="btn-default" value="LOGIN"/>
                                        </div>
                                        <div className="row">
                                            <RegisterModal />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

        </Modal>
      </div>
    );
  }
}

export default SignInModal;
