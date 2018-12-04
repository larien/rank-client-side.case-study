import React, { Component } from 'react';
import './style.css';

class Auth extends Component {
  render() {
    return (
      <div>
          <div className="auth">
            <div className="buttons">
                <button><a href="/login">LOG IN</a></button>
                <button><a href="/signup">SIGN UP</a></button>
            </div>
          </div>
      </div>
    )
  }
}

export default Auth
