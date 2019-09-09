import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseAKey from './firebase.js'
import './App.css';
import {
  FirebaseAuthProvider 
} from '@react-firebase/auth';
import Login from './login.js';
import LogOut from './logOut.js';

function App() {
  return (
    <FirebaseAuthProvider firebase={firebase} {...firebaseAKey}>
      <Login/>
      <LogOut/>
    </FirebaseAuthProvider>
    
  );
}

export default App;
