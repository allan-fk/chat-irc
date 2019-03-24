import React, { Component } from 'react'

class Formulaire extends Component {
 state = {
    message: '',
    length: this.props.length
  }

  createMessage = () => {
      // Fonction nous permettant creer et de traiter le message avant le submit
    const { addMessage, pseudo, length } = this.props
    // récupere tout les props envoyer depuis notre component parent (App.js)

    const message = {
      pseudo,
      message: this.state.message
    } 

    addMessage(message)
    // Effectuer la fonction addMessage créer dans notre component parent (App.js)

    // Reset
    this.setState({ message: '', length })
  }

  handleSubmit = event => {
    // Fonction Fléchée prenant l'objet event en param'
    event.preventDefault();
    // Stop l'action submit afin de nous laisser y injecter nos propres actions avant l'envoie du formulaire
    this.createMessage();
    //this.createMessage()
  }

  handleChange = event => {
    // A chaque update de notre event la var message prendra la valeur actuelle de notre event
    // Et la var length
    const message = event.target.value
    // création de la variable message prenant les valeurs actuel pointée par l'événement  
    const length = this.props.length - message.length

    this.setState({ message, length })
  }

  handleKeyUp = event => {
    if (event.key === 'Enter') {
      this.createMessage()
    }
  }

  render () {
    return (
      <form
        className='form' 
        onSubmit={this.handleSubmit}
        /*Quand le message est submit launch fonction handleSubmit*/
      >

        <textarea
          value={this.state.message}
          // La value = notre state message
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          required
          maxLength={this.props.length} />
        <div className='info' >
        {this.state.length}
        </div>
        <button type='submit' >
          Envoyer!
        </button>
      </form>
    )
  }
}

export default Formulaire