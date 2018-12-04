import React, { Component } from 'react'

class SignUp extends Component {
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

    signUp = async e => {
        e.preventDefault();
        const _url = process.env.NODE_ENV === 'production' ? "/api/v1/" : "http://localhost:8899/api/v1/"

        const response = await fetch(`${_url}signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              username: this.state.username,
              password: this.state.password
            }),
        });
        const body = await response.text();
        console.log(body);
      };

  render() {
    return (
      <div>
        <form onClick={this.signUp} onChange={this.handleChange} className="login-form">
            <h1>SIGN UP</h1>
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

export default SignUp
