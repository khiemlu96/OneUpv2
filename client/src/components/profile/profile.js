import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './profile.css';

class Profile extends Component {
    constructor(props) {
      super();
      this.state = {
        loggedIn: 'null',
        user: {}
      }
      // console.log(props);
    }

    componentWillMount() {
      fetch('/api/verifyUser', {credentials: 'include'})
        .then(response => response.json())
        .then(data => this.setState({loggedIn: data.loggedIn, user: data.user}, () => console.log('Data fetched..',
        data)));
    }

    render() {
      if (this.state.loggedIn === 'null') {
        return (
          <p></p>
        );
      } else if (this.props.location.pathname === '/profile/' + this.state.user.username){
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
                                                <font className="username" color="white" style={{fontFamily: "AppleGothic"}}
                                                    size="3">{this.state.user.username}</font>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-8 col-md-8 text-center" style={{background: ''}}>
                                                <div className="settings">
                                                    <button type="button"
                                                        className="settingsButton"><Link to='/settings'>
                                                            <span>Settings</span></Link></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xs-6 col-md-6" style={{background: ''}}>
                                        <div className="row">
                                            <div className="col-xs-6 col-xs-offset-5 col-md-6 col-md-offset-4 text-center"
                                                style={{background: ''}}>
                                                <div style={{marginRight: "20px"}} className="uploadClips">
                                                    <Link to="/uploadvideo"><button className="uploadClipsButton">
                                                        <span className="glyphicon glyphicon-plus-sign"
                                                            style={{color: "red"}}></span></button></Link><br/>
                                                    <font color="white" size="3"
                                                        className="uploadClipsLabel">Upload Clip</font>
                                                </div>
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
                          style={{fontFamily: "AppleGothic", position:'relative', left:'5px'}}> UPVOTE COUNT: 0</font>
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
                          style={{fontFamily: "AppleGothic", position:'relative', left:'5px'}}> UPVOTE COUNT: 0</font>
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
