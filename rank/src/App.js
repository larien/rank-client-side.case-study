import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="Site">
        <Header className="Header"/>
        <p className="Content">Hello, Rank!</p>
        <Footer className="Footer"/>
      </div>
    );
  }
}

export default App;
