import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [notes, onNotesChanged] = useState([]);

    function onAdd(title, content) {
        onNotesChanged(prev => {
            return [...prev, {id: prev.length, title: title, content: content}];
        });
        console.log(notes);
    }

    function deleteNote(id) {
        onNotesChanged(prev => prev.filter((note, index) => {
            return (note.id != id);
        }));
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={onAdd} />
            {notes.map(note => <Note key={note.id} id={note.id} title={note.title} content={note.content} onDelete={deleteNote} />)}
            <Footer />
        </div>
    );
}

export default App;