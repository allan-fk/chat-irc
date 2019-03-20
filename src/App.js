import React, { Component } from 'react'
import './App.css'
//import Connexion from './Components/Connexion'

class App extends Component {
  state = {
    url : window.location.pathname
  }
  
  render () {
    return (
      <div className='box'>
        <h2>Bienvenue</h2>
        <h3>{this.state.url.substr(this.state.url.lastIndexOf('/') + 1)}</h3>
      </div>
    )
  }
}

export default App
