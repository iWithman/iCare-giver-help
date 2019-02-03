import React, { Component } from 'react';

import Joi from "joi-browser";
import Form from "../common/form";
import './Login.css';

import { getSavedItems } from '../scripts/functions'

const users = getSavedItems('users')

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

  doSubmit = (e) => {
    // Call the server
    e.preventDefault()
    let user = users.find(user => user.username.toLowerCase() === this.state.data.username.toLowerCase())
    let alert = document.querySelector('.alert')
    if (user) {
      if (user.password === this.state.data.password) {
        alert.className += ' alert-success'
        alert.textContent = 'Welcome to the site'
      }else {
        alert.className += ' alert-danger'
        alert.textContent = 'Incorrect password'
      }
    }else {
      alert.className += ' alert-danger'
        alert.textContent = 'Wrong Username'
    }
  };

  render() {
    return (
      <div className="login">
        <div className="alert"></div>
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
