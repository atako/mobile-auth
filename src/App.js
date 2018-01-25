import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCIOyC0pMU7WsvMx8wcOWR4ByOHcY4OwqA',
      authDomain: 'auth-99644.firebaseapp.com',
      databaseURL: 'https://auth-99644.firebaseio.com',
      projectId: 'auth-99644',
      storageBucket: 'auth-99644.appspot.com',
      messagingSenderId: '65854465563'
    })
  }
  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    )
  }
}

export default App
