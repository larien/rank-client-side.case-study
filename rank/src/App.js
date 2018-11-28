import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header'

import Review from './components/scenes/Reviews/Review'
import Reviews from './components/scenes/Reviews/Reviews'
import Editor from './components/scenes/Reviews/Editor'

import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      
      <div className="Site">
        <Header className="Header"/>
        <div className="Content">
          <Switch>
            <Route exact path="/reviews" component={Reviews} />
            <Route path="/reviews/:id" component={Review} />
            <Route path="/editor" component={Editor} />
            <Route path="**" component={Reviews} />
          </Switch>
          </div>
          <Footer className="Footer"/>
      </div>
    )
  }
}

export default App
