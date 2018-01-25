import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header, Button, Spinner } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCIOyC0pMU7WsvMx8wcOWR4ByOHcY4OwqA',
      authDomain: 'auth-99644.firebaseapp.com',
      databaseURL: 'https://auth-99644.firebaseio.com',
      projectId: 'auth-99644',
      storageBucket: 'auth-99644.appspot.com',
      messagingSenderId: '65854465563'
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true: 
        return <Button>Log out</Button>
      case false:
        return <LoginForm />
      default: 
        return <Spinner size="large" />
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    )
  }
}

export default App
