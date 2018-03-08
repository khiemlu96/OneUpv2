import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import About from './components/about/about';
import SignIn from './components/signin/signin';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/signin' component={SignIn}/>
    </Switch>
  </main>
)

export default Main
