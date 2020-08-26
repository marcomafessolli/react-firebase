import * as React from 'react'

import { FirebaseAuthConsumer } from '@react-firebase/auth'

const Login: React.FC = () => {
  const handleGoogleLogin = (firebase) => {
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(googleProvider)
  }

  return (
    <FirebaseAuthConsumer>
      {({ firebase }) => (
        <button onClick={handleGoogleLogin.bind(this, firebase)}>
          Login with Google
        </button>
      )}
    </FirebaseAuthConsumer>
  )
}

export { Login }
