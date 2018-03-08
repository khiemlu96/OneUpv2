
/*import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import './index.css';
import Layout from './Layout.js';
import Home from './components/home/home.js';
import About from './components/about/about.js';
import SignIn from './components/signin/signin.js';
import Register from './components/register/register.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="about" component={About}></Route>
      <Route path="signin" component={SignIn}></Route>
      <Route path="register" component={Register}></Route>
    </Route>
  </Router>,
document.getElementById('root'));
registerServiceWorker(); */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import OneUpApp from './OneUpApp';


ReactDOM.render((
	<BrowserRouter>
		<OneUpApp />
	</BrowserRouter>
), document.getElementById('root'));
