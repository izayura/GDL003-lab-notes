import React, { Component } from 'react';
import './NoteForm.css'
//import firebase from "firebase/app";
//import app from './firebase.js';
//import { NotificationManager } from "react-notifications";

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.addNote = this.addNote.bind(this);
        //this.addNote = props.addNote;
    }

    addNote() {
        console.log(this.textInput.value);
        this.props.addNote(this.textInput.value);
        console.log(this.db);
        if (this.textInput.value === "") {
            console.log("Error, primero escribe algo");
        } else {
            console.log("Linea 1")
            this.textInput.value = "";
            this.textInput.focus();
        }
    }

    render() {
        return (
            <div className="NoteForm">
                <input type="text" placeholder="Write whatever you want here" ref={input => { this.textInput = input; }} />
                <button onClick={this.addNote}>Add Note</button>
            </div>

        )
    }
}

export default NoteForm;