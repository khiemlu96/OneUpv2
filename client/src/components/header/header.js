import React from 'react';
import { Link } from 'react-router';
import './header.css';

/*

<li><Link to='/profile'>Profile</Link></li>

*/

const Header = () => {

    return (
        <header>
            <nav className="navbar navbar-inverse navbar-fixed-top app-navbar" role="navigation" style ={{background:'', top:'0px'}}>
                <div className="container" style={{background:'', height:'90px'}}>

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" style ={{fontFamily: 'Anurati', color:'white', fontSize: '40px', position:'relative', top: '40px'}}href="/">ONE UP</a>
                    </div>

                    <div className="collapse navbar-collapse pull-right" id="navbar" style ={{position:'relative', top:'40px'}}>
                        <ul className="nav navbar-nav navbar-right">
                          <li><Link to='/'>Home</Link></li>
                          <li><Link to='/about'>About</Link></li>
                          <li><Link to='/signin'>Sign In / Create Account</Link></li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    );
};

export default Header
