import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import { Link } from 'react-router-dom';


class UploadModal extends React.Component {
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
      );
    } else if (!this.state.loggedIn) {
        window.location = '/signin';
    } else {
        var linkToProfile = '/profile/' + this.state.username;



        return (
          <div>

            <button type="button" className="btn btn-primary btn-sm" style={{color: "red", backgroundColor:'black', border:'none'}} onClick={this.handleShow}>
              <span class='upload'>
                  <i class='glyphicon glyphicon-plus-sign'></i>
              </span>
            </button><br/>
            <font color="white" size="3" className="uploadClipsLabel">Upload Clip</font>



              <Modal show={this.state.show} onHide={this.handleClose} style = {{marginTop: '150px'}}>

                <Modal.Header closeButton style = {{backgroundColor:'#403F3F'}}>
                  <Modal.Title style = {{color: 'red'}}>Upload Clip</Modal.Title>
                </Modal.Header>
                <Modal.Body style = {{backgroundColor:'#403F3F', color:'white', fontFamily:'AppleGothic', fontSize:'10px', height:'300px'}}>

                  <div className="panel-body">
                      <form id="signupform" encType="multipart/form-data" method="POST" action="/uploadvideo">
                          <div className="videos">
                              <font style={{marginTop: "50px"}} className="videosLabel" color="white" style={{fontFamily:"AppleGothic"}}>Video</font>
                              <input type="file" style={{marginLeft: "105px", marginTop: "0px", color: "white"}}
                                  className="attachVideoButton" name="videofile" accept='.mov' placeholder="Attach Video" />
                          </div>
                          <div className="title" style={{marginTop: "35px"}}>
                              <font className="titleLabel" color="white" style={{fontFamily:"AppleGothic"}}>Title</font>
                              <textarea className="videoTitle" cols="40" rows="1"
                                  style={{marginLeft: "80px", backgroundColor: "white", borderRadius: "5px"}}
                                  name="title"></textarea>
                          </div>
                          <div className="descriptionTitle" style={{marginTop: "35px"}}>
                              <font className="descriptionLabel" color="white" style={{fontFamily:"AppleGothic"}}>Description</font>
                              <textarea className="videoDescription" cols="40" rows="5"
                                  style={{marginLeft: "35px", backgroundColor: "white", borderRadius: "5px"}}
                                  name="description"></textarea>
                          </div>
                          <div className="uploadVideoButton" style={{marginTop: "25px", marginLeft: "150px"}}>
                              <input type="submit" style={{width: "150px",
                                  backgroundColor: "#990000", color: "white", borderRadius: "5px", border: "0"}}
                              className="uploadButton" value="UPLOAD" />
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
}

export default UploadModal;
