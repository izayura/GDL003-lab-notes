import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';
import  config  from './firebase.js'
import './App.css';
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from '@react-firebase/auth';
import Login from './login.js';
import Home from './Home.js';

function App() {
  return (
    <FirebaseAuthProvider firebase={firebase} {...config}>

      <FirebaseAuthConsumer>
        {({ isSignedIn }) => {
          return isSignedIn
            ? <Home />
            : <Login />
        }}
      </FirebaseAuthConsumer>
    </FirebaseAuthProvider>

  );
}

export default App;
