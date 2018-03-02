import React, { Component } from 'react';
import { Link } from 'react-router';
import './home.css';

class Home extends Component {

  render() {
    console.log("Home component was just rendered");
    return (
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
      </div>
    );
  }
}

export default Home;
