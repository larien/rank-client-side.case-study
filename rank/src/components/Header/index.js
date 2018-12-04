import React, { Component } from 'react';
import './style.css';
import logo from './logo.svg';
import auth0Client from '../../auth/Auth';

export default class Header extends Component {
  render() {
    const signOut = () => {
      auth0Client.signOut();
      this.props.history.replace('/');
    };
    return (
        <header className="header">
        <nav className="nav">
          <h3 className="logo-wrapper">
            <a href="/"><img src={logo} alt="Rank Logo" /></a>
          </h3>
          <ul className="list">
            <li className="item"><a className="link" href="/reviews">Reviews</a></li>
            <li className="item"><a className="link" href="/editor/review">New Review</a></li>
            <li className="item"><a className="link" href="/games">Games</a></li>
            <li className="item"><a className="link" href="/editor/game">New Game</a></li>
            {
              !auth0Client.isAuthenticated() &&
              <li className="item"><a className="link" onClick={auth0Client.signIn}>Sign In</a></li>
            }
            {
              auth0Client.isAuthenticated() &&
              <li className="item"><a className="link" onClick={() => {signOut()}}>Sign Out</a></li>
            }
            
          </ul>
        </nav>
      </header>
    )
  }
}
