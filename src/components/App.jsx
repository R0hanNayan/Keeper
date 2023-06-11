import React from "react";
import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer";
import notes from '../notes';
import CreateArea from "./CreateArea";

function App() {
    return (
        <div>
            <Header />
            {notes.map(noteItems => {
                return (
                    <Note
                        key={1} 
                        title="Note title" 
                        content="Note content"
                    />);
            })}
            < Footer />
        </div>
    );
}

export default App;
