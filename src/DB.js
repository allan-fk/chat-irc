import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBWmswxAJSKgpRVKlW2JOky00-LrE1jfvU",
        authDomain: "chat-irc-e5d54.firebaseapp.com",
        databaseURL: "https://chat-irc-e5d54.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
