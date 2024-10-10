import React from "react"

export default function Sidebar(props) {
    console.log(props,"popopop")
    const noteElements = props.notes.map((note, index) => (
        <>
          {console.log(note.body,"body ==>00")}
          {console.log(note.id,"body ==>id")}

        <div key={note.id}>
            <div
                
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
              <h4 className="text-snippet">{typeof note.body === "string" ? note.body.split("\n")[0] : "No content"}
              </h4>
                <button 
                    className="delete-btn"
                    onClick={() => props.deleteNote(note.id)}
                >
                    <i className="gg-trash trash-icon"></i>
                </button>
            </div>
        </div>
        </>

    ))

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
