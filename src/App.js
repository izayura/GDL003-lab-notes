import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseAKey from './firebase.js'
import './App.css';
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer
} from '@react-firebase/auth';
import Login from './login.js';
import LogOut from './logOut.js';
import CreateNotes from './createNotes.js';

function App() {
  return (
    <FirebaseAuthProvider firebase={firebase} {...firebaseAKey}>

      <FirebaseAuthConsumer>
        {({ isSignedIn }) => {
          return isSignedIn
            ? <React.Fragment>
              <CreateNotes />
              <LogOut />
            </React.Fragment>
            : <Login />
        }}
      </FirebaseAuthConsumer>
    </FirebaseAuthProvider>

  );
}

export default App;
