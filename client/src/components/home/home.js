import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Video from '../video/video';
import './home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      loggedIn: 'null',
      user: {}
    }
  }

  componentWillMount() {
    fetch('/api/verifyUser', {credentials: 'include'})
      .then(response => response.json())
      .then(data => this.setState({loggedIn: data.loggedIn, user: data.user}, () => console.log('Data fetched..',
      data)));

    fetch('/api/videos')
      .then(res => res.json())
      .then(videos => this.setState({videos}, () => console.log('Videos fetched..',
      videos)));
  }


  render() {
    if (this.state.loggedIn === 'null') {
        return (
          <p></p>
        );
    } else {
        var loggedIn = this.state.loggedIn;
        var user = this.state.user
        var videoComponents = this.state.videos.map(function(videodata, index) {
            var rank = index + 1;
            return (
                <Video key={index} rank={rank} metadata={videodata} authenticated={loggedIn} user={user}/>
            );
        });
        return (
          <div>
            <div className="home container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-md-3 col-md-offset-1 text-center"
                        style={{background: '', height: '60px', top: '90px'}}>
                        <ul style={{marginTop: "15px"}} id="week_or_alltime">
                          <div className="col-md-12 text-center"
                              style={{background:'', right:'15px'}}>
                              <li><Link to="/"><span> WEEK </span></Link></li>
                              <b>|</b>
                              <li><Link to="/alltime"><span> ALL-TIME </span></Link></li>
                          </div>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-4 col-md-offset-4 text-center"
                        style={{background: '', height: '40px', top: '90px'}}>
                        <p className="weekName">WEEK 1</p>
                    </div>
                </div>
                {videoComponents}
            </div>
          </div>
        );
    }
  }
}

export default Home;
