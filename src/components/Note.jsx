import React from "react";

var title = "This is the note title";
var content = "This is the note content";

function Note() {
    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    );
};

export default Note;