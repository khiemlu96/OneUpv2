import React from 'react';

const Register = () => {
    return (
        <div className="sign container-fluid" style={{display: "true"}}>
            <div id="signupbox" style={{ marginTop: "50px", display: "true"}}
                className="mainbox col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
                <div className="panel panel-info">
                    <div className="panel-headingB" style={{paddingTop: "15px"}}>
                        <center><font size="5" style={{color: "white"}}>Sign Up</font></center>
                    </div>
                    <div style={{paddingTop: "20px"}} className="panel-bodyB">
                        <form id="signupform" className="form-horizontal" role="form" method="POST" action="/register">
                            <font style={{color: "white", marginLeft: "50px", fontFamily: "AppleGothic"}} size="3">Name</font>
                            <div style={{marginBottom: "25px"}} className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-book"></i></span>
                                <input id="signup-name" type="text" className="form-control"
                                    name="name" style={{width: "95%"}} placeholder="Name"/>
                            </div>
                            <font style={{color: "white", marginLeft: "50px", fontFamily: "AppleGothic"}} size="3">Email</font>
                            <div style={{marginBottom: "25px"}} className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                <input id="signup-email" type="text" className="form-control"
                                    name="email" style={{width: "95%"}} placeholder="Email"/>
                            </div>
                            <font style={{color: "white", marginLeft: "50px", fontFamily: "AppleGothic"}} size="3">Username</font>
                            <div style={{marginBottom: "25px"}} className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                <input id="signup-username" type="text" className="form-control"
                                    name="username" style={{width: "95%"}} placeholder="Username"/>
                            </div>
                            <font style={{color: "white", marginLeft: "50px", fontFamily: "AppleGothic"}} size="3">Password</font>
                            <div style={{marginBottom: "25px"}} className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                <input id="signup-password" type="password" className="form-control"
                                    name="password" style={{width: "95%"}} placeholder="Password"/>
                            </div>
                            <font style={{color: "white", marginLeft: "50px", fontFamily: "AppleGothic"}} size="3">Confirm Password</font>
                            <div style={{marginBottom: "25px"}} className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                <input id="signup-password" type="password" className="form-control"
                                    name="confirmedPassword" style={{width: "95%"}} placeholder="Password"/>
                            </div>
                            <div className="input-group">
                                <div style={{marginTop: "10px"}} className="form-group">
                                    <input type="submit" style={{marginLeft: "30px"}}
                                        className="createAccountButton" value="Create Account" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register
