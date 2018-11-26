import React, { Component } from 'react';
import './style.css';
import logo from './logo.svg';

export default class Header extends Component {
  render() {
    return (
        <header className="header">
        <nav className="nav">
          <h3 className="logo-wrapper">
            <a href="/"><img src={logo} alt="Rank Logo" /></a>
          </h3>
          <ul className="list">
            <li className="item"><a className="link" href="/reviews">Reviews</a></li>
            <li className="item"><a className="link" href="/editor">Create</a></li>
            <li className="item"><a className="link" href="/auth">Log In</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}
