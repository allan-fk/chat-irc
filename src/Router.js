import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Connexion from './Components/Connexion'
import App from './App'

export default class Router extends Component {
  render() {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Connexion} />
            <Route exact path='/pseudo/:pseudo' component={App} />
        </Switch>
    </BrowserRouter>
    )
  }
}
