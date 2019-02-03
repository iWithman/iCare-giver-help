import React, { Component } from 'react';

import Joi from "joi-browser";
import Form from "../common/form";
import './Login.css';

class Login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .email()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
  };

  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <form id="loginForm" onSubmit={this.doSubmit} className="children">
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default Login;
