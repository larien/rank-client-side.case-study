import React, { Component } from 'react';
import './style.css';

import auth0 from 'auth0-js';

const AUTH0_CLIENT_ID = "uScDj6RqbZDEGznqUnDdXIPLHnPS6Vse";
const AUTH0_DOMAIN = "laurenmariaferreira.auth0.com";
const AUTH0_CALLBACK_URL = "http://localhost:3007";
const AUTH0_API_AUDIENCE = "http://localhost:8899/api/v1/";

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.authenticate = this.authenticate.bind(this);
      }

      authenticate() {
        console.log("oi!")
        this.WebAuth = new auth0.WebAuth({
          domain: AUTH0_DOMAIN,
          clientID: AUTH0_CLIENT_ID,
          scope: "openid profile",
        //   audience: AUTH0_API_AUDIENCE,
          responseType: "token id_token",
          redirectUri: AUTH0_CALLBACK_URL
        });
        this.WebAuth.authorize();
      }

  render() {
    return (
      <div>
        <form className="login-form">
            <h1>LOGIN</h1>
            <div className="fields">
                <p>
                    <label htmlFor="email">USERNAME</label>
                    <input type="text" name="email" id="email"/>
                </p>
                <p>
                    <label htmlFor="password">PASSWORD</label>
                    <input type="password" name="password" id="password"/>
                </p>
                <div className="but">
                    <button onClick={this.authenticate()}>LET'S GO!</button>
                </div>
            </div>
        </form>
      </div>
    )
  }
}

export default LogIn
