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
import Category from './components/scenes/Games/Category';

import Footer from './components/Footer';

import Auth from './components/scenes/Auth';
import SignUp from './components/scenes/Auth/components/SignUp';
import LogIn from './components/scenes/Auth/components/LogIn';

import auth0 from 'auth0-js';
import axios from 'axios';

const AUTH0_CLIENT_ID = "uScDj6RqbZDEGznqUnDdXIPLHnPS6Vse";
const AUTH0_DOMAIN = "laurenmariaferreira.auth0.com";

class App extends Component {
  parseHash() {
    this.auth0 = new auth0.WebAuth({
      domain: AUTH0_DOMAIN,
      clientID: AUTH0_CLIENT_ID
    });
    this.auth0.parseHash((err, authResult)  => {
      if (err) {
        return console.log(err);
      }
      if (
        authResult !== null &&
        authResult.accessToken !== null &&
        authResult.idToken !== null
      ) {
        localStorage.setItem("access_token", authResult.accessToken);
        localStorage.setItem("id_token", authResult.idToken);
        localStorage.setItem(
          "profile",
          JSON.stringify(authResult.idTokenPayload)
        );
        window.location = window.location.href.substr(
          0,
          window.location.href.indexOf("#")
        );
      }
    });
  }

  setup() {
    axios.interceptors.request.use(
      config => {
        if (localStorage.getItem("access_token")) {
          const token = localStorage.getItem("access_token");
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        }
        return config;
      },
      error => Promise.reject(error)
    );
  }

  setState() {
    let idToken = localStorage.getItem("id_token");
    if (idToken) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  componentWillMount() {
    this.setup();
    this.parseHash();
    this.setState();
  }
  
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
              <Route path="/games/game/:id" component={Game} />
              <Route exact path="/editor/game" component={GameEditor} />
              <Route path="/games/categories/:name" component={Category} />
              <Route path="**" component={Reviews} />
            </Switch>
            </div>
            <Footer className="Footer"/>
        </div>
      );
  }
}

export default App;
