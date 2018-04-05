import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './uploadVideo.css';

class UploadVideo extends Component {
    constructor() {
      super();
      this.state = {
        loggedIn: 'null'
      }
    }

    componentWillMount() {
      fetch('/api/verifyUser', {credentials: 'include'})
        .then(response => response.json())
        .then(data => this.setState({loggedIn: data.loggedIn}, () => console.log('Data fetched..',
        data)));
    }

    render() {
      if (this.state.loggedIn === 'null') {
        return (
          <p></p>
        );
      } else if (!this.state.loggedIn) {
          window.location = '/signin';
      } else {
          return (
              <div className="container" style={{marginTop: "200px"}}>
                  <div id="uploadVideoPanel"
                      className="mainbox col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-2 col-xs-6 col-xs-offset-1">
                      <div className="panel panel-info">
                          <div className="panel-heading">
                              <font color="white" size="5" style={{marginLeft: "25px", fontFamily:"AppleGothic"}}>UPLOAD CLIP</font>
                              <button className="closeVideoButton">
                                <Link to="/profile">
                                  <span className="glyphicon glyphicon-remove"
                                      style={{color: "red", position:"relative", left:"20px", top:"-10px"}}>
                                  </span>
                                </Link></button><br/>
                          </div>
                          <div className="panel-body">
                              <form id="signupform" encType="multipart/form-data" method="POST" action="/uploadvideo">
                                  <div className="videos">
                                      <font style={{marginTop: "50px"}} className="videosLabel" color="white" style={{fontFamily:"AppleGothic"}}>Video</font>
                                      <input type="file" style={{marginLeft: "105px", marginTop: "0px"}}
                                          className="attachVideoButton" name="videofile" accept='.mov' value="Attach Video" />
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
                      </div>
                  </div>
              </div>
          );
      }
    }
}

export default UploadVideo;
