import React, { Component } from 'react';
import Header from './components/header/header.js';

/*

import logo from './logo.svg';
import './App.css';

<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

<div className="App">
  <Header />
  <Home />
</div>

*/

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        { this.props. children }
      </div>
    );
  }
}

export default Layout;
