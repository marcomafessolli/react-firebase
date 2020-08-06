import * as React from 'react';

import {FirebaseAuthConsumer} from "@react-firebase/auth";

const Logout: React.FC = () => {
  const handleLogout = (firebase) => {
    firebase.auth().signOut();
  }

  return (
    <FirebaseAuthConsumer>
      {({firebase}) => (
        <button onClick={handleLogout.bind(this, firebase)}>Logout</button>
      )}
    </FirebaseAuthConsumer>
  );
}

export {Logout};
