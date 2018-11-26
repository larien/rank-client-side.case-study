import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="Site">
        <p className="Content">Hello, Rank!</p>
        <Footer className="Footer"/>
      </div>
    );
  }
}

export default App;
