import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";

import { saveItem } from '../scripts/functions'
import { getSavedItems } from '../scripts/functions'

const users = getSavedItems()

class SignUp extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .email()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(7)
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };

  doSubmit = (e) => {
    // Call the server
    e.preventDefault()
    users.push(this.state.data)
    saveItem(users)
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.doSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default SignUp;
