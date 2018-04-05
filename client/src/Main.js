import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import About from './components/about/about';
import SignIn from './components/signin/signin';
import Register from './components/register/register';
import Profile from './components/profile/profile';
import Settings from './components/settings/settings';
import UploadVideo from './components/uploadVideo/uploadVideo';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/signin' component={SignIn}/>
      <Route path='/register' component={Register}/>
      <Route path='/profile/:user' component={Profile}/>
      <Route path='/settings' component={Settings}/>
      <Route path='/uploadvideo' component={UploadVideo}/>
    </Switch>
  </main>
)

export default Main
