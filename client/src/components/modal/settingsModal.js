import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import { Link } from 'react-router-dom';


class SettingsModal extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      loggedIn: 'null',
      username: ''
    }
  }

  componentWillMount() {
     fetch('/api/verifyUser', {credentials: 'include'})
       .then(response => response.json())
       .then(data => this.setState({loggedIn: data.loggedIn, username: data.user.username}, () => console.log('Data fetched..',
       data)));
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    if (this.state.loggedIn === 'null') {
        return (
          <p></p>
        )
    } else if (!this.state.loggedIn) {
        window.location = '/signin';
    } else {
      var linkToProfile = '/profile/' + this.state.username;


      return (
        <div>

          <button type="button" className="btn btn-primary btn-sm" style={{width: '100px', background:'gray', borderColor:'gray'}} onClick={this.handleShow}>Settings</button>

          <Modal show={this.state.show} onHide={this.handleClose} style = {{marginTop: '150px'}}>

            <Modal.Header closeButton style = {{backgroundColor:'#403F3F'}}>
              <Modal.Title style = {{color: 'red'}}>Settings</Modal.Title>
            </Modal.Header>
            <Modal.Body style = {{backgroundColor:'#403F3F', color:'white', fontFamily:'AppleGothic', fontSize:'10px', height:'300px'}}>

              <div className="panel-body">
                  <form id="signupform" className="form-horizontal"
                      encType="multipart/form-data" method="POST" action="/settings">
                      <div className="row">
                          <font className="col-xs-3 col-sm-3 col-md-3"
                              color="white" style={{fontFamily:"AppleGothic"}}>Change Profile Picture</font>
                            <input type="file" className="col-xs-2 col-sm-2 col-md-2" name="profilepic" accept="image/*" />
                          <font className="col-xs-3 col-sm-3 col-sm-offset-1" color="white" style={{fontFamily:"AppleGothic"}}>
                       Update Social Media
                          </font>
                          <input className="col-xs-3 col-sm-2"
                              id="form" name="socialMediaOne" type="text"></input>
                      </div>
                      <div className="row" style={{marginTop: "30px"}}>
                          <font className="col-xs-3 col-sm-3 col-md-3" color="white" style={{fontFamily:"AppleGothic"}}>Change Password</font>
                          <input className="col-xs-2 col-sm-2"
                              id="form" name="changedPassword" type="text"></input>
                          <input className="col-xs-3 col-xs-offset-3 col-sm-2 col-sm-offset-4"
                              id="form" name="socialMediaTwo" type="text"></input>
                      </div>
                      <div className="row" style={{marginTop: "30px"}}>
                          <input className="col-xs-3 col-xs-offset-8 col-sm-2 col-sm-offset-9"
                              id="form" name="socialMediaThree" type="text"></input>
                      </div>
                      <div className="row" style={{marginTop: "30px"}}>
                          <font className="col-xs-3 col-sm-3 col-md-3" color="white" style={{fontFamily:"AppleGothic"}}>Update Bio</font>
                          <textarea className="col-xs-7 col-sm-7"
                              id="editBioForm" name="changedBio" cols="55" rows="5"></textarea>
                      </div>
                      <div className="row" style={{marginTop: "30px"}}>
                          <input className="col-xs-2 col-xs-offset-5 col-sm-2 col-sm-offset-5"
                              id="saveButton" type="submit" value="SAVE"/>
                      </div>
                  </form>
              </div>

            </Modal.Body>
            <Modal.Footer style = {{backgroundColor:'#403F3F'}}>

              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
        </div>
      );
    }
  }
};
export default SettingsModal;
