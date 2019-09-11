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
        this.loginEmail = this.loginEmail.bind(this);
        this.loginGoogle = this.loginGoogle.bind(this);
        this.loginFacebook = this.loginFacebook.bind(this);
    }

    loginEmail() {
        //        console.log(`${this.email} ${this.password}`);
        let email = `${this.email}`;
        let password = `${this.password}`;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log("el login fue correcto")
            }).catch((error) => {
                if (error.code === "auth/wrong-password") {
                    alert("Wrong password. Please check it out");
                } else if (error.code === "auth/invalid-email") {
                    alert("Invalid email. Please check it out");
                } else if (error.code === "auth/user-not-found") {
                    alert("User not found. Please create an account");
                } else {
                    alert(error);
                }
            });
    }

    loginGoogle() {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
            .then(function (result) {
                let token = result.credential.accessToken;
                let user = result.user;
                let email = result.user.email;
                let displayName = result.user.displayName;
                console.log(token, user, email, "Login Google Correcto, bienvenid@ " + displayName);
            }).catch(function (error) {
                console.log("Hubo un error al conectarse");
            });
    }

    loginFacebook() {
        const facebookProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithRedirect(facebookProvider)
            .then(() => {
                console.log("Login Facebook Correcto, bienvenid@ ");
            }).catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <React.Fragment>
                <h2>Login</h2>
                <p>Email</p>
                <input onChange={(event) => { this.email = (event.target.value) }} type="email" placeholder="Email" />
                <p>Password</p>
                <input onChange={(event) => { this.password = (event.target.value) }} type="password" placeholder="Password" />
                <button onClick={this.loginEmail}>Sign In With Email</button>
                <h3>Login or Create Account with:</h3>
                <button onClick={this.loginGoogle}>Google</button>
                <button onClick={this.loginFacebook}>Facebook</button>
            </React.Fragment>
        )
    }
}

export default Login;

