import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Connexion from './Components/Connexion'
import error404 from './Components/error404'
import App from './App'

export default class Router extends Component {
  render() {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Connexion} />
            <Route exact path='/pseudo/:pseudo' component={App} />
            <Route component={error404} />
        </Switch>
    </BrowserRouter>
    )
  }
}
