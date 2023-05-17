import React from 'react';

const title = "Note Title";
const content = "Note Content";

function Note(){
    return(
        <div className='note'>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default Note;