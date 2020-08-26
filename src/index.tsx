import 'reset-css/reset.css'
import 'normalize.css/normalize.css'

import * as firebase from 'firebase/app'
import 'firebase/auth'

import { CONFIG } from '../firebase-config'

import * as React from 'react'
import { render } from 'react-dom'

import {
  FirebaseAuthProvider,
  IfFirebaseAuthed,
  IfFirebaseUnAuthed
} from '@react-firebase/auth'

import { Home } from './pages/home'
import { Login } from './pages/login'

const App: React.FC = () => {
  return (
    <FirebaseAuthProvider {...CONFIG} firebase={firebase}>
      <IfFirebaseAuthed>{() => <Home />}</IfFirebaseAuthed>
      <IfFirebaseUnAuthed>{() => <Login />}</IfFirebaseUnAuthed>
    </FirebaseAuthProvider>
  )
}

render(<App />, document.querySelector('#app'))
