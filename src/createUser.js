import React, { Component } from 'react';
// import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from "firebase/app";
import "firebase/auth";


class CreateUser extends Component {
    constructor() {
        super();
        this.createUser = this.createUser.bind(this);
    }

    createUser() {
        let user = `${this.user}`;
        let email = `${this.email}`;
        let password = `${this.password}`;
        let confirmPassword = `${this.confirmPassword}`;
        if (password.length < 6) {
            alert("Please, your password has to has minimum 6 characters")
        } else if (password !== confirmPassword) {
            alert("Please, confirm your password correctly");
        } else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                firebase.auth().currentUser.sendEmailVerification();
                alert("Your account has been created. Please check your email");
                console.log(user, email, password, confirmPassword);
            }).catch ( (error) => {
                if (error.code ===  "auth/email-already-in-use") {
                    alert("Your email is already in use in Remember Note. Try to login");
                }
                console.log(error);
            });
    }
}
    

    render() {
        return (
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
            </React.Fragment>

        )
    }
}

export default CreateUser;