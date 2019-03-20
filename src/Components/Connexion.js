import React, { Component } from 'react'

export default class Connexion extends Component {
  state = {
    pseudov : ''
  }

  handleChange = event => {
    const pseudo = event.targetvalue
    this.setState({ pseudo })
  }
  
  render() {
    return (
      <div className='connexionBox'>
        <form className='connexion'>
            <input
            value={this.state.pseudo}
            onChange='this.handleChange' 
            placeholder='pseudo' 
            type='text' 
            required/>
            <button type='submit'>Go!</button>
        </form>
        
      </div>
    )
  }
}
