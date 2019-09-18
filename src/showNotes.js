import React, { Component } from 'react';
import firebase from "firebase";
//import app from './firebase.js';
import 'firebase/firestore';

class ShowNotes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            disable: "disable",
            notes: []
        };
    }


    componentDidMount() {
        let db = firebase.firestore();

        db.collection("notes")
       // .orderBy("", "asc")
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                console.log(data);
                this.setState({ notes: data });
            });
    }

    render() {
        let { notes } = this.state

        return (
            <ul>
                {notes.map(note => (
                    <div key={note.id} className="note">
                        <span onClick={() => this.handleRemove(this.noteId)}>&times;</span>
                        <p>{note.date}</p>
                        <p>{note.hour}</p>
                        <p>{note.noteContent}</p>
                    </div>
                ))}
            </ul>
        )
    }
}

export default ShowNotes;
