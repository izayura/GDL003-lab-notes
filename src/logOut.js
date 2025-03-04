import React, { Component } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import './logOut.css';

class LogOut extends Component {
    constructor() {
        super();
        this.logOut = this.logOut.bind(this);
    }

    logOut() {
        firebase.auth().signOut()
            .then(function () {
                console.log("Se desconectó correctamente");
            }).catch(function (error) {
                console.log("No se desconectó", error)
            });
    }


    render() {
        return (
            <button className="btnLogOut" onClick={this.logOut}>Cerrar Sesión</button>
        )
    }
}

export default LogOut;