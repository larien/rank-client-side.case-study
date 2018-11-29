import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';

import Reviews from './components/scenes/Reviews/Reviews';
import Review from './components/scenes/Reviews/Review';
import ReviewEditor from './components/scenes/Reviews/Editor';

import Games from './components/scenes/Games/Games';
import Game from './components/scenes/Games/Game';
import GameEditor from './components/scenes/Games/Editor';

import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      
      <div className="Site">
        <Header className="Header"/>
        <div className="Content">
          <Switch>
            <Route exact path="/reviews" component={Reviews} />
            <Route path="/reviews/:id" component={Review} />
            <Route exact path="/editor/review" component={ReviewEditor} />
            <Route exact path="/games" component={Games} />
            <Route path="/games/:id" component={Game} />
            <Route exact path="/editor/game" component={GameEditor} />
            <Route path="**" component={Reviews} />
          </Switch>
          </div>
          <Footer className="Footer"/>
      </div>
    );
  }
}

export default App;
