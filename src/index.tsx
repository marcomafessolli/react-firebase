import { config } from '../firebase-config';

import * as firebase from 'firebase/app';
import 'firebase/auth'

import * as React from 'react';
import { render } from 'react-dom';

import {
    FirebaseAuthProvider,
    FirebaseAuthConsumer
} from "@react-firebase/auth";

const LogIn = () => {
    const [ loading, setLoading ] = React.useState(false);

    return (
        <FirebaseAuthConsumer>
            {({ firebase }) => (
                <button onClick={async () => {
                    setLoading(true);
                    await firebase.auth().signInAnonymously();
                }}>
                    {(loading) && 'Loading...'}
                    {(!loading) && 'Log in'}
                </button>
            )}
        </FirebaseAuthConsumer>
    )
};

const Welcome = () => {
    return (
        <FirebaseAuthConsumer>
            {({ firebase, user }) => (
                <>
                    <h1>Hello {user.uid}</h1>
                    <button onClick={() => {
                        firebase.auth().signOut();
                    }}>
                        Log out
                    </button>
                </>
            )}
        </FirebaseAuthConsumer>
    )
};

const App = () => {
    return (
        <FirebaseAuthProvider {...config} firebase={firebase}>
            <FirebaseAuthConsumer>
                {({ isSignedIn }) => {
                    if (!isSignedIn) {
                        return <LogIn />
                    }

                    if (isSignedIn) {
                        return <Welcome />
                    }
                }}
            </FirebaseAuthConsumer>
        </FirebaseAuthProvider>
    )
};

render(<App />, document.querySelector('#app'));

