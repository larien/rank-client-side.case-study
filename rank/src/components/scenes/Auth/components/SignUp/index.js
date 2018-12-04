import React, { Component } from 'react'

class SignUp extends Component {
  render() {
    return (
      <div>
        <form className="login-form">
            <h1>SIGN UP</h1>
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
                    <button>LET'S GO!</button>
                </div>
            </div>
        </form>
      </div>
    )
  }
}

export default SignUp
