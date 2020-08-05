import * as firebase from 'firebase/app';
import 'firebase/auth'

import {CONFIG} from '../firebase-config';

import * as React from 'react';
import {render} from 'react-dom';

import {FirebaseAuthConsumer, FirebaseAuthProvider} from "@react-firebase/auth";

import './theme.scss'

const App: React.FC = () => {
  return (
    <FirebaseAuthProvider {...CONFIG} firebase={firebase}>
      <FirebaseAuthConsumer>
      </FirebaseAuthConsumer>
    </FirebaseAuthProvider>
  )
};

render(<App/>, document.querySelector('#app'));
