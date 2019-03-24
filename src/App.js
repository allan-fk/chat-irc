import React, { Component } from 'react'
import './App.css'
import Formulaire from './Components/Formulaire'
import Message from './Components/Message';

class App extends Component {
  state = {
    url : window.location.pathname,
    pseudo : this.props.match.params.pseudo,
    // props générer automatiquement par react-router nous permetant 
    // de récuperer sous forme d'objet l'url actuel
    // En l'occurence ici elle nous permet de récupérer la valeur de notre parametre pseudo
    // https://framapic.org/WcvXExqufToA/OI2ua2svPCGB.png
    messages : {}, // objet vide qui prendra tout nos messages
  }

  addMessage = message => {
    // Ajout de message dans notre state message
    const messages = { ...this.state.messages}
    // messages = notre state.messages sous forme de tableau
    messages[`message-${Date.now()}`] = message
    // Ajout d'entrées dans notre tableau ayant pour index 'message-timestamp' et pour valeur -> message
    // [{message-1553427676507 : 'notre messages'}, {message-1553427676517 : 'notre messages2'}...]
    this.setState({ messages })
    // Mise à jour de notre state messages
  }
  
  render () {
    const messages = Object
    // Pour chaque messages créer un component avec key, message, et pseudo en props
      .keys(this.state.messages)
      .map(key=>(
        <Message
          key = {key}
          message = {this.state.messages[key].message}
          pseudo = {this.state.messages[key].pseudo} />
      ))
      console.log(messages)
    return (
      <div className='box'>
        <div className='messages'>
          <div className='message'>
            {messages}
          </div>
        </div>
        <h2>Bienvenue</h2>
        <h3>{this.state.url.substr(this.state.url.lastIndexOf('/') + 1)}</h3>
        <Formulaire
        length={140}
        pseudo={this.state.pseudo}
        addMessage={this.addMessage}
        // envoie de notre fonction addMessage en props à notre component Formulaire
        // afin de pouvoir executer cette fonction lors du submit
        // éxécutable uniquement dans ce dit component  
        />
      </div>
    )
  }
}

export default App
