import React, { Component } from 'react'
import './App.css'
import Formulaire from './Components/Formulaire'

class App extends Component {
  state = {
    url : window.location.pathname
  }
  
  render () {
    return (
      <div className='box'>
        <div className='messages'>
          Messages
        </div>
        <h2>Bienvenue</h2>
        <h3>{this.state.url.substr(this.state.url.lastIndexOf('/') + 1)}</h3>
        <Formulaire />
      </div>
    )
  }
}

export default App
