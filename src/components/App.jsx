import React from "react";
import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer";
import notes from '../notes';

function createNote(notes){
    return (
        <Note 
            key = {notes.key}
            title = {notes.title}
            content = {notes.content}
        />
    );
}

function App(){
    return(
        <div>
            <Header />
            {notes.map(createNote)}
            <Footer />
        </div>
    );
}

export default App;
