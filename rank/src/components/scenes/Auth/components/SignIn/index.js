import React, { Component } from 'react';
import './style.css';

export default class SignIn extends Component {
  constructor(){
    super()
    this.state = {
        username: "",
        password: ""
    }
    this.handleChange = this.handleChange.bind(this)
}

handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value})
}

signIn = async e => {
    e.preventDefault();
    const _url = process.env.NODE_ENV === 'production' ? "/api/v1/" : "http://localhost:8899/api/v1/"

    const response = await fetch(`${_url}games/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        }),
    });
    const body = await response.json();
    
    if (body != null){
      localStorage.setItem("token", body.token);
      
      setTimeout(function(){ window.location.replace('http://localhost:3007/reviews'); }, 5000);
      
    }
    
  };

  render() {
    return (
      <div>
        <form onClick={this.signIn} onChange={this.handleChange} className="login-form">
            <h1>LOGIN</h1>
            <div className="fields">
                <p>
                    <label htmlFor="username">USERNAME</label>
                    <input type="text" name="username" id="username"/>
                </p>
                <p>
                    <label htmlFor="password">PASSWORD</label>
                    <input type="password" name="password" id="password"/>
                </p>
                <div className="but">
                    <button>LET'S GO!</button>
                </div>
            </div>
        </form>
      </div>
    )
  }
}


