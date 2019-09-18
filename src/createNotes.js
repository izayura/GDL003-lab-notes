import React, { Component } from 'react';
import firebase from "firebase";
//import app from './firebase.js';
import 'firebase/firestore';
//import Note from './Note/Note.js';
import './createNote.css';
import NoteForm from './NoteForm.js';
import LogOut from './logOut.js';
import ShowNotes from './showNotes.js';


class CreateNotes extends Component {
    constructor(props) {
        super(props);
        this.uid = props.uid;
        this.noteId = props.noteId;
        this.noteContent = props.noteContent;
        this.state = {
            notes: [
                { noteId: 1, noteContent: "note 1" },
                { noteId: 2, noteContent: "note 2" }
            ]
        };
    }

  /*  componentDidMount() {
        let db = firebase.firestore();

           db.collection("notes")
               .get()
               .then(querySnapshot => {
                   const data = querySnapshot.docs.map(doc => doc.data());
                   console.log(data);
                   this.setState({ notes: data });
               });
       }  */


    handleRemove(id) {
        alert('remove', id);
    }

    removeNote() {

    }


    addNote(newNote) {
        // const app = firebase.initializeApp(config);
        let db = firebase.firestore();
        db.collection("notes").add({
            noteContent: newNote,
            date: new Date().toLocaleDateString(),
            hour: new Date().toLocaleTimeString(),
        }).then(function () {
            console.log("Document successfully written!");
        }).catch(function (error) {
            console.error("Error writing document: ", error);
        });


    }

    render() {
        return (
            <div className="notesContainer">
                <div className="notesHeader">
                    <LogOut />
                    <h1>React y firebase</h1>
                </div>
                <div className="notesBody">
            <ShowNotes />
                </div>
                <div className="notesFooter">
                    <NoteForm
                        addNote={this.addNote}

                    />
                </div>
            </div>
        )
    }
}

export default CreateNotes;