import React, { Component } from 'react';
//import firebase from "firebase";
//import firebaseAKey from './firebase.js'
import Firebase from './firebase.js'
import 'firebase/database';
//import { FirestoreProvider } from "@react-firebase/firestore";
import Note from './Note/Note.js';
import './createNote.css';
import NoteForm from './NoteForm/NoteForm.js';


class CreateNotes extends Component {
    constructor() {
        super();
        this.state = {
            notes: [
                //   { noteId: 1, noteContent: "note 1" },
                //   { noteId: 2, noteContent: "note 2" }
            ]
        };
        this.addNote = this.addNote.bind(this);
        //this.app = firebase.initializeApp(firebaseAKey);
        //this.db = firebase.firestore(this.app);
        this.db = Firebase.database().ref().child('notas');
    }

    componentDidMount() {
        //Le decimos que de this.state queremos las notes
        const { notes } = this.state;
        this.db.on('child_added', snap => {
            notes.push({
                noteId: snap.key,
                noteContent: snap.val().noteContent
            })
            this.setState({ notes });
        });
    }

    removeNote() {

    }

    addNote(note) {
        /*   let { notes } = this.state;
           notes.push({
               noteId: notes.length + 1,
               noteContent: note
           });
           this.setState({
               notes
           }) */
        this.db.push().set({ noteContent: note });

    }

    render() {
        return (
            <div className="notesContainer">
                <div className="notesHeader">
                    <h1>React y firebase</h1>
                </div>
                <div className="notesBody">
                    <ul>
                        {this.state.notes.map(note => {
                            return (
                                <Note
                                    noteContent={note.noteContent}
                                    noteId={note.noteId}
                                    key={note.noteId}
                                />
                            )
                        })}</ul>

                </div>
                <div className="notesFooter">
                    <NoteForm addNote={this.addNote} />
                </div>
            </div>
        )
    }
}

export default CreateNotes;