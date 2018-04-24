import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './profile.css';
import Video from '../video/profileVideo.js'
import Modal from '../modal/settingsModal.js'
import UploadModal from '../modal/uploadModal.js'

class Profile extends Component {
    constructor(props) {
      super();
      this.state = {
        loggedIn: 'null',
        user: {},
        uploadedVideos: [],
        upvotedVideos: []
      }
      // console.log(props);
    }

    componentWillMount() {
      fetch('/api/verifyUser', {credentials: 'include'})
        .then(response => response.json())
        .then(data => this.setState({loggedIn: data.loggedIn, user: data.user, upvotedVideos: data.user.upvotedVideos}, () => console.log('Data fetched..',
        data)));

      fetch('/api/uservideos', {credentials: 'include'})
        .then(response => response.json())
        .then(data => this.setState({uploadedVideos: data}, () => console.log('Data fetched..',
        data)));
    }

    render() {
          if (this.state.loggedIn === 'null') {
            return (
              <p></p>
            );
          } else if (this.props.location.pathname === '/profile/' + this.state.user.username){
              var loggedIn = this.state.loggedIn;
              var uploadedVideoComponents = this.state.uploadedVideos.map(function(videodata, index) {
                var rank = index + 1;
                return (
                    <Video key={index} rank={rank} metadata={videodata} authenticated={loggedIn} />
                );
              });

          let rowsArray = [];
          for(let i=0; i < 4; i++){
            rowsArray.push(uploadedVideoComponents[i]);
          }

              return(
                <div id="profilePage" className="profile container-fluid" style={{display: "true"}}>
                    <div className="row">
                        <div className="col-xs-12 col-md-10 col-md-offset-1" style={{background: '', marginTop: '50px'}}>
                            <div className="row">
                                <div className="col-xs-12 col-md-2" style={{height: '170px', background: ''}}>
                                    <div className="profileImage">
                                        <img className="img-circle" src={this.state.user.profilePicPath}/>
                                    </div>
                                </div>

                                <div className="col-xs-12 col-md-10" style={{background: '', marginTop: '50px'}}>

                                    <div className="row">
                                        <div className="col-xs-6 col-md-6" style={{background: ''}}>
                                            <div className="row">
                                                <div className="col-xs-8 col-md-8 text-center" style={{background: ""}}>
                                                    <font className="name" color="white" size="5" style={{fontFamily: "AppleGothic"}}>{this.state.user.name}</font>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xs-8 col-md-8 text-center" style={{background: ""}}>
                                                    <font className="username" color="red" style={{fontFamily: "AppleGothic"}}
                                                        size="3">{this.state.user.username}</font>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xs-8 col-md-8 text-center" style={{background: ''}}>
                                                    <div className="settings">
                                                            <Modal />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xs-6 col-md-6" style={{background: ''}}>
                                        <div className="row">
                                            <div className="col-xs-6 col-xs-offset-5 col-md-6 col-md-offset-4 text-center"
                                                style={{background: ''}}>
                                                <div style={{marginRight: "20px"}} className="uploadClips">
                                                  <UploadModal />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-md-10 col-md-offset-1" style={{height: '20px', background: ''}}>
                        </div>
                    </div>


                    <div className="row" id="bio">
                        <div className="col-xs-12 col-md-3" style={{background:'', height: '40px'}}>
                            <font color="white" size="4" style={{fontFamily: "AppleGothic", marginLeft:'100px'}}>BIO</font>
                        </div>
                        <div className="col-xs-12 col-md-9" style={{background:'', height: '40px'}}>
                            <font style={{marginLeft:'17px'}} color="white" size="2">{this.state.user.bio}</font>
                        </div>
                    </div>


                    <div className="row" id="socialMedia">
                        <div className="col-xs-12 col-md-3" style={{height: '40px', background: ''}}>
                            <font color="white" size="4" style={{fontFamily: "AppleGothic", marginLeft:'100px'}}>FOLLOW ME</font>
                        </div>
                        <div className="col-xs-12 col-md-9" style={{background: '', height:'60px'}}>
                            <div className="col-xs-12 col-md-12" style={{height:'20px', background:'', marginRight:'20px'}}>
                              <font style={{marginLeft: "0px", fontFamily: "AppleGothic"}} color="red" size="2">{this.state.user.socialMediaOne}</font>
                            </div>
                            <div className="col-xs-12 col-md-12" style={{height:'20px', background:''}}>
                              <font style={{marginLeft: "0px", fontFamily: "AppleGothic"}} color="red" size="2">{this.state.user.socialMediaTwo}</font>
                            </div>
                            <div className="col-xs-12 col-md-12" style={{height:'20px', background:''}}>
                              <font style={{marginLeft: "0px", fontFamily: "AppleGothic"}} color="red" size="2">{this.state.user.socialMediaThree}</font>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                      <div className="col-xs-12 col-md-12" style={{height: '40px', background: ''}}>
                        <div className="lineBorder" style={{marginTop:'20px'}}></div>
                      </div>
                    </div>


                    <div className="row" id="uploadsSection">
                        <div className="col-xs-12 col-md-10 col-md-offset-1" style={{background: '', marginTop: "25px"}}>
                            <font color="white" size="4" className="uploads" style={{fontFamily: "AppleGothic"}}>UPLOADS</font>
                            <font style={{marginLeft: "15px"}} size="2" className="uploadsCount"
                              style={{fontFamily: "AppleGothic", position:'relative', left:'5px'}}> UPVOTE COUNT: 0</font>
                        </div>
                    </div>
                    <div className="row" id="videoClipsSection">
                        <div className="col-xs-12 col-md-10 col-md-offset-1" style={{ height: '200px', background: '', display:'flex'}}>
                          {rowsArray}

                        </div>
                    </div>


                    <div className="lineBorder" style={{marginTop: "25px"}}></div>
                    <div className="row">
                        <div className="col-xs-12 col-md-10 col-md-offset-1" style={{background: '', marginTop: "25px"}}>
                            <font color="white" size="4" className="upvotedVideos" style={{fontFamily: "AppleGothic"}}> UPVOTED VIDEOS: 0</font>
                        </div>
                    </div>

                    <div className="row">
                      <div className="col-xs-12 col-md-10 col-md-offset-1" style={{ height: '200px', background: ''}}>
                        <div className="col-xs-12 col-md-3" style={{ height: '200px', background: ''}}>
                          <div className="col-xs-12 col-md-10 col-md-offset-1" style={{ height: '115px', background: 'grey', marginTop:'10px'}}>
                          </div>
                          <div className="col-xs-12 col-md-10 col-md-offset-1" style={{ height: '60px', background: '', marginTop:'10px'}}>
                            <font style={{marginLeft: "0px", fontFamily: "AppleGothic"}} color="white" size="2">Title</font> <br />
                            <font style={{marginLeft: "0px", fontFamily: "AppleGothic"}} color="white" size="2">Upvote count and date</font>
                          </div>
                        </div>
                        <div className="col-xs-12 col-md-3" style={{ height: '200px', background: ''}}>
                          <div className="col-xs-12 col-md-10 col-md-offset-1" style={{ height: '115px', background: 'grey', marginTop:'10px'}}>
                          </div>
                          <div className="col-xs-12 col-md-10 col-md-offset-1" style={{ height: '60px', background: '', marginTop:'10px'}}>
                            <font style={{marginLeft: "0px", fontFamily: "AppleGothic"}} color="white" size="2">Title</font> <br />
                            <font style={{marginLeft: "0px", fontFamily: "AppleGothic"}} color="white" size="2">Upvote count and date</font>
                          </div>
                        </div>
                        <div className="col-xs-12 col-md-3" style={{ height: '200px', background: ''}}>
                          <div className="col-xs-12 col-md-10 col-md-offset-1" style={{ height: '115px', background: 'grey', marginTop:'10px'}}>
                          </div>
                          <div className="col-xs-12 col-md-10 col-md-offset-1" style={{ height: '60px', background: '', marginTop:'10px'}}>
                            <font style={{marginLeft: "0px", fontFamily: "AppleGothic"}} color="white" size="2">Title</font> <br />
                            <font style={{marginLeft: "0px", fontFamily: "AppleGothic"}} color="white" size="2">Upvote count and date</font>
                          </div>
                        </div>
                        <div className="col-xs-12 col-md-3" style={{ height: '200px', background: ''}}>
                          <div className="col-xs-12 col-md-10 col-md-offset-1" style={{ height: '115px', background: 'grey', marginTop:'10px'}}>
                          </div>
                          <div className="col-xs-12 col-md-10 col-md-offset-1" style={{ height: '60px', background: '', marginTop:'10px'}}>
                            <font style={{marginLeft: "0px", fontFamily: "AppleGothic"}} color="white" size="2">Title</font> <br />
                            <font style={{marginLeft: "0px", fontFamily: "AppleGothic"}} color="white" size="2">Upvote count and date</font>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
          } else {
              return (
                <div id="profilePage" className="profile container-fluid" style={{display: "true"}}>
                    <div className="row">
                        <div className="col-xs-12 col-md-10 col-md-offset-1" style={{background: '', marginTop: '50px'}}>
                            <div className="row">
                                <div className="col-xs-12 col-md-2" style={{height: '170px', background: ''}}>
                                    <div className="profileImage">
                                        <img className="img-circle" src={this.state.user.profilePicPath}/>
                                    </div>
                                </div>

                                <div className="col-xs-12 col-md-10" style={{background: '', marginTop: '50px'}}>

                                    <div className="row">
                                        <div className="col-xs-6 col-md-6" style={{background: ''}}>
                                            <div className="row">
                                                <div className="col-xs-8 col-md-8 text-center" style={{background: ""}}>
                                                    <font className="name" color="white" size="5" style={{fontFamily: "AppleGothic"}}>{this.state.user.name}</font>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xs-8 col-md-8 text-center" style={{background: ""}}>
                                                    <font className="username" color="white" style={{fontFamily: "AppleGothic"}}
                                                        size="3">{this.state.user.username}</font>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-md-10 col-md-offset-1" style={{height: '20px', background: ''}}>
                        </div>
                    </div>


                    <div className="row" id="bio">
                        <div className="col-xs-12 col-md-10 col-md-offset-1" style={{height: '40px', background: ''}}>
                            <font color="white" size="4" style={{fontFamily: "AppleGothic"}}>BIO</font>

                        </div>
                    </div>

                    <font style={{marginLeft: "105px"}} color="white" size="2">{this.state.user.bio}</font>

                    <div className="row" id="socialMedia" style={{marginBottom: "25px"}}>
                        <div className="col-xs-12 col-md-10 col-md-offset-1"
                            style={{height: '40px', background: '', marginTop: "25px"}}>
                            <font color="white" size="4">FOLLOW ME</font>
                        </div>

                        <font style={{marginLeft: "120px", fontFamily: "AppleGothic"}} color="white" size="2">{this.state.user.socialMediaOne}</font>
                        <font style={{marginLeft: "120px", fontFamily: "AppleGothic"}} color="white" size="2">{this.state.user.socialMediaTwo}</font>
                        <font style={{marginLeft: "120px", fontFamily: "AppleGothic"}} color="white" size="2">{this.state.user.socialMediaThree}</font>
                    </div>


                    <div className="lineBorder"></div>
                    <div className="row" id="uploadsSection">
                        <div className="col-xs-12 col-md-10 col-md-offset-1"
                            style={{background: '', marginTop: "25px"}}>
                            <font color="white" size="4" className="uploads" style={{fontFamily: "AppleGothic"}}>UPLOADS</font>
                            <font style={{marginLeft: "15px"}} size="2" className="uploadsCount"
                              style={{fontFamily: "AppleGothic", position:'relative', left:'5px'}}> UPVOTE COUNT: </font>
                        </div>
                    </div>


                    <div className="row" id="videoClipsSection">
                        <div className="col-xs-12 col-md-10 col-md-offset-1" style={{ height: '50px', background: ''}}>
                            <p>Video Clips Here</p>
                        </div>
                    </div>


                    <div className="lineBorder" style={{marginTop: "25px"}}></div>
                    <div className="row">
                        <div className="col-xs-12 col-md-10 col-md-offset-1" style={{background: '', marginTop: "25px"}}>
                            <font color="white" size="4" className="upvotedVideos" style={{fontFamily: "AppleGothic"}}> UPVOTED VIDEOS</font>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-md-10 col-md-offset-1" style={{background: '', height: '50px'}}>
                            <p>Upvoted Clips Here</p>
                        </div>
                    </div>

                </div>
              );
          }
        }
    }

    export default Profile;
