import React, { Component } from 'react';
// import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from "firebase/app";
import "firebase/auth";
import Login from './login.js';


class CreateUser extends Component {
    constructor() {
        super();
        this.createUser = this.createUser.bind(this);
        this.state = {
            hidden: true
        }
    }

    createUser() {
        let user = `${this.user}`;
        let email = `${this.email}`;
        let password = `${this.password}`;
        let confirmPassword = `${this.confirmPassword}`;
        if (password.length < 6) {
            alert("Please, your password must be at least 6 characters")
        } else if (password !== confirmPassword) {
            alert("Please, check that your password is written correctly");
        } else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    firebase.auth().currentUser.sendEmailVerification();
                    alert("Your account has been created. Please check your email");
                    console.log(user, email, password, confirmPassword);
                }).catch((error) => {
                    if (error.code === "auth/email-already-in-use") {
                        alert("Your email is already used in Remember Note. Try to login");
                    }
                    console.log(error);
                });
        }
    }


    render() {
        return (
            this.state.hidden
            ? (
            <React.Fragment>
                <h2>Create Account</h2>
                <p>User Name</p>
                <input onChange={(event) => { this.user = (event.target.value) }} type="text" placeholder="User Name" />
                <p>Email</p>
                <input onChange={(event) => { this.email = (event.target.value) }} type="email" placeholder="Email" />
                <p>Password</p>
                <input onChange={(event) => { this.password = (event.target.value) }} type="password" placeholder="Password" />
                <p>Confirm Password</p>
                <input onChange={(event) => { this.confirmPassword = (event.target.value) }} type="password" placeholder="Confirm Password" />
                <button onClick={this.createUser}>Create User</button>
                <button onClick={() => { this.setState({ hidden: false }) }}>Go Login</button>
            </React.Fragment>
            )
            : <Login />
        )
    }
}

export default CreateUser;