import React, { Component } from 'react';
// import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from "firebase/app";
import "firebase/auth";
// import firebaseAKey from './firebase.js'
// import {
//  FirebaseAuthProvider 
// } from '@react-firebase/auth';

class Login extends Component {
    constructor() {
        super();
        // con bind le digo al programa que no haga inmediatamente mi funcion, si no que espere a que la ejecute/sea llamada
        this.loginGoogle = this.loginGoogle.bind(this);
        this.loginEmail = this.loginEmail.bind(this);
    }

    loginGoogle() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                let token = result.credential.accessToken;
                let user = result.user;
                let email = result.user.email;
                let displayName = result.user.displayName;
                console.log(token, user, email, "Login Correcto, bienvenid@ "+displayName);
            }).catch(function (error) {
                console.log("Hubo un error al conectarse");
            });
    }

    loginEmail() {
//        console.log(`${this.email} ${this.password}`);
        let email = `${this.email}`;
        let password = `${this.password}`;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then( () => {
                console.log("el login fue correcto")
            }).catch( () => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then( () => {
                        firebase.auth().currentUser.sendEmailVerification();
                        alert("Tu cuenta ha sido creada, por favor verifica la desde tu email");
                    });
            }).catch( (error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.loginGoogle}>Sign In With Google</button>
                <input onChange={(event) => { this.email = (event.target.value) }} type="email" placeholder="Email" />
                <input onChange={(event) => { this.password = (event.target.value) }} type="password" placeholder="Password" />
                <button onClick={this.loginEmail}>Sign In With Email</button>
            </React.Fragment>
        )
    }
}

export default Login;

