import React, { Component } from 'react';
import './style.css';
import logo from './logo.svg';

export default class Header extends Component {
  
  render() {
    const isLoggedIn = () => {
      return localStorage.getItem("token") !== null
    }
    const signOut = () => {
      localStorage.removeItem("token")
      window.location.reload()
    };
    return (
        <header className="header">
        <nav className="nav">
          <h3 className="logo-wrapper">
            <a href="/"><img src={logo} alt="Rank Logo" /></a>
          </h3>
          <ul className="list">
            <li className="item"><a className="link" href="/reviews">Reviews</a></li>
            {isLoggedIn() && 
              <li className="item"><a className="link" href="/editor/review">New Review</a></li>
            }
            {isLoggedIn() && 
              <li className="item"><a className="link" href="/unpublished">To Approve</a></li>
            }
            <li className="item"><a className="link" href="/games">Games</a></li>
            {isLoggedIn() && 
              <li className="item"><a className="link" href="/editor/game">New Game</a></li>
            }
            {!isLoggedIn() ? (
              <li className="item"><a className="link" href="/auth">Sign In</a></li>
            ) : (
              <li className="item"><a className="link" onClick={() => {signOut()}}>Sign Out</a></li>
            )}
            
          </ul>
        </nav>
      </header>
    )
  }
}
