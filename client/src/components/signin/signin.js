import React from 'react';
import { Link } from 'react-router';
import './signin.css';

const SignIn = () => {

/*
    const showSignUpBox = () => {
        $('#loginbox').hide();
        $('#signupbox').show();
    }; */

    return (
        <div className="sign container-fluid" style={{ display: "true"}}>
            <div id="loginbox" style={{marginTop: "50px"}}
                className="mainbox col-sm-6 col-sm-offset-3 col-md-6 col-offset-3 col-lg-6 col-lg-offset-3">
                <div className="panel panel-info">
                    <div className="panel-headingA" style={{paddingTop: "15px"}}>
                        <center><font size="5" color="white">Sign In</font></center>
                    </div>
                    <div style={{paddingTop: "20px"}} className="panel-bodyA">
                        <form id="loginform" className="form-horizontal" role="form" method="POST" action="/signin">
                            <div style={{marginBottom: "25px"}} className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                <input id="login-username" type="text" className="form-control"
                                    name="username" style={{width: "95%"}} placeholder="Username"/>
                            </div>
                            <div style={{marginBottom: "25px"}} className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                <input id="login-password" type="password" className="form-control"
                                    name="password" style={{width: "95%"}} placeholder="Password"/>
                            </div>
                            <div className="input-group">
                                <div style={{marginTop: "10px"}} className="form-group">
                                    <div className="row">
                                        <input type="submit" style={{marginLeft: "75%"}}
                                            id="btn-default" value="LOGIN"/>
                                    </div>
                                    <div className="row">
                                        <button type="button" style={{marginLeft: "75%", marginTop: "10px"}}
                                            id="btn-default"><Link to="/register"><span>SIGN UP</span></Link></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn
