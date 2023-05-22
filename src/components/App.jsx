import React from "react";
import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer";
import notes from '../notes';

function App() {
    return (
        <div>
            <Header />
            {notes.map(noteItems => {
                return (
                    <Note
                        key={noteItems.key}
                        title={noteItems.title}
                        content={noteItems.content}

                    />);
            })}
            < Footer />
        </div>
    );
}

export default App;
